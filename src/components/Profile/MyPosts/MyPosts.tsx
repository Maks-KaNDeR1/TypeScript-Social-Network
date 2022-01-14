import React, { ChangeEvent } from 'react';
import store, { ADD_POST, PostType, ProfilePageType, UPDATE_NEW_POST_TEXT } from '../../../redux/state';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

type PropsType = {
  profilePage: ProfilePageType
}

const MyPosts = (props: PropsType) => {

  const posts = props.profilePage.posts
  const newPostText = props.profilePage.newPostText


  const postElements = posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  )


  const addPostHandler = () => {
    store.dispatch({ type: ADD_POST, PostText: newPostText })
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    store.dispatch({ type: UPDATE_NEW_POST_TEXT, newText: text  })
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