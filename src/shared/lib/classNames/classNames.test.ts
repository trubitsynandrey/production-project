import { classNames } from './classNames';

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('someClass', {}, [])).toBe('someClass');
  });

  test('additional classes', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });

  test('additional classes + modes', () => {
    expect(classNames('someClass', 
      {hovered: true, scrollable: false, gullible: undefined}, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered');
  });
});
