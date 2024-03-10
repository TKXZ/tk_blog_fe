import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

type MessageType = 'success' | 'warning' | 'info' | 'error'

function createMessage(
  type: MessageType = 'success',
  message: string = 'success',
) {
  ElMessage({
    type,
    message,
  })
}

export { createMessage }
