import type { FC } from 'react'

import { Bold } from '~/components/bold'
import { add } from '~/lib/add'

interface Props {
  a: number
  b: number
}

export let Sum: FC<Props> = ({ a, b }) => {
  return <Bold>{add(a, b)}</Bold>
}
