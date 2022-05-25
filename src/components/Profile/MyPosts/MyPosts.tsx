import React, { ChangeEvent, KeyboardEvent } from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import { PostType } from '../../../redux/profile-reducer';

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


  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.charCode === 13) {
      addPost();
    }
  }

  return (
    <div>
      <hr />
      <h3>My posts</h3>
      <hr />
      <div>
        <textarea
          placeholder='New Post...'
          value={props.newPostText}
          onChange={onPostChange}
          className={styles.textarea}
          onKeyPress={onKeyPressHandler}
        />
      </div>
      <button onClick={addPost}
        className={styles.button}>Public</button>

      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )

})

export default MyPosts;