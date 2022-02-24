import { createContext } from 'react'
import { UserModel } from '../models/user.model'

export type IUserContext = {
	user: UserModel | null
	setUser: (arg: UserModel | null) => void
}
export const UserContext = createContext<IUserContext>({
	user: {},
	setUser: () => {}
})
