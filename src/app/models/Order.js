import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      text: Sequelize.STRING,
      date: Sequelize.DATE,
      read: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });

    return this;
  }
}

export default Order;
