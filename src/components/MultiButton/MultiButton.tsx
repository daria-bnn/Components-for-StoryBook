import { cn } from '@bem-react/classname'
import React, { FC } from 'react'

import './MultiButton.css'

const cnMultiButton = cn('MultiButton')

type props = {
  size: 'xs' | 's' | 'm' | 'l'
  action?: 'loading' | 'disabled' | 'valid'
  state?: 'dangerous' | 'successfull'
}

type MultiButtonProps = {
  modif: props
}

const MultiButton: FC<MultiButtonProps> = ({ modif }) => (
  <button
    type="button"
    disabled={modif.action === 'disabled'}
    className={modif ? cnMultiButton(modif) : cnMultiButton()}
  >
    Click
  </button>
)

export default MultiButton
