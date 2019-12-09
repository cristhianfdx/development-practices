import {Request, Response, Router} from 'express';

import Post from '../models/post';

class PostRoutes {

    router: Router;    

    constructor(){
        this.router = Router();        
        this.routes();
    }

    public async getPosts(req: Request, res: Response): Promise<void>{
        const posts = await Post.find();
        res.json(posts);
    }

    public async getOnePost(req: Request, res: Response): Promise<void>{
        const post = await Post.findOne({url: req.params.url});
        res.json(post);
    }

    public async createPost(req: Request, res: Response): Promise<void>{
        const {title, url, content, image} = req.body;
        const post = new Post({title, url, content, image});
        await post.save();
        res.json({status: "Post created"}); 
    }

    public async updatePost(req: Request, res: Response): Promise<void>{
        const {title, url, content, image} = req.body;
        let updateAt = Date.now();
        await Post.findOneAndUpdate({url: req.params.url}, {title, url, content, image, updateAt});
        res.json({status: "Post updated"});
    }

    public async deletePost(req: Request, res: Response): Promise<void>{
        await Post.findOneAndDelete(req.params.url);
        res.json({status: "Post deleted"});
    }

    routes(){
        this.router.route('/')
            .get(this.getPosts)
            .post(this.createPost);
        
        this.router.route('/:url')
            .get(this.getOnePost)
            .put(this.updatePost)
            .delete(this.deletePost)
    }
}

export default new PostRoutes().router;