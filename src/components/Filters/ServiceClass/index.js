import React, { PureComponent } from 'react';

export default class ServiceClass extends PureComponent
{
  serviceClassToggle = (key, serviceClass) => () => {
    let selected = { ...this.props.selected };

    selected[key][serviceClass] = ! selected[key][serviceClass];

    this.props.onSelection(selected);
  }

  serviceClassGroupToggle = key => () => {
    let selected = { ...this.props.selected };

    for ( let serviceClass in selected[key] )
      selected[key][serviceClass] = true;

    this.props.onSelection(selected);
  }

  groupClassName = key => {
    const selected = this.props.selected[key];

    for ( let serviceClass in selected )
      if ( selected[serviceClass] )
        return 'list__title list__title-'+ key +' active';

    return 'list__title list__title-'+ key;
  }

  serviceClassName = (key, serviceClass) => {
    if ( this.props.selected[key][serviceClass] )
      return 'list__item list__item-'+ key +' d-flex d-column j-content-between pointer active';

    return 'list__item list__item-'+ key +' d-flex d-column j-content-between pointer';
  }

  render() {
    const data = this.props.data;

    return (
      <div className="search-result__info d-flex j-content-between">
        <div className="list">
          <div className="list__head d-flex j-content-between"> 
            <div className={this.groupClassName('economy')} onClick={this.serviceClassGroupToggle('economy')}>
              Эконом-сегмент

              <div className="tooltip-info">
                Вы можете выбрать все классы обслуживания эконом-сегмента в одно нажатие
              </div>
            </div>
            <div className={this.groupClassName('business')} onClick={this.serviceClassGroupToggle('business')}>
              Бизнес-сегмент

              <div className="tooltip-info">
                Вы можете выбрать все классы обслуживания бизнес-сегмента в одно нажатие
              </div>
            </div>
            <div className={this.groupClassName('premium')} onClick={this.serviceClassGroupToggle('premium')}>
              Премиум-сегмент

              <div className="tooltip-info">
                Вы можете выбрать все классы обслуживания премиум-сегмента в одно нажатие
              </div>
            </div>
          </div>

            <div className="list__content d-flex j-content-between">
             <div className={this.serviceClassName('economy', '2Р')} onClick={this.serviceClassToggle('economy', '2Р')}>
                <div className="top-link d-flex align-items-center j-content-center">
                 <span className="top-link__item">2Р</span>
                 <span className="line"></span>
                 <span className="top-link__item">Базовый</span>
                </div>

                <div className="bottom-box">
                 <div className="price">
                   от&nbsp;
                   {data['2Р'].minPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="price price__info">
                   до&nbsp;
                   {data['2Р'].maxPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="place">
                   {data['2Р'].placeQuantity} мест
                 </div>
                </div>
             </div>

             <div className={this.serviceClassName('economy', '2В')} onClick={this.serviceClassToggle('economy', '2В')}>
                <div className="top-link d-flex align-items-center j-content-center">
                 <span className="top-link__item">2В</span>
                 <span className="line"></span>
                 <span className="top-link__item">Эконом +</span>
                </div>

               <div className="bottom-box">
                 <div className="price">
                   от&nbsp;
                   {data['2В'].minPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="price price__info">
                   до&nbsp;
                   {data['2В'].maxPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="place">
                   {data['2В'].placeQuantity} мест
                 </div>
               </div>
             </div>

             <div className={this.serviceClassName('economy', '2С')} onClick={this.serviceClassToggle('economy', '2С')}>
                <div className="top-link d-flex align-items-center j-content-center">
                 <span className="top-link__item">2С</span>
                 <span className="line"></span>
                 <span className="top-link__item">Эконом</span>
                </div>

               <div className="bottom-box">
                 <div className="price">
                   от&nbsp;
                   {data['2С'].minPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="price price__info">
                   до&nbsp;
                   {data['2С'].maxPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="place">
                   {data['2С'].placeQuantity} мест
                 </div>
               </div>
             </div>

             <div className={this.serviceClassName('economy', '2Е')} onClick={this.serviceClassToggle('economy', '2Е')}>
                <div className="top-link d-flex align-items-center j-content-center">
                 <span className="top-link__item">2Е</span>
                 <span className="line"></span>
                 <span className="top-link__item">Бистро</span>
                </div>

               <div className="bottom-box">
                 <div className="price">
                   от&nbsp;
                   {data['2Е'].minPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="price price__info">
                   до&nbsp;
                   {data['2Е'].maxPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="place">
                   {data['2Е'].placeQuantity} мест
                 </div>
               </div>
             </div>

             <div className={this.serviceClassName('economy', '2Ю')} onClick={this.serviceClassToggle('economy', '2Ю')}>
                <div className="top-link d-flex align-items-center j-content-center">
                 <span className="top-link__item">2Ю</span>
                 <span className="line"></span>
                 <span className="top-link__item">Семейный</span>
                </div>

               <div className="bottom-box">
                 <div className="price">
                   от&nbsp;
                   {data['2Ю'].minPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="price price__info">
                   до&nbsp;
                   {data['2Ю'].maxPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="place">
                   {data['2Ю'].placeQuantity} мест
                 </div>
               </div>
             </div>

             <div className={this.serviceClassName('economy', '2Я')} onClick={this.serviceClassToggle('economy', '2Я')}>
                <div className="top-link d-flex align-items-center j-content-center">
                 <span className="top-link__item">2Я</span>
                 <span className="line"></span>
                 <span className="top-link__item">Комфорт</span>
                </div>

               <div className="bottom-box">
                 <div className="price">
                   от&nbsp;
                   {data['2Я'].minPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="price price__info">
                   до&nbsp;
                   {data['2Я'].maxPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="place">
                   {data['2Я'].placeQuantity} мест
                 </div>
               </div>
             </div>

             <div className={this.serviceClassName('economy', '1Ж')} onClick={this.serviceClassToggle('economy', '1Ж')}>
                <div className="top-link d-flex align-items-center j-content-center">
                 <span className="top-link__item">1Ж</span>
                 <span className="line"></span>
                 <span className="top-link__item">Купе-сьют</span>
                </div>

               <div className="bottom-box">
                 <div className="price">
                   от&nbsp;
                   {data['1Ж'].minPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="price price__info">
                   до&nbsp;
                   {data['1Ж'].maxPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="place">
                   {data['1Ж'].placeQuantity} мест
                 </div>
               </div>
             </div>

             <div className={this.serviceClassName('business', '1С')} onClick={this.serviceClassToggle('business', '1С')}>
                <div className="top-link d-flex align-items-center j-content-center">
                 <span className="top-link__item">1С</span>
                 <span className="line"></span>
                 <span className="top-link__item">Бизнес</span>
                </div>

               <div className="bottom-box">
                 <div className="price">
                   от&nbsp;
                   {data['1С'].minPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="price price__info">
                   до&nbsp;
                   {data['1С'].maxPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="place">
                   {data['1С'].placeQuantity} мест
                 </div>
               </div>

             </div>

             <div className={this.serviceClassName('premium', '1В')} onClick={this.serviceClassToggle('premium', '1В')}>
                <div className="top-link d-flex align-items-center j-content-center">
                 <span className="top-link__item">1В</span>
                 <span className="line"></span>
                 <span className="top-link__item">Первый</span>
                </div>

               <div className="bottom-box">
                 <div className="price">
                   от&nbsp;
                   {data['1В'].minPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                 <div className="price price__info">
                   до&nbsp;
                   {data['1В'].maxPrice} ₽
                   <span className="r-icon"></span>
                 </div>

                <div className="place">
                  {data['1В'].placeQuantity} мест
                </div>
              </div>
            </div>

            <div className={this.serviceClassName('premium', '1Р')} onClick={this.serviceClassToggle('premium', '1Р')}>
              <div className="top-link d-flex align-items-center j-content-center">
                <span className="top-link__item">1Р</span>
                <span className="line"></span>
                <span className="top-link__item">Переговорная</span>
              </div>

               <div className="bottom-box">
                <div className="price">
                   от&nbsp;
                   {data['1Р'].minPrice} ₽
                   <span className="r-icon"></span>
                </div>

                <div className="price price__info">
                   до&nbsp;
                   {data['1Р'].maxPrice} ₽
                   <span className="r-icon"></span>
                </div>

                <div className="place">
                   {data['1Р'].placeQuantity} мест
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}