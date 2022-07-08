import React, { FC } from 'react'

import getSrcImages from './utilss/getSrcImage'

type NameImg = 'crab' | 'octopus' | 'whale' | 'dove' | 'question'

export type IconProps = {
  nameImg: NameImg
  size: number
}

const Icon: FC<IconProps> = ({ nameImg, size }) => (
  <div>
    <img
      src={getSrcImages(nameImg)}
      alt={nameImg}
      style={{ width: `${size}px` }}
    />
  </div>
)

export default Icon
