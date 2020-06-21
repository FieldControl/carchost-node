/* eslint-disable no-undef */
const nock = require('nock')
const FieldControl = require('../../src/index')
const client = new FieldControl({
  apiKey: 'apiKey'
})

describe('Customers', () => {
  it('should get customer by id', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/customers/NTAxMDc0OjIyOTE1').reply(200, {})
    const response = await client.customers.get('NTAxMDc0OjIyOTE1')
    expect(response.status).toBe(200)
  })

  it('should create a new customer', async () => {
    nock('https://carchost.fieldcontrol.com.br').post('/customers').reply(201, {})
    const response = await client.customers.create({
      name: 'Luiz Freneda',
      code: '05e67c054594',
      documentNumber: '27032236881',
      address: {
        zipCode: '15085480',
        street: 'Rua dos Pinheiros',
        number: '383',
        neighborhood: 'Pinheiros',
        complement: 'Edificio Alamac',
        city: 'São Paulo',
        state: 'SP',
        coords: {
          latitude: -23.565249,
          longitude: -46.681838
        }
      }
    })
    expect(response.status).toBe(201)
  })

  it('should update existing customer', async () => {
    nock('https://carchost.fieldcontrol.com.br').put('/customers/NTAxMDc0OjIyOTE1').reply(200, {})
    const response = await client.customers.update('NTAxMDc0OjIyOTE1', {
      name: 'Luiz Freneda',
      code: '05e67c054594',
      documentNumber: '27032236881',
      address: {
        zipCode: '15085480',
        street: 'Rua dos Pinheiros',
        number: '383',
        neighborhood: 'Pinheiros',
        complement: 'Edificio Alamac',
        city: 'São Paulo',
        state: 'SP',
        coords: {
          latitude: -23.565249,
          longitude: -46.681838
        }
      }
    })
    expect(response.status).toBe(200)
  })

  it('should list customers', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/customers').reply(200, {})
    const response = await client.customers.list()
    expect(response.status).toBe(200)
  })

  it('should list customers by name and with pagination options', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/customers?limit=1&offset=2&q=name:"Luiz"').reply(200, {})
    const response = await client.customers.list({
      filter: {
        name: 'Luiz'
      },
      pagination: {
        limit: 1,
        offset: 2
      }
    })
    expect(response.status).toBe(200)
  })
})
