import { apolloClient, mergeQueryResults, stripData } from './apollo.mjs'

export const compose = (...handlers) =>
  handlers
    .slice()
    .reverse()
    .reduce((aggr, handler) => {
      const a = handler(aggr)
      return a?.then ? a.then(v => v) : a
    })

const getQuery = (props, query) => {
  if (query instanceof Function) {
    return getQuery(props, query(props))
  }
  return apolloClient.query({
    ...query,
    variables: {
      ...query.variables,
      ...props.params,
    },
  })
}

const resolveQuery = props => query => getQuery(props, query)

export const withQueryset = queryMap => fn => async props => {
  const data = await Promise.all(
    Object.values(queryMap).map(resolveQuery(props))
  )
  return fn({
    props: {
      ...props.props,
      ...mergeQueryResults(data.map(stripData)),
    },
  })
}
