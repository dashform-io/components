import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pin from "./Pin";

export default {
  title: "Components/Pin",
  component: Pin,
} as ComponentMeta<typeof Pin>;

const Template: ComponentStory<typeof Pin> = (args) => <Pin {...args} />;

export const Default = Template.bind({});

Default.args = {
  length: 6,
};
