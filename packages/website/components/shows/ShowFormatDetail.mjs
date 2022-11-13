import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { BriefShowListItem } from './BriefShowListItem.mjs'
import { ContentContainer } from '../layout/ContentContainer.mjs'
import { Gallery } from '../images.mjs'
import { Link } from '../links.mjs'
import { List } from '../layout/List.mjs'
import { Markdown } from '../markdown.mjs'
import { Title } from '../meta.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

export const ShowFormatDetail = withTranslation(({ showList, showType, t }) => {
  return (
    <ContentContainer>
      <Title text={showType.name} />
      <h1>{showType.name}</h1>
      <Row>
        <Col lg={8}>
          <Markdown className="lead" source={showType.shortDescription} />
          <Markdown source={showType.description} />
          {showType.useGames || showType.useFouls ? (
            <>
              <h2>{t('articleLinks')}</h2>
              <ul>
                {showType.useGames && (
                  <li>
                    <Link route="gameList">{t('gameList')}</Link>
                  </li>
                )}
                {showType.useFouls && (
                  <li>
                    <Link route="foulTypeList">{t('foulTypes')}</Link>
                  </li>
                )}
              </ul>
            </>
          ) : null}
        </Col>
        <Col lg={4}>
          <List>
            {showList.map(show => (
              <BriefShowListItem key={show.id} show={show} />
            ))}
          </List>
        </Col>
      </Row>
      <Gallery photos={showType.photos} />
    </ContentContainer>
  )
})
