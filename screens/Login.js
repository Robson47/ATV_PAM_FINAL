import { Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, TextInput, View } from 'react-native';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';

export default function Login({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={styles.container} />
            <View style={styles.topBox}>
                <Image style={styles.login}
                    source={require('../assets/imagens/login_small.png')}
                />
            </View>
            {/* TÍTULO DE LOGIN */}
            <Text style={styles.text}>LOGIN</Text>

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

            {/* BOTÃO DE LOGIN*/}
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}
                    onPress={() => {
                        navigation.navigate('DrawerMenu')
                    }}>
                    Login
                </Text>
            </TouchableOpacity>

            {/* LOGIN ALTERNATIVO (REDES SOCIAIS) */}
            <Text style={styles.logWith}>
                Logar com...
            </Text>

            <View style={styles.containerLogWith}>
                <TouchableOpacity style={styles.btnLogWith}>
                    <Image
                        source={require('../assets/imagens/facebook.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnLogWith}>
                    <Image
                        source={require('../assets/imagens/google.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.containerLogWith}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('CreateUser')
                }}>
                    <Text style={styles.btnRegister}>
                        CRIAR CONTA
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
        width: '70%',
    },
    text: {
        fontSize: 28,
        fontWeight: '500',
        color: '#ffffff',
        marginTop: 8,
        marginBottom: 28,
        marginLeft: 15
    },
    containerTextInput: {
        flexDirection: 'row',
        borderBottomColor: '#540214',
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
    btnLogin: {
        backgroundColor: '#540214',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    txtLogin: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    logWith: {
        textAlign: 'center',
        color: '#aebfcf',
        marginBottom: 15
    },
    containerLogWith: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    },
    btnLogWith: {
        backgroundColor: '#540214',
        borderBlockColor: '#b5042a',
        borderBlockEndColor: '#b5042a',
        borderBlockStartColor: '#b5042a',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10
    },
    btnRegister: {
        color: '#db0231',
        fontWeight: '700'
    }
});