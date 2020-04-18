import config from '../config';

const AuthApiService = {
  postUser(user, password) {
  debugger
    return fetch(`${config.API_ENDPOINT}/users`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({user, password}),
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
      )
  }

}

export default AuthApiService;