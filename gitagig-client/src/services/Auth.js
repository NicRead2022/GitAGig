import Client from './api'

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('api/auth/login', data)
    localStorage.setItem('token', res.data.token)
    // Set the current signed in users token to localStorage
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('api/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}