import { Request, Response } from "express";
import { connect } from "../database";
import { User } from "../interface/User";

export async function getUsers(req: Request, res: Response){
    const conn = await connect();
    const users = await conn.query("SELECT * FROM users");
    return res.render("user/index", {data: users[0]});
}