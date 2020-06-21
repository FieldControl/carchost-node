const filterWith = (filter = {}, allowedProps = []) => {
  const filters = []
  for (const objectKey of Object.keys(filter)) {
    if (allowedProps.includes(objectKey)) {
      filters.push(`${objectKey}:"${filter[objectKey]}"`)
    }
  }
  return {
    q: filters.length ? filters.join(' ') : undefined
  }
}

module.exports = {
  filterWith
}
