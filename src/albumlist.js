import React,{Component} from 'react';
import {ScrollView,Alert} from 'react-native';
import axios from 'axios';
import Albumdetail from './albumdetail';

class Albumlist extends Component {
  state={albums:[]};

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(hai => this.setState({albums:hai.data}))
    .catch(() => Alert.alert( 
      'Loading Failed', 
      'Do you want to reload?', 
      [ 
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, 
        {text: 'Yes', onPress: () => this.componentWillMount()} 
      ] 
    ));
  }

renderAlbums(){
  return this.state.albums.map(album =>
    <Albumdetail key={album.title} alb={album} />
  );
}
  render (){
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
  );
}
}
export default Albumlist;
