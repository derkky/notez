import {TextInput} from "react-native-paper"
import {ScrollView, StyleSheet} from "react-native"
import {Picker} from '@react-native-picker/picker';
import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"

import {editTitle, editContent, editCategory, loadNote} from "../store/noteInputSlice"


const NoteInputScreen = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (props.route.params){
            dispatch(loadNote(props.route.params))
        }

        return () => dispatch(loadNote({title: "", content: "", category: ""}))

    }, [props.route.params])

    const title = useSelector(state => state.noteInput.value.title)
    const content = useSelector(state => state.noteInput.value.content)
    const category = useSelector(state => state.noteInput.value.category)

    const categories = useSelector(state => state.categories.value)


    return (
        <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
            <TextInput
                label="Title"
                value={title}
                onChangeText={(text) => dispatch(editTitle(text))}
            />
            <Picker
                selectedValue={category}
                onValueChange={(itemValue, itemPosition) => {
                    dispatch(editCategory(itemValue))
                }}
                mode="dropdown"
            >
                <Picker.Item label="Select category" enabled={false}/>
                {categories.map(cat => <Picker.Item label={cat.category} value={cat.category} key={cat.category}/>)}
            </Picker>
            <TextInput
                label="Content"
                value={content}
                multiline={true}
                style={styles.contentInput}
                onChangeText={(text) => dispatch(editContent(text))}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    contentInput: {
       flex: 1
    }
})

export default NoteInputScreen