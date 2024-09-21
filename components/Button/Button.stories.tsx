import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'md',
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  label: 'Button',
}
