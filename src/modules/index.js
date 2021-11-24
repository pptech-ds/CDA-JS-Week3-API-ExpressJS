import UserRouter from "./User";
import CommentRouter from "./Comment";

const routes = {
  "/users": UserRouter,
  "/comments": CommentRouter,
};

export default routes;
