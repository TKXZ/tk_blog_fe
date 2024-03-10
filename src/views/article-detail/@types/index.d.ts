interface ArticleCatalogRecord {
  text: string
  children?: ArticleCatalogRecord[]
  [K: string]: unknown
}

interface ArticleStateRecord {
  id: number
  content: string
  catalog: ArticleCatalogRecord[]
}
