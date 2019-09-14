import React from 'react'

import { ShowList } from './ShowList'

export function FutureShowList () {
  return <ShowList variables={{ future: true }} />
}
