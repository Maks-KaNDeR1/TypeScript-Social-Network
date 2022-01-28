
import { AppStateType } from '../../../redux/redux-store';
import { addPostAC, PostType, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MyPosts from './MyPosts';

type MapDispatchToPropsType = {
    addPostHandler: () => void
    updateNewPostText: (text: string) => void
}

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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

