import axios from 'axios'
import React, { createContext , useReducer, useEffect } from 'react'

export const AuthContext = createContext()

const initialState = {
  jManager : {
    isLogin : false,
    info : null,
    error : null,
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS' :
      return {
        ...state,
        jManager: {
          isLogin : true,
          info : action.info,
          error : null,
        }
      }
    case 'LOGIN_ERROR' :
      return {
        ...state,
        jManager: {
          isLogin : false,
          info : null,
          error : 'Login error!!!',
        }
      }
      case 'LOGOUT_SUCCESS' :
        return {
          ...state,
          jManager: {
            isLogin : false,
            info : null,
            error : null,
          }
        }
    default :
      return state
  }
}

function LoginContext({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchLogin = async () => {
        try {
            const loginData = await axios.get('http://localhost:3000/api/googlesheets/connect?kind=기술자수첩')//+router.query.kinds)
            dispatch({type : 'LOGIN_SUCCESS', info : loginData.data})
        } catch (error) {
            dispatch({type : 'LOGIN_ERROR'})
        }
    }

    const fetchLogout = async () => {
        try {
            dispatch({type : 'LOGOUT_SUCCESS'})
        } catch (error) {
          dispatch({type : 'LOGOUT_SUCCESS', error : error})
        }
    }

    return (
        <AuthContext.Provider value={{ datas : state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default LoginContext
