import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture)
        return await Post.create({...post, picture: fileName});
    }

    async getAll() {
        const post = await Post.find();
        return post;
    };

    async getOne(id) {
        if (!id) {
            throw new Error('Invalid id');
        }
        const post = Post.findById(id);
        return post;


    };

    async update(post) {
        if (!post._id) {
            throw new Error('Invalid id');
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    };

    async delete(id) {
        if (!id) {
            throw new Error('Invalid id');
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    };
}

export default new PostService();