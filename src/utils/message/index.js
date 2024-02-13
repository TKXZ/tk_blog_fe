import 'element-plus/es/components/message/style/css';
import { ElMessage } from 'element-plus';

function createMessage(type = 'success', message = 'success') {
  ElMessage({
    type, message,
  })
}

export {
  createMessage,
}