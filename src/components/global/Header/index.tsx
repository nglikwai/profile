import { useApp } from "@/context/app"

export const Header = () => {
    const { scrollToProjectRef, scrollToContactRef } = useApp()
    return (
        <header className="flex justify-between w-full xl:px-5" style={{ maxWidth: 'var(--max-width)' }} >
            <div className="text-3xl md:text-2xl">LIK WAI</div>
            <div className="flex [&>*:not(:last-child)]:mr-10 text-lg">
                <button onClick={scrollToProjectRef}>Projects</button>
                <button onClick={scrollToContactRef}>Contact</button>
            </div>
        </header>
    )
}