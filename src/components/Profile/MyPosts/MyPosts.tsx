import React, { createRef } from 'react';
import state, { addPost } from '../../../redux/state';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


// export type MyPostPropsType = {
//   addPost: (message: string) => void
// }

const MyPosts = (
  // props: MyPostPropsType
  ) => {

  const posts = state.profilePage.posts

  const postElements = posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  )

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  
  const addPostHandler = () => {
    if(newPostElement.current){
      addPost(newPostElement.current.value)
    }
  }

  // React.useEffect(() => {
  //   const text = newPostElement.current
  //   alert(text)
  // })
  
  return (
    <div>
      My posts
      <div>
        <textarea
          ref={newPostElement}
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