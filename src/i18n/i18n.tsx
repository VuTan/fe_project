import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import notfound_EN from "../locales/en/notfound.json"
import header_EN from "../locales/en/header.json"
import footer_EN from "../locales/en/footer.json"
import banner_EN from "../locales/en/banner.json"
import collectionvideo_EN from "../locales/en/collectionvideo.json"
import sigin_EN from "../locales/en/sigin.json"
import sigup_EN from "../locales/en/sigup.json"


import notfound_VI from "../locales/vi/notfound.json";
import header_VI from "../locales/vi/header.json";
import footer_VI from "../locales/vi/footer.json";
import banner_VI from "../locales/vi/banner.json";
import collectionvideo_VI from "../locales/vi/collectionvideo.json";
import sigin_VI from "../locales/vi/sigin.json"
import sigup_VI from "../locales/vi/sigup.json"



export const resources = {
    en: {
        notfound: notfound_EN,
        header: header_EN,
        footer: footer_EN,
        banner: banner_EN,
        collectionvideo: collectionvideo_EN,
        sigin: sigin_EN,
        sigup: sigup_EN
    },
    vi: {
        notfound: notfound_VI,
        header: header_VI,
        footer: footer_VI,
        banner: banner_VI,
        collectionvideo: collectionvideo_VI,
        sigin: sigin_VI,
        sigup: sigup_VI,
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