import { Image, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import Produtos from '../ListData';
// COMPONENTE DE ITEM DE RENDERIZAÇÃO
const Item = ({ item }) => {
    return (
        <View style={styles.item_container}>
            <Image
                style={styles.item_image}
                source={item.imagem_item}
            />
            <View style={styles.item_text_container}>
                <Text style={styles.item_data}>{item.titulo_item}</Text>
                <Text style={styles.item_author}>{item.autor}</Text>
                <Text style={styles.item_data}>{item.preco_item}</Text>
                <Text style={styles.item_data}>{item.nome_categoria}</Text>
                <TouchableOpacity style={styles.item_button_details}><Text style={styles.item_button_text}>Detalhes</Text></TouchableOpacity>

            </View>
        </View>

    );
};

export default function Feed() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Produtos}
                renderItem={Item}
                ListEmptyComponent={<Text>A LISTA DE LIVROS ESTÁ VAZIA...</Text>}
                keyExtractor={list => list.codigo_item}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchArea:{
        flexDirection: 'row',
        alignContent: 'center'
    },
    searchInput:{
        flex: 1,
        height: 50,
        backgroundColor: '#363636',
        margin: 30,
        borderRadius: 5,
        fontSize: 19,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#ffffff'
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_title: {
        color: '#333',
        fontSize: 25,
        fontWeight: 'bold',
    },
    icone: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    book_list_header: {
        height: 100,
    },
    item_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#1c1b1c',
    },
    item_image: {
        width: 150,
        height: 220,
        marginRight: 10,
        marginBottom: 10,
    },
    item_text_container: {
        width: 200,
        justifyContent: 'center',
    },
    item_data: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
        textAlign: 'left',
    },
    item_author: {
        fontSize: 14,
        fontWeight: '400',
        width: '100%',
        textAlign: 'left',
        color: '#CCC',
        marginBottom: 10,
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