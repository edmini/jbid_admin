import axios from 'axios'
import React, { createContext , useReducer, useEffect } from 'react'

export const SheetContext = createContext()

const initialState = {
  engineers : {
    loading : true,
    values : [],
    error : null,
  },
  license : {
    loading : false,
    values : [],
    error : null
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ENGINEERS_FETCH_LOADING' :
      return {
        ...state,
        engineers: {
          loading : true,
          values : [],
          error : null,
        }
      }
    case 'ENGINEERS_FETCH_SUCCESS' :
      return {
        ...state,
        engineers: {
          loading : false,
          values : action.values,
          error : null,
        }
      }
    case 'ENGINEERS_FETCH_ERROR' :
      return {
        ...state,
        engineers: {
          loading : false,
          values : [],
          error : "engineers fetching error",
        }
      }
    case 'LICENSE_FETCH_LOADING' :
      return {
        ...state,
        license : {
          loading : true,
          values : [],
          error : null,
        }
      }
    case 'LICENSE_FETCH_SUCCESS' :
      return {
        ...state,
        license : {
          loading : false,
          values : action.values,
          error : null,
        }
      }
    case 'LICENSE_FETCH_ERROR' :
      return {
        ...state,
        license : {
          loading : false,
          values : [],
          error : "license fetching error",
        }
      }
    default :
      return state
  }
}

function DataContext({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchEngData = async () => {
        try {
            dispatch({type : 'ENGINEERS_FETCH_LOADING'})
            const getEngineers = await axios.get('http://localhost:3000/api/googlesheets/connect?kind=기술자수첩')//+router.query.kinds)
            dispatch({type : 'ENGINEERS_FETCH_SUCCESS', values : getEngineers.data})
        } catch (error) {
            dispatch({type : 'ENGINEERS_FETCH_ERROR'})
        }
    }

    const fetchLicData = async () => {
        try {
            dispatch({type : 'LICENSE_FETCH_LOADING'})
            const getLicense = await axios.get('http://localhost:3000/api/googlesheets/connect?kind=자격증접수')//+router.query.kinds)
            dispatch({type : 'LICENSE_FETCH_SUCCESS', values : getLicense.data})
        } catch (error) {
            dispatch({type : 'LICENSE_FETCH_ERROR'})
        }
    }

    const fetchLoginData = async () => {
        try {
            dispatch({type : 'LICENSE_FETCH_LOADING'})
            const getLicense = await axios.get('http://localhost:3000/api/googlesheets/connect?kind=자격증접수')//+router.query.kinds)
            dispatch({type : 'LICENSE_FETCH_SUCCESS', values : getLicense.data})
        } catch (error) {
            dispatch({type : 'LICENSE_FETCH_ERROR'})
        }
    }

    useEffect(() => {
        fetchEngData()
        fetchLicData()
    },[])

    return (
        <SheetContext.Provider value={{ datas : state, dispatch}}>
            {children}
        </SheetContext.Provider>
    )
}

export default DataContext
