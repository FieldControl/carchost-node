const { getPaginationQueryParams } = require('../core/pagination')
const { filterWith } = require('../core/filter')

class Service {
  constructor (client) {
    this.client = client
  }

  get (id) {
    return this.client.get(`services/${id}`)
  }

  create (service) {
    delete service.id
    return this.client.post('services', service)
  }

  update (id, service) {
    return this.client.put(`services/${id}`, service)
  }

  list ({ filter, pagination } = {}) {
    return this.client.get('services', {
      ...getPaginationQueryParams(pagination),
      ...filterWith(filter, ['name', 'archived'])
    })
  }
}

module.exports = Service
