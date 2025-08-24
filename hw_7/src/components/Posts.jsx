import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Posts  = () => {
    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        try {
            const { data } = await axios.get('https://dummyjson.com/posts');
            setPosts(data.posts); 
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <p>{post.title}</p> 
                    <p>{post.body}</p> 
                </div>
            ))}
        </div>
    );
}