import { createContext, useReducer } from "react"

const initialValue = {
    data: [],

}

export const Context = createContext()

const reducer = (state = initialValue, action) => {
    const { type, payload } = action
    switch (type) {
        case "ON_DELETE":
            const plus = state.a + b
            return { ...state, data: plus }
        default:
            return { state }
    }
}

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default Provider