import React, { createContext, useReducer } from "react";
import Users from "../data/Users";

const initialState = { Users }

const UsersContext = createContext({})

const actions = {
    deleteUser(state, action) {
        const user = action.payload
        return {
            // ...state,
            Users: state.Users.filter(u => u.id !== user.id)
        }
    }

}


export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }



    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}



export default UsersContext