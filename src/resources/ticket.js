const { getPaginationQueryParams } = require('../core/pagination')
const { filterWith } = require('./../core/filter')

class Ticket {
  constructor (client) {
    this.client = client
  }

  get (id) {
    return this.client.get(`tickets/${id}`)
  }

  create (ticket) {
    delete ticket.id
    return this.client.post('tickets', ticket)
  }

  update (id, ticket) {
    return this.client.put(`tickets/${id}`, ticket)
  }

  list ({ filter, pagination } = {}) {
    return this.client.get('tickets', {
      ...getPaginationQueryParams(pagination),
      ...filterWith(filter, ['name', 'identifier', 'archived'])
    })
  }
}

module.exports = Ticket
