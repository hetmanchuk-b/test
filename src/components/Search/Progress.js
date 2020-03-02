import React, {Component} from 'react';
import Train from "./Train";

export default class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = { tab: 'serviceClass' };
    }


    render() {
        const steps = this.props.steps;
        const booking = this.props.booking;

        return (
            <div className='crumbs-pass-parent'>
                {steps.map((el, i) => (
                    <div key={i} {...el} className={
                        !booking.isSearchBack && i === 2 ? 'd-none' : i === booking.step ? "crumbs-pass-item current" : i < booking.step ? "crumbs-pass-item done" : "crumbs-pass-item"}>
                        {el.value} <br/>

                    </div>))}
            </div>
        );
    }
}


