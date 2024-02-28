import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX as xSolid } from '@fortawesome/free-solid-svg-icons'
import { ErrorModalProps } from 'types/errors'
import './ErrorModal.css'

const ErrorModal = ({ closeModal, error }: ErrorModalProps): JSX.Element => {
  return (
    <div className="error-modal-container">
      <div className="error-modal-title-container">
        <div className="error-modal-cross">
          <FontAwesomeIcon icon={xSolid} color="red" size="4x" />
        </div>
      </div>
      <div className="details-modal-title">
        <h1>Something went wrong</h1>
      </div>
      <div className="details-modal-content">
        <p>{error?.message}</p>
      </div>
      <div className="error-modal-button-container">
        <button className="error-modal-button" onClick={closeModal}>
          OK
        </button>
      </div>
    </div>
  )
}

export default ErrorModal
