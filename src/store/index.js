import {createStore} from "vuex";


const store = createStore({
  state: {
      backendUrl: "http://127.0.0.1:8000/api/v1"
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