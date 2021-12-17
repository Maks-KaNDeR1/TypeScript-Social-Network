import React, { useState } from 'react';
import styles from './Post.module.css';

type PostPropsType = {
  message: string
  likesCount: number
}

const buttonStyle = {
  border: 'none',
  outline: 'none',
  cursor: "pointer",
  font: "inherit"
}


const Post = (props: PostPropsType) => {

  const [like, setLike] = useState(0)

  const handleClick = () => {
    if (like === 0) {
      setLike(like + 1)
    } else {
      setLike(like - 1)
    }
    console.log(like)
  }

  return (
    <div className={styles.item}>
      <img src='https://i.pinimg.com/600x315/63/e4/e2/63e4e23fffdb56ee09a20ff630eef6ea.jpg' alt='Ava' />
      {props.message}
      <div>
        <span> like
          <button style={buttonStyle}
            onClick={handleClick}
          >
            {like ? "💙" : "🤍"}
          </button>
        </span> {like}
      </div>
    </div>
  )
}

export default Post;