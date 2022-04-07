import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#29B363',
    },
    headerContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor: '#29B363',
    },
    title: {
        color: "white",
        // marginVertical: 20,
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center",
    },
    subTitle: {
        color: "white",
        fontSize: 14,
        textAlign: "center",
    },
    footer: {
        backgroundColor: 'white',
        flexDirection: "row",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonFunny: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: "#2C7EDB",
        width: 140,
        textAlign: "center",
        color: "white",
        // borderColor: "black",
    },
    buttonNotFunny: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: "#29B363",
        width: 140,
        textAlign: "center",
        color: "white",
        // borderColor: "black",
    },
    contentContainer: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    defaultText: {
        color: "#000",
        fontSize: 14
    }
});