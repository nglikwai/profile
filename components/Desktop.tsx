"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import Window, { WindowState } from "./Window";
import ProfileWindow from "./ProfileWindow";
import ProjectWindow from "./ProjectWindow";
import { PROJECTS } from "@/lib/projects";

const svgUrl = (s: string) =>
  `data:image/svg+xml,${encodeURIComponent(s)}`;

const ICON_IE = svgUrl(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><text x="3" y="26" font-family="Times New Roman, serif" font-style="italic" font-weight="bold" font-size="30" fill="#1a9af7">e</text><path d="M2 19 C6 9 26 9 30 13" fill="none" stroke="#ffd34d" stroke-width="3" stroke-linecap="round"/></svg>`
);
const ICON_WIN = svgUrl(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g transform="skewY(-6)"><rect x="3" y="6" width="12" height="10" fill="#ff0000"/><rect x="17" y="6" width="12" height="10" fill="#00a300"/><rect x="3" y="18" width="12" height="10" fill="#0066ff"/><rect x="17" y="18" width="12" height="10" fill="#ffba00"/></g></svg>`
);
const ICON_OFF = svgUrl(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="4" y="6" width="24" height="16" fill="#008080" stroke="#000"/><rect x="12" y="24" width="8" height="3" fill="#808080"/><rect x="8" y="27" width="16" height="2" fill="#808080"/></svg>`
);

// ---- app descriptors ----
type AppId = "profile" | `project-${string}`;

interface AppDef {
  id: AppId;
  name: string;
  icon: string;
}

const PROFILE_APP: AppDef = { id: "profile", name: "My Profile", icon: ICON_IE };
const PROJECT_APPS: AppDef[] = PROJECTS.map((p) => ({
  id: `project-${p.id}` as AppId,
  name: p.name,
  icon: p.icon,
}));
const ALL_APPS = [PROFILE_APP, ...PROJECT_APPS];

// ---- window manager ----
let zCounter = 10;

function makeWindow(app: AppDef): WindowState {
  const isProfile = app.id === "profile";
  const w = isProfile ? 720 : 640;
  const h = isProfile ? 560 : 520;
  const x = Math.max(4, (window.innerWidth - w) / 2);
  const y = Math.max(4, (window.innerHeight - 30 - h) / 2);
  return {
    id: app.id,
    title:
      isProfile
        ? "LIK WAI NG - Home Page - Microsoft Internet Explorer"
        : app.name + (PROJECTS.find((p) => `project-${p.id}` === app.id)?.type
          ? ` - ${PROJECTS.find((p) => `project-${p.id}` === app.id)!.type}`
          : ""),
    icon: app.icon,
    x,
    y,
    width: w,
    height: h,
    minimized: false,
    maximized: false,
    zIndex: ++zCounter,
  };
}

// ---- clock ----
function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      let h = d.getHours();
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      return `${h}:${String(d.getMinutes()).padStart(2, "0")} ${ampm}`;
    };
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 10000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Desktop() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [startOpen, setStartOpen] = useState(false);
  const [shutdown, setShutdown] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const cascadeRef = useRef(0);
  const clock = useClock();

  const openApp = useCallback((appId: AppId) => {
    setWindows((prev) => {
      if (prev.some((w) => w.id === appId)) {
        // bring to front
        const zIdx = ++zCounter;
        return prev.map((w) => (w.id === appId ? { ...w, minimized: false, zIndex: zIdx } : w));
      }
      const app = ALL_APPS.find((a) => a.id === appId)!;
      const win = makeWindow(app);
      // cascade
      const n = cascadeRef.current++ % 5;
      win.x = Math.max(4, win.x + n * 24 - 48);
      win.y = Math.max(4, win.y + n * 24 - 48);
      return [...prev, win];
    });
    setActiveId(appId);
  }, []);

  const focus = useCallback((id: string) => {
    setActiveId(id);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: ++zCounter } : w))
    );
  }, []);

  const close = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    setActiveId(null);
  }, []);

  const minimize = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
    setActiveId(null);
  }, []);

  const maximize = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w))
    );
  }, []);

  const move = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  }, []);

  const resize = useCallback((id: string, x: number, y: number, width: number, height: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y, width, height } : w)));
  }, []);

  // open profile on mount
  useEffect(() => {
    openApp("profile");
  }, [openApp]);

  const taskClick = (win: WindowState) => {
    if (win.minimized || win.id !== activeId) {
      focus(win.id);
      setWindows((prev) =>
        prev.map((w) => (w.id === win.id ? { ...w, minimized: false } : w))
      );
    } else {
      minimize(win.id);
    }
  };

  return (
    <>
      {/* desktop */}
      <div
        className="desktop"
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedIcon(null);
          setStartOpen(false);
        }}
      >
        <div className="icon-grid">
          {ALL_APPS.map((app) => (
            <div
              key={app.id}
              className={`desktop-icon${selectedIcon === app.id ? " selected" : ""}`}
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIcon(app.id);
              }}
              onDoubleClick={() => openApp(app.id)}
              onKeyDown={(e) => { if (e.key === "Enter") openApp(app.id); }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={app.icon} alt="" />
              <span>{app.name}</span>
            </div>
          ))}
        </div>

        {/* windows */}
        {windows.map((win) => {
          const project = PROJECTS.find((p) => `project-${p.id}` === win.id);
          return (
            <Window
              key={win.id}
              state={win}
              active={win.id === activeId}
              onFocus={() => focus(win.id)}
              onClose={() => close(win.id)}
              onMinimize={() => minimize(win.id)}
              onMaximize={() => maximize(win.id)}
              onMove={(x, y) => move(win.id, x, y)}
              onResize={(x, y, w, h) => resize(win.id, x, y, w, h)}
            >
              {win.id === "profile" ? (
                <ProfileWindow onOpenProject={(id) => openApp(`project-${id}`)} />
              ) : project ? (
                <ProjectWindow project={project} />
              ) : null}
            </Window>
          );
        })}
      </div>

      {/* start menu */}
      {startOpen && (
        <div className="start-menu">
          <div className="banner">LIKWAI&nbsp;98</div>
          <div className="items">
            {ALL_APPS.map((app) => (
              <div
                key={app.id}
                className="item"
                onClick={() => { setStartOpen(false); openApp(app.id); }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={app.icon} alt="" />
                <span>{app.name}</span>
              </div>
            ))}
            <div className="divider" />
            <div className="item" onClick={() => { setStartOpen(false); setShutdown(true); }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_OFF} alt="" />
              <span>Shut Down...</span>
            </div>
          </div>
        </div>
      )}

      {/* taskbar */}
      <div className="taskbar">
        <button
          className={`start-button${startOpen ? " pressed" : ""}`}
          onClick={(e) => { e.stopPropagation(); setStartOpen((v) => !v); }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ICON_WIN} alt="" />
          Start
        </button>
        <div className="task-buttons">
          {windows.map((win) => {
            const app = ALL_APPS.find((a) => a.id === win.id);
            return (
              <button
                key={win.id}
                className={`task-button${win.id === activeId && !win.minimized ? " active" : ""}`}
                onClick={() => taskClick(win)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={app?.icon ?? ""} alt="" />
                <span>{app?.name}</span>
              </button>
            );
          })}
        </div>
        <div className="clock">{clock}</div>
      </div>

      {/* shutdown */}
      {shutdown && (
        <div className="shutdown" onClick={() => setShutdown(false)}>
          <p>
            It&apos;s now safe to turn off
            <br />
            your computer.
            <br />
            <br />
            <span>(click anywhere to turn it back on)</span>
          </p>
        </div>
      )}
    </>
  );
}
