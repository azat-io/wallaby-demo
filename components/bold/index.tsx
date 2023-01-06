import type { FC, ReactNode } from 'react'

interface BoldProps {
  children: ReactNode
}

export let Bold: FC<BoldProps> = ({ children }) => <b>{children}</b>
