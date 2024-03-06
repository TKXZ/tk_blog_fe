export const useUserAgent = () => {
  const userAgt = navigator.userAgent;
  if (userAgt.includes('Mobile')) {
    return 1;
  } else {
    return 2;
  }
}