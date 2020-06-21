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
    Feito com 💙 pela 
      <a href="https://github.com/FieldControl">FieldControl</a> e
      <a href="https://github.com/FieldControl/contaazul/graphs/contributors">contribuidores</a> - <a href="https://fieldcontrol.com.br/vaga-para-desenvolvedor.html?utm_source=github&utm_medium=opensource&utm_campaign=carchost-node">Estamos contratando!</a>
  </small>
</div>

---

### Instalação

```
npm install fieldcontrol --save
```

<div align="center">💙</div>

### Uso

:exclamation: | Lembre-se de manter em segredo a sua chave de API. Não a compartilhe e tome cuidado para não expô-la publicamente no código do lado do cliente (client-side).
---: | :---

```js
const FieldControl = require('fieldcontrol')
const client = new FieldControl({
  apiKey: 'ssssssssssshhhhhhhhhhhh:x~'
})
```

<div align="center">💙</div>

### Recursos
- [Clientes](#clientes)
- [Colaboradores](#colaboradores)
- [Tipos de atividades](#tipos-de-atividade)
- [Solicitação de serviço](#solicitação-de-serviço)
- [Ordens de serviço](#orders-de-serviço)
- [Atividades](#atividades)

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
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/customer.spec.js" target="_blank">ver testes</a> - <a href="https://developers.fieldcontrol.com.br/#clientes" target="_blank">ver docs</a>
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
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/employee.spec.js" target="_blank">ver testes</a> - <a href="https://developers.fieldcontrol.com.br/#colaboradores" target="_blank">ver docs</a>
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
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/service.spec.js" target="_blank">ver testes</a> - <a href="https://developers.fieldcontrol.com.br/#tipos-de-atividades" target="_blank">ver docs</a>
</div>

<div align="center">💙</div>


### Solicitação de serviço

Uma solicitação de serviço é, basicamente, um pedido de atendimento, ele pode ser um novo negócio, um problema de um cliente já existente e entre outras utilizações.

```js
// Criar uma nova solicitação de serviço
const response = await client.tickets.create({
  name: 'Luiz Freneda',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/ticket.spec.js" target="_blank">ver testes</a> - <a href="https://developers.fieldcontrol.com.br/#solicita--o-de-servi-o" target="_blank">ver docs</a>
</div>

<div align="center">💙</div>

### Ordens de serviço

Uma ordem de serviço (orders) é a formalização do serviço a ser prestado.

Na prática, funciona assim: o cliente chega até você com uma demanda, solicita um orçamento, há uma negociação e, assim que ela é concluída, é preciso emitir uma OS para organizar internamente o trabalho a ser realizado.

```js
// Recuperar ordem de serviço por id
const response = await client.orders.get('NTVlMzYxMTktZWJiZjE=')
```

```js
// Criar uma nova ordem de serviço (sempre é necessário criar com pelo menos UMA atividade)
const response = await client.orders.create({
  identifier: '695860',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
```

```js
// Listar ordens de serviço por identificador e com configurações de paginação
const response = await client.orders.list({
  filter: {
    identifier: 'ABC'
  },
  pagination: {
    limit: 50,
    offset: 50
  }
})
```

```js
// Listar anexos de uma ordem de serviço
const response = await client.orders.listAttachments('NTVlMzYxMTktZWJiZjE=')
```

```js
// Listar atividades de uma ordem de serviço
const response = await client.orders.listTasks('NTVlMzYxMTktZWJiZjE=')
```

```js
// Listar comentários de uma ordem de serviço
const response = await client.orders.listComments('NTVlMzYxMTktZWJiZjE=')
```

```js
// Listar materiais usados em uma ordem de serviço
const response = await client.orders.listMaterials('NTVlMzYxMTktZWJiZjE=')
```

```js
// Listar formulários respondidos para uma ordem de serviço
const response = await client.orders.listForms('NTVlMzYxMTktZWJiZjE=')
```

<div align="right">
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/order.spec.js" target="_blank">ver testes</a> - <a href="https://developers.fieldcontrol.com.br/#ordem-de-servi-o--os-" target="_blank">ver docs</a>
</div>

<div align="center">💙</div>

### Atividades

Atividades (tasks) são os registros das visitas e serviços realizados aos clientes.

Na prática, funciona assim: dado uma ordem de serviço, agora é preciso agendar o atendimento até o local da prestação de serviço (cadastrado na OS).

É necessário atribuir uma data, opcionalmente um horário e um colaborador. As atividades são enviadas para os celulares dos técnicos formando sua agenda de atendimento. Vale ressaltar que é possível criar uma ou mais atividades (visitas) para a mesma ordem de serviço.

```js
// Recuperar uma atividade por id
const response = await client.tasks.get('MzUxMzE6MjI5MTU=')
```

```js
// Listar atividades por data de criação e com configurações de paginação
const response = await client.tasks.list({
  filter: {
    created_at: '2020-06-20'
  },
  pagination: {
    limit: 10,
    offset: 20
  }
})
```

<div align="right">
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/task.spec.js" target="_blank">ver testes</a> - <a href="https://developers.fieldcontrol.com.br/#atividades" target="_blank">ver docs</a>
</div>

<div align="center">💙</div>

## Contribuições

- **Testes unitários!** Seu patch não será aceito se seu código não estiver testado :S
- **Documentação**. Garanta que o README atualizado!
- **Branch feature**. Se você quer contribuir com mais de uma funcionalidade, envie vários PR.

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
      Open source, from <a href="https://instagram.com/fieldcontrolapp" target="_blank">Field Control</a> with ❤ - <a href="https://fieldcontrol.com.br/vaga-para-desenvolvedor.html?utm_source=github&utm_medium=opensource&utm_campaign=carchost-node">We are hiring!</a>
    </sub>
  </p> 
</div>