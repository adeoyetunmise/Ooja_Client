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
            case 'ADD_TO_CART':
                return {...state, cart: [...state.cart, action.payload]}
            case 'REMOVE_FROM_CART':
                return {...state, cart: state.cart.filter((item)=>item.id !== action.payload)}
            case 'SET_PRODUCTS':
                return {...state, products: action.payload}
            case "SET_PRODUCTS":
                return {...state, myProducts: action.payload}
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
        console.log(user.token);
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            dispatch({type: "SET_CART", payload: cart})
        }
        
        const fetchProducts = async () => {
            const res = await axios.get (`http://localhost:7788/api/v1/products`,
                 {headers: {Authorization: `Bearer ${user.token}`}})

        console.log(res.data);
        dispatch({type: "SET_PRODUCTS", payload:res.data.products})
        }
        
        fetchProducts()
    }, [])
  return (
    <AppContext.Provider value = {{state, dispatch}}>
        {children}
    </AppContext.Provider>
    
  )
}

export { AppContext, AppProvider }