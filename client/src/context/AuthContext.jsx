import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(
    //     JSON.parse(localStorage.getItem("user")) || null
    // );

    const [currentUser, setCurrentUser] = useState(() => {
        const user = localStorage.getItem("user");
        try {
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
            return null;
        }
    });

    const updateUser = (data) => {
        setCurrentUser(data);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
