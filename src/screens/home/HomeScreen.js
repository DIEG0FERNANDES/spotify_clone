// importacões de dependencias e etc...
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { StatusBar } from "react-native";
import Svg, { Path } from 'react-native-svg';
// import useNavigation from '@react-navigation/native';

// importações de icones e style
import Home from "./HomeStyle";
import notificationIcon from '../../img/notification.png';
import recentIcon from '../../img/history_recent.png';
import optionsIcon from '../../img/options.png';
import homeIcon from '../../img/home.png';
import shearchIcon from '../../img/shearch.png';
import libraryIcon from '../../img/library.png';

// conteudo principal
const HomeScreen = () => {
    // const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={Home.container}>
            <StatusBar style="auto" />
            {/* conteudo cabeçalho do aplicativo */}
            <View style={Home.header}>
                <Text style={Home.headerText}>Boa Noite</Text>
                <TouchableOpacity style={Home.headerIcon}>
                    <Svg width={24} height={24} viewBox="0 0 32 32">
                        <Path fill="#fff" d="M29.78,24.37l-3.65-4.48L26,12a1,1,0,0,0,0-.16C24.85,5.58,21.21,2,16,2,10.5,2,6.08,6,5,11.82A1,1,0,0,0,5,12l-.13,8L2.14,24.48a1,1,0,0,0,0,1A1,1,0,0,0,3,26h9a4,4,0,0,0,8,0h9a1,1,0,0,0,.9-.57A1,1,0,0,0,29.78,24.37ZM16,28a2,2,0,0,1-2-2h4A2,2,0,0,1,16,28ZM4.77,24l2-3.24a1,1,0,0,0,.14-.5L7,12.1C7.91,7.25,11.52,4,16,4c5.63,0,7.43,5,8,8.1l.14,8.16a1,1,0,0,0,.22.62L26.9,24Z"></Path>
                    </Svg>
                    {/* imagem apenas para casos de emergencia */}
                    {/* <Image source={notificationIcon} style={Home.headerIconImage}></Image> */}
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerIcon}>
                    <Svg width={24} height={24} viewBox="0 0 32 32">
                        <Path fill="#fff" d="M12.25,2A9.81,9.81,0,0,0,4.77,5.46L3.41,4.25a1,1,0,0,0-1.07-.16A1,1,0,0,0,1.75,5V9a1,1,0,0,0,1,1h4.5a1,1,0,0,0,.93-.64,1,1,0,0,0-.27-1.11L6.26,6.78a7.86,7.86,0,0,1,6-2.78A8,8,0,1,1,4.72,14.67a1,1,0,0,0-1.89.66A10,10,0,1,0,12.25,2Z"></Path>
                    </Svg>
                    {/* imagem apenas para casos de emergencia */}
                    {/* <Image source={recentIcon} style={Home.headerIconImage}></Image> */}
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerIcon}>
                    <Svg width={24} height={24} viewBox="0 0 32 32">
                        <Path fill="#fff" d="M17,31H15a3,3,0,0,1-3-2.64,12.68,12.68,0,0,1-1.95-.8,3,3,0,0,1-4-.25L4.69,25.9a3,3,0,0,1-.25-4A12.68,12.68,0,0,1,3.64,20,3,3,0,0,1,1,17V15a3,3,0,0,1,2.64-3,12.68,12.68,0,0,1,.8-1.95,3,3,0,0,1,.25-4L6.1,4.69a3,3,0,0,1,4-.25A12.68,12.68,0,0,1,12,3.64,3,3,0,0,1,15,1h2a3,3,0,0,1,3,2.64,12.68,12.68,0,0,1,1.95.8,3,3,0,0,1,4,.25L27.31,6.1a3,3,0,0,1,.25,4,12.68,12.68,0,0,1,.8,1.95A3,3,0,0,1,31,15v2a3,3,0,0,1-2.64,3,12.68,12.68,0,0,1-.8,1.95,3,3,0,0,1-.25,4L25.9,27.31a3,3,0,0,1-4,.25,12.68,12.68,0,0,1-1.95.8A3,3,0,0,1,17,31ZM9.91,25.33a.94.94,0,0,1,.51.14,11,11,0,0,0,2.83,1.17,1,1,0,0,1,.75,1V28a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1v-.39a1,1,0,0,1,.75-1,11,11,0,0,0,2.83-1.17,1,1,0,0,1,1.21.15l.28.28a1,1,0,0,0,1.42,0l1.41-1.41a1,1,0,0,0,0-1.42l-.28-.28a1,1,0,0,1-.15-1.21,11,11,0,0,0,1.17-2.83,1,1,0,0,1,1-.75H28a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1h-.39a1,1,0,0,1-1-.75,11,11,0,0,0-1.17-2.83,1,1,0,0,1,.15-1.21l.28-.28a1,1,0,0,0,0-1.42L24.49,6.1a1,1,0,0,0-1.42,0l-.28.28a1,1,0,0,1-1.21.15,11,11,0,0,0-2.83-1.17,1,1,0,0,1-.75-1V4a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1v.39a1,1,0,0,1-.75,1,11,11,0,0,0-2.83,1.17,1,1,0,0,1-1.21-.15L8.93,6.1a1,1,0,0,0-1.42,0L6.1,7.51a1,1,0,0,0,0,1.42l.28.28a1,1,0,0,1,.15,1.21,11,11,0,0,0-1.17,2.83,1,1,0,0,1-1,.75H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.39a1,1,0,0,1,1,.75,11,11,0,0,0,1.17,2.83,1,1,0,0,1-.15,1.21l-.28.28a1,1,0,0,0,0,1.42L7.51,25.9a1,1,0,0,0,1.42,0l.28-.28A1,1,0,0,1,9.91,25.33Z"></Path>
                    </Svg>
                    {/* imagem apenas para casos de emergencia */}
                    {/* <Image source={optionsIcon} style={Home.headerIconImage}></Image> */}
                </TouchableOpacity>
            </View>
            {/* categorias de playlist */}
            <View style={Home.containerCategoria}>
                <TouchableOpacity style={Home.categoriaItem}>
                    <Text style={Home.textItem}>Música</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Home.categoriaItem}>
                    <Text style={Home.textItem}>Podcasts e programas</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {/* conteudo em construção, playlists de exibição */}
                <View>
                    <View style={Home.containerPlaylist}>
                        <TouchableOpacity style={Home.playlistItem}>
                            <Image source={notificationIcon}></Image>
                            <Text style={Home.textItem}>Minha playlist</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Home.playlistItem}>
                            <Text style={Home.textItem}>This is 2Pac</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Home.containerPlaylist}>
                        <TouchableOpacity style={Home.playlistItem}>
                            <Text style={Home.textItem}>Big in Japan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Home.playlistItem}>
                            <Text style={Home.textItem}>This is Bleach</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Home.containerPlaylist}>
                        <TouchableOpacity style={Home.playlistItem}>
                            <Text style={Home.textItem}>Retro Wave</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Home.playlistItem}>
                            <Text style={Home.textItem}>Chronnon Triger</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* conteudo extra nada alterado ainda */}
                <View>
                    <Text style={Home.headerText}>Escolhido para você</Text>
                    <TouchableOpacity style={Home.playlistItem}>
                        <Text style={Home.textItem}>Playlist</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={Home.headerText}>Tocados recentemente</Text>
                    <TouchableOpacity style={Home.playlistItem}>
                        <Text style={Home.textItem}>Playlist</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={Home.headerText}>Suas  músicas estão com saudade</Text>
                    <TouchableOpacity style={Home.playlistItem}>
                        <Text style={Home.textItem}>Playlist</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={Home.headerText}>Seus mixes mais ouvidos</Text>
                    <TouchableOpacity style={Home.playlistItem}>
                        <Text style={Home.textItem}>Playlist</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={Home.headerText}>Mais do que você curte</Text>
                    <TouchableOpacity style={Home.playlistItem}>
                        <Text style={Home.textItem}>Playlist</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* conteudo do rodapé */}
            <View style={Home.menuRodape}>
                <TouchableOpacity style={Home.headerRodape} >
                    <Svg width={24} height={24} viewBox="0 0 32 32">
                        <Path fill="#fff" d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"></Path>
                    </Svg>
                    {/* imagem apenas para casos de emergencia */}
                    {/* <Image source={homeIcon} style={Home.headerIconImage} /> */}
                    <Text style={Home.rodapeText}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerRodape} >
                    <Svg width="10px" height="10px" viewBox="0 0 32 32">
                        <Path fill="#fff" d="M51.957,49.129l-8.713-8.713c1.75-2.337,2.799-5.229,2.799-8.373c0-7.732-6.268-14-14-14s-14,6.268-14,14s6.268,14,14,14  c3.144,0,6.036-1.049,8.373-2.799l8.713,8.713L51.957,49.129z M22.043,32.043c0-5.514,4.486-10,10-10c5.514,0,10,4.486,10,10  c0,5.514-4.486,10-10,10C26.529,42.043,22.043,37.557,22.043,32.043z"></Path>
                    </Svg>
                    {/* imagem apenas para casos de emergencia */}
                    {/* <Image source={shearchIcon} style={Home.headerIconImage} /> */}
                    <Text style={Home.rodapeText}>Buscar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerRodape} >
                    <Svg width={24} height={24} viewBox="0 0 32 32">
                        <Path fill="#fff" d="M4 3H5C6.05382 3 6.91812 3.8164 6.99451 4.85081L7 5V19C7 20.0538 6.1836 20.9181 5.14919 20.9945L5 21H4C2.94618 21 2.08188 20.1836 2.00549 19.1492L2 19V5C2 3.94618 2.8164 3.08188 3.85081 3.00549L4 3H5H4ZM10 3H11C12.0538 3 12.9181 3.8164 12.9945 4.85081L13 5V19C13 20.0538 12.1836 20.9181 11.1492 20.9945L11 21H10C8.94618 21 8.08188 20.1836 8.00549 19.1492L8 19V5C8 3.94618 8.8164 3.08188 9.85081 3.00549L10 3H11H10ZM16.9743 5.0005C17.8138 5.0005 18.5825 5.5311 18.8643 6.34636L18.9113 6.5025L21.9263 18.2485C22.1888 19.2689 21.613 20.3094 20.6295 20.6402L20.4863 20.6825L19.5173 20.9315C19.3513 20.9735 19.1833 20.9945 19.0193 20.9945C18.1807 20.9945 17.4112 20.463 17.1302 19.6476L17.0833 19.4915L14.0673 7.7465C13.8058 6.72514 14.3807 5.68555 15.3649 5.35484L15.5083 5.3125L16.4763 5.0635C16.6423 5.0205 16.8103 5.0005 16.9743 5.0005ZM5 4.5H4C3.75467 4.5 3.55042 4.67778 3.50806 4.91043L3.5 5V19C3.5 19.2444 3.67699 19.4494 3.91016 19.4919L4 19.5H5C5.24533 19.5 5.44958 19.3222 5.49194 19.0896L5.5 19V5C5.5 4.75556 5.32301 4.55062 5.08984 4.50809L5 4.5ZM11 4.5H10C9.75467 4.5 9.55042 4.67778 9.50806 4.91043L9.5 5V19C9.5 19.2444 9.67699 19.4494 9.91016 19.4919L10 19.5H11C11.2453 19.5 11.4496 19.3222 11.4919 19.0896L11.5 19V5C11.5 4.75556 11.323 4.55062 11.0898 4.50809L11 4.5ZM16.9753 6.5005L16.9119 6.50437L16.8493 6.5165L15.8813 6.7645C15.7063 6.8095 15.6143 6.9275 15.5743 6.9955C15.5431 7.0483 15.4985 7.14718 15.5049 7.27422L15.5203 7.3745L18.5363 19.1185C18.6023 19.3765 18.8333 19.4945 19.0193 19.4945L19.0818 19.4906L19.1443 19.4785L20.1133 19.2295C20.3515 19.1691 20.5052 18.9458 20.4879 18.7102L20.4733 18.6215L17.4583 6.8755C17.3913 6.6185 17.1613 6.5005 16.9753 6.5005Z"></Path>
                    </Svg>
                    {/* imagem apenas para casos de emergencia */}
                    {/* <Image source={libraryIcon} style={Home.headerIconImage} /> */}
                    <Text style={Home.rodapeText}>Sua Biblioteca</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default HomeScreen;