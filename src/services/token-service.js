import config from '../config';
// import jwtDecode from 'jwt-decode';

const TokenService = {

 makeBasicAuthToken(name, password) {
      return window.btoa(`${name}:${password}`) // stores name and pw in base-64 encoded string
    },
  saveAuthToken(token) {
      window.localStorage.setItem(config.TOKEN_KEY, token) // accepts token var and stores it in local storage under TOKEN KEY
    },
   getAuthToken() {
   return window.localStorage.getItem(config.TOKEN_KEY)
     }
}

export default TokenService