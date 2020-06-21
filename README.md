<div align="center">
  <a target="_blank" href="https://fieldcontrol.com.br/"><img src=".github/static/cover.jpeg" alt="FieldControl Cover" height="400px"></a>
  <div><code>npm install FieldControl --save</code></div>
  <br>
  <p>
    :cloud: Node.js bindings for the Field Control API - <a target="_blank" href="https://developers.fieldcontrol.com.br/">https://developers.fieldcontrol.com.br/</a>
  </p>
  <p>



  </p>
  <small>
    Built with ❤ by 
      <a href="https://github.com/FieldControl">FieldControl</a> and
      <a href="https://github.com/FieldControl/contaazul/graphs/contributors">contributors</a> - <a href="https://fieldcontrol.com.br/vaga-para-desenvolvedor.html?utm_source=github&utm_medium=opensource&utm_campaign=carchost-node">Estamos contratando!</a>
  </small>
</div>

---

## Installation

This client is intended for server side use only.

```
npm install FieldControl --save
```

<div align="center">💙</div>

## Usage

```js
const FieldControl = require('FieldControl')
const client = new FieldControl({
  apiKey: 'ssssssssssshhhhhhhhhhhh:x~'
})
```

<div align="center">💙</div>

### Resources
- [Employees](#employees)
- [Services](#services)
- [Tickets](#tickets)

### Employees

```js
// Get an employee
const response = await client.employees.get('MTY1NDk6MjI5MTU=')
// {
//   "status": 200,
//   "data": {
//      "id": "MTY0MTU6MjI5MTU=",
//      "name": "Mauro Garcia",
//      "avatarUrl": null
//   }
// }
```

```js
// List employees
const response = await client.employees.list({
    pagination: {
        limit: 10,
        offset: 0
    }
})
// {
//   "status": 200,
//   "data": {
//        "items": [
//            {
//            "id": "MTY0MTU6MjI5MTU=",
//            "name": "Mauro Garcia",
//            "avatarUrl": null
//            },
//            {
//            "id": "MTY1NDk6MjI5MTU=",
//            "name": "Renan Valentin",
//            "avatarUrl": null
//            },
//            {
//            "id": "MTY1NTU6MjI5MTU=",
//            "name": "Felipe Zini",
//            "avatarUrl": null
//            }
//        ],
//        "totalCount": 3
//     }
//   }
// }
```
<div align="right">
  <a href="https://github.com/FieldControl/carchost-node/blob/master/test/resources/employee.spec.js" target="_blank">see tests</a> - <a href="https://developers.fieldcontrol.com.br/#colaboradores" target="_blank">see docs</a>
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