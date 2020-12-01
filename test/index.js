const getUserData = require('./../index').getUserData;
const expect = require('chai').expect;
let nock = require('nock');
const sebastian197 = require('./resposes/sebastian197');

describe('Test de datos de diferentes usuarios de Github', () => {

    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/sebastian197')
            .reply(200, sebastian197);
    });

    it('Obtener datos del usuario sebastian197', () => {
        return getUserData('sebastian197')
            .then(resp => {
                // Probar el tipo de variable que obtenemos de resp. Tiene que ser un Object.
                expect(typeof resp).to.equal('object');

                // Comprobar que el usuario de la API es sebastian197
                expect(resp.login).to.equal('Sebastian197');

                // Comprobar que el ID dle usuario es númerico
                expect(typeof resp.id).to.equal('number');

                // Comprobar que los seguidores y los seguidos sean númericos
                expect(typeof resp.followers).to.equal('number');
                expect(typeof resp.following).to.equal('number');

                // Comprobar que location = Telde, Las Palmas
                expect(resp.location).to.equal('Telde, Las Palmas');
            })
    });
});
