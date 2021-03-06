var { connection } = require('./DA.js');
var Sequelize = require('sequelize');

class ModelDA {
    constructor() { }


    getAll() {
        return this.model.findAll();
    }

    getOneById(ID) {
        console.log(ID)
        return this.model.findAll({
            where: {
                id: ID
            }
        });
    }

    createNew(dataForModel) {
        console.log(dataForModel)
        return this.model.create(dataForModel);
    }

    edit(dataForModel, toEditId) {
        return this.model.update(dataForModel, { where: { id: toEditId } });
    }

    remove(toRemoveId) {
        return this.model.destroy({ where: { id: toRemoveId } });
    }

}


module.exports = ModelDA;