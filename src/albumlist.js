import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Albumdetail from './albumdetail';

class Albumlist extends Component {
  state={albums:[]};

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(hai => this.setState({albums:hai.data}))
    .catch(() => Alert.alert( 
      'Alert Title', 
      'My Alert Msg', 
      [ 
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')}, 
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, 
        {text: 'OK', onPress: () => console.log('OK Pressed')} 
      ] 
    ));
  }

renderAlbums(){
  return this.state.albums.map(album =>
    <Albumdetail key={album.title} alb={album} />
  );
}
  render (){
    console.log(this.state);

    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
  );
}
}
export default Albumlist;
