const request = require('supertest')

const authRouter = require('../api/server')


describe('it Posts', () => {
    describe('/register', () => {
        it('needs username and password body', () => {
            return request(authRouter)
            .post('/api/auth/register')
            .then(res => {
                expect(res.status).toBe(500)
            })
        })
        it('return HTML string', done => {
            request(authRouter)
            .get('/')
            .then( res => {
                expect(res.type).toMatch(/html/i)
                done()
            }) 
        })
    })
    describe('/login', () => {
        it('keeps unauthenticated users out', () => {
            return request(authRouter)
            .post('/api/auth/login')
            .then(res => {
                expect(res.status).toBe(500)
            })
        })
        it('return HTML string', done => {
            request(authRouter)
            .get('/')
            .then( res => {
                expect(res.type).toMatch(/html/i)
                done()
            }) 
        })
    })
})
