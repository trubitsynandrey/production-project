type Modes = Record<string, boolean | string>

export function classNames(cls: string, modes: Modes, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(modes)
      .reduce((prev, current) => {
        const [cls, value] = current
        if (Boolean(value)) return [...prev, cls]
        else return prev
      }, [] as string[])
  ].join(' ')
}