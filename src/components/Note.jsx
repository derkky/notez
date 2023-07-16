import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';

const Note = (props) => {

    const navigation = useNavigation()
    const handlePress = () => {
        navigation.navigate("Input", {title: props.title, content: props.content, id: props.id})
    }

    return (
        <TouchableOpacity style={styles.note} onPress={handlePress }>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <Text>
                {props.content}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    note: {
        margin: 20,
        backgroundColor: "red",
        height: 150,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default Note