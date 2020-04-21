import config from '../config';
import TokenService from '../services/token-service'

const TaskApiService = {
  getTasks() {
    return fetch(`${config.API_ENDPOINT}/tasks`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`
        },
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
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
  createTask(name) {
    return fetch(`${config.API_ENDPOINT}/tasks`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          name,
        }),
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
      )
  },
  updateTask(task_id, complete) {
    return fetch(`${config.API_ENDPOINT}/tasks/${task_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          task_id,
          complete
        }),
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
      )
  },

  deleteTask(task_id) {
    return fetch(`${config.API_ENDPOINT}/tasks/${task_id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        }
      });
  },
  deleteAllTasks(task_id) {
    return fetch(`${config.API_ENDPOINT}/tasks/${task_id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
      })
  }
}

export default TaskApiService