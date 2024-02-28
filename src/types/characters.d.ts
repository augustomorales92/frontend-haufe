export type Characters = {
  id: number
  image: string
  name: string
  gender: string
  species: string
  status: string
  origin: {
    name: string
    url: string
  }
  isFav: boolean
}

export type SortOrder = 'asc' | 'desc' | ''

interface SearchProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSortOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  searchTerm: string
  sortOrder: string
}

export interface CardProps {
  id: number
  image: string
  title: string
  description: string
  species: string
  status: string
  origin: string
  toggleFavorite: (id: number, isFav: boolean) => void
  isFav: boolean
}

export interface CharactersService {
  name?: string
  page?: number
}