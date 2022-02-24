import { createContext } from 'react'

export type IAuthContext = {
	isAuth: boolean
	setIsAuth: (arg: boolean) => void
}
export const AuthContext = createContext<IAuthContext>({
	isAuth: false,
	setIsAuth: () => {}
})
