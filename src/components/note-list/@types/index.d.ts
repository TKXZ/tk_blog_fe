interface ArticleRecord {
  readonly id: number
  readonly title: string
  readonly author: string
  readonly desc: string
  readonly views: number
  readonly category: number
  readonly categoryText: string
  readonly createdAt: string
  readonly updatedAt: string
}

export interface NoteListItemPropRecord {
  data: ArticleRecord
  defaultClick(): void
}

interface DefaultNoteListItemPropRecord {
  data(): ArticleRecord
  defaultClick(): void
}

interface RequestListRecord {
  search: string
  page: number
  size: number
}

interface ArticleDataRecord {
  list: ArticleRecord[]
  count: number
}
