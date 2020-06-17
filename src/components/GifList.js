import React, {Component} from 'react'

export default class GifList extends Component {
    render(){
        return(
            <div>
                {this.props.gifs.map(gif => {
                    return <img key={gif.url} src={gif.url} alt="gif" />
                })}
            </div>
        )
    }
}