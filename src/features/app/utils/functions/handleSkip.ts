export default function handleSkip(page: number, take: number) {
  return page === 1 ? 0 : page * take - take
}
