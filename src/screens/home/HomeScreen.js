// importacões de dependencias e etc...
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { StatusBar } from "react-native";
import Svg, { Path } from 'react-native-svg';

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
    return (
        <ScrollView contentContainerStyle={Home.container}>
            <StatusBar style="auto" />
            {/* conteudo cabeçalho do aplicativo */}
            <View style={Home.header}>
                <Text style={Home.headerText}>Boa Noite!</Text>
                <TouchableOpacity style={Home.headerIcon}>
                    <Svg width={24} height={24} viewBox="0 0 32 32">
                        <Path fill="#fff" d="M29.78,24.37l-3.65-4.48L26,12a1,1,0,0,0,0-.16C24.85,5.58,21.21,2,16,2,10.5,2,6.08,6,5,11.82A1,1,0,0,0,5,12l-.13,8L2.14,24.48a1,1,0,0,0,0,1A1,1,0,0,0,3,26h9a4,4,0,0,0,8,0h9a1,1,0,0,0,.9-.57A1,1,0,0,0,29.78,24.37ZM16,28a2,2,0,0,1-2-2h4A2,2,0,0,1,16,28ZM4.77,24l2-3.24a1,1,0,0,0,.14-.5L7,12.1C7.91,7.25,11.52,4,16,4c5.63,0,7.43,5,8,8.1l.14,8.16a1,1,0,0,0,.22.62L26.9,24Z" />
                    </Svg>
                    {/* imagem apenas para casos de emergencia */}
                    {/* <Image source={notificationIcon} style={Home.headerIconImage}></Image> */}
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerIcon}>
                    <Svg width={24} height={24} viewBox='0 0 32 32'>
                        <path fill="#fff" d="M12.25,2A9.81,9.81,0,0,0,4.77,5.46L3.41,4.25a1,1,0,0,0-1.07-.16A1,1,0,0,0,1.75,5V9a1,1,0,0,0,1,1h4.5a1,1,0,0,0,.93-.64,1,1,0,0,0-.27-1.11L6.26,6.78a7.86,7.86,0,0,1,6-2.78A8,8,0,1,1,4.72,14.67a1,1,0,0,0-1.89.66A10,10,0,1,0,12.25,2Z"></path>
                    </Svg>
                    {/* imagem apenas para casos de emergencia */}
                    {/* <Image source={recentIcon} style={Home.headerIconImage}></Image> */}
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerIcon}>
                    <Svg width={24} height={24} viewBox='0 0 32 32'>
                        <path fill="#fff" d="M17,31H15a3,3,0,0,1-3-2.64,12.68,12.68,0,0,1-1.95-.8,3,3,0,0,1-4-.25L4.69,25.9a3,3,0,0,1-.25-4A12.68,12.68,0,0,1,3.64,20,3,3,0,0,1,1,17V15a3,3,0,0,1,2.64-3,12.68,12.68,0,0,1,.8-1.95,3,3,0,0,1,.25-4L6.1,4.69a3,3,0,0,1,4-.25A12.68,12.68,0,0,1,12,3.64,3,3,0,0,1,15,1h2a3,3,0,0,1,3,2.64,12.68,12.68,0,0,1,1.95.8,3,3,0,0,1,4,.25L27.31,6.1a3,3,0,0,1,.25,4,12.68,12.68,0,0,1,.8,1.95A3,3,0,0,1,31,15v2a3,3,0,0,1-2.64,3,12.68,12.68,0,0,1-.8,1.95,3,3,0,0,1-.25,4L25.9,27.31a3,3,0,0,1-4,.25,12.68,12.68,0,0,1-1.95.8A3,3,0,0,1,17,31ZM9.91,25.33a.94.94,0,0,1,.51.14,11,11,0,0,0,2.83,1.17,1,1,0,0,1,.75,1V28a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1v-.39a1,1,0,0,1,.75-1,11,11,0,0,0,2.83-1.17,1,1,0,0,1,1.21.15l.28.28a1,1,0,0,0,1.42,0l1.41-1.41a1,1,0,0,0,0-1.42l-.28-.28a1,1,0,0,1-.15-1.21,11,11,0,0,0,1.17-2.83,1,1,0,0,1,1-.75H28a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1h-.39a1,1,0,0,1-1-.75,11,11,0,0,0-1.17-2.83,1,1,0,0,1,.15-1.21l.28-.28a1,1,0,0,0,0-1.42L24.49,6.1a1,1,0,0,0-1.42,0l-.28.28a1,1,0,0,1-1.21.15,11,11,0,0,0-2.83-1.17,1,1,0,0,1-.75-1V4a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1v.39a1,1,0,0,1-.75,1,11,11,0,0,0-2.83,1.17,1,1,0,0,1-1.21-.15L8.93,6.1a1,1,0,0,0-1.42,0L6.1,7.51a1,1,0,0,0,0,1.42l.28.28a1,1,0,0,1,.15,1.21,11,11,0,0,0-1.17,2.83,1,1,0,0,1-1,.75H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.39a1,1,0,0,1,1,.75,11,11,0,0,0,1.17,2.83,1,1,0,0,1-.15,1.21l-.28.28a1,1,0,0,0,0,1.42L7.51,25.9a1,1,0,0,0,1.42,0l.28-.28A1,1,0,0,1,9.91,25.33Z"></path>
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
                <TouchableOpacity style={Home.headerRodape}>
                    <Image source={homeIcon} style={Home.headerIconImage}></Image>
                    <Text style={Home.rodapeText} >Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerRodape}>
                    <Image source={shearchIcon} style={Home.headerIconImage}></Image>
                    <Text style={Home.rodapeText} >Busca</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerRodape}>
                    <Image source={libraryIcon} style={Home.headerIconImage}></Image>
                    <Text style={Home.rodapeText} >minha biblioteca</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default HomeScreen;