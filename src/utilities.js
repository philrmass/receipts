export function getDateString(date) {
  const parts = date.split('-');
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
