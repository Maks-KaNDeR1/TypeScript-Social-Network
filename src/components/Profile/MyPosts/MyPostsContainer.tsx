
import { AppRootStateType } from '../../../redux/redux-store';
import { addPost, PostType, updateNewPostText } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';


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

