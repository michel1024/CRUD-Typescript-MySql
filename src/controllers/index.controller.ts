import { Request, Response } from "express";

export function index(req: Request, res: Response){
    const title = "Welcome to my APP desde PUG";
    return res.render("index", {title: title})
}