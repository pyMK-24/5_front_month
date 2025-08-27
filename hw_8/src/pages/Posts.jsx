import { useState } from 'react';
import postsData from '../db/PostsUsers.json';


export const Posts = () => {
    const [posts, setPosts] = useState(postsData);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong> by {post.author}
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
