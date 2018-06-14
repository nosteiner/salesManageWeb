var { connection } = require('./DA.js');
var ModelDA = require('./ModelDA.js');
var Sequelize = require('sequelize');

class CompenyDA extends ModelDA {
    constructor() {
        super();

        this.model = connection.define('compeny', {
          
            name: {
                type: Sequelize.TEXT('tiny'), 
            },
            address: {
                type: Sequelize.TEXT('tiny')
            },
            country: {
                type: Sequelize.TEXT('tiny')
            },
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            }
        });

    }
}





const compenyDA = new CompenyDA()
module.exports = compenyDA;