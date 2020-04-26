import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactMarkdown from "react-markdown";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownText:
        "Heading\n=======\r\n\r\nSub-heading\r\n-----------\r\n\r\n### Another deeper heading\r\n\r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a\r\nline break\r\n\r\nText attributes *italic*, **bold**,\r\n`monospace`, ~~strikethrough~~ .\r\n\r\nShopping list:\r\n\r\n  * apples\r\n  * oranges\r\n  * pears\r\n\r\nNumbered list:\r\n\r\n  1. apples\r\n  2. oranges\r\n  3. pears\r\n\r\nThe rain---not the reign---in\r\nSpain.\r\n\r\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdownText: event.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Markdown Text Previewer</h1>
        <div id="Input">
          <h3>Enter your text here:</h3>

          <textarea
            id="editor"
            className="Textarea"
            cols="50"
            rows="40"
            value={this.state.markdownText}
            onChange={this.handleChange}
          />
        </div>
        <div className="Markdown">
          <h3>Markdown Output:</h3>
          <div id="preview">
            <ReactMarkdown
              className="Markdowncontainer"
              source={this.state.markdownText}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
