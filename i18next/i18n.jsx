import i18ne from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
// ? props
import Backend from 'i18next-http-backend';


// ! state
// const resources= {
//     en: {
//         translation: {
//             welcome: 'Welcome!',
//         }
//     },
//     tr: {
//         translation: {
//             welcome: 'Hoş geldiniz!',
//     }
// }
// }

// !state
// i18ne 
// .use(initReactI18next)
// .init({

//     resources,
//     lng: "en"
// })



i18ne
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en'
    })

export default i18ne
