import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

type PostType = {
  id: number
  message: string
  likesCount: string
}

let postData = [
  { id: 1, message: "Hi, Yo", likesCount: '23' },
  { id: 2, message: "I'm in to IT", likesCount: '12' }
] as Array<PostType>

let postElements = postData.map(post =>
  <Post message={post.message} likesCount={post.likesCount} />
)


const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea className={styles.textarea}>vizityor</textarea>
        <button className={styles.button}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )

}

export default MyPosts;