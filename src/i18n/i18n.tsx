import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import notfound_EN from "../locales/en/notfound.json"
import header_EN from "../locales/en/header.json"
import notfound_VI from "../locales/vi/notfound.json";
import header_VI from "../locales/vi/header.json";


export const resources = {
    en: {
        notfound: notfound_EN,
        header: header_EN,

    },
    vi: {
        notfound: notfound_VI,
        header: header_VI,

    }
}

export const defaultNS = 'notfound'

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "vi",
        ns:['notfound'],
        fallbackLng:"vi",
        defaultNS,
        interpolation: {
            escapeValue: false
        }
    });