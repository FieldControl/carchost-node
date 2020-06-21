const axios = require('axios')
const baseUrl = 'https://carchost.fieldcontrol.com.br'
const {
  Employee,
  Ticket,
  Service
} = require('./resources')

const responseWith = (response) => ({
  status: response.status,
  data: response.data || undefined
})

const responseErrWith = (err) => {
  console.log(err)
  return {
    status: err.response.status,
    data: err.response.data || undefined
  }
}

class Client {
  constructor ({ apiKey }) {
    this.headers = {
      'X-Api-Key': apiKey,
      'User-Agent': 'carchost-node/1.0.0 - official node bindings'
    }
    this.employees = new Employee(this)
    this.tickets = new Ticket(this)
    this.services = new Service(this)
  }

  get (resourceUri, params = {}) {
    return axios.get(`${baseUrl}/${resourceUri}`, {
      params: params,
      headers: this.headers
    }).then(responseWith).catch(responseErrWith)
  }

  post (resourceUri, payload) {
    return axios.post(`${baseUrl}/${resourceUri}`, payload, {
      headers: this.headers
    }).then(responseWith).catch(responseErrWith)
  }

  put (resourceUri, payload) {
    return axios.put(`${baseUrl}/${resourceUri}`, payload, {
      headers: this.headers
    }).then(responseWith).catch(responseErrWith)
  }

  delete (resourceUri) {
    return axios.delete(`${baseUrl}/${resourceUri}`, {
      headers: this.headers
    }).then(responseWith).catch(responseErrWith)
  }
}

module.exports = Client
