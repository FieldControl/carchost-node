/* eslint-disable no-undef */
const nock = require('nock')
const FieldControl = require('../../src/index')
const client = new FieldControl({
  apiKey: 'apiKey'
})

describe('Tickets', () => {
  it('should get ticket by id', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/tickets/M2JlYTAyNDctODAyNC00Mzc5LTkwNWQtYTM5ZWRhYWMzM2NmOjE=').reply(200, {})
    const response = await client.tickets.get('M2JlYTAyNDctODAyNC00Mzc5LTkwNWQtYTM5ZWRhYWMzM2NmOjE=')
    expect(response.status).toBe(200)
  })

  it('should create new ticket', async () => {
    nock('https://carchost.fieldcontrol.com.br').post('/tickets').reply(201, {})
    const response = await client.tickets.create({
      name: 'Luiz Freneda',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere eget tellus vitae malesuada. Duis consequat pulvinar tincidunt. Aenean in enim tincidunt, auctor mauris a, tincidunt turpis.',
      subject: 'Manutenção preventiva',
      contact: {
        email: 'email@fieldcontrol.com.br',
        phone: '11963427191'
      }
    })
    expect(response.status).toBe(201)
  })

  it('should update existing ticket', async () => {
    nock('https://carchost.fieldcontrol.com.br').put('/tickets/M2JlYTAyNDctODAyNC00Mzc5LTkwNWQtYTM5ZWRhYWMzM2NmOjE=').reply(200, {})
    const response = await client.tickets.update('M2JlYTAyNDctODAyNC00Mzc5LTkwNWQtYTM5ZWRhYWMzM2NmOjE=', {
      name: 'Luiz Freneda',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere eget tellus vitae malesuada. Duis consequat pulvinar tincidunt. Aenean in enim tincidunt, auctor mauris a, tincidunt turpis.',
      subject: 'Manutenção preventiva',
      contact: {
        email: 'email@fieldcontrol.com.br',
        phone: '11963427191'
      }
    })
    expect(response.status).toBe(200)
  })

  it('should list tickets by name and with pagination options', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/employees?limit=10&offset=0&q=name:"Luiz"').reply(200, {})
    const response = await client.tickets.list({
      filter: {
        name: 'Luiz'
      },
      pagination: {
        limit: 10,
        offset: 0
      }
    })
    expect(response.status).toBe(200)
  })

  it('should list tickets by identifier and with pagination options', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/employees?limit=10&offset=0&q=identifier:"1234567"').reply(200, {})
    const response = await client.tickets.list({
      filter: {
        identifier: '1234567'
      },
      pagination: {
        limit: 10,
        offset: 0
      }
    })
    expect(response.status).toBe(200)
  })

  it('should list tickets by identifier, name, archived and with pagination options', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/employees?limit=10&offset=1&q=identifier:"1234567" name:"Freneda" archived:"true"').reply(200, {})
    const response = await client.tickets.list({
      filter: {
        identifier: '1234567',
        name: 'Freneda',
        archived: true
      },
      pagination: {
        limit: 10,
        offset: 1
      }
    })
    expect(response.status).toBe(200)
  })
})
