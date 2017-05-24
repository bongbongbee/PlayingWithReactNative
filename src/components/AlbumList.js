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
        return this.state.albums.map(album => <Text>{ album.title }</Text>);
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