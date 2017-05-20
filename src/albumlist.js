import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Albumdetail from './albumdetail';

class Albumlist extends Component {
  state={albums:[]};

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(hai => this.setState({albums:hai.data}))
    .catch(() => alert("SORRRYYYYYY \n\t RELOAD"));
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
