import MyPosts from './MyPosts';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import {  RootStateType } from '../../../redux/state';
import { connect } from 'react-redux';



let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPostHandler: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

