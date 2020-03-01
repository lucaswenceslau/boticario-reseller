import React, {createContext, useState} from 'react';

export const UserContext = createContext();
export const LoginContext = createContext();

export const LoginProvider = () => {
    // const [login, setLogin] = useState(false)
    return (
        <LoginContext.Provider value={[login, setLogin]}/>
    )
}
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([{
        name: "Lucas",
        email: "lucas@lucas.com",
        password: "12345",
        avatar: "",
    }, {
        email: "roreis99@gmail.com",
         
    }])
    const [login, setLogin] = useState(false)
    return (
        <UserContext.Provider value={[users, setUsers, login, setLogin]}>
            {/* <LoginProvider /> */}
            {children}
        </UserContext.Provider>
    );

};


