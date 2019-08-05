var request = require('supertest');
var express = require('express');
var should = require('should');

describe('sample - negative testing', () => {
    var app = express();

    before(() => {
        app.get('/notFound', function (request, response) {
            response.status(404).type('html').send('<p>Not Found</p>');
        });
        app.get('/internalServerError', function (request, response) {
            response.status(500).json({ message: 'bad mojo' });
        });
    });

    // You can use the "done" callback from Mocha if necessary rather than async/await
    it('should be internal server error', (done) => {
        request(app)
          .get('/internalServerError')
          .expect('Content-Type', /json/)
          .expect(500)
          .expect(/bad/)
          .end(function (error, response) {
              if (error) {
                  should.not.exist(error);
              }

              done();
          });
    });

    it('should be not found', (done) => {
        request(app)
          .get('/notFound')
          .expect('Content-Type', /html/)
          .expect(404)
          .end(function (error, response) {
              if (error) {
                  should.exist(error);
              }

              done();
          });
    });
});