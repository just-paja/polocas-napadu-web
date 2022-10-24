import React from 'react'
import styles from './articles.module.scss'

import { Carousel } from './images.mjs'
import { ContentContainer } from './layout/ContentContainer.mjs'
import { Link } from './links.mjs'
import { Markdown } from './markdown.mjs'
import { Title } from './meta.mjs'
import { useTranslation } from 'next-i18next'

export function AnchoredArticle({ data }) {
  const { t } = useTranslation()
  const { anchoredArticle } = data
  return (
    <ContentContainer column>
      <div>
        <h2>{anchoredArticle.name}</h2>
        <Markdown source={anchoredArticle.description} />
        <p>
          <Link route="article" params={{ slug: anchoredArticle.slug }}>
            <a>{t('continueReading')}</a>
          </Link>
        </p>
      </div>
    </ContentContainer>
  )
}

export function Article({ data }) {
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
