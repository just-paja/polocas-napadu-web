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
  id,
  name,
  photos ${photoQuery}
  shortDescription,
  slug,
  visibility,
}`

export const sponsorsQuery = `
  query GetSiteSponsorList {
    siteSponsorList {
      id
      name
      logo ${imageQuery}
      website
    }
  }
`

export const articleQuery = `
  query GetArticle($slug: String!) {
    article(slug: $slug) {
      slug,
      name,
      description,
      chapters {
        name,
        slug,
        description,
        photos ${photoQuery}
      }
    }
  }
`

export const anchoredArticleQuery = `
  query GetAnchoredArticle($siteAnchor: String!) {
    anchoredArticle(siteAnchor: $siteAnchor) {
      description,
      name,
      slug,
    }
  }
`

export const showPhotosQuery = `
  query {
    showPhotoList(limit: 7) {
      id
      image ${imageQuery}
      created
    }
  }
`

export const usualPlacesQuery = `
  query GetUsualPlaceList {
    usualPlaceList(placeType: $placeType) {
      description
      id
      location {
        name
        address
      }
      name
    }
  }
`

export const showListQuery = `
  query GetShowList(
    $future: Boolean = false,
    $past: Boolean = false,
    $limit: Int,
    $month: String,
    $orderBy: String,
  ) {
    showList(
      future: $future,
      limit: $limit,
      month: $month,
      past: $past,
      orderBy: $orderBy,
    ) {
      id,
      emailReservations,
      ticketPrices {
        id,
        amount,
        currency,
        priceLevel {
          name,
          id,
        },
      },
      linkFacebook,
      linkReservations,
      linkTickets,
      location {
        id,
        city,
        address,
        name,
      },
      name,
      showType {
        id,
        name,
        slug,
      },
      start,
      slug,
    }
  }
`

export const matchQuery = `
  query GetMatch($id: Int!) {
    match(id: $id) {
      contestantGroups {
        id
        band {
          name
          logo
        }
        score
        penaltyPoints
        fouls {
          id
          created
          contestantGroup {
            band {
              name
            }
          }
          foulType {
            name
            slug
          }
          player {
            profile {
              alias
              name
            }
          }
        }
      }
      scorePoints {
        id
        contestantGroup {
          band {
            name
          }
        }
        created
      }
      stages {
        type
        id
        created
        game {
          id
          rules {
            name
            slug
          }
          inspirations {
            id
            text
          }
          start
          end
        }
      }
    }
  }
`

export const showFormatListQuery = `
  query GetShowFormatList {
    showTypeList {
      id,
      name,
      shortDescription,
      slug,
      photos ${photoQuery}
    }
  }
`

export const showQuery = `
  query GetShow($slug: String!) {
    show(slug: $slug) {
      description
      id
      emailReservations
      linkFacebook
      linkReservations
      linkTickets
      location ${locationQuery}
      showType ${showTypeQuery}
      match {
        closed
        id
      }
      name
      photos ${photoQuery}
      start
      participants ${eventParticipantQuery}
      ticketPrices {
        id,
        amount,
        currency,
        priceLevel {
          id,
          name
        }
      }
    }
  }
`

export const showFormatQuery = `
  query GetShowFormat($slug: String!) {
    showType(slug: $slug) {
      description,
      id,
      name,
      shortDescription,
      slug,
      useFouls,
      useGames,
      photos ${photoQuery}
    }
    showList(showTypeSlug: $slug, limit: 5, orderBy: "-start") {
      id,
      name,
      start,
      slug,
      end,
      location {
        id,
        name,
      }
    }
  }
`

export const profileQuery = `
  query GetProfile($slug: String!) {
    profile(slug: $slug) {
      about
      id
      slug
      name
      alias
      avatar ${imageQuery}
      photos ${photoQuery}
    }
  }
`

export const profileGroupListQuery = `
  query GetProfileGroupList {
    profileGroupList {
      description,
      id,
      name,
      profiles {
        about
        id
        slug
        name
        alias
        avatar ${imageQuery}
        photos ${photoQuery}
      }
    }
  }
`

export const showCountQuery = `
  query GetShowCounts {
    showTypeList {
      id,
      name,
      showCount,
      slug,
    }
  }
`

export const gameListQuery = `
  query getGameRulesList {
    gameRulesList {
      name
      slug
    }
  }
`

export const foulTypeQuery = `
  query FoulType($slug: String!) {
    foulType(slug: $slug) {
      name,
      description,
      slug,
    }
  }
`

export const gameRulesQuery = `
  query GameRules($slug: String!) {
    gameRules(slug: $slug) {
      name
      description
      slug
    }
  }
`

export const foulTypeListQuery = `
  query getFoulTypeList {
    foulTypeList {
      name
      slug
    }
  }
`
