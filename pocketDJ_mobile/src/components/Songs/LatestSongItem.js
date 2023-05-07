import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Typewriter from 'react-native-typewriter';


const LatestSongItem = ({id , Name ,Cover,ArtistName,audio}) => {
  const navigation = useNavigation();

  const handleLatestSong=()=>{
    navigation.navigate('Player', {
      title: Name,
      image: { uri: Cover },
      AudioURL: {audio},
      });
  }
  
  return (
    <TouchableOpacity onPress={handleLatestSong}>
    <ImageBackground 
    source={{ uri: Cover }}
    imageStyle={{ borderRadius: 10}}
    style = {[styles.latest_song_item, { borderRadius: 5 }]}>
    <Typewriter
      style={styles.typewriter}
      typing={2}
      maxDelay={50}
      minDelay={20}
    >
    <View style={styles.latest_items}>
    <Text style={styles.latest_song}>Latest Song</Text>
    <Text style={styles.latest_artist_name}>{ArtistName}</Text>
    <Text style={styles.latest_song_item_name}>{Name}</Text>
    </View>
    </Typewriter>
    
    
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default LatestSongItem;