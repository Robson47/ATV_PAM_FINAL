import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, TextInput, View } from 'react-native';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CreateUser({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBox}>
                <Image style={styles.login}
                    source={require('../assets/imagens/registration.png')}
                />
            </View>

            {/* TÍTULO DE CADASTRO */}
            <Text style={styles.text}>CADASTRO</Text>

            {/* TEXT INPUT DE EMAIL */}
            <View style={styles.containerTextInput}>
                <Materialicons name='email' size={20} color={'white'} />
                <TextInput style={styles.textInput} placeholderTextColor={'white'} placeholder='EMAIL' keyboardType='email-address' />
            </View>

            {/* TEXT INPUT DE SENHA */}
            <View style={styles.containerTextInput}>
                <Materialicons name='form-textbox-password' size={20} color={'white'} />
                <TextInput style={styles.textInput} placeholderTextColor={'white'} placeholder='SENHA' secureTextEntry={true} />
            </View>

            <View style={styles.containerTextInput}>
                <Materialicons name='form-textbox-password' size={20} color={'white'} />
                <TextInput style={styles.textInput} placeholderTextColor={'white'} placeholder='CONFIRMAR A SENHA' secureTextEntry={true} />
            </View>

            {/* BOTÃO DE LOGIN*/}
            <TouchableOpacity style={styles.btnRegister} onPress={() => {
                navigation.navigate('DrawerMenu');
            }}>
                <Text style={styles.txtRegister}>
                    Login
                </Text>
            </TouchableOpacity>

            <View style={styles.containerLogWith}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Login');
                }}>
                    <Text style={styles.btnLogin}>
                        JÁ TENHO UMA CONTA
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 10,
        paddingTop: 50,
    },
    topBox: {
        alignItems: 'center',
    },
    login: {
        height: 220,
        width: '65%',
    },
    text: {
        fontSize: 28,
        fontWeight: '500',
        color: '#ffffff',
        marginTop: 8,
        marginBottom: 18,
        marginLeft: 15
    },
    containerTextInput: {
        flexDirection: 'row',
        borderBottomColor: '#3e065c',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
        alignItems: 'center',
    },
    textInput: {
        padding: 10,
        color: 'white',
        fontSize: 12
    },
    btnRegister: {
        backgroundColor: '#3e065c',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    txtRegister: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    containerLogWith: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    },
    btnLogin: {
        color: '#50047a',
        fontWeight: '700'
    }
});