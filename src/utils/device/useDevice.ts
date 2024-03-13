export const useDevice = (): string => {
  const deviceWidth: number = window.innerWidth
  if (deviceWidth <= 992) {
    return 'mobile'
  } else {
    return 'pc'
  }
}
