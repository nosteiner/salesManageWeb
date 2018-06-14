var { connection } = require('./DA.js');
var ModelDA = require('./ModelDA.js');
var Sequelize = require('sequelize');

class CustomerDA extends ModelDA {
    constructor() {
        super();
        this.model = connection.define('customer', {

            first_name: {
                type: Sequelize.TEXT('tiny'),
            },
            last_name: {
                type: Sequelize.TEXT('tiny')
            },
            company_name: {
                type: Sequelize.TEXT('tiny')
            },
            email: {
                type: Sequelize.TEXT('tiny')
            },
            phone: {
                type: Sequelize.INTEGER()
            },
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            }

        });

    }
}

const customerDA = new CustomerDA()
module.exports = customerDA;