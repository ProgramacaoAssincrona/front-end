type TQueryParam = {
  [key: string]: string
}

export function hydrateQueryParams(queryParams: TQueryParam[]): string {
  const searchParams = new URLSearchParams()

  queryParams.forEach((param) => {
    const [key, value] = Object.entries(param)[0]

    if (typeof value === 'string' && value.trim() === '') return

    if (typeof value === 'number' && isNaN(value)) return

    if (![null, undefined, ''].includes(value)) {
      searchParams.set(key, value)
    }
  })

  return `?${searchParams.toString()}`
}
