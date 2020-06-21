const { getPaginationQueryParams } = require('../core/pagination')
const { filterWith } = require('../core/filter')

class Task {
  constructor (client) {
    this.client = client
  }

  get (id) {
    return this.client.get(`tasks/${id}`)
  }

  list ({ filter, pagination } = {}) {
    return this.client.get('tasks', {
      ...getPaginationQueryParams(pagination),
      ...filterWith(filter, ['created_at', 'archived'])
    })
  }
}

module.exports = Task
