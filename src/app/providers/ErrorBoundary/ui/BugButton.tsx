import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// компонент для тестирования
export const BugButton = () => {
  const [error, setState] = useState(false);

  useEffect(() => {
    if (error) throw new Error('test error');
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={() => setState(true)}>
      throw error
    </Button>
  );
};
