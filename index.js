const axios = require('axios');

module.exports = {
    /**
     * Introducir el usuario de github para obtener sus datos de la API
     * @example
     * user = 'sebastian197'
     * @param {string} user user Usuario del que queremos los datos de la API
     */
    getUserData: function (user) {
        const url = `https://api.github.com/users/${user}`;
        return axios.get(url)
            .then(data => data.data)
            .catch(error => console.error(error));
    },
}