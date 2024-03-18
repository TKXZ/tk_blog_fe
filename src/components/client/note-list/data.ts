import { DefaultNoteListItemPropRecord } from './@types'

export const getDefaultNoteListItemProps =
  (): DefaultNoteListItemPropRecord => {
    return {
      data: () => ({
        id: 0,
        title: '',
        author: '',
        desc: '',
        views: 0,
        category: 0,
        categoryText: '',
        createdAt: '',
        updatedAt: '',
      }),
      defaultClick: () => {},
    }
  }
