import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import FirstButton from './FirstButton'

export default {
  title: 'FirstButton',
  comment: FirstButton,
} as ComponentMeta<typeof FirstButton>

const Template: ComponentStory<typeof FirstButton> = (args) => (
  <FirstButton {...args} />
)

export const Normal = Template.bind({})

Normal.args = {
  text: 'Click me',
}
