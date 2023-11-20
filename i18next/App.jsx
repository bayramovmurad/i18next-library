import { useTranslation } from "react-i18next"



const App = () => {
    const {t,i18n} = useTranslation()
  return (
    <div className="pl-20">
          <p>Dil:{i18n.language}</p>
          <p className="text-4xl font-semibold mb-4">{
              t('welcome')
          }</p>
          <div className="flex gap-x-4">
              <button className="border border-gray-700 rounded-sm w-24 h-8 focus:bg-red-500 duration-300" onClick={() => i18n.changeLanguage("az")}>
                  azerbaycan
              </button>
              <button className="border border-gray-700 rounded-sm w-24 h-8 focus:bg-red-500 duration-300" onClick={() => i18n.changeLanguage("en")}>
                  english
              </button>
          </div>
       
    </div>
  )
}
export default App