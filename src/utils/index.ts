import { Characters, SortOrder } from 'types/characters'

export const sortedData = (data: Characters[], sortOrder: SortOrder) =>
  sortOrder
    ? data.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })
    : data
