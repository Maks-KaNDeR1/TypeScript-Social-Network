
import { AppStateType } from '../../redux/redux-store';
import { addMessageAC, DialogsType, MessageType, updateNewMessageBodyAC } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Dialogs from './Dialogs';


type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
}

type MapDispatchToPropsType = {
    addMessageHandler: () => void
    updateNewMessage: (text: string) => void
}

// export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        message: state.dialogsPage.message,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessageHandler: () => {
            dispatch(addMessageAC())
        },
        updateNewMessage: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


