export default function sanitize(string: string) {
  return string
    .toLowerCase()
    .replace(/ /gi, '-')
    .replace(/\?/gi, '')
    .replace(/'/gi, '')
    .replace(/,/gi, '');
}
