import { Request, Response } from "express";
import { connect } from "../database";
import { Post } from "../interface/Post";

export async function getPosts(req: Request, res: Response){
    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts")
    return res.render("posts", {data: posts[0], action: null})
}

export async function getPost(req: Request, res: Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts WHERE id = ?", [id]);
    return res.json(posts[0]);
}

export async function viewCreatePost(req: Request, res: Response){
    const action = req.params.action;
    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts")
    return res.render("posts", {data: posts[0], action})
    // res.render("formCreatePost");
}

export async function createPost(req: Request, res: Response){
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query("INSERT INTO posts SET ?", [newPost]);
    return res.redirect("/posts")
}

export async function viewEditPost(req: Request, res: Response){
    
    const id = req.params.id;
    // const action = req.params.action;
    const conn = await connect();
    const result = await conn.query("SELECT * FROM posts WHERE id = ?", [id]);
    
    res.render("posts", {data: result[0], action: "edit"});
}

export async function editPost(req: Request, res: Response){
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const image_url = req.body.image_url;

    const updatePost: Post = req.body;
    const conn = await connect();
    await conn.query("UPDATE posts SET ? WHERE id = ?", [updatePost ,id]);
    return res.redirect("/posts")
}



export async function deletePost(req: Request, res: Response){
    const id = req.params.id;
    
    const conn = await connect();
    await conn.query("DELETE FROM posts WHERE id = ?", [id]);
    return res.redirect("/posts");
}