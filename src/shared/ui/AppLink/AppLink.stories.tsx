import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Theme } from 'app/providers/theme/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary: Story = Template.bind({});

Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark: Story = Template.bind({});

PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = Template.bind({});

SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
