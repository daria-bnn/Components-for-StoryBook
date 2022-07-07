import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'

import './CaptionIcon.css'

const cnCaptionIcon = cn('CaptionIcon')

export type CaptionIconProps = {
  text: string
  fontSize: number
  children: ReactNode
}

const CaptionIcon: FC<CaptionIconProps> = ({ text, fontSize, children }) => (
  <div className={cnCaptionIcon()}>
    {children}
    <p className={cnCaptionIcon('Text')} style={{ fontSize: `${fontSize}px` }}>
      {text}
    </p>
  </div>
)

export default CaptionIcon
