import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "CN",
    // 預設語言
    lng: sessionStorage.getItem('local') || setLanguage(),
    interpolation: {
      escapeValue: false,
    },
  });

function setLanguage() {
  const lang =  (navigator.language || navigator.browserLanguage).toLowerCase()
  switch (lang) {
    case 'zh_cn':
      return "CN"
    case 'en-us':
      return "EN"
    case 'tl_ph':
      return "TL"
    default:
      return "EN"
  }
}

// i18n範例
// const { t, i18n } = useTranslation();
// i18n.changeLanguage('EN');
//     sessionStorage.setItem('local','EN')
// <div className={'bg-white'}> {t('becomeHost')}</div>


export default i18n;
