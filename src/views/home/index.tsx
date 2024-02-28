import React, { useCallback, useEffect, useState } from 'react'
import useDebounce from 'hooks/useDebounce'
import useUser from 'hooks/useUser'
import { useNavigate } from 'react-router-dom'
import { getCharacters } from 'services/characters'
import { addFavorites, deleteFavorites } from 'services/favorites'
import { Characters, SortOrder } from 'types/characters'
import { CustomError } from 'types/errors'
import Card from 'components/card'
import SearchSortComponent from 'components/search-sort'
import Loader from 'components/loader'
import ErrorModal from 'components/modals/ErrorModal'
import { sortedData } from 'utils'
import './index.css'

const Home = (): JSX.Element => {
  const { error, setError, logout } = useUser()
  const navigate = useNavigate()

  const [characters, setCharacters] = useState<Characters[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<SortOrder>('')

  const debouncedValue = useDebounce(searchTerm, 500)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setPage(1)
  }

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as SortOrder)
  }

  const fetchData = useCallback(
    async (currentPage: number = page) => {
      setIsLoading(true)
      try {
        const response = await getCharacters({
          name: debouncedValue,
          page: currentPage
        })

        const newChars = response.results
        if (currentPage === 1) {
          setCharacters(newChars)
        } else {
          setCharacters((prevChars) => [...prevChars, ...newChars])
        }
        setHasMore(!!response.info.next)
      } catch (error) {
        setError(error as CustomError)
      }
      setIsLoading(false)
    },
    [debouncedValue, page, setError]
  )

  const toggleFavorite = async (id: number, isFav: boolean) => {
    let updatedChars
    if (isFav) updatedChars = await deleteFavorites({ favoriteId: id })
    else updatedChars = await addFavorites({ favoriteId: id })
    if (updatedChars === 200) {
      const updatedChars = characters.map((char) => {
        if (char.id === id) {
          return { ...char, isFav: !isFav }
        }
        return char
      })
      setCharacters(updatedChars)
    }
  }

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const closeModal = () => {
    logout()
    navigate('/')
    setError(null)
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader className={'home-loader'} />
      </div>
    )
  }

  return (
    <div className="App">
      {error && <ErrorModal error={error} closeModal={closeModal} />}
      <SearchSortComponent
        handleSearch={handleSearch}
        handleSortOrderChange={handleSortOrderChange}
        searchTerm={searchTerm}
        sortOrder={sortOrder}
      />
      <div className="grid">
        {sortedData(characters, sortOrder)?.map((e, i) => (
          <div key={`character_${e.name}_${i}`}>
            <Card
              id={e.id}
              image={e.image}
              title={e.name}
              description={e.gender}
              species={e.species}
              status={e.status}
              origin={e.origin.name}
              isFav={e.isFav}
              toggleFavorite={toggleFavorite}
            />
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="load-more-container">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="load-more-button"
          >
            {isLoading ? <Loader /> : 'Load more'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Home
