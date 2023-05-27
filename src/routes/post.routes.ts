import { Router } from "express";
const router = Router();

import { getPosts, createPost, getPost, deletePost, viewCreatePost, viewEditPost, editPost } from "../controllers/post.controller";

router.route("/")
.get(getPosts)

router.route("/:action")
.get(viewCreatePost)

router.route("/create")
// .get(viewCreatePost)
.post(createPost)

router.route("/edit/:id")
.get(viewEditPost)

router.route("/update")
.post(editPost)

router.route("/delete/:id")
.get(deletePost)

export default router;