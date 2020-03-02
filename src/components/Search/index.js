import React, {PureComponent, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './../../containers/Navigation/Small';
import Loader from 'react-loaders';
import Filters from './../../containers/Search/Filters';
import Train from './Train';
import Empty from './Empty';
import Progress from './../../containers/Search/Progress';
import {Helmet} from 'react-helmet';

class Search extends PureComponent {
    handleClick = params => () => {
        this.props.paramSet('step', 1);
        this.props.paramSet('trainNumber', params.trainNumber);
        this.props.getItem(params);
        this.props.history.push('/train');
    }

    render() {
        const {loader, trains} = this.props;
        const speedee = Math.min.apply(Math, trains.map(function (o) {
            return o.tripDuration;
        }));
        const cheepee = Math.min.apply(Math, trains.map(function (o) {
            return o.minPrice;
        }));
        return (
            <Fragment>
                <Nav/>
                <Helmet>
                    <title>Поиск поезда</title>
                    <meta name="description" content="Поиск поезда"/>
                </Helmet>
                <main className="main">
                    <div className="container">
                        <Filters/>
                        {(!loader && trains.length === 0) ? (<Empty/>) : null}
                        <Loader type="line-scale-pulse-out" active={loader}/>
                        <div className="search-result">
                            { Object.keys(trains).length != 0 &&
                                <Progress/>
                            }
                            {trains.map((el, i) => (<Train key={i} {...el} handleClick={this.handleClick({
                                trainNumber: el.trainNumber,
                                destinationFrom: el.destinationCodeFrom,
                                destinationTo: el.destinationCodeTo,
                                date: el.date,
                            })} speedee={speedee} cheepee={cheepee}/>))}
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default withRouter(Search);
