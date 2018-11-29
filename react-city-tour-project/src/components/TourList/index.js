import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";

export default class Tourlist extends Component {
    render() {
        return (
            <section className="tourlist">
                <Tour />
            </section>
        );
    }
}