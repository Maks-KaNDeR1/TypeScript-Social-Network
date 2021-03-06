import React, { useState } from 'react';
import s from './Post.module.css';

type PropsType = {
  message: string
  likesCount: number
}


const Post = (props: PropsType) => {

  const [likes, setLikes] = useState(props.likesCount)
  const [likeIt, setLikeIt] = useState(false)


  const handleClick = () => {
    if (!likeIt) {
      setLikes(likes + 1)
      setLikeIt(true)
    } else {
      setLikes(likes - 1)
      setLikeIt(false)
    }
    console.log(likes)
  }

  return (
    <div className={s.item}>
      <img src='https://i.pinimg.com/600x315/63/e4/e2/63e4e23fffdb56ee09a20ff630eef6ea.jpg' alt='Ava' />
      {props.message}
      <div>
        <span>
          <button
            onClick={handleClick}
          >
            {likeIt ? "💙" : "🤍"}
          </button>
        </span> {likes} likes
      </div>
    </div>
  )
}

export default Post;