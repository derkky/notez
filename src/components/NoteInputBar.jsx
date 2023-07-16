import { Appbar, Menu } from "react-native-paper"
import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {upsertNote} from "../store/noteSlice"

const NoteInputBar = (props) => {
    const dispatch = useDispatch()
    const noteInput = useSelector(state => state.noteInput.value)

    const handleDone = () => {
        dispatch(upsertNote({title: noteInput.title, content: noteInput.content, id: noteInput.id}))
        props.navigation.goBack()
    }

    return (
      <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {props.navigation.goBack()}} />
        <Appbar.Content title="NOTEZ" />
        <Appbar.Action icon="check" onPress={handleDone}/>
      </Appbar.Header>
      </>
    )
}

export default NoteInputBar