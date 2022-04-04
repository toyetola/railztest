let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');


chai.use(chaiHttp);

describe('/POST searchAddress', () => {
    it('it should make request to 3 maps Google API', (done) => {
      chai.request(server)
          .post('/searchAddress')
          .send({
            "street":"1600 Amphitheatre Parkway",
            "city":"Mountain View",
            "state":"CA",
            "country":"United States"
            })
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('json');
            done();
          });
    });
});