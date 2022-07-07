import React, { FC } from 'react'

export type IconProps = {
  nameImg: 'octopus' | 'dove' | 'crab' | 'whale' | 'question'
  size: number
}

const Icon: FC<IconProps> = ({ nameImg, size }) => (
  <div>
    <img
      src={nameImg}
      alt={nameImg}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  </div>
)

export default Icon
