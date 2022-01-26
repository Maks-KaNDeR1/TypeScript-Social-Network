import MyPosts from './MyPosts';
import React, { ChangeEvent } from 'react';
import { updateNewMessageBodyAC } from '../../../redux/dialogs-reducer';
import { addPostAC } from '../../../redux/profile-reducer';
import store from '../../../redux/redux-store';
import { DispatchType, RootStateType } from '../../../redux/state';
import { connect } from 'react-redux';




let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPostHandler: () => {
            store.dispatch(addPostAC())
        },
        onPostChange: (text: string) => {
            store.dispatch(updateNewMessageBodyAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;