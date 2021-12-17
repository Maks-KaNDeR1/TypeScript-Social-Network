import React from 'react';
import state from '../../../redux/state';
import styles from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

  let posts = state.profilePage.posts

  let postElements = posts.map(p =>
    <Post message={p.message} likesCount={p.likesCount} />
  )

  const handleclick = () => {
    alert('Eee')
  }

  return (
    <div>
      My posts
      <div>
        <textarea className={styles.textarea}>vizityor</textarea>
        <button onClick={handleclick}
          className={styles.button}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )

}

export default MyPosts;