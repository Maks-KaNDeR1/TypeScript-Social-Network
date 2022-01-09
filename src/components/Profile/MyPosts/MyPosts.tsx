import React, { ChangeEvent, useState } from 'react';
import store, { addPoastActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import styles from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

  const posts = store._state.profilePage.posts
  const newPostText = store._state.profilePage.newPostText


  const postElements = posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  )


  const addPostHandler = () => {
    store.dispatch(addPoastActionCreator())
    // store.addPost(newPostText)
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    store.dispatch(updateNewPostTextActionCreator(text))
    // store.updateNewPostText(e.currentTarget.value)
  }

  return (
    <div>
      My posts
      <div>
        <textarea
          value={newPostText}
          onChange={onPostChange}
          className={styles.textarea}
        />
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