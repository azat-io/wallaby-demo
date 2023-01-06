import { it, expect } from 'vitest'

import { add } from './add'

it('count sum', () => {
  expect(add(1, 3)).toEqual(4)
  expect(add(2, 3)).toEqual(5)
})
