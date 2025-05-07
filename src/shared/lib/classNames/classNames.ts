type Modes = Record<string, boolean | string>

export function classNames(cls: string, modes?: Modes, additional?: string[]): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(modes)
      .reduce((prev, current) => {
        const [clsKey, value] = current;
        if (value) return [...prev, clsKey];
        return prev;
      }, [] as string[]),
  ].join(' ');
}
