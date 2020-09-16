import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            method: '',
            url: '',
        }
    }

    onMethod = function(event) {
        event.preventDefault();
        let method = event.target.value;

        console.log(method);
        this.setState({method});
    }

    onURL = function(event) {
        let url = event.target.value;

        console.log(url);
        this.setState({url});
    }

    onsubmit = function(event) {
        event.preventDefault();
        let url = this.state.url;
        console.log(url);      
        this.setState({url});
    }

    render() {
        return (
            <form className="Form">
                <label>URL</label>
                <input type="text" value="url" onChange={this.onURL}></input>
                <button type="submit" onSubmit={this.onsubmit}>GO!</button>
                <div className="radioButtons">
                    <button type="radio" value="get" onChange={this.onMethod}>GET</button>
                    <button type="radio" value="post" onChange={this.onMethod}>POST</button>
                    <button type="radio" value="put" onChange={this.onMethod}>PUT</button>
                    <button type="radio" value="delete" onChange={this.onMethod}>DELETE</button>
                </div>
            </form>
        )
    }
}



  export default Form;
