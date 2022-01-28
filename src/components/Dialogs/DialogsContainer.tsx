
import { connect } from 'react-redux';
import { addMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer';
import { RootStateType } from '../../redux/state';
import Dialogs from './Dialogs';



let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        message: state.dialogsPage.message,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessageHandler: () => {
            dispatch(addMessageAC())
        },
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessageBodyAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


