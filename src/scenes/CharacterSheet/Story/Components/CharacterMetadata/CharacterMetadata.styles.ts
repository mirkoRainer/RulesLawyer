import { StyleSheet } from "react-native";

const CharacterMetadataStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 5,
    },
    header: {
        padding: 10,
        paddingRight: 10,
    },
    text: {
        padding: 10,
        paddingLeft: 0,
        fontWeight: "normal",
    },
});

export default CharacterMetadataStyles;
