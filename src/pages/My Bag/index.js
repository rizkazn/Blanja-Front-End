import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Mybags from "../../components/My Bag"

export default class MyBag extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Mybags />
            </>
        );
    }
}