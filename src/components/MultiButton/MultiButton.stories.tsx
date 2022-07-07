import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MultiButton from './MultiButton'

export default {
  title: 'MultiButton',
  component: MultiButton,
} as ComponentMeta<typeof MultiButton>

const Template: ComponentStory<typeof MultiButton> = (args) => (
  <MultiButton {...args} />
)

export const NormalBtn = Template.bind({})
export const DangerousDisabledBtn = Template.bind({})
export const LoadingSmallSuccesBtn = Template.bind({})

NormalBtn.args = {
  size: 's',
  action: 'static',
  state: 'normal',
}

DangerousDisabledBtn.args = {
  size: 'm',
  action: 'disabled',
  state: 'dangerous',
}

LoadingSmallSuccesBtn.args = {
  size: 'xs',
  action: 'loading',
  state: 'successfull',
}
