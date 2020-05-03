import config from '../config';
import TokenService from '../services/token-service';

/** GET request to get all tasks
 */

const TaskApiService = {
  getTasks() {
    return fetch(`${config.API_ENDPOINT}/tasks/`, {
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

  /** GET request to get a task by it's ID
   */

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

  /** POST request to create a task. 
   */

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

  /** PATCH request for a task that gets marked complete */

  updateTask(task_id, task) {
    return fetch(`${config.API_ENDPOINT}/tasks/${task_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          task
        }),
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res
      )
  },


/**Patch Request for updating a streak */

  updateStreak(streak) {
    return fetch(`${config.API_ENDPOINT}/users/all`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          streak
        }),
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res
      )
  },

    /** DELETE request for a task that gets deleted */


  deleteTask(task_id) {
    return fetch(`${config.API_ENDPOINT}/tasks/${task_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    });
  },

   /** DELETE request to delete all tasks */

  deleteAllTasks() {
    return fetch(`${config.API_ENDPOINT}/tasks`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
  }
}

export default TaskApiService;