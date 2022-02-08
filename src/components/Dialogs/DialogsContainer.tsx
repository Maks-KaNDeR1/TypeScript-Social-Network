
import { AppStateType } from '../../redux/redux-store';
import { addMessage, DialogsType, MessageType, updateNewMessageBody } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';


type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
        dialogs: state.dialogsPage.dialogs,
        message: state.dialogsPage.message,
        newMessageBody: state.dialogsPage.newMessageBody
    })

export const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateNewMessageBody
})(Dialogs)


