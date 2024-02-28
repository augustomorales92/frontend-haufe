export interface CustomError extends Error  {
  id: number
  message: string
}

export type ErrorHandler<T> = { [key: string]: T }

export interface ErrorModalProps {
  closeModal: () => void
  error: Error | null
}
