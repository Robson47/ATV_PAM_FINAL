import { Image, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const produtos = [
    {
        codigo_item: 1,
        titulo_item: "Assasin's Creed Revelations",
        autor: 'Ubisoft',
        preco_item: '79,00',
        imagem_item: require('../assets/imagens/capas/acrevelations-show.jpg'),
    },
    {
        codigo_item: 2,
        titulo_item: 'Bomba Patch Titan',
        autor: 'Allan Jefferson',
        preco_item: '29,99',
        imagem_item: require('../assets/imagens/capas/Bomba_Patch_Titan-V2-show.jpg'),
    },
    {
        codigo_item: 3,
        titulo_item: 'Bomba Patch 13',
        autor: 'Allan Jefferson',
        preco_item: '29,99',
        imagem_item: require('../assets/imagens/capas/bomba13-show.jpg'),
    },
    {
        codigo_item: 4,
        titulo_item: 'Black',
        autor: 'Eletronic Arts',
        preco_item: '39,99',
        imagem_item: require('../assets/imagens/capas/Black-show.jpg'),
    },
    {
        codigo_item: 5,
        titulo_item: 'Bully',
        autor: 'Rockstar Games',
        preco_item: '29,99',
        imagem_item: require('../assets/imagens/capas/Bully-show.jpg'),
    },
    {
        codigo_item: 6,
        titulo_item: 'Ben 10 Protector of Earth',
        autor: 'High Voltage Software\n1st Playable Productions',
        preco_item: '29,90',
        imagem_item: require('../assets/imagens/capas/ben10-show.jpg'),
    },
    {
        codigo_item: 7,
        titulo_item: 'Ben 10 Vilgax Attacks',
        autor: 'Papaya Studio\n1st Playable Productions',
        preco_item: '39,90',
        imagem_item: require('../assets/imagens/capas/ben10vilgax-show.jpg'),
    },
    {
        codigo_item: 8,
        titulo_item: 'Bomba Patch 5.1',
        autor: 'Allan Jefferson',
        preco_item: '29,90',
        imagem_item: require('../assets/imagens/capas/bombapatch5.1-show.jpg'),
    },
    {
        codigo_item: 9,
        titulo_item: 'Bomba Patch 5',
        autor: 'Allan Jefferson',
        preco_item: '29,90',
        imagem_item: require('../assets/imagens/capas/bombapatch5-show.jpg'),
    },
    {
        codigo_item: 10,
        titulo_item: 'Bomba Patch 8.4',
        autor: 'Allan Jefferson',
        preco_item: '29,90',
        imagem_item: require('../assets/imagens/capas/bombapatch8.4-show.jpg'),
    },
    {
        codigo_item: 11,
        titulo_item: 'Brazukas Brasileirão 2008',
        autor: 'Allan Jefferson',
        preco_item: '29,99',
        imagem_item: require('../assets/imagens/capas/Brazukas_Brasileirão_2008-show.jpg'),
    },
    {
        codigo_item: 12,
        titulo_item: 'Burnout 3',
        autor: 'Criterion Games',
        preco_item: '39,99',
        imagem_item: require('../assets/imagens/capas/Burnout_3-show.jpg'),
    },
    {
        codigo_item: 13,
        titulo_item: 'Call Of Duty 2 Big Red One',
        autor: 'Activison',
        preco_item: '35,99',
        imagem_item: require('../assets/imagens/capas/cod2-show.jpg'),
    },
    {
        codigo_item: 14,
        titulo_item: 'Call of Duty 3',
        autor: 'Activision',
        preco_item: '35,99',
        imagem_item: require('../assets/imagens/capas/cod3-show.jpg'),
    },
    {
        codigo_item: 15,
        titulo_item: 'Call of Duty 4 Modern Warfare',
        autor: 'Activision',
        preco_item: '35,99',
        imagem_item: require('../assets/imagens/capas/cod4-show.jpg'),
    },
    {
        codigo_item: 16,
        titulo_item: 'Call of Duty Black Ops 2',
        autor: 'Activision',
        preco_item: '56,50',
        imagem_item: require('../assets/imagens/capas/codbo2-show.jpg'),
    },
    {
        codigo_item: 17,
        titulo_item: 'Call of Duty World at War',
        autor: 'Activision',
        preco_item: '35,99',
        imagem_item: require('../assets/imagens/capas/codwat-show.jpg'),
    },
    {
        codigo_item: 18,
        titulo_item: 'Crash Nitro Kart',
        autor: 'Vicarious Visions\nKAOLink\nDriver-Inter, Ltd.',
        preco_item: '20,99',
        imagem_item: require('../assets/imagens/capas/crashkart-show.jpg'),
    },
    {
        codigo_item: 19,
        titulo_item: 'Crysis',
        autor: 'Crytek\nEletronic Arts',
        preco_item: '25,99',
        imagem_item: require('../assets/imagens/capas/crysis-show.jpg'),
    },
    {
        codigo_item: 20,
        titulo_item: 'Dead Rising 2',
        autor: 'Capcom',
        preco_item: '36,99',
        imagem_item: require('../assets/imagens/capas/deadrising2-show.jpg'),
    },
    {
        codigo_item: 21,
        titulo_item: 'Dragon Ball Z Budokai 3',
        autor: 'Atari',
        preco_item: '49,99',
        imagem_item: require('../assets/imagens/capas/dbzb3-show.jpg'),
    },
    {
        codigo_item: 22,
        titulo_item: 'Dragon Ball Z Budokai 2',
        autor: 'Ban Dai',
        preco_item: '49,99',
        imagem_item: require('../assets/imagens/capas/dbzb2-show.jpg'),
    },
    {
        codigo_item: 23,
        titulo_item: 'Dragon Ball Z Budokai',
        autor: 'Ban Dai Namco\nDimps',
        preco_item: '36,99',
        imagem_item: require('../assets/imagens/capas/dbzb-show.jpg'),
    },
    {
        codigo_item: 24,
        titulo_item: 'Fatal Frame 2',
        autor: 'Tecmo',
        preco_item: '25,99',
        imagem_item: require('../assets/imagens/capas/fatalframe-show.jpg'),
    },
    {
        codigo_item: 25,
        titulo_item: 'God of War',
        autor: 'Santa Monica',
        preco_item: '69,99',
        imagem_item: require('../assets/imagens/capas/gow-show.jpg'),
    },
    {
        codigo_item: 26,
        titulo_item: 'Gran Turismo 4',
        autor: 'Sony Computer Entertainment',
        preco_item: '49,99',
        imagem_item: require('../assets/imagens/capas/gt4-show.jpg'),
    },
    {
        codigo_item: 27,
        titulo_item: 'God of War 2',
        autor: 'Santa Monica',
        preco_item: '69,99',
        imagem_item: require('../assets/imagens/capas/gow2-show.jpg'),
    },
    {
        codigo_item: 28,
        titulo_item: 'GTA San Andreas',
        autor: 'Rockstar Games',
        preco_item: '39,90',
        imagem_item: require('../assets/imagens/capas/gtasa-show.jpg'),
    },
    {
        codigo_item: 29,
        titulo_item: 'GTA Tropa de Elite',
        autor: 'Rockstar Games\nMicrosoft',
        preco_item: '39,90',
        imagem_item: require('../assets/imagens/capas/gtate-show.jpg'),
    },
    {
        codigo_item: 30,
        titulo_item: 'Guitar Hero True Metal',
        autor: 'RedOctane\nHarmonix',
        preco_item: '29,99',
        imagem_item: require('../assets/imagens/capas/ghtm-show.jpg'),
    },
    {
        codigo_item: 31,
        titulo_item: 'Guitar Hero 3',
        autor: 'RedOctane\nHarmonix\nActivision',
        preco_item: '49,99',
        imagem_item: require('../assets/imagens/capas/gh3-show.jpg'),
    },
    {
        codigo_item: 32,
        titulo_item: 'Gun',
        autor: 'Activison',
        preco_item: '49,90',
        imagem_item: require('../assets/imagens/capas/Gun-show.jpg'),
    },
    {
        codigo_item: 33,
        titulo_item: 'Need for Speed Hot Pursuit 2',
        autor: 'Eletronic Arts',
        preco_item: '49,90',
        imagem_item: require('../assets/imagens/capas/nfshp2-show.jpg'),
    },
    {
        codigo_item: 34,
        titulo_item: 'Need for Speed Underground 2',
        autor: 'Eletronic Arts',
        preco_item: '59,90',
        imagem_item: require('../assets/imagens/capas/nfsu2-show.jpg'),
    },
    {
        codigo_item: 35,
        titulo_item: 'Obscure 2',
        autor: 'Mighty Rocket Studio',
        preco_item: '39,90',
        imagem_item: require('../assets/imagens/capas/Obscure2-show.jpg'),
    },
    {
        codigo_item: 36,
        titulo_item: 'Obscure',
        autor: 'Mighty Rocket Studio',
        preco_item: '29,99',
        imagem_item: require('../assets/imagens/capas/Obscure-show.jpg'),
    },
    {
        codigo_item: 37,
        titulo_item: 'Portal',
        autor: 'Valve',
        preco_item: '49,00',
        imagem_item: require('../assets/imagens/capas/portal-show.jpg'),
    },
    {
        codigo_item: 38,
        titulo_item: 'Resident Evil 4',
        autor: 'Capcom',
        preco_item: '79,59',
        imagem_item: require('../assets/imagens/capas/re4-show.jpg'),
    },
    {
        codigo_item: 39,
        titulo_item: 'Resident Evil Code: Veronica',
        autor: 'Capcom',
        preco_item: '39,60',
        imagem_item: require('../assets/imagens/capas/recv-show.jpg'),
    },
    {
        codigo_item: 40,
        titulo_item: 'Silent Hill Origins',
        autor: 'Team Silent\nKonami',
        preco_item: '39,99',
        imagem_item: require('../assets/imagens/capas/sho-show.jpg'),
    },
    {
        codigo_item: 41,
        titulo_item: 'Silent Hill Shattered Memories',
        autor: 'Team Silent\nKonami',
        preco_item: '39,99',
        imagem_item: require('../assets/imagens/capas/shsm-show.jpg'),
    },
    {
        codigo_item: 42,
        titulo_item: 'Shadow of The Colossus',
        autor: 'Bluepoint Games\nTeam Ico\nJapan Studio',
        preco_item: '169,99',
        imagem_item: require('../assets/imagens/capas/sotc-show.jpg'),
    },
    {
        codigo_item: 43,
        titulo_item: "Tony Hawk's Downhill Jam",
        autor: 'Neversoft\nTreyarch\nNatsume\nIdeaworks Game Studio',
        preco_item: '49,00',
        imagem_item: require('../assets/imagens/capas/thd-show.jpg'),
    },
    {
        codigo_item: 44,
        titulo_item: "Tony Hawk's Proving Ground",
        autor: 'Neversoft\nTreyarch\nNatsume\nIdeaworks Game Studioo',
        preco_item: '49,90',
        imagem_item: require('../assets/imagens/capas/thpg-show.jpg'),
    },
    {
        codigo_item: 45,
        titulo_item: "Tony Hawk's Underground 2",
        autor: 'Neversoft\nTreyarch\nNatsume\nIdeaworks Game Studio',
        preco_item: '59,99',
        imagem_item: require('../assets/imagens/capas/thu-show.jpg'),
    },
];

// COMPONENTE DE ITEM DE RENDERIZAÇÃO
const bookItem = ({ item }) => {
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

                <TouchableOpacity style={styles.item_button_details}><Text style={styles.item_button_text}>Detalhes</Text></TouchableOpacity>

            </View>
        </View>

    );
};

export default function FeedBook() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={bookItem}
                ListEmptyComponent={<Text>A LISTA DE LIVROS ESTÁ VAZIA...</Text>}
                keyExtractor={produtos => produtos.codigo_item}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 118,
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
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