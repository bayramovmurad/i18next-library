Language System with React i18next
While developing a project with React, we will definitely need the language system. In such cases, we will need the react-i18n package to handle this task properly.

Setup
To install:

npm i react-i18next i18next
Use
First, let's create an i18n.js file and write our codes as follows.

import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
And let's add a small translation right below for English and Turkish.

const resources = {
en: {
translation: {
welcome: 'Welcome to React'
}
},
en: {
translation: {
welcome: 'Welcome to React'
}
}
}
And let's initialize our settings.

i18n
.use(initReactI18next)
.init({
resources,
lng: 'en'
})
  
export default i18n
After calling the i18n.js file to index.js, we are ready.

Now we are ready to use it in components. For example, we can use it in our App component as follows:

import { useTranslation } from "react-i18next";

function App() {
  
   const { t, i18n } = useTranslation()

   return (
     <>
       <h1>{t('welcome')}</h1>
       <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}>Change Language</h1>
     </>
   )
}
Separating Language Files
Of course, it does not make much sense to define language codes inline, we may want to keep the language files separately under public/locales. For this we will install the following package:

npm i18next-http-backend
And we will include it in the setup like this:

import Backend from 'i18next-http-backend';

i18n
   .use(Backend)
.use(initReactI18next)
.init({
lng: 'en'
})
And if our sample language files will be in tr and en languages, the file structure should be like this:

public/locales/en/translation.json
public/locales/tr/translation.json
The sample translation.json file should be like this:

{
   "welcome": "Welcome to React"
}
Pulling Language Files from a Separate Backend
If you want to pull the languages from a separate backend rather than within the React project, in addition to the above step, we need to give a setting in the init() method as follows. Let's say our language installation method for the backend is as follows:

https://api.prototurk.com/language/tr
https://api.prototurk.com/language/en
Here tr and en can be loaded dynamically by sending it like this:

i18n
.use(Backend)
.use(initReactI18next)
.init({
lng: 'en',
backend: {
loadPath: 'https://api.prototurk.com/language/{{lng}}'
}
})
Additionally, CORS permissions must be granted on the backend side. For detailed information, you can look here.

Detecting Default Browser Language
To load a language file according to the default browser language, we need to install the following package:

npm i i18next-browser-languagedetector
And our setup should be like this:

import LanguageDetector from 'i18next-browser-languagedetector';

i18n
   .use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
fallbackLng: 'most'
})
It will now try to use whatever language file the browser has. If there is no file for the relevant language, it will show the current language file under fallbackLng.

Accessing Translations Outside of React Components
If you have such a need, you can import the i18n.js file and use the t method in it:

import i18n from "./i18n"

console.log(i18n.t('welcome'))
withTranslation() HOC
Using the withTranslation higher order function, i18n and t parameters could be passed to the component as props:

import { withTranslation } from 'react-i18next';

function MyComponent({ t, i18n }) {
   return <p>{t('my translated text')}</p>
}

export default withTranslation())(MyComponent);
interpolation
You can use it to include your dynamic values in the translation. For example, if you want to set the framework name dynamically in your language file, you will edit it as follows:

{
"welcome": "Welcome to {{framework}}"
}
And while showing it, you will send it like this:

t('welcome', { framework: 'React' })
We could also send it as an object:

const framework = {
name: 'React'
}

t('welcome', { framework })
In the language file we should have used it like this:

{
"welcome": "Welcome to {{framework.name}}"
}
