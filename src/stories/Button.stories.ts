import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';

const meta: Meta<typeof Button> = {
    title: "Custom Button",
    component: Button,
    argTypes: {
        bgColor: {
            type: "string",
        },
        children: {}
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        bgColor: "red",
        children: "Button"
    }
  };