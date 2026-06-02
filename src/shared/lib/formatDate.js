export function formatDate(date, locale = 'ko-KR') {
  return new Date(date).toLocaleDateString(locale);
}
