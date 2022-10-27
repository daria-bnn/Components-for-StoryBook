import { cn } from '@bem-react/classname'
import React, { FC } from 'react'

import './MultiButton.css'

const cnMultiButton = cn('MultiButton')

export type BtnProps = {
  size: 'xs' | 's' | 'm' | 'l'
  action: 'loading' | 'disabled' | 'valid' | 'static'
  state: 'dangerous' | 'successfull' | 'normal'
}

const MultiButton: FC<BtnProps> = ({ size, action, state }) => (
  <button
    type="button"
    disabled={action === 'disabled'}
    // eslint-disable-next-line object-shorthand
    className={cnMultiButton({ size: size, action: action, state: state })}
  >
    Click
  </button>
)

export default MultiButton
