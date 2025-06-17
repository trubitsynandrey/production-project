import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Theme } from 'app/providers/theme/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {

  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light: Story = Template.bind({});

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
