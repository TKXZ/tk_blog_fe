/**
 * 开启全屏加载动画
 */
export const openLoading = () => {
  try {
    const $loading = document.getElementById('loading-container');
    $loading.style.opacity = 1;
    $loading.style.display = 'block'
  } catch (err) {
    console.log(err.message);
  }
}

/**
 * 关闭全屏加载动画
 */
export const closeLoading = () => {
  try {
    const $loading = document.getElementById('loading-container');
    $loading.style.opacity = 0;
    setTimeout(() => {
      $loading.style.display = 'none'
    }, 1000) // 防闪烁
  } catch (err) {
    console.error(err.message);
  }
}