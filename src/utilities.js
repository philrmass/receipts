export function byDate(a, b) {
  if (a.date > b.date) {
    return -1;
  } else if (a.date < b.date) {
    return 1;
  }
  return 0;
}

export function getDateString(date) {
  const parts = date.split('-');
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
