export const Header = () => {
    return (
        <header className="flex justify-between w-full xl:px-5" style={{ maxWidth: 'var(--max-width)' }} >
            <div className="text-3xl md:text-2xl">LIK WAI</div>
            <div className="flex [&>*:not(:last-child)]:mr-10">
                <div>Home</div>
                <div>Patterns</div>
            </div>
        </header>
    )
}