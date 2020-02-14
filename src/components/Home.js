import React, { Fragment, PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from './../containers/Navigation/Large';
import Timer from './Timer';
import {Helmet} from 'react-helmet';

class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { accordionTarget: null };
	}

	handleArrowDown = () => {	
		document.querySelectorAll('.fa-caret-right').forEach(function(item) {
			item.classList.remove('down');
		});
		setTimeout(() => {
			if (document.querySelector('.show.collapse') !== null) {
				document.querySelector('.show.collapse').parentNode.querySelector('.fa-caret-right').classList.toggle('down');
			}
		}, 200);
	}

	accordionSetTarget = target => () => {
		this.setState({ accordionTarget: target === this.state.accordionTarget ? null : target });
		this.handleArrowDown();
	}

	

	render() {
		const { accordionTarget } = this.state;

		return (
		  <Fragment>
				<Navigation />
				<Helmet>
					<title>Главная</title>
				</Helmet>

				<main className="main">  
					<section className="features">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 offset-lg-2">
									<h1 className="sect-title">Наши уникальные услуги</h1>
									<p className="sect-subtitle">Наш сайт станет вашим надёжным и верным помощником для оформления билетов на высокоскоростные поезда "Сапсан".</p>
									<p className="sect-subtitle">Наши уникальные сервисы помогут вам оформить билеты, даже когда мест уже нет в продаже или продажа ещё не открыта.</p>
									<p className="sect-subtitle">Счастливые пассажиры уже едут на встречу приключениям, купив билеты у нас. Присоединяйся!</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<div className="feature">
										<img src="img/icons/feature-image1.svg" alt="" className="img-fluid feature-image" />
										<h3 className="feature-name">Лист ожидания</h3>
										<p className="feature-desc">Сервис "Лист ожидания" предназначен для покупки билетов тогда, когда их уже нет в продаже.</p>
										<button className="btn btn__main" onClick={() => this.props.history.push('/tasks')}>Найти нужные билеты</button>
									</div>
								</div>
								<div className="col-md-4">
									<div className="feature">
										<img src="img/icons/feature-image2.svg" alt="" className="img-fluid feature-image" />
										<h3 className="feature-name">Будильник</h3>
										<p className="feature-desc">Сервис самостоятельно "разбудит" сайт и оформит билеты в момент открытия продажи, пока вы спите.</p>
										<button className="btn btn__main" onClick={() => this.props.history.push('/alarm')}>Найти нужные билеты</button>
									</div>
								</div>
								<div className="col-md-4">
									<div className="feature">
										<img src="img/icons/feature-image3.svg" alt="" className="img-fluid feature-image" />
										<h3 className="feature-name">Пакетное оформление</h3>
										<p className="feature-desc">Сервис "Пакетное оформление" для пассажиров, которые путешествуют часто и с известной регулярностью.</p>
										<button className="btn btn__main" onClick={() => this.props.history.push('/package')}>Найти нужные билеты</button>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="questions">
						<div className="container">
							<div className="row question">
								<div className="col-12">
									<h2 className="question-title">Распространённые вопросы</h2>
								</div>
								<div className="col-md-4 ">
									<div className="question-cat"><p>Общие</p><i className="fas fa-caret-right"></i></div>
									<div className="question-cat hidden"><p>Стоимость</p><i className="fas fa-caret-right"></i></div>
									<div className="question-cat hidden"><p>Возврат</p><i className="fas fa-caret-right"></i></div>
									<div className="question-cat hidden"><p>...</p><i className="fas fa-caret-right"></i></div>
									<div className="question-cat hidden"><p>...</p><i className="fas fa-caret-right"></i></div>
									<div className="question-cat hidden"><p>...</p><i className="fas fa-caret-right"></i></div>
								</div>
								<div className="col-md-8 tab-content" id="v-pills-tabContent">
									<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
										 aria-labelledby="v-pills-home-tab">
										<div id="accordion-general">
											<div className="card">
												<div className="card-header" onClick={this.accordionSetTarget('card-general-1')}>
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-general-1"
																aria-expanded="false" aria-controls="collapseOne">
															Как купить билет?
														</button>
													</h5>
												</div>

												<div id="card-general-1" aria-labelledby="headingOne" data-parent="#accordion"
													className={(accordionTarget === 'card-general-1' ? 'show' : '') +' collapse'}>
													<div className="card-body">
														<p>Когда билет есть:</p>
														<p>Выберите поезд и место в вагоне.</p>
														<p>Введите данные пассажиров и отправьте заказ в корзину.</p>
														<p>Оплатите билет банковской картой.</p>
														<p>На экране появится билет.</p>
														<p>На Вашу почту придет билет.</p>
														<p>Стоимость оформления билета от 312р. +2,0%.</p>
														<p>Или 13% при стоимости билета свыше 10 000 р.</p>
														<hr />
														<p>Когда билета нет:</p>
														<p>Воспользуйтесь сервисом Лист Ожидания, он доступен из Личного Кабинета с</p>
														<p>привязанной банковской картой.</p>
														<p>Выберите поезд, на который Вам нужен билет.</p>
														<p>Введите данные пассажиров и отправьте заказ в корзину.</p>
														<p>Наш сервис подберет билет.</p>
														<p>Когда билет найдется, мы автоматически оплатим его, с Вашей привязанной карты и на</p>
														<p>Вашу почту придет билет.</p>
														<p>Стоимость оформления билета от 300р.</p>
														<p>Сервис доступен круглосуточно.</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" onClick={this.accordionSetTarget('card-general-2')}>
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-general-2"
																aria-expanded="false" aria-controls="collapseOne">
															Как оплатить?
														</button>
													</h5>
												</div>

												<div id="card-general-2" className="collapse" aria-labelledby="headingOne" data-parent="#accordion"
													className={(accordionTarget === 'card-general-2' ? 'show' : '') +' collapse'}>
													<div className="card-body">
														<p>Банковскими картами Visa, MasterCard, МИР</p>
														<p>Оплата банковской картой производится через платежный шлюз ПАО &quot;Сбербанк России&quot;,</p>
														<p>PayAnyWay, Яндекс.Деньги. Соединение с платежным шлюзом и передача информации</p>
														<p>осуществляется в защищенном режиме с использованием протокола шифрования SSL.</p>
														<p>Оплата банковской картой производится только после подтверждения бронирования</p>
														<p>билета на ваше имя.</p>
														<p>При оплате банковской картой общая сумма увеличивается на 2,0%.</p>
														<p>Успешная оплата проходит только картами Visa, MasterCard, МИР с 3Ds.</p>
														<hr />
														<p>Порядок оплаты билета</p>
														<p>Банковскими картами Visa, MasterCard, МИР, JCB онлайн. Выберите поезд и место в</p>
														<p>вагоне, заполните данные пассажиров. Для оплаты введите данные банковской карты,</p>
														<p>введите код 3D-security, полученный в СМС от вашего банка.</p>
														<p>В случае успешной оплаты через несколько секунд отобразится ваш электронный билет и</p>
														<p>на ваш email придет такой же билет.</p>
														<p>Распечатайте и предъявите его при посадке в поезд, вместе с документом указанным в</p>
														<p>билете.</p>
														<p>При возврате билета деньги за вычетом комиссий вернутся на вашу карту.</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" onClick={this.accordionSetTarget('card-general-3')}>
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-general-3"
																aria-expanded="false" aria-controls="collapseOne">
															Как связаться с нами?
														</button>
													</h5>
												</div>

												<div id="card-general-3" className="collapse" aria-labelledby="headingOne" data-parent="#accordion"
													className={(accordionTarget === 'card-general-3' ? 'show' : '') +' collapse'}>
													<div className="card-body">
														<p>Мы оказываем поддержку по телефонам с 10:00 до 20:00 каждый день.</p>
														<hr />
														<p>Справочная РЖД по общим вопросам: 8 800 775 0000</p>
														<p>Если у Вас возникли вопросы в процессе оформления билетов: +7 499 ххх хх хх, +7 (ххх)</p>
														<p>ххх-хх-хх</p>
														<hr />
														<p><a href="mailto:contact@sapsan.express">Emai: contact@sapsan.express</a></p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" onClick={this.accordionSetTarget('card-general-4')}>
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-general-4"
																aria-expanded="false" aria-controls="collapseOne">
															Как сдать билет?
														</button>
													</h5>
												</div>

												<div id="card-general-4" className="collapse" aria-labelledby="headingOne" data-parent="#accordion"
													className={(accordionTarget === 'card-general-4' ? 'show' : '') +' collapse'}>
													<div className="card-body">
														<p>Перейдите по ссылке в письме с билетами, чтобы отказаться от билетов.</p>
														<p>Введите номер сдаваемого билета.</p>
														<p>На ваш email придет подтверждение о сдаче билета.</p>
														<p>Комиссии РЖД при возврате билета</p>
														<p>Билеты на поезда внутри России</p>
														<p>При возврате билета взимается сбор в размере 212 руб. за каждое место.</p>
														<p>Сумма возврата зависит от времени сдачи билета до отправления поезда:</p>
														<p>- не позднее, чем за 8 часов до отправления полная стоимость проезда;</p>
														<p>- от 2 до 8 часов до отправления стоимость билета и 50% стоимости плацкарты;</p>
														<p>- менее чем за 2 часа до отправления только стоимость билета. Стоимость плацкарты не возвращается;</p>
														<p>- при опоздании на поезд в течение 12 часов после отправления, либо вследствие болезни / несчастного случая (при наличии подтверждающих документов) в течение 5 суток с момента отправления поезда только стоимость билета. Стоимость плацкарты не возвращается.</p>
														<hr />
														<p>Комиссии сервиса при возврате билета:</p>
														<p>При возврате билета сервисные сборы и суммы комиссий банков не возвращаются.</p>
														<p>Возврат денег за билеты производится на банковскую карту, с которой была произведена покупка билета, в течение одного рабочего дня с момента поступления сумм возврата от РЖД.</p>
														<p>Возврат средств от РЖД может занять 30 дней. Из практики, РЖД перечисляет деньги в течение 7 дней.</p>
														<hr />
														<p>Сроки возврата электронного билета с пройденной электронной регистрацией:</p>
														<p>От времени сдачи билета зависит процедура возврата билета и сроки возврата денег на вашу карту.</p>
														<p>Если сдаете билет не менее чем за 1 час до отправления поезда с начальной станции отправления поезда, то деньги вернутся быстро.</p>
														<p>Если сдаете билет менее чем 1 час до отправления поезда и не более 20 минут после отправления поезда, то нужно писать заявление и деньги вернутся не раньше чем через 30 дней.</p>
														<p>Если сдаете билет в период с 20 минут до 3 часов на станции отправления поезда, то деньги вернутся от 7 до 30 дней.</p>
														<p>Если вы опоздали на поезд (не воспользовались билетом), то билет можно сдать только на станции посадки пассажира не позднее 12 часов после отправления поезда со станции посадки пассажира.</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" onClick={this.accordionSetTarget('card-general-5')}>
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-general-5"
															aria-expanded="false" aria-controls="collapseOne">
															Сколько это стоит?
														</button>
													</h5>
												</div>

												<div id="card-general-5" className="collapse" aria-labelledby="headingOne" data-parent="#accordion"
														className={(accordionTarget === 'card-general-5' ? 'show' : '') +' collapse'}>
													<div className="card-body">
														<p>Стоимость услуг</p>
														<p>При стоимости билета 3 999 рублей, включительно - стоимость услуг по оформлению каждого билета составляет 312 рублей + 2,0% от стоимости всего заказа.</p>
														<p>При стоимости билета от 4 000 рублей до 5 999 рублей, включительно - стоимость услуг по оформлению каждого билета составляет 402 рубля + 2,0% от стоимости всего заказа.</p>
														<p>При стоимости билета от 6 000 рублей до 9 999 рублей, включительно - стоимость услуг</p>
														<p>по оформлению каждого билета составляет 522 рубля + 2,0% от стоимости всего заказа.</p>
														<p>При стоимости билета 10 000 рублей и более - стоимость услуг составляет 12% от стоимости билетов.</p>
														<hr />
														<p>Найти билет/Лист Ожидания – 1000 рублей + 2.0% от стоимости заказа.</p>
														<p>Если билета на нужный Вам поезд нет в наличии, то мы будем его искать и сразу же купим его для Вас, для этого Вам необходимо воспользоваться сервисом Лист Ожидания после входа/регистрации в Личном Кабинете, привязав банковскую карту с суммой положительного баланса на ней равную, либо выше стоимости билета с учетом стоимости услуги подбора и оформления билета, а так же комиссии банка. Услуга предоставляется не позднее чем за 1 час до отправления поезда.</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header hidden">
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-general-6"
																aria-expanded="false" aria-controls="collapseOne">
															Collapsible Group Item #6
														</button>
													</h5>
												</div>

												<div id="card-general-6" className="collapse" aria-labelledby="headingOne"
													 data-parent="#accordion">
													<div className="card-body">
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
														richardson ad
														squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
														quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
														on it
														squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
														helvetica,
														craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
														excepteur
														butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
														synth
														nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
										<div id="accordion-cost">
											<div className="card">
												<div className="card-header">
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-cost-1"
																aria-expanded="false" aria-controls="collapseOne">
															Collapsible Group Item #1
														</button>
													</h5>
												</div>

												<div id="card-cost-1" className="collapse" aria-labelledby="headingOne"
													 data-parent="#accordion">
													<div className="card-body">
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
														richardson ad
														squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
														quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
														on it
														squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
														helvetica,
														craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
														excepteur
														butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
														synth
														nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header">
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-cost-2"
																aria-expanded="false" aria-controls="collapseOne">
															Collapsible Group Item #1
														</button>
													</h5>
												</div>

												<div id="card-cost-2" className="collapse" aria-labelledby="headingOne"
													 data-parent="#accordion">
													<div className="card-body">
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
														richardson ad
														squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
														quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
														on it
														squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
														helvetica,
														craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
														excepteur
														butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
														synth
														nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header">
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-cost-3"
																aria-expanded="false" aria-controls="collapseOne">
															Collapsible Group Item #6
														</button>
													</h5>
												</div>

												<div id="card-cost-3" className="collapse" aria-labelledby="headingOne"
													 data-parent="#accordion">
													<div className="card-body">
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
														richardson ad
														squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
														quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
														on it
														squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
														helvetica,
														craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
														excepteur
														butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
														synth
														nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header">
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-cost-4"
																aria-expanded="false" aria-controls="collapseOne">
															Collapsible Group Item #6
														</button>
													</h5>
												</div>

												<div id="card-cost-4" className="collapse" aria-labelledby="headingOne"
													 data-parent="#accordion">
													<div className="card-body">
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
														richardson ad
														squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
														quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
														on it
														squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
														helvetica,
														craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
														excepteur
														butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
														synth
														nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header">
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-cost-5"
																aria-expanded="false" aria-controls="collapseOne">
															Collapsible Group Item #6
														</button>
													</h5>
												</div>

												<div id="card-cost-5" className="collapse" aria-labelledby="headingOne"
													 data-parent="#accordion">
													<div className="card-body">
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
														richardson ad
														squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
														quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
														on it
														squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
														helvetica,
														craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
														excepteur
														butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
														synth
														nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header">
													<i className="fas fa-caret-right"></i>
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#card-cost-6"
																aria-expanded="false" aria-controls="collapseOne">
															Collapsible Group Item #6
														</button>
													</h5>
												</div>

												<div id="card-cost-6" className="collapse" aria-labelledby="headingOne"
													 data-parent="#accordion">
													<div className="card-body">
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
														richardson ad
														squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
														quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
														on it
														squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
														helvetica,
														craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
														excepteur
														butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
														synth
														nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</Fragment>
		);
	}
}

export default withRouter(Home);
