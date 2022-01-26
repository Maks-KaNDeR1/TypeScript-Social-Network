import MyPosts from './MyPosts';
import { updateNewMessageBodyAC } from '../../../redux/dialogs-reducer';
import { addPostAC } from '../../../redux/profile-reducer';
import store from '../../../redux/redux-store';
import { RootStateType } from '../../../redux/state';
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
            store.dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewMessageBodyAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

