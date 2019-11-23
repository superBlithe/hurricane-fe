export function isvalidUsername(str: string) {
  const validMap = ['admin', 'editor'];
  return validMap.indexOf(str.trim()) >= 0;
}
