import { AppRootStateType } from '../../../redux/redux-store';
import { addPost, updateNewPostText } from '../state/actions';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { PostType } from '../state/profile-reducer';


type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})


export const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(MyPosts)

