export type UserContextData = {
    jwt: string | null
    setJwt: React.Dispatch<React.SetStateAction<string | null>>
  }

export type UserData = {
    username: string;
    password: string
}