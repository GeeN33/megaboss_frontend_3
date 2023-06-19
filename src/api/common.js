
const HTTP = axios.create({
  baseURL: $store.state.backendUrl
})

export  default HTTP