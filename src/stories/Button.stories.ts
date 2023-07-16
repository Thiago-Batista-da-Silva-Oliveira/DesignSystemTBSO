import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components";

const meta: Meta<typeof Button> = {
  title: "Custom Button",
  component: Button,
  argTypes: {
    bgColor: {
      type: "string",
    },
    size: {
      type: "string",
    },
    textColor: {
      type: "string",
    },
    title: {
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    bgColor: "red",
    size: "small",
    textColor: "white",
    title: "small",
  },
};

export const Medium: Story = {
  args: {
    bgColor: "red",
    size: "medium",
    textColor: "white",
    title: "medium",
  },
};

export const Large: Story = {
  args: {
    bgColor: "red",
    size: "large",
    textColor: "white",
    title: "large",
  },
};
