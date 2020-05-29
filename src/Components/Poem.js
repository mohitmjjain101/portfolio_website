import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Content from './../content/poems.json'
class Poem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            text: ""
        }
    }


    async  componentDidMount() {
        var description = "Example description\nPlease click the link Another example description\nMore info";
        let newText = description.split('\n').map((item, i) => <p key={i}>{item}</p>);
        console.log(newText)
        await this.setState({ text: newText });
        var cont = Content;
        cont.forEach((value, index) => {
            let content = value.content;
            let newText = content.split('\n').map((item, i) => <p key={i}>{item}</p>);
            value.divData = newText;
        })

        await this.setState({ data: cont })

    }
    render() {
        var main = this.state.data
        return (
            <div>
                {main.map((item, i) =>{
                  {console.log(item)}
                  {item.divData}
                })}

                {/* {this.state.data[0].divData} */}
                {/* <Card */}
                {/* // bg={variant.toLowerCase()}
                // key={idx}
                // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                // style={{ width: '18rem', whilteSpace: 'pre-wrap' }}
                > */}
                {/* console.log(index)} */}
                {/* <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title> */}
                {/* {console.log(this.state.data[0].divData)} */}
                {/* <body>{this.state.data[0].title}</body> */}
                {/* {this.state.data[0].divData} */}

                {/* </Card.Title>

                    </Card.Body> */}
                {/* </Card > */}
            </div >
        )
    }
}

export default Poem;   // var changed = content.map(i => i.replace(/\n/g, '<br />'));
// var div = document.querySelector("#test");
// console.log(div , changed)
// div.innerHTML = changed;
// console.log(div.innerHTML)
// var parser = new DOMParser();
// var doc = parser.parseFromString(element.content, 'text/html');
// console.log(doc.body);
// element.divData = doc.body

