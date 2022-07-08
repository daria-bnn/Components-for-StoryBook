import React, { FC } from 'react'

import './Icon.css'

import { cn } from '@bem-react/classname'

import getSrcImages from './utilss/getSrcImage'

const cnIcon = cn('Icon')

type NameImg = 'crab' | 'octopus' | 'whale' | 'dove' | 'question'

export type IconProps = {
  nameImg: NameImg
  size: number
}

const Icon: FC<IconProps> = ({ nameImg, size }) => (
  <div className={cnIcon()}>
    <img
      src={getSrcImages(nameImg)}
      alt={nameImg}
      style={{ width: `${size}px` }}
    />
  </div>
)

export default Icon
