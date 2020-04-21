import Sequelize, { Model } from 'sequelize';

class Promotion extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      ended: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });

    return this;
  }
}

export default Promotion;
