import Order from '../models/Order';

class OrderController {
  async store(req, res) {
    const order = await Order.create({
      title: req.body.title,
      text: req.body.text,
      date: new Date(),
    });
    return res.status(200).json(order);
  }

  async update(req, res) {
    const order = await Order.update({
      read: req.body.read,
    }, {
      where: {
        id: req.body.id,
      },
    });

    return res.status(200).json(order);
  }

  async index(req, res) {
    const orders = await Order.findAll();
    return res.status(200).json(orders);
  }

  async remove(req, res) {
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200);
  }
}

export default new OrderController();
