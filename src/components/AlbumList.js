import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
    state = { albums: [] };

    //lifecycle methods
    /*make some http requests here*/
    componentWillMount() {
        console.log('[AlbumList] componentWillMount');
        console.log('[AlbumList] fetching album list...');
        fetch('https://rallycoding.herokuapp.com/api/music_albums/')
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({ albums: responseJSON });
            }).catch((error) => console.error(error));
    }

    renderAlbums() {
        console.log('[AlbumList] renderAlbums');
        /*usually we will just use the id or record id of the item
        * but for this case we don't have any unique id, so we're just gonna
        * use the album title*/
        return this.state.albums.map(
            album => <Text k    ey={album.title}>{album.title}</Text>
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                { this.renderAlbums() }
            </View>
        );
    }


}

export default AlbumList;