import pkg from '../../package.json';
import store from 'store';

const { name } = pkg;

const LANGUAGE = `${name}/language`;

export function getToken() {
  return true;
}

export function setLanguage(language: string) {
  return store.set(LANGUAGE, language);
}
