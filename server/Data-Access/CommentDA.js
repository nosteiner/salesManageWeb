var { connection } = require('./DA.js');
var ModelDA = require('./ModelDA.js');
var Sequelize = require('sequelize');

class CommentDA extends ModelDA {
    constructor() {
        super();

        this.model = connection.define('comment', {
           
            text: {
                type: Sequelize.TEXT('medium'), 
            },
            date: {
                type: Sequelize.DATE(),
            },
           
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            }
        });

    }
}





const commentDA = new CommentDA()
module.exports = commentDA;