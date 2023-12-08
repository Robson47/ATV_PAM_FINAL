import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export const Categorias = [
    {
        cod_categoria: 1,
        nome_categoria: 'Esporte',
        obs_categoria: 'Os melhores jogos de esporte do GamesUnlocked!'
    },
    {
        cod_categoria: 2,
        nome_categoria: 'Terror',
        obs_categoria: 'Os melhores jogos de terror do GamesUnlocked!'
    },
    {
        cod_categoria: 3,
        nome_categoria: 'Aventura',
        obs_categoria: 'Os melhores jogos de aventura do GamesUnlocked!'
    },
    {
        cod_categoria: 4,
        nome_categoria: 'Guerra',
        obs_categoria: 'Os melhores jogos de guerra do GamesUnlocked!'
    },
    {
        cod_categoria: 5,
        nome_categoria: 'Corrida',
        obs_categoria: 'Os melhores jogos de corrida do GamesUnlocked!'
    },
    {
        cod_categoria: 6,
        nome_categoria: 'Luta',
        obs_categoria: 'Os melhores jogos de luta do GamesUnlocked!'
    },
    {
        cod_categoria: 7,
        nome_categoria: 'Tiro',
        obs_categoria: 'Os melhores jogos de tiro do GamesUnlocked!'
    },
    {
        cod_categoria: 8,
        nome_categoria: 'Música',
        obs_categoria: 'Os melhores jogos de música do GamesUnlocked!'
    },
]

const Item = ({ item }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.item_container}>
                <View style={styles.item_text_container}>
                    <Text style={styles.item_title}>{item.nome_categoria}</Text>
                    <Text style={styles.item_data}>{item.obs_categoria}</Text>
                    <TouchableOpacity style={styles.item_button_details}><Text style={styles.item_button_text}>Detalhes</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default function Category() {
    return (
            <FlatList
                data={Categorias}
                renderItem={Item}
                ListEmptyComponent={<Text>A LISTA DE LIVROS ESTÁ VAZIA...</Text>}
                keyExtractor={Categorias => Categorias.cod_categoria}
            />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item_container: {
        flex: 1,
        width: 400,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#1c1b1c',
    },
    item_text_container: {
        paddingLeft: 50,
        width: 300,
        justifyContent: 'center',
    },
    item_data: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
        textAlign: 'left',
    },
    item_title: {
        color: 'white',
        fontSize: 45,
        fontWeight: '600',
        width: '100%',
    },
    item_button_details: {
        alignItems: 'center',
        backgroundColor: '#8c00ff',
        padding: 10,
        borderRadius: 5,
        marginTop: 90,
        width: '100%',
    },
    item_button_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});