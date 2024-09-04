"use client";
import { useParams } from "next/navigation";
import {
  useContext,
  useRef,
  RefObject,
  createContext,
  useState,
  useEffect,
} from "react";

type AppContextType = {
  projectRef?: RefObject<HTMLDivElement>;
  contactRef?: RefObject<HTMLDivElement>;
  lng?: string;
  scrollToProjectRef?: () => void;
  scrollToContactRef?: () => void;
  contactOpen: boolean;
  setContactOpen: (open: boolean) => void;
};

const AppContext = createContext<AppContextType>({
  contactOpen: false,
  setContactOpen: () => {},
});
export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const lng = params.lng;

  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToRef = (ref: RefObject<HTMLDivElement>) => () =>
    ref?.current?.scrollIntoView({ behavior: "smooth" });

  const scrollToProjectRef = scrollToRef(projectRef);
  const scrollToContactRef = scrollToRef(contactRef);

  useEffect(() => {
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      document.documentElement.classList.add("safari");
    }
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          lng,
          projectRef,
          contactRef,
          scrollToProjectRef,
          scrollToContactRef,
          contactOpen,
          setContactOpen,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
