import { LanguageUtility } from '../localization/languages/language.utility';

export const configuration = {
  brand: {
    name: 'Artorius'
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
      home: '',
      knowledgeBase: 'knowledge-base',
      projects: 'projects'
    }
  },
  version: '1.1.0'
};
