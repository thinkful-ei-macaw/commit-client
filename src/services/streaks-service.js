/** Service objects responsible for getting and updating streak count to local storage */

const StreaksService = {
  updateStreaks(streakCount) {
    window.localStorage.setItem('streaks', streakCount) // accepts token var and stores it in local storage under TOKEN KEY
  },

  getStreaks() {
    return parseInt(window.localStorage.getItem('streaks') || 0);
  }
}

export default StreaksService;