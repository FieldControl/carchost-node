/* eslint-disable no-undef */
const nock = require('nock')
const FieldControl = require('./../../src/index')
const client = new FieldControl({
  apiKey: 'apiKey'
})

describe('Employees', () => {
  it('should get employee by id', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/employees/MTY1NDk6MjI5MTU=').reply(200, {})
    const response = await client.employees.get('MTY1NDk6MjI5MTU=')
    expect(response.status).toBe(200)
  })

  it('should list employees', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/employees').reply(200, {})
    const response = await client.employees.list()
    expect(response.status).toBe(200)
  })

  it('should list employees by name and with pagination options', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/employees?limit=10&offset=10&q=name:"Luiz"').reply(200, {})
    const response = await client.employees.list({
      filter: {
        name: 'Luiz'
      },
      pagination: {
        limit: 10,
        offset: 10
      }
    })
    expect(response.status).toBe(200)
  })
})
