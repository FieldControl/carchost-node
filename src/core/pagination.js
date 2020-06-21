const getPaginationQueryParams = (pagination) => {
  const enableOffset = pagination && (pagination.offset || pagination.offset === 0)
  return {
    limit: pagination && pagination.limit ? pagination.limit : undefined,
    offset: enableOffset ? pagination.offset : undefined
  }
}

module.exports = {
  getPaginationQueryParams
}
