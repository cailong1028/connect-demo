import React, {Component} from 'react';
import {Switch} from 'react-router';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class News extends Component{
    
}

class Home extends Component{
    render(){
        return (
            <div>this is home page</div>
        );
    };
}

class Feed extends Component{
    render(){
        return (
            <div>this is Feed page</div>
        );
    };
}

const User = ({match}) => {
    return (<div>this is user page, welcome {match.params.username}</div>);
}

export default News;