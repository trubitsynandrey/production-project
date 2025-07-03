import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Theme } from 'app/providers/theme/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    loki: { skip: true },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light: Story = Template.bind({});

export const Dark: Story = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
