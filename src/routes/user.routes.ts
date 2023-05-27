import { Router } from "express";
const router = Router();

import { getUsers, viewCreateUser, createUser, viewEditUser, updateUser, deleteUser } from "../controllers/user.controller";

router.route("/")
.get(getUsers);

router.route('/:action')
.get(viewCreateUser);

router.route('/create')
.post(createUser);

router.route('/edit/:id')
.get(viewEditUser);

router.route('/update')
.post(updateUser);

router.route('/delete/:id')
.get(deleteUser);

export default router;