
export default {
    Query:{
        listBooks:async (parent, args, {Book})=> {
            return (await Book.find());
        }
    },
    Mutation:{
        createBook:async(parent, args, {Book})=>{ 
            return  await Book.create(args);                          
        },
        updateBook: async(parent, args, {Book})=>{
            return await Book.findByIdAndUpdate(args._id, args);
        },
        deleteBook: async(parent, args, {Book})=>{
            return await Book.findByIdAndRemove(args._id);
        }
    }
}