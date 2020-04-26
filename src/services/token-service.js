import config from '../config';

const TokenService = {

 makeBasicAuthToken(name, password) {
      return window.btoa(`${name}:${password}`) // stores name and pw in base-64 encoded string
    },
  saveAuthToken(token) {
      window.localStorage.setItem(config.TOKEN_KEY, token) // accepts token var and stores it in local storage under TOKEN KEY
    },
   getAuthToken() {
   return window.localStorage.getItem(config.TOKEN_KEY) // gets Auth token. Is called when creating, updating, getting, or deleteing a task. 
     },
   clearAuthToken() {
       console.info('clearing the auth token')
       window.localStorage.removeItem(config.TOKEN_KEY)
     },
     hasAuthToken() {
       return !!TokenService.getAuthToken()
     },

}

export default TokenService;