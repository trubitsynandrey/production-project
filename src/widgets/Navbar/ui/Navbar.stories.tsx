import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Theme } from 'app/providers/theme/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {

  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light: Story = Template.bind({});

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
