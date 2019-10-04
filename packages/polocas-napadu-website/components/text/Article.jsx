import Markdown from 'react-markdown'
import React from 'react'
import styles from './Article.scss'

import { Carousel } from '../photos'
import { ContentContainer, Title } from '../layout'
import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'

const QUERY_ARTICLE = gql`
  query GetArticle($slug: String!) {
    article(slug: $slug) {
      slug,
      name,
      description,
      chapters {
        name,
        slug,
        description,
        photos {
          image,
        }
      }
    }
  }
`

function ArticleComponent ({ data }) {
  const { article } = data
  return (
    <article>
      <ContentContainer column>
        <div>
          <h1>{article.name}</h1>
          <Title text={article.name} />
          <Markdown source={article.description} className={styles.body} />
        </div>
      </ContentContainer>
      {article.chapters.map(chapter => (
        <section className={styles.chapter} key={chapter.slug}>
          <Carousel
            className={styles.carousel}
            dynamicHeight
            photos={chapter.photos}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          />
          <ContentContainer column>
            <h2 id={chapter.slug} className={styles.heading}>
              <a href={`#${chapter.slug}`}>{chapter.name}</a>
            </h2>
            <Markdown className={styles.body} source={chapter.description} />
          </ContentContainer>
        </section>
      ))}
    </article>
  )
}

export const Article = withQuery({ query: QUERY_ARTICLE })(ArticleComponent)
