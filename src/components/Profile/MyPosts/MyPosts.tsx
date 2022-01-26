import React, { ChangeEvent } from 'react';
import { PostType } from '../../../redux/profile-reducer';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  addPostHandler: () => void
  updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const MyPosts = (props: PropsType) => {

  const postElements = props.posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  )

  return (
    <div>
      My posts
      <div>
        <textarea
          value={props.newPostText}
          onChange={props.updateNewPostText}
          className={styles.textarea}
        />
        <button onClick={props.addPostHandler}
          className={styles.button}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )

}

export default MyPosts;