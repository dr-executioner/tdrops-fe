import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext } from "react";


type AuthContext = {
    data: any
}
const authContext = createContext<AuthContext | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { data } = useSession()
    return <authContext.Provider value={{ data }}>
        {children}
    </authContext.Provider>
}

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider")
    }
    return context
}