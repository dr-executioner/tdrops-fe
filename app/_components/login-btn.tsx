"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react"

export default function LoginComponent() {
    const { data: session } = useSession()

    useEffect(() => {
        if(session){
            localStorage.setItem("access-token", session.accessToken)
        }
    }, [session])
    console.log(session)

    if (session) {
        return (
            <div className=" flex items-center gap-2">
                Signed in as {session.user?.email} <br />
                <Avatar>
                    <AvatarImage src={session.user?.image || ""} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <button onClick={() => signOut()} className="bg-purple-600 px-3 py-1.5 rounded-md font-semibold">Sign out</button>
            </div>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}