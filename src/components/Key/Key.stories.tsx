import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Key from "./Key";

export default {
  title: "Components/Key",
  component: Key,
} as ComponentMeta<typeof Key>;

const Template: ComponentStory<typeof Key> = (args) => <Key {...args} />;

export const Default = Template.bind({});

Default.args = {
  keystroke: "K",
};
