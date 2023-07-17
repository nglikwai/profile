import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

const initI18next = async (lng, ns) => {
    const i18nInstance = createInstance()
    await i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
        .init(getOptions(lng, ns))
    return i18nInstance
}

export async function useTranslation(lng, ns, options = {}) {
    const i18nextInstance = await initI18next(lng, ns)
    return {
        t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
        i18n: i18nextInstance
    }
}


// const translationFileUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=5UYjdmm0yHWf_LDvlhcu1igpqA9XRxprGfFMWgIXRzd4r30SQ-iOW7h1TUEc5JwGeNRI_dbHX0jMxNMwxUaa9xFq4g6bCPZfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMX10hEWom0wx1Q2B7t3EHbcMTBE4LK6ZfnWcWGL8Nvuv8z6tg-2mG-O45_BbFraPG3XpYaGu7L7354BEKbjid_JfGqm2FsIPA&lib=MCEZ5DzuBWnimnRjnhRZtLNLtLRqU339Q'

// reference: https://locize.com/blog/next-13-app-dir-i18n/

// const initI18next = async (lng, ns) => {
//     const i18nInstance = createInstance()

//     const _translationFile = await fetch(translationFileUrl)
//     const translationFile = await _translationFile.json()

//     const translationFile_lang = translationFile[lng]

//     await i18nInstance
//         .use(initReactI18next)
//         .use(resourcesToBackend(() => translationFile_lang))
//         .init(getOptions(lng, ns))
//     return i18nInstance
// }