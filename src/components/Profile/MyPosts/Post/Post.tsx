import React from 'react';
import styles from './Post.module.css';

type PostPropsType ={
    message: string
    likesCount: string
}


const Post = (props: PostPropsType) => {
  return (
    <div className={styles.item}>
      <img src='https://i.pinimg.com/600x315/63/e4/e2/63e4e23fffdb56ee09a20ff630eef6ea.jpg' />
        {props.message}
        <div>
        <span>like 🤍</span> {props.likesCount}

      </div>
    </div>
  )

}

export default Post;