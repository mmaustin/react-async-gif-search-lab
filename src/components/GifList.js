import React, {Component} from 'react';

export default class GifList extends Component {

    render(){
        return(
            <ul>
                <li><img src={this.props.listOfUrls[0]} alt="no gif"/></li>
                <li><img src={this.props.listOfUrls[1]} alt="no gif"/></li>
                <li><img src={this.props.listOfUrls[2]} alt="no gif"/></li>
            </ul>
        )
    }

}