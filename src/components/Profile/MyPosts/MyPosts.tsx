import React, { ChangeEvent, KeyboardEvent } from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { PostType } from '../state/profile-reducer';

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  addPost: () => void
  updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<PropsType> = React.memo(({ posts, newPostText, addPost, updateNewPostText }) => {

  const postElements = posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  )

  const onClickHandler = () => {
    addPost()
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    updateNewPostText(text)
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
          value={newPostText}
          onChange={onPostChange}
          className={s.textarea}
          onKeyPress={onKeyPressHandler}
        />
      </div>
      <button
        className={s.button}
        onClick={onClickHandler}
      >
        Public
      </button>

      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )

})

export default MyPosts;