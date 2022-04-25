import React, { ChangeEvent } from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import { PostType } from '../../../redux/profile-reducer';
import SuperButton from '../ProfileInfo/SuperButton/SuperButton';

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  addPost: () => void
  updateNewPostText: (text: string) => void
}

const MyPosts = React.memo((props: PropsType) => {

  const postElements = props.posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  )

  const addPost = () => {
    props.addPost()
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
      </div>
        <button onClick={addPost}
          className={styles.button}>Add post</button>
                       
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )

})

export default MyPosts;