import ApiError from "../../helpers/ApiError";

class CommentController {
  #models;
  constructor(models) {
    this.#models = models;
  }
}

export default CommentController;
