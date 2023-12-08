import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Menu() {
    return (
        <SafeAreaView style={styles.container}>
            <View styles={styles.title}>
                <Text style={styles.title}>BEM VINDO AO GAMESUNLOCKED</Text>
            </View>

            <View>
                <Text style={styles.desc}>{'Confira a grande variedade dos mais populares GAMES do momento.\n\nOs melhores jogos a venda do nosso app'}</Text>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '500',
        color: '#ffffff',
        marginTop: 8,
        marginBottom: 28,
        backgroundColor: '#363636',
        borderColor: 'violet',
        borderWidth: 3,
        borderRadius: 10,
        padding: 20,
        marginBottom: 100
    },
    desc: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '500',
        color: '#ffffff',
        marginTop: 8,
        backgroundColor: '#363636',
        borderRadius: 10,
        padding: 20,
    },
});