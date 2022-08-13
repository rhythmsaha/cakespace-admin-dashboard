import { createContext, useEffect, useReducer } from 'react'
import axios from '../utils/axios'
import { isValidToken, setSession } from '../utils/jwt'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
}

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    }
  },

  LOGIN: (state, action) => {
    const { user } = action.payload

    return {
      ...state,
      isAuthenticated: true,
      user,
    }
  },

  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),

  REGISTER: (state, action) => {
    const { user } = action.payload

    return {
      ...state,
      isAuthenticated: true,
      user,
    }
  },
}

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
})

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken')
        console.log(accessToken)

        if (accessToken && isValidToken(accessToken)) {
          const response = await axios.get('/auth/seller/me', {
            headers: {
              Authorization: 'Bearer ' + accessToken,
            },
          })
          const { user } = response.data
          console.log(user)
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
            },
          })
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          })
        }
      } catch (err) {
        console.error(err)
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        })
      }
    }

    initialize()
  }, [])

  const login = async (email, password) => {
    const response = await axios.post('/auth/seller/login', {
      email,
      password,
    })

    const { JWT_TOKEN, user } = await response.data

    setSession(JWT_TOKEN)

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    })
  }

  const register = async (email, password, firstName, lastName) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName,
    })
    const { accessToken, user } = response.data

    window.localStorage.setItem('accessToken', accessToken)
    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    })
  }

  const logout = async () => {
    setSession(null)
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export { AuthContext }
