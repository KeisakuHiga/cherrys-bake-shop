const request  = require('supertest')
const app = require('../server')

// const testSupertest = async () => {
//   const response = await request(app).get('/')
//   console.log(response)
// }

// describe
describe('test is ok', async () => {
  test('check that / send back api is working', async () => {
    const response = await request(app).get('/')
    // console.log(response.text)
    expect(response.text).toBe('api working')
  })
  test('check that "/" sends back a 200 if the server is up', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
  })
})

describe('testing the post endpoints "/create-data" works in the way we expect', async () => {
  test('that the endpoint sends back the name that we pass as a parameter in the request body', async () => {
    const name = 'keisaku'
    const response = await request(app)
      .post('/create-data')
      .send({
        name: name,
        password: password
      })
    expect(response.text).toBe(name)
  })

  test('if request body has worng parameter send an error 404', async () => {
    const name = 'keisaku'
    const response = await request(app)
      .post('/create-data')
      .send({
        name: name,
        password: 'djal;da'
      })
    })
    expect(response.status).toBe(404)
})

describe('testing the json web tokens', async () => {
  test('if no token provided', async () => {
    const response = await request(app)
      .get('/token')
      .set(
        'token', ''
      )
  })
  expect(response.status).toBe(400)
})