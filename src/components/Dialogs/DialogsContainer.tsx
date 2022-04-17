
import { AppRootStateType } from '../../redux/redux-store';
import { addMessage, DialogsType, MessageType, updateNewMessageBody } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { ComponentType } from 'react';


type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    dialogs: state.dialogsPage.dialogs,
    message: state.dialogsPage.message,
    newMessageBody: state.dialogsPage.newMessageBody,
})

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, { addMessage, updateNewMessageBody }),
)(Dialogs)



