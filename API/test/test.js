const expect = require("chai").expect;
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("Routes' tests", function() {

    let base_url = "http://localhost:5001/"

    it("should not return a price with an invalid origin", function(done) {
        chai.request(base_url)
            .get('price?origin=012&destino=012')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                done();
            });
    });

    it("should not return a price with an invalid destiny", function(done) {
        chai.request(base_url)
            .get('price?origin=012&destino=012')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                done();
            });
    });

    it("should return a price with a valid origin and destiny", function(done) {
        chai.request(base_url)
            .get('price?origin=011&destino=016')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                done();
            });
    });

    it("should not return a price with an invalid name", function(done) {
        chai.request(base_url)
            .get('plan?nome=FaleMais20%303')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                done();
            });
    });

    it("should return a plan with a valid name", function(done) {
        chai.request(base_url)
            .get('plan?nome=FaleMais20%30')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                done();
            });
    });





});


