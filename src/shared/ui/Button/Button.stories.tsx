import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Theme } from 'app/providers/theme/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {

  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearDark: Story<typeof Button> = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story<typeof Button> = Template.bind({});
Outline.args = {
  children: 'Text2',
  theme: ButtonTheme.OUTLINE,
};

export const Background: Story<typeof Button> = Template.bind({});
Background.args = {
  children: 'Text2',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted: Story<typeof Button> = Template.bind({});
BackgroundInverted.args = {
  children: 'Text2',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Squared: Story<typeof Button> = Template.bind({});
Squared.args = {
  children: 'Text2',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  squared: true,
  size: ButtonSize.XL,
};
