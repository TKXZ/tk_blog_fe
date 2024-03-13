export interface ArticleCatalogRecord {
  text: string
  children?: ArticleCatalogRecord[]
  [K: string]: unknown
}

export interface ArticleStateRecord {
  id: number
  content: string
  catalog: ArticleCatalogRecord[]
  catalogM: ArticleCatalogRecord[]
}

export interface ObserverHeadingChangeCbData {
  el: HTMLElement
  curElIndex: number
  count: number
}
