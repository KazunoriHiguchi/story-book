import Button from "./Button";
// import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Common/Test",
  component: Button,
  // 選択肢だけ与えることができる
  argTypes: {
    color: {
      options: ["primary", "default", "danger"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "base", "lg"],
      control: { type: "radio" },
    },
    // handleClick: { action: true },
  },
};

// const something = action("something");

const Template = (args) => {
  // const handleClick = (e) => {
  //   something(e, 'test');
  // };
  return <Button {...args} handleClick={linkTo("Common/Test", "Danger")} />;
};

export const Default = () => Template.bind({});
Default.args = {
  children: "Default",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  color: "danger",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: "Small",
  color: "primary",
  size: "sm",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...PrimarySmall.args,
  children: "Large",
  size: "lg",
};
