import { UserData } from '../types/users'
import axios from 'axios'
const Login = async ({ username, password }: UserData) => {
  const body = { username, password }
  const res = await axios.post(
    `${process.env.REACT_APP_BASEURL}/users/login`,
    body
  )
  return res.data
}

export default Login
