import User from './models/User';


export const resolvers = {
    Query:{
        async getUsers(){
            const users = await User.find()
            return users;
        },
        async getOneUser(_, {user_id}){
            const user = await User.findById(user_id)
            return user;
        }
    },
    Mutation: {
        async createUser(_, {input}){
            const user = new User(input);
            await user.save()
            return {status: true, message: "User saved succesfully"};
        },
        async updateUser(_, {input, user_id}){
            await User.findByIdAndUpdate(user_id, input);
            return {status: true, message: "User updated succesfully"};
        },
        async deleteUser(_, {user_id}){
            await User.findByIdAndDelete(user_id)
            return {status: true, message: "User removed succesfully"};
        }
    }
};