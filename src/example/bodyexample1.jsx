import { Component } from "react";

const emptyBox = {
    height:"1000px"
}

class BodyExample1 extends Component {
    state = {
        hello: 'hello app js!',
        count: 0
    };

    handleChange = () => {
        this.setState({
            hello: 'bye app js!',
         count: 0
        })
    };

    countChange = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        return (
            <div>
                <h3>index Props</h3> 
                <div className="props">
                    <span>{this.props.message}</span>
                </div>

                <h3>State</h3>
                <div className="state">
                    <div>hello : {this.state.hello}</div>
                    <div>count : {this.state.count}</div>
                    <button onClick={this.handleChange}>click me!</button> 
                    <button onClick={this.countChange}>click me!</button> 
                </div>

                <h3>App Props</h3>
                <div className="inside-app-props">
                    <InsideApp
                        count={this.state.count}
                        handleChange={this.handleChange}
                        countChange={this.countChange}
                    />
                </div>
                <div style={emptyBox}></div>
                <div>end</div>
            </div>
        )
    }
}

class InsideApp extends Component {
    render() {
      return (
        <div>
          {this.props.count}
          <button onClick={this.props.handleChange}>click</button>
        </div>
      )
    }
  }

export default BodyExample1