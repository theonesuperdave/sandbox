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

    it('should get Mace Windu', (done) => {
        request(app)
          .get('/jedi/mace')
          .expect('Content-Type', /json/)
          .expect(200)
          .expect(/Mace Windu/)
          .end(function (error, response) {
              if (error) {
                  should.not.exist(error);
              }

              done();
          });
    });

    it('should have purple lightsaber', (done) => {
        request(app)
          .get('/jedi/mace')
          .expect('Content-Type', /json/)
          .expect(200)
          .expect(/lightsaberColor.*purple/)
          .end(function (error, response) {
              if (error) {
                  should.not.exist(error);
              }

              response.body.lightsaberColor.should.be.equal('purple');

              done();
          });
    });
});