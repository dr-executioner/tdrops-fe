import { User } from "@auth0/nextjs-auth0/types";

export interface Session {
 user : User
}

export interface Item {
    id: number
    label: string
    path: string
    action: any
}
export interface MenuItem {
    authenticated : Item[]
    notAuthenticated : Item[]
}

// {
//     "user": {
//         "name": "fake_mrphoton",
//         "email": "b.aarjya@gmail.com",
//         "image": "https://static-cdn.jtvnw.net/jtv_user_pictures/61b377f3-f38e-4e5f-9d06-5bec55448ff2-profile_image-150x150.png"
//     },
//     "expires": "2025-11-30T10:35:17.907Z",
//     "accessToken": "z2a3zwcpfthglzjubjujjg9o22qneg"
// }