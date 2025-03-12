export function formatNumberToLocale(
  num: number,
  localeString: Intl.LocalesArgument
): string {
  return Number(num).toLocaleString(localeString)
}
