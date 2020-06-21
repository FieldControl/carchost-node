const { getPaginationQueryParams } = require('./../core/pagination')
const { filterWith } = require('./../core/filter')

class Customer {
  constructor (client) {
    this.client = client
  }

  get (id) {
    return this.client.get(`customers/${id}`)
  }

  create (customer) {
    delete customer.id
    return this.client.post('customers', customer)
  }

  update (id, customer) {
    return this.client.put(`customers/${id}`, customer)
  }

  list ({ filter, pagination } = {}) {
    return this.client.get('customers', {
      ...getPaginationQueryParams(pagination),
      ...filterWith(filter, ['name', 'archived', 'document_number', 'code', 'created_at'])
    })
  }
}

module.exports = Customer
