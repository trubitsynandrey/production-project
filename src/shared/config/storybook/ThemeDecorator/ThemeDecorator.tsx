import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/theme';
import { Theme } from 'app/providers/theme/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
