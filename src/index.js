import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './App.css'
const element = <h1>Hello world</h1>



ReactDOM.render(<App />,document.getElementById('root'))



// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     componentDidMount() {
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
  
//     tick() {
//       this.setState({
//         date: new Date()
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );

// const name = 'Josh Perez';


/**Example2
function formatDate(date) {
    return date.toLocaleDateString();
  }
  
function Avatar(props){
    return (
  
    <img
    className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
    />
    )
}

function UserInfo(props){
    return (
        <div className="UserInfo">
          <Avatar user={props.user} />
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div>
      );
}
function Comment(props){
    return(
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>

    )
}

const comment = {
    date : new Date(),
    text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  }
};


ReactDOM.render(<Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />, document.getElementById('root'))



 */


// const element = <h1>Hello, {name}</h1>;
/**Esample 1
function tick() {
    const element = (
        <div>

            <h2>It is {new Date().toLocaleString()}</h2>
            <Welcome name={"sara"}></Welcome>
            <AnotherFunction name="mohit"></AnotherFunction>
        </div>);


    ReactDOM.render(
        element
        , document.getElementById('root'))
}

setInterval(tick, 1000)

function AnotherFunction(props){
    return (
        <h1>Hello , {props.name}</h1>
    )
}

class Welcome extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return(
        <h1>Welcome {this.props.name}</h1>
        )
    }
}

 */