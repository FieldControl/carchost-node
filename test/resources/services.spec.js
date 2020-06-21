/* eslint-disable no-undef */
const nock = require('nock')
const FieldControl = require('../../src/index')
const client = new FieldControl({
  apiKey: 'apiKey'
})

describe('Services', () => {
  it('should get service by id', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/services/MzUxMzE6MjI5MTU=').reply(200, {})
    const response = await client.services.get('MzUxMzE6MjI5MTU=')
    expect(response.status).toBe(200)
  })

  it('should create a new service', async () => {
    nock('https://carchost.fieldcontrol.com.br').post('/services').reply(201, {})
    const response = await client.services.create({
      name: 'Instalação',
      duration: 120
    })
    expect(response.status).toBe(201)
  })

  it('should update existing service', async () => {
    nock('https://carchost.fieldcontrol.com.br').put('/services/MzA0ODY6MjI5MTU=').reply(200, {})
    const response = await client.services.update('MzA0ODY6MjI5MTU=', {
      id: 'MzA0ODY6MjI5MTU=',
      name: 'Manutenção',
      duration: 60
    })
    expect(response.status).toBe(200)
  })

  it('should list services', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/services').reply(200, {})
    const response = await client.services.list()
    expect(response.status).toBe(200)
  })
})
