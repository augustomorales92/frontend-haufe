import axios from 'axios'
import { FavoritesService } from '../types/favorites'

export const addFavorites = async ({ favoriteId }: FavoritesService) => {
  const body = { favoriteId }
  const res = await axios.post(
    `${process.env.REACT_APP_BASEURL}/favorites/add`,
    body
  )
  const data = await res.status
  return data
}
export const deleteFavorites = async ({ favoriteId }: FavoritesService) => {
  const res = await axios.delete(
    `${process.env.REACT_APP_BASEURL}/favorites/remove/${favoriteId}`
  )
  const data = await res.status
  return data
}
