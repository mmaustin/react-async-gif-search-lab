import React, {Component} from 'react' 

export default class GifSearch extends Component {

    constructor() {
        super();
        this.state = {
          userInput: ''
        };
    }

    handleInput = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      handleSubmit = event => {
        event.preventDefault()
        //this.props.getGifsByName(this.state.userInput)
      }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter a Search Term:
                    <input id="userinput" name="userinput" type="text"
                    onChange={this.handleInput}
                    value={this.state.userinput}
                    />
                </label>
                <div>
                    <button type="submit">Find Gifs</button>
                </div>
            </form>
        )
    }

}