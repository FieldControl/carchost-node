/* eslint-disable no-undef */
const nock = require('nock')
const FieldControl = require('../../src/index')
const client = new FieldControl({
  apiKey: 'apiKey'
})

describe('Orders', () => {
  it('should get order by id', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/orders/NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=').reply(200, {})
    const response = await client.orders.get('NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=')
    expect(response.status).toBe(200)
  })

  it('should create a new order', async () => {
    nock('https://carchost.fieldcontrol.com.br').post('/orders').reply(201, {})
    const response = await client.orders.create({
      identifier: '695860',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere eget tellus vitae malesuada. Duis consequat pulvinar tincidunt. Aenean in enim tincidunt, auctor mauris a, tincidunt turpis.',
      customer: {
        id: 'MTox'
      },
      service: {
        id: 'MTox'
      },
      address: {
        zipCode: '05005900',
        city: 'Sao Paulo',
        state: 'SP',
        street: 'Rua Turiassu',
        number: '902',
        complement: null,
        neighborhood: null,
        coords: {
          latitude: -23.52702,
          longitude: -46.680823
        }
      },
      tasks: [
        {
          employee: {
            id: 'MTAxOjE='
          },
          status: 'done',
          duration: 30,
          scheduling: {
            date: '2019-08-20',
            time: '15:00:00'
          },
          coords: {
            latitude: -23.52702,
            longitude: -46.680823
          }
        }
      ]
    })
    expect(response.status).toBe(201)
  })

  it('should update existing order', async () => {
    nock('https://carchost.fieldcontrol.com.br').put('/orders/NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=').reply(200, {})
    const response = await client.orders.update('NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=', {
      identifier: '695869',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere eget tellus vitae malesuada. Duis consequat pulvinar tincidunt. Aenean in enim tincidunt, auctor mauris a, tincidunt turpis.',
      customer: {
        id: 'MTox'
      },
      service: {
        id: 'MTox'
      },
      address: {
        zipCode: '15057560',
        street: 'Avenida Brasil',
        number: '898',
        neighborhood: null,
        complement: null,
        city: 'Rio de Janeiro',
        state: 'RJ',
        coords: {
          latitude: -23.573005,
          longitude: -46.695866
        }
      }
    })
    expect(response.status).toBe(200)
  })

  it('should list orders by identifier and with pagination options', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/orders?limit=50&offset=50&q=identifier:"ABC"').reply(200, {})
    const response = await client.orders.list({
      filter: {
        identifier: 'ABC'
      },
      pagination: {
        limit: 50,
        offset: 50
      }
    })
    expect(response.status).toBe(200)
  })

  it('should list order\'s attachments', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/orders/NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=/attachments').reply(200, {})
    const response = await client.orders.listAttachments('NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=')
    expect(response.status).toBe(200)
  })

  it('should list order\'s tasks', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/orders/NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=/tasks').reply(200, {})
    const response = await client.orders.listTasks('NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=')
    expect(response.status).toBe(200)
  })

  it('should list order\'s comments', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/orders/NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=/comments').reply(200, {})
    const response = await client.orders.listComments('NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=')
    expect(response.status).toBe(200)
  })

  it('should list order\'s forms', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/orders/NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=/forms').reply(200, {})
    const response = await client.orders.listForms('NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=')
    expect(response.status).toBe(200)
  })

  it('should get order\'s form by id', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/orders/NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=/forms/MDNiNDdhYTgtNzAxNC00NGEzLWJhYjItMTRjMjBjODQ1YTViOjE=').reply(200, {})
    const response = await client.orders.getForm(
      'NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=',
      'MDNiNDdhYTgtNzAxNC00NGEzLWJhYjItMTRjMjBjODQ1YTViOjE='
    )
    expect(response.status).toBe(200)
  })

  it('should list order\'s materials', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/orders/NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=/materials').reply(200, {})
    const response = await client.orders.listMaterials('NTVlMzYxMTktZWJiZi00YmE5LTkzM2YtM2Q5MWU1NjlmMjliOjE=')
    expect(response.status).toBe(200)
  })
})
