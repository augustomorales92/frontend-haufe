import axios from 'axios'
import { CharactersService } from 'types/characters'

export const getCharacters = async ({
  name,
  page
}: CharactersService) => {
  const res = await axios.get(
    `${process.env.REACT_APP_BASEURL}/characters/all?page=${page}&name=${name}`
  )

  const data = await res.data
  return data
}
