import React, { ChangeEvent } from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import { PostType } from '../../../redux/profile-reducer';

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  addPostHandler: () => void
  updateNewPostText: (text: string) => void
}

const MyPosts = (props: PropsType) => {

  const postElements = props.posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  )

  const addPost = () => {
    props.addPostHandler()
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.updateNewPostText(text)
  }

  return (
    <div>
      My posts
      <div>
        <textarea
          value={props.newPostText}
          onChange={onPostChange}
          className={styles.textarea}
        />
        <button onClick={addPost}
          className={styles.button}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )

}

export default MyPosts;