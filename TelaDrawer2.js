import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function FeedBook() {
    return (
        <View style={styles.container}>
            <Text>TELA 2</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161c3d',
        alignItems: 'center',
        justifyContent: 'center',
    },
});