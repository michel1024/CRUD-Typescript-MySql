import express, { Application } from "express";
import morgan from "morgan";
import IndexRoutes from "./routes/index.routes";
import PostRoutes from "./routes/post.routes";
import UserRoutes from "./routes/user.routes";
import path from "path";

    

export class App{

    app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', process.env.PORT || this.port || 3000)
        this.app.set("view engine", "ejs");
        this.app.set("views", path.join(__dirname, "views"));
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use('/static', express.static(path.join(__dirname, 'public')))
        // this.app.use(express.static("public"));
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use("/posts", PostRoutes);
        this.app.use("/users", UserRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log(`Server on port `,3000);
    }
}