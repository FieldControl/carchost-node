const { getPaginationQueryParams } = require('./../core/pagination')
const { filterWith } = require('./../core/filter')

class Employee {
  constructor (client) {
    this.client = client
  }

  get (id) {
    return this.client.get(`employees/${id}`)
  }

  list ({ filter, pagination } = {}) {
    return this.client.get('employees', {
      ...getPaginationQueryParams(pagination),
      ...filterWith(filter, ['name'])
    })
  }
}

module.exports = Employee
