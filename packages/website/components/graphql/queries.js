export const thumbnailsQuery = `{
  jpeg
  name
  webp
}`

export const imageQuery = `{
  src
  height
  width
  thumbnails ${thumbnailsQuery}
}`

export const photoQuery = `{
  id
  description
  image ${imageQuery}
}`
