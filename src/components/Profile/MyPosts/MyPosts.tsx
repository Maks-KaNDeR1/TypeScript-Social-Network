import React, { ChangeEvent, createRef, MouseEvent, MouseEventHandler, useState } from 'react';
import store from '../../../redux/state';
import styles from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

  const posts = store._state.profilePage.posts
  const newPostText = store._state.profilePage.newPostText


  const postElements = posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  )


  let [newPostBody, setNewPostBody] = useState('')


  const addPostHandler = () => {
    // store.addPost(e.currentTarget.value)
    store.addPost(newPostBody)
    setNewPostBody('')
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // store.updateNewPostText(e.currentTarget.value)
    setNewPostBody(e.currentTarget.value)
  }

  return (
    <div>
      My posts
      <div>
        <textarea
          // value={newPostText}
          value={newPostBody}
          onChange={onPostChange}
          className={styles.textarea}
        ></textarea>
        <button onClick={addPostHandler}
          className={styles.button}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )

}

export default MyPosts;