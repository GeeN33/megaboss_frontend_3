import {createStore} from "vuex";

var loc = window.location
let hh = loc.protocol+ '//' +loc.hostname+':8000/api/v1/'

const store = createStore({
  state: {

      backendUrl: hh
  },
  getters: {},
  mutations: {},
  actions: {},
   modules: {
      getServerUrl: state =>{
          return state.backendUrl
      }
   },
});

export default store