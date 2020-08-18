const request = require('supertest');
const app = require('../../src/app');

describe('Validate barcode', () => {
    it('should recieve a barcode and validate this barcode as a valid barcode', async () => {

        const response = await request(app)
            .get('/')
            .send({
                linhaDigitavel: "42297.11504 00001.954411 60020.034520 2 68610000054659"
            })

        expect(response.status).toBe(200)
        expect(response.body.linhaDigitavelIsValid).toBe(true)
        console.log(response.body.linhaDigitavelIsValid)
    });
})