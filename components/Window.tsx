"use client";
import { useRef, useCallback, useState, ReactNode, CSSProperties } from "react";

export interface WindowState {
  id: string;
  title: string;
  icon: string;
  x: number;
  y: number;
  width: number;
  height: number;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
}

interface Props {
  state: WindowState;
  active: boolean;
  children: ReactNode;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onMove: (x: number, y: number) => void;
  onResize: (x: number, y: number, w: number, h: number) => void;
}

type Dir = "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";

const CURSORS: Record<Dir, string> = {
  n: "n-resize", ne: "ne-resize", e: "e-resize", se: "se-resize",
  s: "s-resize", sw: "sw-resize", w: "w-resize", nw: "nw-resize",
};

const MIN_W = 220;
const MIN_H = 120;

// Handles positioned along the 3px window border + a few px outside
const HANDLES: { dir: Dir; style: CSSProperties }[] = [
  { dir: "nw", style: { top: -3, left: -3, width: 8, height: 8 } },
  { dir: "n",  style: { top: -3, left: 5, right: 5, height: 6 } },
  { dir: "ne", style: { top: -3, right: -3, width: 8, height: 8 } },
  { dir: "e",  style: { top: 5, bottom: 5, right: -3, width: 6 } },
  { dir: "se", style: { bottom: -3, right: -3, width: 8, height: 8 } },
  { dir: "s",  style: { bottom: -3, left: 5, right: 5, height: 6 } },
  { dir: "sw", style: { bottom: -3, left: -3, width: 8, height: 8 } },
  { dir: "w",  style: { top: 5, bottom: 5, left: -3, width: 6 } },
];

interface ResizeOrigin {
  dir: Dir;
  px: number; py: number;
  wx: number; wy: number; ww: number; wh: number;
}

export default function Window({
  state, active, children,
  onFocus, onClose, onMinimize, onMaximize, onMove, onResize,
}: Props) {
  const dragOrigin = useRef<{ mx: number; my: number; wx: number; wy: number } | null>(null);
  const resizeOrigin = useRef<ResizeOrigin | null>(null);
  const [dragging, setDragging] = useState(false);

  // ----- title bar drag -----
  const onTitleDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if (state.maximized) return;
    dragOrigin.current = { mx: e.clientX, my: e.clientY, wx: state.x, wy: state.y };
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [state.maximized, state.x, state.y]);

  const onTitleMove = useCallback((e: React.PointerEvent) => {
    if (!dragOrigin.current) return;
    onMove(
      dragOrigin.current.wx + e.clientX - dragOrigin.current.mx,
      dragOrigin.current.wy + e.clientY - dragOrigin.current.my,
    );
  }, [onMove]);

  const onTitleUp = useCallback(() => {
    dragOrigin.current = null;
    setDragging(false);
  }, []);

  // ----- resize handles -----
  const onResizeDown = useCallback((e: React.PointerEvent, dir: Dir) => {
    e.stopPropagation();
    resizeOrigin.current = {
      dir, px: e.clientX, py: e.clientY,
      wx: state.x, wy: state.y, ww: state.width, wh: state.height,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [state.x, state.y, state.width, state.height]);

  const onResizeMove = useCallback((e: React.PointerEvent, dir: Dir) => {
    const o = resizeOrigin.current;
    if (!o || o.dir !== dir) return;
    const dx = e.clientX - o.px;
    const dy = e.clientY - o.py;
    let x = o.wx, y = o.wy, w = o.ww, h = o.wh;

    if (dir.includes("e")) w = Math.max(MIN_W, o.ww + dx);
    if (dir.includes("s")) h = Math.max(MIN_H, o.wh + dy);
    if (dir.includes("w")) { w = Math.max(MIN_W, o.ww - dx); x = o.wx + o.ww - w; }
    if (dir.includes("n")) { h = Math.max(MIN_H, o.wh - dy); y = o.wy + o.wh - h; }

    onResize(x, y, w, h);
  }, [onResize]);

  const onResizeUp = useCallback(() => {
    resizeOrigin.current = null;
  }, []);

  if (state.minimized) return null;

  const style: CSSProperties = state.maximized
    ? { top: 0, left: 0, width: "100%", height: "calc(100vh - 30px)", zIndex: state.zIndex }
    : { top: state.y, left: state.x, width: state.width, height: state.height, zIndex: state.zIndex };

  return (
    <div
      className={`window${active ? " active" : ""}`}
      style={style}
      onPointerDown={onFocus}
    >
      {/* resize handles — only when not maximized */}
      {!state.maximized && HANDLES.map(({ dir, style: hs }) => (
        <div
          key={dir}
          style={{ position: "absolute", zIndex: 1, cursor: CURSORS[dir], ...hs }}
          onPointerDown={(e) => onResizeDown(e, dir)}
          onPointerMove={(e) => onResizeMove(e, dir)}
          onPointerUp={onResizeUp}
        />
      ))}

      <div
        className="title-bar"
        onPointerDown={onTitleDown}
        onPointerMove={onTitleMove}
        onPointerUp={onTitleUp}
        style={{ cursor: dragging ? "grabbing" : "default" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={state.icon} alt="" />
        <span className="title-text">{state.title}</span>
        <span className="title-bar-buttons">
          <button onClick={onMinimize} title="Minimize">_</button>
          <button onClick={onMaximize} title="Maximize">&#9633;</button>
          <button onClick={onClose} title="Close">&#10005;</button>
        </span>
      </div>
      {children}
    </div>
  );
}
