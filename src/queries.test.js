const app = require('./index')
const supertest = require('supertest')
const request = supertest(app)


describe('test', () => {
    it('Gets the test endpoint', async done => {
        // Sends GET Request to /test endpoint
        const response = await request.get('/users')
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('pass!')
        
        // ...
        done()
      })
})