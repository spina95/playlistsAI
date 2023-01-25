import { createStore } from 'vuex'
import authorization from './modules/authorization'

export const store = createStore({
    modules: {
        authorization
      }
  })