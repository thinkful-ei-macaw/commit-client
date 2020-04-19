import config from '../config';
import TokenService from '../services/token-service'

const TaskApiService = {
  getTasks() {
    return fetch(`${config.API_ENDPOINT}/tasks`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
  },
  getTaskById(taskId) {
    return fetch(`${config.API_ENDPOINT}/tasks/${taskId}`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
      )
  },
   createTask(text) {
     return fetch(`${config.API_ENDPOINT}/tasks`, {
         method: 'POST',
         headers: {
           'content-type': 'application/json',
           'authorization': `bearer ${TokenService.getAuthToken()}`
         },
         body: JSON.stringify({
        text,
         }),
       })
       .then(res =>
         (!res.ok) ?
         res.json().then(e => Promise.reject(e)) :
         res.json()
       )
   }
}

export default TaskApiService