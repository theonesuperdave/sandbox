const request = require('supertest');
const express = require('express');
const should = require('should');

describe('sample - auth', () => {
    let app = express();

    before(() => {
        app.get('/endpoint/secured', function (request, response) {
            let apiKey = '42';
            let isAuthorized = request.header('X-API-Key') === apiKey;

            if (isAuthorized) {
                response.status(200).json({ name: 'Mace Windu', lightsaberColor: 'purple' });
            }
            else {
                response.sendStatus(401);
            }
        });
    });

    it('should be authorized', async () => {
        let apiKey = '42';

        await request(app)
          .get('/endpoint/secured')
          .set('X-API-Key', apiKey)
          .expect('Content-Type', /json/)
          .expect(200)
          .expect(/Mace Windu/);
    });

    it('should be UNauthorized', async () => {
        await request(app)
          .get('/endpoint/secured')
          .expect(401);
    });
});