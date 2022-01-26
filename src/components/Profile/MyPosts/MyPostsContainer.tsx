import MyPosts from './MyPosts';
import React, { ChangeEvent } from 'react';
import { updateNewMessageBodyAC } from '../../../redux/dialogs-reducer';
import { addPostAC, profileReducerType } from '../../../redux/profile-reducer';
import store from '../../../redux/redux-store';


type PropsType = {
    profilePage: profileReducerType
}

const MyPostsContainer = (props: PropsType) => {

    const posts = props.profilePage.posts
    const newPostText = props.profilePage.newPostText

    const addPostHandler = () => {
        store.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        store.dispatch(updateNewMessageBodyAC(text))
    }

    return <MyPosts posts={posts}
        newPostText={newPostText}
        addPostHandler={addPostHandler}
        updateNewPostText={onPostChange} />

}

export default MyPostsContainer;