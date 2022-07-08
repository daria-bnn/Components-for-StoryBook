import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CaptionIcon from './CaptionIcon'
import { DefaultIcon } from '../Icon/Icon.stories'

export default {
  title: 'CaptionIcon',
  component: CaptionIcon,
  argTypes: {
    text: {
      defaultValue: 'Hello world!',
    },
    fontSize: {
      defaultValue: 32,
    },
  },
} as ComponentMeta<typeof CaptionIcon>

const Template: ComponentStory<typeof CaptionIcon> = (args) => (
  <CaptionIcon {...args} />
)

export const CrabBlock = Template.bind({})
export const PeacBlock = Template.bind({})

CrabBlock.args = {
  children: <DefaultIcon size={48} nameImg="crab" />,
}

PeacBlock.args = {
  text: 'The dove of Peace',
  fontSize: 42,
  children: <DefaultIcon size={62} nameImg="dove" />,
}
