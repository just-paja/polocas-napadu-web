export const imageQuery = `{
  src
  height
  width
}`

export const photoQuery = `{
  id
  description
  image ${imageQuery}
}`
