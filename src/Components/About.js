import React, { Component } from 'react';
import coverPhoto from './../images/cover_photo100.jpg';
class About extends Component {


    constructor(props) {
        super(props)
        this.state = {
            flag: true
        }
    }

    componentDidMount() {
        if (window.location.pathname === "/contact") {
            this.setState({ flag: false })
        } else {
            this.setState({ flag: true })
        }
    }
    render() {

        let a = ""
      
        return (
            <div style={{justify: "center"}} >
                <img src={coverPhoto} alt="logo" style={{width: "100%"}}/>
            </div>
        )
    }
}

export default About;