/* eslint-disable no-undef */
const nock = require('nock')
const FieldControl = require('../../src/index')
const client = new FieldControl({
  apiKey: 'apiKey'
})

describe('Tasks', () => {
  it('should get task by id', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/tasks/MzUxMzE6MjI5MTU=').reply(200, {})
    const response = await client.tasks.get('MzUxMzE6MjI5MTU=')
    expect(response.status).toBe(200)
  })

  it('should list tasks', async () => {
    nock('https://carchost.fieldcontrol.com.br').get('/tasks').reply(200, {})
    const response = await client.tasks.list()
    expect(response.status).toBe(200)
  })
})
