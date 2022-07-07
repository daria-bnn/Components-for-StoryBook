import { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'

import './BlockHint.css'

import question from './assets/question.svg'

import Icon from '../Icon/Icon'

const cnBlockHint = cn('BlockHint')

type BlockHintProps = {
  textHint: string
  children: ReactNode
}

const BlockHint: FC<BlockHintProps> = ({ textHint, children }) => (
  <div className={cnBlockHint()}>
    <div title={textHint}>
      <Icon nameImg={question} size={32} />
    </div>
    {children}
  </div>
)

export default BlockHint
