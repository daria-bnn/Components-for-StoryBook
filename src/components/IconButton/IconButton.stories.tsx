import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import IconButton from './IconButton'

export default {
  title: 'Icon-button',
  component: IconButton,
  argTypes: {
    nameImg: {
      name: 'Выберите иконку',
      control: {
        type: 'select',
      },
    },
    size: {
      name: 'Укажите размер икноки',
    },
    text: {
      name: 'Введите любой текст',
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const CrabButton = Template.bind({})
export const WhaleButton = Template.bind({})

CrabButton.args = {
  text: 'Крабо-кнопка',
  size: 80,
  nameImg: 'crab',
}

WhaleButton.args = {
  text: 'Кнопка-кит',
  size: 100,
  nameImg: 'whale',
}
