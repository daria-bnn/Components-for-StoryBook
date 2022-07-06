import React, { FC } from 'react'

type IconProps = {
  nameImg: 'crab' | 'octopus' | 'whale'
  size: number
}

const Iconca: FC<IconProps> = ({ nameImg, size }) => (
  <div>
    <img
      src={nameImg}
      alt={nameImg}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  </div>
)

export default Iconca
