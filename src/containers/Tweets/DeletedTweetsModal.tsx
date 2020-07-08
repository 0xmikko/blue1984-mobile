import React from "react";
import {Alert} from "react-native";
import {Dispatch} from "redux";
import actions from '../../store/actions'

export const showDeletedFilterModal = (dispatch: Dispatch) => {
    Alert.alert(
        'Tweets filter',
        "",

        [
            {
                text: 'Show all messages',
                onPress: () => dispatch(actions.profile.setShowDeletedMessagesFilter(false)),
            },
            {
                text: 'Show deleted messages only',
                onPress: () => dispatch(actions.profile.setShowDeletedMessagesFilter(true)),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
        ],
        { cancelable: false }
    );
}
