import { defineStore } from 'pinia'

export const useEnvStore = defineStore('env', () => {
  state: () => {
    return {
      isMobileDevice: false,
    }
  }
})
