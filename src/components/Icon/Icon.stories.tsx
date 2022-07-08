import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './Icon'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const SmallIconWhale = Template.bind({})
export const LargeIconCrab = Template.bind({})
export const DefaultIcon = Template.bind({})

SmallIconWhale.args = {
  size: 80,
  nameImg: 'whale',
}

LargeIconCrab.args = {
  size: 200,
  nameImg: 'crab',
}
