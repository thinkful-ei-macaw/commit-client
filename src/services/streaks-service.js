/** Service objects responsible for getting and updating streak count to local storage */
import React from 'react'
const StreaksService = {
  updateStreaks(streakCount) {
     window.localStorage.setItem('streaks', streakCount) // accepts token var and stores it in local storage under TOKEN KEY
   },

   getStreaks() {
     return parseInt(window.localStorage.getItem('streaks') || 0);
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
      <span role='img' aria-label='suprised-face'>🤩</span>
      )
    } else {
      return (
         <span role='img' aria-label='fire'>🔥</span>
      )
    }

  }
}

export default StreaksService;