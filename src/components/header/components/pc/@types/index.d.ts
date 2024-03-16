import { MenuProps } from 'element-plus'
import { VNode } from 'vue'

export interface IndexMenuConfig {
  config: Partial<MenuProps>
}

interface MenuItemRecord {
  id: number | string
  path: string
  icon: VNode
  text: string
  href?: string
  children?: MenuItemRecord[] | []
}

type MenuDataRecordRaw = MenuItemRecord[]

export interface DynamicMenuPropsRecord {
  readonly menuArr: MenuDataRecordRaw
}
