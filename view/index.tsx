import type { FC } from 'react'

import { createRoot } from 'react-dom/client'

import { Sum } from '~/components/sum'
import './index.css'

let Root: FC = () => {
  return (
    <>
      <p>2 + 3</p>
      <p>------------</p>
      <Sum a={1} b={3} />
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  let root = createRoot(document.getElementById('root')!)
  root.render(<Root />)
})
