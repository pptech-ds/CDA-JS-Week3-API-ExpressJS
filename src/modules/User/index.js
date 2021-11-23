import router from './router';
import UserController from './Controller';

const models = {};
const controller = new UserController(models);
const routes = router(controller);


export default routes;

