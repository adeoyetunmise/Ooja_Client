import React, { createContext, useEffect, useReducer } from 'react'


const AppContext = createContext()

const initialState = {
    user: null,
    products: [],
    cart: [],
}

const AppProvider = ({children}) => {

    const reducer = (state, action) => {
        switch(action.type){
            case 'LOGIN':
                return {...state, user: action.payload}
            case 'LOGOUT':
                return {...state, user: null}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            dispatch({type: 'LOGIN', payload: user})
        }
    }, [])
  return (
    <AppContext.Provider value = {{state, dispatch}}>
        {children}
    </AppContext.Provider>
    
  )
}

export { AppContext, AppProvider }