import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Feed from './Feed';
import { useState } from 'react';

export const List = [
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

export default function Category() {
    const [cod_categoria, setCategoria] = useState('Top 10');
    const setCategoriaFilter = cod_categoria => {
        setCategoria(cod_categoria)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listCategory}>
                {
                    List.map(cat => (
                        <TouchableOpacity style={[styles.btnCategory, cod_categoria === cat.cod_categoria && styles.btnCategoryActive]}
                            onPress={() => setCategoriaFilter(cat.nome_categoria)}
                        >
                            <Text style={[styles.btnText, cod_categoria === cat.cod_categoria && styles.btnTextActive]}>
                                ´${cat.nome_categoria}´
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161c3d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listCategory: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    },
    btnCategory: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center',
    },
    btnCategoryActive: {
        backgroundColor: 'red'
    },
    btnText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    btnTextActive: {
        color: 'blue'
    },
});