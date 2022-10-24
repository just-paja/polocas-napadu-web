import React, { createContext, useContext } from 'react'

export const HeadingLevelContext = createContext(0)
export const useHeadingLevel = () => useContext(HeadingLevelContext)

export const HeadingContext = ({ children, baseLevel }) => (
  <HeadingLevelContext.Provider value={baseLevel || 0}>
    {children}
  </HeadingLevelContext.Provider>
)

export const Heading = ({ level, relativeLevel = 0, children, ...props }) => {
  const headingLevel = useHeadingLevel()
  const Component = `h${level || Math.max(1, headingLevel + relativeLevel)}`
  return <Component {...props}>{children}</Component>
}

export const Section = ({
  children,
  component: Component = 'section',
  headingLevel = 1,
  ...props
}) => (
  <Component {...props}>
    <HeadingContext baseLevel={useHeadingLevel() + headingLevel}>
      {children}
    </HeadingContext>
  </Component>
)

export const Main = ({ children, ...props }) => (
  <Section {...props} as="main">
    {children}
  </Section>
)
