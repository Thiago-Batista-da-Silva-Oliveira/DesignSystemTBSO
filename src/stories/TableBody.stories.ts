import type { Meta, StoryObj } from "@storybook/react";
import { TableBody } from "../components";

const meta: Meta<typeof TableBody> = {
  title: "Custom TableBody",
  component: TableBody,
  argTypes: {
    columns: {
        control: {
            type: "object",
        }
    },
    data: {
        control: {
            type: "object",
        }
    }
  },
};

export default meta;

type Story = StoryObj<typeof TableBody>;

export const Body: Story = {
  args: {
   columns: [
     {
         title: "Name",
         field: "name",
     },
     {
        title: "Age",
        field: "age",
     },
     {
        title: "Address",
        field: "address",
     },
   ],
   data: [
    {
        name: "Mehmet",
        age: 23,
        address: "Lorem ipsum",
    },
    {
        name: "Zerya Betül",
        age: 16,
        address: "Lorem ipsum",
    }
   ]
  },
  
};
