import React, {Component} from 'react';
import { Text, View, ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

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

        /*the album is just a var name. it can be anything you want.
         e.g. data, record, item, etc
         this var/prop name will be referenced by the child component*/
        return this.state.albums.map(
            album => <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                <View>
                    { this.renderAlbums() }
                </View>
            </ScrollView>

        );
    }

}

export default AlbumList;
