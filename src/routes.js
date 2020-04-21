import { Router } from 'express';

import OrderController from './app/controllers/OrderController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PromotionController from './app/controllers/PromotionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// Orders routes
routes.post('/orders', OrderController.store);
routes.put('/orders', OrderController.update);
routes.get('/orders', OrderController.index);
routes.delete('/orders/:id', OrderController.remove);

routes.post('/promotions', PromotionController.store);

export default routes;
