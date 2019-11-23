import { setLanguage } from '@/utils/auth';
import { getLanguage } from '@/lang';
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '@/store';

interface IAppState {
  language: string;
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  language = getLanguage();

  @Action({ commit: 'SET_LANGUAGE' })
  SetLanguage(language: string) {
    return language;
  }

  @Mutation
  private SET_LANGUAGE(language: string) {
    this.language = language;
    setLanguage(language);
  }
}

export const AppModule = getModule(App);
