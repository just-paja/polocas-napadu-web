import { createContext, useContext } from 'react'

export const RouterContext = createContext({})
export const MatchContext = createContext(null)
export const ShowContext = createContext(null)
export const UrlBase = createContext()
export const PageContext = createContext({})

export const useMatch = () => useContext(MatchContext)
export const usePage = () => useContext(PageContext)
export const useShow = () => useContext(ShowContext)

export const useSponsors = () => usePage().siteSponsorList
