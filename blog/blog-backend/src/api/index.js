import Router from 'koa-router';
import posts from './posts';
import auth from './auth';

const api = Router();

api.use('./posts', posts.routes());
api.use('./auth', auth.routes());

export default api;
