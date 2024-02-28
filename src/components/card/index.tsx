import React from 'react'
import { CardProps } from 'types/characters'
import Heart from 'components/heart'
import './index.css'

const Card = ({
  id,
  image,
  title,
  description,
  species,
  status,
  origin,
  isFav,
  toggleFavorite
}: CardProps): JSX.Element => {
  return (
    <div className="card">
      <button
        className={`favorite-button`}
        onClick={() => toggleFavorite(id, isFav)}
      >
        <Heart isFav={isFav} />
      </button>
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="status-container">
          <span className="status-ball"></span>
          <p className="character-status">
            {status} - {species}
          </p>
        </div>
        <p className="card-description">Gender: {description}</p>
        <p className="card-description">Last known location: {origin}</p>
      </div>
    </div>
  )
}

export default Card
