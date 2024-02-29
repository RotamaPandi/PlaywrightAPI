import {test, expect} from '@playwright/test'

test.describe.parallel('Api testing', ()=>{
    const baseURL = 'https:reqres.in/api'
    test ('Simple API testing', async ({request})=>{
        const response = await request.get(`${baseURL}/users/2`)
        expect(response.status()).toBe(200)
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
    })

    test('API test assert invalid endpoint', async ({request})=>{
        const response = await request.get(`${baseURL}/users/non-exist-endpoint`)
        expect(response.status()).toBe(404)
    })

    test('Get Request - user detail', async({request})=>{
        const response = await request.get(`${baseURL}/users/1`)
            const responseBody = JSON.parse(await response.text())
            console.log(responseBody)
            expect(response.status()).toBe(200)
            expect(responseBody.data.id).toBe(1)
            expect(responseBody.data.first_name).toBe('George')
            expect(responseBody.data.last_name).toBe('Bluth')
            expect(responseBody.data.email).toBeTruthy()
    })

    test('Post request - create new user', async({request})=>{
        const response = await request.post(`${baseURL}/user`,{
            data: {
                id: 1000,
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.id).toBe(1000)
        expect(responseBody.createdAt).toBeTruthy()
        console.log(responseBody)
    })

    test('Post reauest - login', async ({request})=>{
        const response = await request.post(`${baseURL}/login`, {
            data: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.token).toBeTruthy()
        console.log(responseBody)
    })

    test.only('Post request - unsuccessful Login', async ({request})=>{
        const response = await request.post(`${baseURL}/login`, {
            data: {
                email: 'eve.holt@reqres.in',
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(400)
        expect(responseBody.error).toBe('Missing password')
        console.log(responseBody)
        console.log(response.status())
    })

    test('Put request - Update user', async ({request})=>{
        const response = await request.put(`${baseURL}/users/2`, {
            data:{
                name: 'New Name',
                job: 'New Job',
            },
        })
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe('New Name')
        expect(responseBody.job).toBe('New Job')
        expect(responseBody.updatedAt).toBeTruthy()
        console.log(responseBody)
        console.log(response.status())
    })

    test('Delete request - delete user', async ({request})=>{
        const response = await request.delete(`${baseURL}/users/2`)
        expect(response.status()).toBe(204)
        console.log(response.status())
    })
})