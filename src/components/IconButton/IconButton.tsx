import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import './IconButton.css'

import Icon from '../Icon/Icon'

type IconButtonProps = {
  text: string
  size: number
  nameImg: 'crab' | 'octopus' | 'whale'
}

const cnIconButton = cn('IconButton')

const IconButton: FC<IconButtonProps> = ({ text, size, nameImg }) => (
  <button type="button" className={cnIconButton()}>
    {text}
    <Icon nameImg={nameImg} size={size} />
  </button>
)

export default IconButton
