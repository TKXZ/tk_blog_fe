export const isMobile = (): boolean => {
  const userAgent: string = navigator.userAgent
  if (userAgent.includes('Mobile')) {
    return true
  } else {
    return false
  }
}
