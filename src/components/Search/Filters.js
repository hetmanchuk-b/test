import React, { PureComponent } from 'react';
import ServiceClass from './../Filters/ServiceClass';
import Price from './../Filters/Price';
import Time from './../Filters/Time';

export default class Filters extends PureComponent
{
  constructor(props) {
    super(props);
    this.state = { tab: 'serviceClass' };
  }

  tabSet = tab => () => {
    this.setState({ tab });
  }

  tabReset = () => {
    this.props.reset();
  }

  valueSet = key => data => {
    this.props.valueSet({ [key]: data });
  }

  serviceClassGroupActive = key => {
    const serviceClasses = this.props.filters.serviceClasses[key];

    for ( let serviceClass in serviceClasses )
      if ( serviceClasses[serviceClass] )
        return true;

    return false;
  }

  serviceClassGroupClear = key => () => {
    let serviceClasses = this.props.filters.serviceClasses;

    for ( let serviceClass in serviceClasses[key] )
      serviceClasses[key][serviceClass] = false;

    this.props.valueSet({ serviceClasses });
  }

  valueClear = key => () => {
    this.props.valueSet({ [key]: { from: null, to: null } });
  }

  render() {
    const { tab } = this.state;
    const { trains, filters, serviceClassesData } = this.props;
    const { price, serviceClasses, departureTime, arrivalTime } = filters;

    return (
      <div className="search-result">
        <div className="search-result__nav d-flex j-content-between">
          <div className="search-result__nav-content d-flex j-content-between">
            <div className="search-result__nav-item d-flex d-column">
              <span className={(tab === 'price' ? 'active' : '') +' search-result__nav-link'} onClick={this.tabSet('price')}>
                По стоимости
              </span>
              {price.from !== null ? (
                <button className="btn btn__search-result price" onClick={this.valueClear('price')}>
                  {price.from}
                  <span className="r-icon"></span>
                  -
                  {price.to}
                  <span className="r-icon"></span>
                  <span className="close-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                </button>
              ) : null}
            </div>
            <div className="search-result__nav-item d-flex d-column">
              <span className={(tab === 'serviceClass' ? 'active' : '') +' search-result__nav-link'} onClick={this.tabSet('serviceClass')}>
                По классу обслуживания
              </span>
              {this.serviceClassGroupActive('economy') ? (
                <button className="btn btn__search-result price" onClick={this.serviceClassGroupClear('economy')}>
                  Эконом-сегмент
                  <span className="close-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                </button>
              ) : null}
              {this.serviceClassGroupActive('business') ? (
                <button className="btn btn__search-result price" onClick={this.serviceClassGroupClear('business')}>
                  Бизнес-сегмент
                  <span className="close-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                </button>
              ) : null}
              {this.serviceClassGroupActive('premium') ? (
                <button className="btn btn__search-result price" onClick={this.serviceClassGroupClear('premium')}>
                  Премиум-сегмент
                  <span className="close-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                </button>
              ) : null}
            </div>
            <div className="search-result__nav-item d-flex d-column">
              <span className={(tab === 'departureTime' ? 'active' : '') +' search-result__nav-link'} onClick={this.tabSet('departureTime')}>
                По времени отправления
              </span>
              {departureTime.from !== null ? (
                <button className="btn btn__search-result time" onClick={this.valueClear('departureTime')}>
                  {departureTime.from}:00
                  -
                  {departureTime.to}:00
                  <span className="close-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
              </button>
              ) : null}
            </div>
            <div className="search-result__nav-item d-flex d-column">
              <span className={(tab === 'arrivalTime' ? 'active' : '') +' search-result__nav-link'} onClick={this.tabSet('arrivalTime')}>
                По времени прибытия
              </span>
              {arrivalTime.from !== null ? (
                <button className="btn btn__search-result time" onClick={this.valueClear('arrivalTime')}>
                  {arrivalTime.from}:00
                  -
                  {arrivalTime.to}:00
                  <span className="close-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                </button>
              ) : null}
            </div>
          </div>
          <div className="search-result__nav-item">
            <span className="search-result__nav-link throw-off active pointer" onClick={this.tabReset}>
              Сбросить
            </span>
          </div>
        </div>

        <div className="filters-tab-wrapper">
          <div className={tab === 'price' ? '' : 'hidden'}>
            <Price data={trains} onSelection={this.valueSet('price')} {...price} />
          </div>
          <div className={tab === 'serviceClass' ? '' : 'hidden'}>
            <ServiceClass selected={serviceClasses} onSelection={this.valueSet('serviceClasses')} data={serviceClassesData} />
          </div>
          <div className={tab === 'departureTime' ? '' : 'hidden'}>
            <Time data={trains} type={'departure'} onSelection={this.valueSet('departureTime')} {...departureTime} />
          </div>
          <div className={tab === 'arrivalTime' ? '' : 'hidden'}>
            <Time data={trains} type={'arrival'} onSelection={this.valueSet('arrivalTime')} {...arrivalTime} />
          </div>
        </div>
      </div>
    );
  }
}
