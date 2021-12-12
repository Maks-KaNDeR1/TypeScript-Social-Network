import React from 'react';
import styles from './Post.module.css';

type PostPropsType ={
    message: string
    likesCount: string
}


const Post = (props: PostPropsType) => {
  return (
    <div className={styles.item}>
      <img src='https://vk.com/maks_kander?z=photo320683598_457250237%2Fphotos320683598' />
        {props.message}
        <div>
        <span>like 🤍</span> {props.likesCount}

      </div>
    </div>
  )

}

export default Post;