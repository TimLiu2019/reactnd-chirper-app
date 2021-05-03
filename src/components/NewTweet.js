import React, { Component } from "react";

class NewTweet extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    const text = e.target.value;
    this.setState(() => ({
      text: text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    // todo: add tweet to store
    console.log("new tweet", text);
    this.setState(() => ({
      text: ""
    }));
  };
  render() {
    const { text } = this.state;
    const tweetLeft = 200 - text.length;
    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="what's happing?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={200}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default NewTweet;
