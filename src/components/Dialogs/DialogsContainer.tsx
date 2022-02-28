
import { AppStateType } from '../../redux/redux-store';
import { addMessage, DialogsType, MessageType, updateNewMessageBody } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';


type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
    isAuth: boolean
}

let mapStateToProps = (state: any): MapStateToPropsType => ({
    dialogs: state.dialogsPage.dialogs,
    message: state.dialogsPage.message,
    newMessageBody: state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuth
})


export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, {
    addMessage,
    updateNewMessageBody
})(Dialogs))


