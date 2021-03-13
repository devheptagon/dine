import {createStore} from 'redux';
import rootReducer from './rootReducer';

export let store = null;

export const initStore = async () => {
  store = createStore(rootReducer);
  return store;
};
