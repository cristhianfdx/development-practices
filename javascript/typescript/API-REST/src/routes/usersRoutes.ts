import {Request, Response, Router} from 'express';

import User from '../models/user';

class UserRoutes {

    router: Router;    

    constructor(){
        this.router = Router();        
        this.routes();
    }

    public async getUsers(req: Request, res: Response): Promise<void>{
        const posts = await User.find();
        res.json(posts);
    }

    public async getOneUser(req: Request, res: Response): Promise<void>{
        const user = await User.findOne({username: req.params.username})
            .populate('posts');
        res.json(user);
    }

    public async createUser(req: Request, res: Response): Promise<void>{
        const user= new User(req.body);
        await user.save();
        res.json({status: "User created"}); 
    }

    public async updateUser(req: Request, res: Response): Promise<void>{
        //let updateAt = Date.now();
        await User.findOneAndUpdate({username: req.params.username}, req.body);
        res.json({status: "User updated"});
    }

    public async deleteUser(req: Request, res: Response): Promise<void>{
        await User.findOneAndDelete(req.params.username);
        res.json({status: "Post deleted"});
    }

    routes(){
        this.router.route('/')
            .get(this.getUsers)
            .post(this.createUser);
        
        this.router.route('/:username')
            .get(this.getOneUser)
            .put(this.updateUser)
            .delete(this.deleteUser)
    }
}

export default new UserRoutes().router;