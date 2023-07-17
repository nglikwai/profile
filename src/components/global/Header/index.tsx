import { useApp } from "@/context/app"
import { useRouter } from "next/navigation"
import { languages, languagesMap } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n/client"


export const Header = () => {

    const { scrollToContactRef, lng } = useApp()
    const { t } = useTranslation(lng)
    const router = useRouter()

    const l = languages.find(l => l !== lng) ?? 'en'

    const switchLanguage = () => {
        router.push(`/${l}`)
    }

    return (
        <header className="flex justify-between w-full xl:px-5" style={{ maxWidth: 'var(--max-width)' }} >
            <div className="text-3xl md:text-2xl">LIK WAI</div>
            <div className="flex [&>*:not(:last-child)]:mr-10 text-lg">
                <button onClick={scrollToContactRef}>{t('header.contact')}</button>
                <button onClick={switchLanguage}>
                    {languagesMap[l as keyof typeof languagesMap]}
                </button>
            </div>
        </header>
    )
}