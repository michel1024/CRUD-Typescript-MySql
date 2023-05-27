import { Request, Response } from "express";
import { connect } from "../database";
import { User } from "../interface/User";

export async function getUsers(req: Request, res: Response){
    const conn = await connect();
    const users = await conn.query("SELECT * FROM users");
    return res.render("user/index", {data: users[0], action: null});
}

export async function viewCreateUser(req: Request, res: Response){
    let action = req.params.action;
    const conn = await connect();
    const users = await conn.query("SELECT * FROM users");
    return res.render("user/index", {data: users[0], action});
}

export async function createUser(req: Request, res: Response){
    const newUser: User = req.body;
    const conn = await connect();
    const user = await conn.query("INSERT INTO users SET ?", [newUser]);
    
    return res.redirect("/users");
}

export async function viewEditUser(req: Request, res: Response){
    const id = req.params.id;
    // const action = req.params.action;
    
    const conn = await connect();
    const user = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
    return res.render("user/index", {data: user[0], action: "edit"});
    
}

export async function updateUser(req: Request, res: Response){
    const id = req.body.id;
    const userData: User = req.body;
    const conn = await connect();
    const userUpdate = await conn.query("UPDATE users SET ? WHERE id = ?", [userData, id]);
    
    return res.redirect("/users");
}

export async function deleteUser(req: Request, res: Response){
    const id = req.params.id;

    const conn = await connect();
    await conn.query("DELETE FROM users WHERE id = ?", [id]);
    return res.redirect("/users");
}