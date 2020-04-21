import Promotion from '../models/Promotion';

class PromotionController {
  async store(req, res) {
    const promotion = await Promotion.create({
      title: req.body.title,
      description: req.body.description,
      ended: false,
    });
    return res.status(200).json(promotion);
  }
}

export default new PromotionController();
