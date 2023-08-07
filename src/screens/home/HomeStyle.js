import { StyleSheet } from "react-native";

const Home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcon: {
    // backgroundColor: '#1DB954',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 25,
  },
  headerIconImage: {
    width: 16,
    height: 16,
  },
  containerCategoria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoriaItem: {
    width: '40%',
    borderRadius: 6,
    backgroundColor: '#282828',
    alignItems: 'center',
  },
  containerPlaylist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  playlistItem: {
    width: '48%',
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#282828',
    alignItems: 'center',
  },
  textItem: {
    color: 'white',
    marginTop: 8,
  },
  menuRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRodape: {
    // backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 25,
  },
  rodapeText: {
    color: 'white',
  },

});

export default Home;