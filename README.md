<div align="center">
  <a target="_blank" href="https://fieldcontrol.com.br/"><img src=".github/static/cover.jpg" alt="FieldControl Cover" height="400px"></a>
  <br>
  <br>
  <p>
    :cloud: Node.js bindings for the Field Control API - <a target="_blank" href="https://developers.fieldcontrol.com.br/">https://developers.fieldcontrol.com.br/</a>
  </p>
  <div><code>npm install fieldcontrol --save</code></div>
  <p>

![Field Control ♥](https://img.shields.io/badge/Field%20Control-%20%20%20%20%20%20♥-blue.svg)
![Continuous Integration](https://github.com/FieldControl/carchost-node/workflows/Continuous%20Integration/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/413959ae9e77c5c1d9a7/maintainability)](https://codeclimate.com/github/FieldControl/carchost-node/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/413959ae9e77c5c1d9a7/test_coverage)](https://codeclimate.com/github/FieldControl/carchost-node/test_coverage)

  </p>
  <small>
    Built with 💙 by 
      <a href="https://github.com/FieldControl">FieldControl</a> and
      <a href="https://github.com/FieldControl/contaazul/graphs/contributors">contributors</a> - <a href="https://fieldcontrol.com.br/vaga-para-desenvolvedor.html?utm_source=github&utm_medium=opensource&utm_campaign=carchost-node">Estamos contratando!</a>
  </small>
</div>

---

## Instalação

This client is intended for server side use only.

```
npm install fieldcontrol --save
```

<div align="center">💙</div>

## Uso

```js
const FieldControl = require('fieldcontrol')
const client = new FieldControl({
  apiKey: 'ssssssssssshhhhhhhhhhhh:x~'
})
```

<div align="center">💙</div>

### Resources
- [Clientes](#clientes)
- [Colaboradores](#colaboradores)
- [Tipos de atividades](#tipos-de-atividade)
- [Solicitação de serviço](#solicita--o-de-servi-o)

### Clientes

Clientes (customers) são os consumidores finais dos serviços prestados (tipos de atividades), seja ele uma pessoa física ou jurídica.

```js
// Criar um novo cliente
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
```

```js
// Recuperar um cliente por id
const response = await client.customers.get('MTY0MTU6MjI5MTU=')
```

```js
// Listar clientes
const response = await client.customers.list({
  filter: {
    name: 'Luiz'
  },
  pagination: {
    limit: 1,
    offset: 2
  }
})
```
<div align="right">
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/customer.spec.js" target="_blank">see tests</a> - <a href="https://developers.fieldcontrol.com.br/#clientes" target="_blank">see docs</a>
</div>

<div align="center">💙</div>

### Colaboradores

Colaboradores (employees) são os profissionais que trabalham externamente usando o app Field Control.

```js
// Recuperar um colaborador por id
const response = await client.employees.get('MTY1NDk6MjI5MTU=')
```

```js
// Listar colaboradores
const response = await client.employees.list({
  pagination: {
      limit: 10,
      offset: 0
  }
})
```
<div align="right">
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/employee.spec.js" target="_blank">see tests</a> - <a href="https://developers.fieldcontrol.com.br/#colaboradores" target="_blank">see docs</a>
</div>

<div align="center">💙</div>

### Tipos de atividades

Tipos de atividades (services) são serviços prestados pela empresa. Exemplos: instalação, manutenção, reparo, etc..

```js
// Recuperar tipo de atividade por id
const response = await client.services.get('MzUxMzE6MjI5MTU=')
```

```js
// Criar um novo tipo de atividade
const response = await client.services.create({
  name: 'Instalação',
  duration: 120
})
```

```js
// Atualizar um tipo de atividade
const response = await client.services.update('MzA0ODY6MjI5MTU=', {
  id: 'MzA0ODY6MjI5MTU=',
  name: 'Manutenção',
  duration: 60
})
```

```js
// Listar tipos de atividade
const response = await client.services.list()
```

<div align="right">
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/service.spec.js" target="_blank">see tests</a> - <a href="https://developers.fieldcontrol.com.br/#tipos-de-atividades" target="_blank">see docs</a>
</div>

<div align="center">💙</div>


### Solicitação de serviço

Uma solicitação de serviço é, basicamente, um pedido de atendimento, ele pode ser um novo negócio, um problema de um cliente já existente e entre outras utilizações.

```js
// Criar uma nova solicitação de serviço
const response = await client.tickets.create({
  name: 'Luiz Freneda',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere eget tellus vitae malesuada. Duis consequat pulvinar tincidunt. Aenean in enim tincidunt, auctor mauris a, tincidunt turpis.',
  subject: 'Manutenção preventiva',
  contact: {
    email: 'email@fieldcontrol.com.br',
    phone: '11963427191'
  }
})
```

```js
// Atualizar uma solicitação de serviço existente
const response = await client.tickets.update('M2JlYTAyNDctODAyNC00Mzc5LTkwNWQtYTM5ZWRhYWMzM2NmOjE=', {
  name: 'Luiz Freneda',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere eget tellus vitae malesuada. Duis consequat pulvinar tincidunt. Aenean in enim tincidunt, auctor mauris a, tincidunt turpis.',
  subject: 'Manutenção preventiva',
  contact: {
    email: 'email@fieldcontrol.com.br',
    phone: '11963427191'
  }
})
```

```js
// Listar solicitações de serviço por nome e com configurações de paginação
const response = await client.tickets.list({
  filter: {
    name: 'Freneda'
  },
  pagination: {
    limit: 10,
    offset: 1
  }
})
```

<div align="right">
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/ticket.spec.js" target="_blank">see tests</a> - <a href="https://developers.fieldcontrol.com.br/#solicita--o-de-servi-o" target="_blank">see docs</a>
</div>

<div align="center">💙</div>

## Pull Requests

- **Add tests!** Your patch won't be accepted if it doesn't have tests.
- **Document any change in behaviour**. Make sure the README and any other
  relevant documentation are kept up-to-date.
- **Create topic branches**. Don't ask us to pull from your master branch.
- **One pull request per feature**. If you want to do more than one thing, send
  multiple pull requests.

<div align="center">💙</div>

<div align="center">
  <br/>
  <br/>
  <br/>
  <br/>
</div>

<div align="center">
  <p>
    <sub>
      Open source, from <a href="https://instagram.com/fieldcontrolapp" target="_blank">Field Control</a> with ❤ - <a href="https://fieldcontrol.com.br/vaga-para-desenvolvedor.html?utm_source=github&utm_medium=opensource&utm_campaign=carchost-node">Estamos contratando!</a>
    </sub>
  </p> 
</div>