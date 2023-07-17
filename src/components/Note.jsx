import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useSelector} from "react-redux"
import {useEffect} from "react"

const Note = (props) => {
    const categoryColors = useSelector(state => state.categories.value)
    const noteColor = categoryColors.filter(cat => cat.category == props.category)[0].color

    const navigation = useNavigation()
    const handlePress = () => {
        navigation.navigate("Input", {title: props.title, content: props.content, id: props.id, category: props.category})
    }

    var dateFormatted = new Date(props.date)
    dateFormatted = dateFormatted.toString().substring(4, 10)

    return (
        <TouchableOpacity style={{...styles.note, backgroundColor: noteColor}} onPress={handlePress }>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.subtitle}>
                    {dateFormatted}
                </Text>
            </View>
            <Text style={styles.subtitle}>
                {props.category}
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
        height: 150,
        padding: 20
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 13
    }
});

export default Note