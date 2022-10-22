import { createContext, useContext } from 'react'

export const RouterContext = createContext({})
export const MatchContext = createContext(null)
export const UrlBase = createContext()

export const useMatch = () => useContext(MatchContext)
