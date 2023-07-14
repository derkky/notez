import { View, Text, StyleSheet } from "react-native"

const Note = (props) => {
    return (
        <View style={styles.note}>
            <Text style={styles.title}>
                This is a note
            </Text>
            <Text>
                Lorem ipsum
            </Text>
        </View>
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