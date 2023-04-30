import axios from "axios"
import Navigation from "../../../components/ArtistNavigation/navigation"
import UploadSong from "../../../components/ArtistUploadSong/uploadSong"


const client = process.env.REACT_APP_CLIENT_KEY
const secret = process.env.REACT_APP_CLIENT_SECRET

const UploadSongPage = () => {

  const getDetails = async (e) =>{
  e.preventDefault()
  await axios.post("https://accounts.spotify.com/api/token", "grant_type=client_credentials", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(`${client}:${secret}`)
    }
  })
    .then(async response => {
      console.log(response.data);
      const token = response.data.access_token
      await axios.get('https://api.spotify.com/v1/search', {
          params: {
            q: 'track:Namet Nenna artist:Ruby',
            type: 'track',
            market: 'US',
            limit: 1
          },
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(async response => {
          console.log(response.data.tracks.items[0].id);
          const id = response.data.tracks.items[0].id
          console.log(token)
          await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
        })
        .catch(error => {
          console.log(error);
        });
      })
    .catch(error => {
      console.log(error);
    });}
  
  //   const camelotArray = {
  //     'A': { major: '11B', minor: '8A' },
  //     'Bb': { major: '6B', minor: '3A' },
  //     'B': { major: '1B', minor: '10A' },
  //     'C': { major: '8B', minor: '5A' },
  //     'C#': { major: '3B', minor: '12A' },
  //     'D': { major: '10B', minor: '7A' },
  //     'Eb': { major: '5B', minor: '2A' },
  //     'E': { major: '12B', minor: '9A' },
  //     'F': { major: '7B', minor: '4A' },
  //     'F#': { major: '2B', minor: '11A' },
  //     'G': { major: '9B', minor: '6A' },
  //     'Ab': { major: '4B', minor: '1A' }
  //   };
    
  //   const getCamelot = (key) => {
  //     const keyName = key.replace("b", "♭");
  //     const camelotObj = camelotArray[keyName];
      
  //     if (camelotObj) {
  //       return {
  //         major: camelotObj.major,
  //         minor: camelotObj.minor
  //       };
  //     } else {
  //       return null;
  //     }
  //   };
    
  
  
  // }


return (
    <div className="profile_container">
    <div className="nav_box">
    <Navigation />
    </div>
    <div className="page_box">
    <h2 className="heading">Upload your Song</h2>
    <UploadSong/>
    </div>
    
    </div>
);
}

export default UploadSongPage;
