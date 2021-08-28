import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
          threeGifs: []
        };
    }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              threeGifs: data.data
            });
        });
    }


    render(){
        let urls = this.state.threeGifs.map((d, ind) => {
            if (ind < 3){
                return d.images.original.url
            }
        })
        return(
            <div><GifList listOfUrls={urls}></GifList>
            <GifSearch getGifsByName={this.getGifsByName}/>
            </div>
        )
    }

}