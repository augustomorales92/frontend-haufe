import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { HeartComponentProps } from 'types'

const Heart = ({ isFav }: HeartComponentProps): JSX.Element => {
  return (
    <div>
      {isFav
        ? (
        <FontAwesomeIcon icon={solidHeart} size="2x" color="red" />
          )
        : (
        <FontAwesomeIcon icon={regularHeart} size="2x" color="red" />
          )}
    </div>
  )
}

export default Heart
