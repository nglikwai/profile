"use client"
import { useContext, useRef, RefObject, createContext } from 'react'

type AppContextType = {
  projectRef?: RefObject<HTMLDivElement>;
  contactRef?: RefObject<HTMLDivElement>;
  scrollToProjectRef: () => void
  scrollToContactRef: () => void
}

const AppContext = createContext<AppContextType>({
  scrollToProjectRef: () => { },
  scrollToContactRef: () => { },
})

export const useApp = () => useContext(AppContext)

const AppProvider = ({ children }: { children: React.ReactNode }) => {

  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: RefObject<HTMLDivElement>) => () => ref?.current?.scrollIntoView({ behavior: 'smooth' });

  const scrollToProjectRef = scrollToRef(projectRef)
  const scrollToContactRef = scrollToRef(contactRef)

  return (
    <>
      <AppContext.Provider value={{ projectRef, contactRef, scrollToProjectRef, scrollToContactRef }}>{children}</AppContext.Provider>
    </>
  )
}

export default AppProvider
