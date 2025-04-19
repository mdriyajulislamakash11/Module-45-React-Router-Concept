import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData();

    const postsStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
      };
    return (
        <div>
            <h2>Posts: {posts.length}</h2>

            <div style={postsStyle}>
                {
                    posts.map((post) => <Post post={post} key={post.id} />)
                }
            </div>
        </div>
    );
};

export default Posts;