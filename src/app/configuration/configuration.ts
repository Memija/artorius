import { LanguageUtility } from '../localization/languages/language.utility';

export const configuration = {
  brand: {
    name: 'Artorius'
  },
  cookiePolicy: {
    items: [
      {
        name: 'Google Fonts',
        uniformResourceLocator: 'https://fonts.google.com/about'
      }
    ],
  },
  contact: {
    email: 'anelmemija@gmail.com'
  },
  gitHub: {
      apiEndpoint: 'https://api.github.com/',
      gists: 'gists',
      repositories: 'repos',
      users: 'users',
      username: 'memija'
  },
  language: {
    activeLanguage: LanguageUtility.getActiveLanguageValue(),
    isEnglishLanguageSelected: LanguageUtility.isEnglishLanguageSelected(),
    isGermanLanguageSelected: LanguageUtility.isGermanLanguageSelected(),
    localStorageMarker: 'language'
  },
  projects: {
    memijaTypography: {
      title: 'Memija Typography',
      url: 'https://memija-typography.herokuapp.com/'
    }
  },
  route: {
    value: {
      cookiePolicy: 'cookie-policy',
      home: '',
      knowledgeBase: 'knowledge-base',
      projects: 'projects'
    }
  },
  version: '1.2.7'
};
