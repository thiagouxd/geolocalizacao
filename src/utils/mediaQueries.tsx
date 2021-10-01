const mediaQuery = (value: number, type: string) => {
  return `@media screen and (${type}-width: ${value}px)`
}

export const smartPhone = mediaQuery(480, "max")
export const smallerThanTablet = mediaQuery(720, "max")
export const biggerThanTablet = mediaQuery(720, "min")
export const smallerThanDesktop = mediaQuery(1024, "max")
export const biggerThanDesktop = mediaQuery(1024, "min")