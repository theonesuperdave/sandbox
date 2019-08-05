const request = require('supertest');
const express = require('express');
const _ = require('lodash');

describe('sample - validation', () => {
    let app = express();

    before(() => {
        app.use(express.json());

        app.post('/endpoint/validation', function (request, response) {
            if (request.body) {
                // should assertions inject their own property on every JS object, so this is merely 
                //    a work-around for that.
                let hasRealData = _.first(Object.keys(request.body), (property) => {
                    return property !== 'should';
                });

                if (!hasRealData) {   
                    response.sendStatus(400);
                    return;
                }

                if(!request.body.name || !request.body.age || typeof(request.body.age) !== 'number') {
                    response.sendStatus(400);
                    return;
                }

                response.status(200).json({ name: 'Mace Windu', lightsaberColor: 'purple' });
            }
            else {
                response.sendStatus(400);
            }
        });
    });

    it('should be a bad request - for missing request', async () => {
        await request(app)
          .post('/endpoint/validation')
          .expect(400);
    });

    it('should be a bad request - for wrong data type in request', async () => {
        await request(app)
          .post('/endpoint/validation')
          .send({ name: 'Mace Windu', age: '42'})
          .expect(400);
    });

    it('should be a valid request', async () => {
        await request(app)
          .post('/endpoint/validation')
          .send({ name: 'Mace Windu', age: 42})
          .expect(200)
          .expect(/Mace Windu/);
    });
});