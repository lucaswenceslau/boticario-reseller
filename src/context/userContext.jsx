import React, {createContext, useState} from 'react';

export const UserContext = createContext();
export const CurrentUserContext = createContext();
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    return (
        <LoginContext.Provider value={[login, setLogin]}>
            {children}
        </LoginContext.Provider>
    )
}

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "",
        email: "",
        items: []
    });
    return (
        <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([{
        email: "lucas@lucas.com",
        password: "123"
    }])
    return (
        <UserContext.Provider value={[users, setUsers]}>
            <LoginProvider>
                <CurrentUserProvider>
                    {children}
                </CurrentUserProvider>
            </LoginProvider>
        </UserContext.Provider>
    );

};


