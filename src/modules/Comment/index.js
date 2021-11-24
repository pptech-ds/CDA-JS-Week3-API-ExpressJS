import router from "./router";
import AppointController from "./Controller";
import Comment from "../Comment/model";

const models = { Comment };
const controller = new AppointController(models);
const routes = router(controller);

export default routes;
