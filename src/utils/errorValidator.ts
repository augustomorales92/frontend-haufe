import { CustomError, ErrorHandler } from 'types/errors'

export const getValidationError = (errorType: string) => {
  const codeMatcher: ErrorHandler<CustomError> = {
    EXPIRED_TOKEN: {
      id: 1,
      message: 'Your session has expired. Please log in again to continue.',
      name: 'EXPIRED_TOKEN'
    },
    INVALID_TOKEN: {
      id: 2,
      message: 'Invalid credentials. Please try again',
      name: 'INVALID_TOKEN'
    },
    AUTHENTICATION_ERROR: {
      id: 3,
      message: 'Authentication error. Please log out and try again',
      name: 'AUTHENTICATION_ERROR'
    },
    AUTHORIZATION_ERROR: {
      id: 4,
      message: `You don't have permission to access this resource or your account is not valid`,
      name: 'AUTHORIZATION_ERROR'
    },
    WRONG_DATA: {
      id: 5,
      message: 'The provided values are not valid',
      name: 'WRONG_DATA'
    }
  }

  return codeMatcher[errorType]
}
