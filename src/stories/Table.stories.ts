import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../components";

const meta: Meta<typeof Table> = {
  title: "Custom Table",
  component: Table,
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

type Story = StoryObj<typeof Table>;

export const FullTable: Story = {
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
