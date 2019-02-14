import { StyleSheet, PixelRatio } from 'react-native'

export default styles = StyleSheet.create({
    MainView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ToggleSwitchView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '90%',
        marginVertical: 10
    },
    SwitchMaleFemale: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        // backgroundColor: 'red'
    },
    EmailInput: {
        width: '90%',
        height: 50,
        // backgroundColor:'red',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    PasswordInput: {
        width: '90%',
        height: 50,
        // backgroundColor:'red',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#005aff',
        padding: 20,
        marginVertical: 30,
        borderRadius: 40,
        width: 300,
        alignItems:'center'
    },
    ButtonArea: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        marginVertical: 40
    },
    ButtonView: {
        backgroundColor: '#005AFF',
        padding: 15,
        borderRadius: 50,
        width: '35%',
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonViewDisable: {
        backgroundColor: '#AAAAAA',
        padding: 15,
        borderRadius: 50,
        width: '35%',
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        color: '#FFF'
    },
    ImageView: {
        height: 30,
        width: 30
    },
    DateSelect: {
        width: '90%',
        padding: 10,
        margin: 10,
        // backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderWidth: 1,
    },
    Input: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'gray'
    },
    inputcss: {
        width: '100%',
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ic_Image: {
        height: 20,
        width: 20,
        margin: 10
    },
    ic_PasswordImage: {
        height: 20,
        width: 20,
        margin: 10,
    },
    TopScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'row',
    },
    RightbuttonPress: {
        flex: 1,
        borderColor: "#005AFF",
        backgroundColor: "#005AFF",
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: 30
    },
    Rightbutton: {
        flex: 1,
        borderColor: "#005AFF",
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: 30
    },
    LeftbuttonPress: {
        flex: 1,
        borderColor: "#005AFF",
        backgroundColor: "#005AFF",
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginLeft: 30

    },
    Leftbutton: {
        flex: 1,
        borderColor: "#005AFF",
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginLeft: 30
    },
    welcome: {
        fontSize: PixelRatio.get() <= 2 ? 14 : 20,
        textAlign: "center",
        margin: PixelRatio.get() <= 2 ? 8 : 10,
        color: "#000000"
    },
    welcomePress: {
        fontSize: PixelRatio.get() <= 2 ? 14 : 20,
        textAlign: "center",
        margin: PixelRatio.get() <= 2 ? 8 : 10,
        color: "#ffffff"
    }
});