import { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'

import Icon from '../Icon/Icon'

import './BlockHint.css'

const cnBlockHint = cn('BlockHint')

type BlockHintProps = {
  textHint: string
  children: ReactNode
}

const BlockHint: FC<BlockHintProps> = ({ textHint, children }) => (
  <div className={cnBlockHint()}>
    <div title={textHint}>
      <Icon nameImg="question" size={32} />
    </div>
    {children}
  </div>
)

export default BlockHint
