const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const server = require('./rest');

chai.use(chaiHttp);

// Test endpoint get product
// ekspektasinya:
// status 200, data message

describe('API Test', () => {
  describe('GET /products', () => {
    it('should return data products', async () => {
      try {
        const res = await chai.request(server).get('/product');

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message');
        // expect(res.body.message).to.equal('Data products');
      } catch (error) {
        throw error;
      }
    });
  });
});
