export const eventParticipantQuery = `{
  id
  profile {
    alias
    id
    name
    slug
    group {
      name
    }
  }
  role {
    id
    name
  }
}`

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

export const locationQuery = `{
  address
  city
  id
  name
  website
}`

export const showTypeQuery = `{
  id
  name
  shortDescription
  slug
  visibility
}`
