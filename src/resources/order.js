const { getPaginationQueryParams } = require('../core/pagination')
const { filterWith } = require('../core/filter')

class Order {
  constructor (client) {
    this.client = client
  }

  get (id) {
    return this.client.get(`orders/${id}`)
  }

  create (order) {
    delete order.id
    return this.client.post('orders', order)
  }

  update (id, order) {
    return this.client.put(`orders/${id}`, order)
  }

  list ({ filter, pagination } = {}) {
    return this.client.get('orders', {
      ...getPaginationQueryParams(pagination),
      ...filterWith(filter, ['identifier', 'created_at'])
    })
  }

  listAttachments (orderId) {
    return this.client.get(`orders/${orderId}/attachments`)
  }

  listTasks (orderId) {
    return this.client.get(`orders/${orderId}/tasks`)
  }

  createTask (orderId, task) {
    delete task.id
    return this.client.post(`orders/${orderId}/tasks`, task)
  }

  updateTask (orderId, taskId, task) {
    return this.client.put(`orders/${orderId}/tasks/${taskId}`, task)
  }

  listComments (orderId) {
    return this.client.get(`orders/${orderId}/comments`)
  }

  listForms (orderId) {
    return this.client.get(`orders/${orderId}/forms`)
  }

  getForm (orderId, formId) {
    return this.client.get(`orders/${orderId}/forms/${formId}`)
  }

  listMaterials (orderId) {
    return this.client.get(`orders/${orderId}/materials`)
  }
}

module.exports = Order
