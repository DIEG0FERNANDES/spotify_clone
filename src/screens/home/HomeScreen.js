import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { StatusBar } from "react-native";
import Svg, { Path } from 'react-native-svg';

// importações
import Home from "./HomeStyle";
import notificationIcon from '../../img/notification.png';
import notificationSVG from '../../img/notification.svg';
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
                        <Path fill="#fff" d={notificationSVG} />
                    </Svg>
                    <Image source={notificationIcon} style={Home.headerIconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerIcon}>
                    <Image source={recentIcon} style={Home.headerIconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={Home.headerIcon}>
                    <Image source={optionsIcon} style={Home.headerIconImage}></Image>
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