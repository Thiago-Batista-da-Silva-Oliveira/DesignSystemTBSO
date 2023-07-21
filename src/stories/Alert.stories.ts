import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components";

const meta: Meta<typeof Alert> = {
  title: "Custom Alert",
  component: Alert,
  argTypes: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    type: {
      type: "string",
    },
    width: {
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    title: "Success",
    description: "check it out",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    title: "Error",
    description: "check it out",
    type: "error",
  },
};

export const Warning: Story = {
  args: {
    title: "Warning",
    description: "check it out",
    type: "warning",
  },
};

export const Info: Story = {
  args: {
    title: "Info",
    description: "check it out",
    type: "info",
  },
};
