export function getFlagUrl(id) {
  if (!id) return '';
  return `https://flagcdn.com/${id.toLowerCase()}.svg`;
}

export function getFlagPngUrl(id, size = 'w160') {
  if (!id) return '';
  return `https://flagcdn.com/${size}/${id.toLowerCase()}.png`;
}

export function getEmblemUrl(id) {
  if (!id) return '';
  return `https://cdn.jsdelivr.net/npm/coat-of-arms@6.4.0/dist/coats/${id.toUpperCase()}.svg`;
}
