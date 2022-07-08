import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BlockHint from './BlockHint'

import { DefaultIcon } from '../Icon/Icon.stories'
import { WhaleButton } from '../IconButton/IconButton.stories'

export default {
  title: 'Block-Hint',
  component: BlockHint,
  argTypes: {
    textHint: {
      description: 'Введите текст подсказки',
      defaultValue: 'Текст подсказки...',
    },
    children: {
      description: 'Передача другого компонента в child',
    },
  },
} as ComponentMeta<typeof BlockHint>

const Template: ComponentStory<typeof BlockHint> = (args) => (
  <BlockHint {...args} />
)

export const BlockHintIcon = Template.bind({})
export const BlockHintButtonWhale = Template.bind({})

BlockHintIcon.args = {
  textHint: 'Клац-клац',
  children: <DefaultIcon size={42} nameImg="crab" />,
}

BlockHintButtonWhale.args = {
  textHint: 'У этой кнопки плавники',
  children: <WhaleButton text="Кнопка-кит" size={54} nameImg="whale" />,
}
