var request = require('supertest');
var express = require('express');
var should = require('should');

describe('sample', () => {
    var app = express();

    before(() => {
        app.get('/jedi/mace', function (request, response) {
            response.status(200).json({ name: 'Mace Windu', lightsaberColor: 'purple' });
        });
    });

    it('should get Mace Windu', async () => {
        await request(app)
          .get('/jedi/mace')
          .expect('Content-Type', /json/)
          .expect(200)
          .expect(/Mace Windu/);
    });

    it('should have purple lightsaber', async () => {
        let response = await request(app)
          .get('/jedi/mace')
          .expect('Content-Type', /json/)
          .expect(200)
          .expect(/lightsaberColor.*purple/);

          response.body.lightsaberColor.should.be.equal('purple');
    });
});