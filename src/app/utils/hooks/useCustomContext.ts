import { useContext } from 'react'
import { AuthContext } from 'src/core/context/AuthContext'
import { UserContext } from 'src/core/context/UserContext'

export const useUserContext = () => useContext(UserContext)
export const useAuthContext = () => useContext(AuthContext)

