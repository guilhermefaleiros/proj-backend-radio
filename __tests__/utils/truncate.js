import User from '../../src/app/models/User';
import Promotion from '../../src/app/models/Promotion';
import Order from '../../src/app/models/Order';

const models = [User, Promotion, Order];

module.exports = function truncate() {
  return Promise.all(
    Object.keys(models).map((key) => models[key].destroy({ truncate: true, force: true })),
  );
};
