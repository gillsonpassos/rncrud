import React, { createContext } from "react";
import Users from "../data/Users";

const UsersContext = createContext({})

export const UsersProvider = props => {
    return (
        <UsersContext.Provider value={{
            state: {
                Users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}



export default UsersContext