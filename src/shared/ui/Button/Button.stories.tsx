import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Theme } from 'app/providers/theme/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {

  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearDark: Story = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = Template.bind({});
Outline.args = {
  children: 'Text2',
  theme: ThemeButton.OUTLINE,
};
