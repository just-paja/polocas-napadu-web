import graphContainer from './GraphContainer.mjs'
import React from 'react'
import styles from './MatchList.module.scss'

import { Heading, Main } from 'polocas-napadu-ui/content.mjs'
import { gql } from '@apollo/client'
import { Link } from 'react-router-dom'

const GET_MATCHES = gql`
  query {
    matchList {
      id
      contestantGroups {
        band {
          name
        }
        contestantType
      }
      show {
        name
        start
        location {
          name
        }
      }
    }
  }
`

export const MatchList = graphContainer(
  ({ data }) => (
    <Main className={styles.page}>
      <div className={styles.menu}>
        <Heading>Sledovat zápas</Heading>
        <ul className={styles.list}>
          {data.matchList.map(match => (
            <li className={styles.item} key={match.id}>
              <Link to={`/match/${match.id}`}>{match.show.name}</Link>
              <br />
              {match.show.location.name}
              <br />
              {match.show.start}
            </li>
          ))}
        </ul>
      </div>
    </Main>
  ),
  GET_MATCHES
)
