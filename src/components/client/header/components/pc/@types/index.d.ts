import { MenuProps } from 'element-plus'
import * as ElIcon from '@element-plus/icons-vue'

export interface IndexMenuConfig {
  config: Partial<MenuProps>
}

interface MenuItemRecord {
  id: number | string
  path: string
  icon: keyof typeof ElIcon
  text: string
  href?: string
  children?: MenuItemRecord[] | []
}

type MenuDataRecordRaw = MenuItemRecord[]

export interface DynamicMenuPropsRecord {
  readonly menuArr: MenuDataRecordRaw
}
