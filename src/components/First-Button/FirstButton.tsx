import { FC } from 'react'
import { cn } from '@bem-react/classname'

import arrow from './assets/arrow.svg'

import './FirstButton.css'

const cnFirstButton = cn('FirstButton')

export type FirstButtonProps = {
  text: string
}

const FirstButton: FC<FirstButtonProps> = ({ text }) => (
  <button type="button" className={cnFirstButton()}>
    <img src={arrow} alt="arrow" className={cnFirstButton("Arrow")}/>
    {text}
  </button>
)

export default FirstButton
