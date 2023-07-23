import type { Meta, StoryObj } from "@storybook/react";
import { TableHeader } from "../components";
import {
    AiFillEdit
  } from "react-icons/ai";

const meta: Meta<typeof TableHeader> = {
  title: "Custom TableHeader",
  component: TableHeader,
  argTypes: {
    columns: {
        control: {
            type: "object",
        }
    },
    width: {
        control: {
            type: "string",
        }
    }
  },
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Header: Story = {
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
   ]
  },
};
