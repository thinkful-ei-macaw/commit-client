/** Service objects responsible for getting and updating streak count to local storage */
import React from 'react'
import config from '../config';
import TokenService from '../services/token-service';


const StreaksService = {
   updateStreak(streak) {
     return fetch(`${config.API_ENDPOINT}/streak`, {
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


   getStreak() {
     return fetch(`${config.API_ENDPOINT}/streak`, {
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
  getEmoji(streak) {
    if (streak >= 0 && streak < 2) {
      return (
      <span role='img' aria-label='happy-face'>😌</span>
      )
    } else if (streak >= 2 && streak < 5) {
      return (
      <span role='img' aria-label='excited-face'>😎</span>
      )
    } else if (streak >= 5 && streak < 8) {
      return (
      <span role='img' aria-label='surprised-face'>🤩</span>
      )
    } else {
      return (
         <span role='img' aria-label='fire'>🔥</span>
      )
    }
  }, 
  
}

export default StreaksService;