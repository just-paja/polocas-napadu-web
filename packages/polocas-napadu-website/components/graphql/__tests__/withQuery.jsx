import React from 'react'
import waait from 'waait'

import { gql } from 'apollo-boost'
import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'

import { withQuery } from '..'

const TestComponent = () => <span>Success</span>

const TEST_QUERY = gql`
  query TestQuery {
    showList {
      name
    }
  }
`

const TestComponentWrapped = withQuery(TestComponent, TEST_QUERY)

describe('withQuery HOC', () => {
  it('given query is loading, it renders loader', () => {
    const comp = mount(
      <MockedProvider mocks={[]}>
        <TestComponentWrapped />
      </MockedProvider>
    )
    expect(comp.find('QueryLoader')).toHaveLength(1)
  })

  it('given query fails, it renders error component', async () => {
    const error = new Error('Test!')
    const testQueryMock = {
      request: {
        query: TEST_QUERY
      },
      error
    }
    const comp = mount(
      <MockedProvider mocks={[testQueryMock]} addTypename={false}>
        <TestComponentWrapped />
      </MockedProvider>
    )
    await waait(3)
    comp.update()
    expect(comp.find('QueryFailure')).toHaveLength(1)
  })

  it('given query succeeds, it renders annotated component', async () => {
    const testQueryMock = {
      request: {
        query: TEST_QUERY
      },
      result: {
        data: {
          showList: [
            {
              name: 'Poločas nápadu vs Kino'
            }
          ]
        }
      }
    }
    const comp = mount(
      <MockedProvider mocks={[testQueryMock]} addTypename={false}>
        <TestComponentWrapped />
      </MockedProvider>
    )
    await waait(3)
    comp.update()
    expect(comp.find('TestComponent')).toHaveLength(1)
  })

  it('given query succeeds, it passes all props to annotated component', async () => {
    const testQueryMock = {
      request: {
        query: TEST_QUERY
      },
      result: {
        data: {
          showList: [
            {
              name: 'Poločas nápadu vs Kino'
            }
          ]
        }
      }
    }
    const comp = mount(
      <MockedProvider mocks={[testQueryMock]} addTypename={false}>
        <TestComponentWrapped testProp='foo' />
      </MockedProvider>
    )
    await waait(0)
    comp.update()
    expect(comp.find('TestComponent')).toHaveProp('testProp', 'foo')
  })

  it('given query succeeds, it passes data to annotated component', async () => {
    const testQueryMock = {
      request: {
        query: TEST_QUERY
      },
      result: {
        data: {
          showList: [
            {
              name: 'Poločas nápadu vs Kino'
            }
          ]
        }
      }
    }
    const comp = mount(
      <MockedProvider mocks={[testQueryMock]} addTypename={false}>
        <TestComponentWrapped testProp='foo' />
      </MockedProvider>
    )
    await waait(0)
    comp.update()
    expect(comp.find('TestComponent')).toHaveProp('data', {
      showList: [
        {
          name: 'Poločas nápadu vs Kino'
        }
      ]
    })
  })
})
