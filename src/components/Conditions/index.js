import React, { PureComponent, Fragment } from 'react';
import {Helmet} from 'react-helmet';
import Navigation from '../../containers/Navigation/Cabinet';

class Conditions extends PureComponent {

	render() {
		return (
			<Fragment>
				<Helmet>
					<title>Политика конфиденциальности</title>
				</Helmet>
				<Navigation />
				<div className="main">
					<div className="inner-page conditions-page">
						<h3 className="conditions__title">
							Политика общества с ограниченной ответственностью "Эпсилон" в отношении обработки персональных данных
						</h3>
						<span className="conditions__subtitle">г. Москва, 2019 г.</span>
						<h3 className="conditions__title">Содержание</h3>
						<ul className="conditions__nav-list">
							<li className="conditions__nav-item"><a href="#cond-1">1. Общие положения</a></li>
							<li className="conditions__nav-item">
								<a href="#cond-2">2. Принципы и условия обработки персональных данных</a>
								<ul className="conditions__nav-sublist">
									<li>
										<a href="#cond-2-1">2.1 Принципы обработки персональных данных</a>
									</li>
									<li>
										<a href="#cond-2-2">2.2 Условия обработки персональных данных</a>
									</li>
									<li>
										<a href="#cond-2-3">2.3 Конфиденциальность персональных данных</a>
									</li>
									<li>
										<a href="#cond-2-4">2.4 Общедоступные источники персональных данных</a>
									</li>
									<li>
										<a href="#cond-2-5">2.5 Специальные категории персональных данных</a>
									</li>
									<li>
										<a href="#cond-2-6">2.6 Биометрические персональные данные</a>
									</li>
									<li>
										<a href="#cond-2-7">2.7 Поручение обработки персональных данных другому лицу</a>
									</li>
									<li>
										<a href="#cond-2-8">2.8. Обработка персональных данных граждан Российской Федерации</a>
									</li>
									<li>
										<a href="#cond-2-9">2.9. Трансграничная передача персональных данных</a>
									</li>
								</ul>
							</li>
							<li className="conditions__nav-item">
								<a href="#cond-3">3. Права субъекта персональных данных</a>
								<ul className="conditions__nav-sublist">
									<li>
										<a href="#cond-3-1">3.1. Согласие субъекта персональных данных на обработку его персональных данных</a>
									</li>
									<li>
										<a href="#cond-3-2">3.2. Права субъекта персональных данных</a>
									</li>
								</ul>
							</li>
							<li className="conditions__nav-item">
								<a href="#cond-4">4. Обеспечение безопасности персональных данных</a>
							</li>
							<li className="conditions__nav-item">
								<a href="#cond-5">5. Заключительные положения</a>
							</li>
						</ul>
						
						<h4 className="condition__topic" id="cond-1">1. Общие положения</h4>

						<p>Политика обработки персональных данных (далее — Политика) разработана в соответствии с Федеральным законом от 27.07.2006. № 152-ФЗ «О персональных данных» (далее — ФЗ-152).</p>
						<p>Настоящая Политика определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных в ООО «Эпсилон» (далее — Оператор) с целью защиты прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
						<p>В Политике используются следующие основные понятия:</p>
						<p><strong>автоматизированная обработка персональных данных</strong> — обработка персональных данных с помощью средств вычислительной техники;</p>
						<p><strong>блокирование персональных данных</strong> — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</p>
						<p><strong>информационная система персональных данных</strong> — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;</p>
						<p><strong>обезличивание персональных данных</strong> — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному субъекту персональных данных;</p>
						<p><strong>обработка персональных данных</strong> — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;</p>
						<p><strong>оператор</strong> — государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;</p>
						<p><strong>персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных);</p>
						<p><strong>предоставление персональных данных</strong> — действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;</p>
						<p><strong>распространение персональных данных</strong> — действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;</p>
						<p><strong>трансграничная передача персональных данных</strong> — передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;</p>
						<p><strong>уничтожение персональных данных</strong> — действия, в результате которых невозможно восстановить содержание персональных данных в информационной системе персональных данных и (или) результате которых уничтожаются материальные носители персональных данных.</p>
						<p>Оператор обязан опубликовать или иным образом обеспечить неограниченный доступ к настоящей Политике обработки персональных данных в соответствии с ч. 2 ст. 18.1. ФЗ 152.</p>

						<h4 className="condition__topic" id="cond-2">2. Принципы и условия обработки персональных данных</h4>
						<h6 className="condition__subtopic" id="cond-2-1">2.1 Принципы обработки персональных данных</h6>

						<p>Обработка персональных данных у Оператора осуществляется на основе следующих принципов:</p>
						<p>— законности и справедливой основы;</p>
						<p>— ограничения обработки персональных данных достижением конкретных, заранее определенных и законных целей;</p>
						<p>— недопущения обработки персональных данных, несовместимой с целями сбора персональных данных;</p>
						<p>— недопущения объединения баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой;</p>
						<p>— обработки только тех персональных данных, которые отвечают целям их обработки;</p>
						<p>— соответствия содержания и объема обрабатываемых персональных данных заявленным целям обработки;</p>
						<p>— недопущения обработки персональных данных, избыточных по отношению к заявленным целям их обработки;</p>
						<p>— обеспечения точности, достаточности и актуальности персональных данных по отношению к целям обработки персональных данных;</p>
						<p>— уничтожения либо обезличивания персональных данных по достижении целей их обработки или в случае утраты необходимости в достижении этих целей, при невозможности устранения Оператором допущенных нарушений персональных данных, если иное не предусмотрено федеральным законом.</p>
						<h6 className="condition__subtopic" id="cond-2-2">2.2 Условия обработки персональных данных</h6>

						<p>Оператор производит обработку персональных данных при наличии хотя бы одного из следующих условий:</p>
						<p>— обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных;</p>
						<p>— обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления и выполнения возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей;</p>
						<p>— обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве;</p>
						<p>— обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем;</p>
						<p>— обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных;</p>
						<p>— осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее — общедоступные персональные данные);</p>
						<p>— осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.</p>

						<h6 className="condition__subtopic" id="cond-2-3">2.3. Конфиденциальность персональных данных</h6>

						<p>Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.</p>

						<h6 className="condition__subtopic" id="cond-2-4">2.4. Общедоступные источники персональных данных</h6>

						<p>В целях информационного обеспечения у Оператора могут создаваться общедоступные источники персональных данных субъектов персональных данных, в том числе справочники и адресные книги. В общедоступные источники персональных данных с письменного согласия субъекта персональных данных могут включаться его фамилия, имя, отчество, дата и место рождения, должность, номера контактных телефонов, адрес электронной почты и иные персональные данные, сообщаемые субъектом персональных данных.</p>
						<p>Сведения о субъекте персональных данных должны быть в любое время исключены из общедоступных источников персональных данных по требованию субъекта персональных данных, уполномоченного органа по защите прав субъектов персональных данных либо по решению суда.</p>

						<h6 className="condition__subtopic" id="cond-2-5">2.5. Специальные категории персональных данных</h6>

						<p>Обработка Оператором специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья, интимной жизни, допускается в случаях, если:</p>
						<p>— субъект персональных данных дал согласие в письменной форме на обработку своих персональных данных;</p>
						<p>— персональные данные сделаны общедоступными субъектом персональных данных;</p>
						<p>— обработка персональных данных осуществляется в соответствии с законодательством о государственной социальной помощи, трудовым законодательством, законодательством Российской Федерации о пенсиях по государственному пенсионному обеспечению, о трудовых пенсиях;</p>
						<p>— обработка персональных данных необходима для защиты жизни, здоровья или иных жизненно важных интересов субъекта персональных данных либо жизни, здоровья или иных жизненно важных интересов других лиц и получение согласия субъекта персональных данных невозможно;</p>
						<p>— обработка персональных данных осуществляется в медико-профилактических целях, в целях установления медицинского диагноза, оказания медицинских и медико-социальных услуг при условии, что обработка персональных данных осуществляется лицом, профессионально занимающимся медицинской деятельностью и обязанным в соответствии с законодательством Российской Федерации сохранять врачебную тайну;</p>
						<p>— обработка персональных данных необходима для установления или осуществления прав субъекта персональных данных или третьих лиц, а равно и в связи с осуществлением правосудия;</p>
						<p>— обработка персональных данных осуществляется в соответствии с законодательством об обязательных видах страхования, со страховым законодательством.</p>
						<p>Обработка специальных категорий персональных данных, осуществлявшаяся в случаях, предусмотренных пунктом 4 статьи 10 ФЗ-152 должна быть незамедлительно прекращена, если устранены причины, вследствие которых осуществлялась их обработка, если иное не установлено федеральным законом.</p>
						<p>Обработка персональных данных о судимости может осуществляться Оператором исключительно в случаях и в порядке, которые определяются в соответствии с федеральными законами.</p>

						<h6 className="condition__subtopic" id="cond-2-6">2.6. Биометрические персональные данные</h6>

						<p>Сведения, которые характеризуют физиологические и биологические особенности человека, на основании которых можно установить его личность — биометрические персональные данные — могут обрабатываться Оператором только при наличии согласия субъекта персональных данных в письменной форме.</p>

						<h6 className="condition__subtopic" id="cond-2-7">2.7 Поручение обработки персональных данных другому лицу</h6>

						<p>Оператор вправе поручить обработку персональных данных другому лицу с согласия субъекта персональных данных, если иное не предусмотрено федеральным законом, на основании заключаемого с этим лицом договора. Лицо, осуществляющее обработку персональных данных по поручению Оператора, обязано соблюдать принципы и правила обработки персональных данных, предусмотренные ФЗ-152 и настоящей Политикой</p>

						<h6 className="condition__subtopic" id="cond-2-8">2.8. Обработка персональных данных граждан Российской Федерации</h6>

						<p>В соответствии со статьей 2 Федерального закона от 21 июля 2014 года № 242-ФЗ «О внесении изменений в отдельные законодательные акты Российской Федерации в части уточнения порядка обработки персональных данных в информационно-телекоммуникационных сетях» при сборе персональных данных, в том числе посредством информационно-телекоммуникационной сети «Интернет», оператор обязан обеспечить запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение персональных данных граждан Российской Федерации с использованием баз данных, находящихся на территории Российской Федерации, за исключением случаев:</p>
						<p>— обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления и выполнения возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей;</p>
						<p>— обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве (далее — исполнение судебного акта);</p>
						<p>— обработка персональных данных необходима для исполнения полномочий федеральных органов исполнительной власти, органов государственных внебюджетных фондов, исполнительных органов государственной власти субъектов Российской Федерации, органов местного самоуправления и функций организаций, участвующих в предоставлении соответственно государственных и муниципальных услуг, предусмотренных Федеральным законом от 27 июля 2010 года N 210-ФЗ «Об организации предоставления государственных и муниципальных услуг», включая регистрацию субъекта персональных данных на едином портале государственных и муниципальных услуг и (или) региональных порталах государственных и муниципальных услуг;</p>
						<p>— обработка персональных данных необходима для осуществления профессиональной деятельности журналиста и (или) законной деятельности средства массовой информации либо научной, литературной или иной творческой деятельности при условии, что при этом не нарушаются права и законные интересы субъекта персональных данных.</p>

						<h6 className="condition__subtopic" id="cond-2-9">2.9. Трансграничная передача персональных данных</h6>

						<p>Оператор обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается адекватная защита прав субъектов персональных данных, до начала осуществления такой передачи.</p>
						<p>Трансграничная передача персональных данных на территории иностранных государств, не обеспечивающих адекватной защиты прав субъектов персональных данных, может осуществляться в случаях:</p>
						<p>— наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных;</p>
						<p>— исполнения договора, стороной которого является субъект персональных данных.</p>

						<h4 className="condition__topic" id="cond-3">3. Права субъекта персональных данных</h4>
						<h6 className="condition__subtopic" id="cond-3-1">3.1. Согласие субъекта персональных данных на обработку его персональных данных</h6>

						<p>Субъект персональных данных принимает решение о предоставлении его персональных данных и дает согласие на их обработку свободно, своей волей и в своем интересе. Согласие на обработку персональных данных может быть дано субъектом персональных данных или его представителем в любой позволяющей подтвердить факт его получения форме, если иное не установлено федеральным законом.</p>
						
						<h6 className="condition__subtopic" id="cond-3-2">3.2. Права субъекта персональных данных</h6>

						<p>Субъект персональных данных имеет право на получение у Оператора информации, касающейся обработки его персональных данных, если такое право не ограничено в соответствии с федеральными законами. Субъект персональных данных вправе требовать от Оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав.</p>
						<p>Обработка персональных данных в целях продвижения товаров, работ, услуг на рынке путем осуществления прямых контактов с субъектом персональных данных (потенциальным потребителем) с помощью средств связи, а также в целях политической агитации допускается только при условии предварительного согласия субъекта персональных данных.</p>
						<p>Оператор обязан немедленно прекратить по требованию субъекта персональных данных обработку его персональных данных в вышеуказанных целях.</p>
						<p>Запрещается принятие на основании исключительно автоматизированной обработки персональных данных решений, порождающих юридические последствия в отношении субъекта персональных данных или иным образом затрагивающих его права и законные интересы, за исключением случаев, предусмотренных федеральными законами, или при наличии согласия в письменной форме субъекта персональных данных.</p>
						<p>Если субъект персональных данных считает, что Оператор осуществляет обработку его персональных данных с нарушением требований ФЗ-152 или иным образом нарушает его права и свободы, субъект персональных данных вправе обжаловать действия или бездействие Оператора в Уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке. Субъект персональных данных имеет право на защиту своих прав и законных интересов, в том числе на возмещение убытков и (или) компенсацию морального вреда.</p>

						<h4 className="condition__topic" id="cond-4">4. Обеспечение безопасности персональных данных</h4>

						<p>Безопасность персональных данных, обрабатываемых Оператором, обеспечивается реализацией правовых, организационных и технических мер, необходимых для обеспечения требований федерального законодательства в области защиты персональных данных.</p>
						<p>Для предотвращения несанкционированного доступа к персональным данным Оператором применяются следующие организационно-технические меры:</p>
						<p>— назначение должностных лиц, ответственных за организацию обработки и защиты персональных данных;</p>
						<p>— ограничение состава лиц, допущенных к обработке персональных данных;</p>
						<p>— ознакомление субъектов с требованиями федерального законодательства и нормативных документов Оператора по обработке и защите персональных данных;</p>
						<p>— организация учета, хранения и обращения носителей, содержащих информацию с персональными данными;</p>
						<p>— определение угроз безопасности персональных данных при их обработке, формирование на их основе моделей угроз;</p>
						<p>— разработка на основе модели угроз системы защиты персональных данных;</p>
						<p>— проверка готовности и эффективности использования средств защиты информации;</p>
						<p>— разграничение доступа пользователей к информационным ресурсам и программно-аппаратным средствам обработки информации;</p>
						<p>— регистрация и учет действий пользователей информационных систем персональных данных;</p>
						<p>— использование антивирусных средств и средств восстановления системы защиты персональных данных;</p>
						<p>— применение в необходимых случаях средств межсетевого экранирования, обнаружения вторжений, анализа защищенности и средств криптографической защиты информации;</p>
						<p>— организация пропускного режима на территорию Оператора, охраны помещений с техническими средствами обработки персональных данных.</p>

						<h4 className="condition__topic" id="cond-5">5. Заключительные положения</h4>

						<p>Иные права и обязанности Оператора в связи с обработкой персональных данных определяются законодательством Российской Федерации в области персональных данных.</p>
						<p>Работники Оператора, виновные в нарушении норм, регулирующих обработку и защиту персональных данных, несут материальную, дисциплинарную, административную, гражданско-правовую или уголовную ответственность в порядке, установленном федеральными законами.</p>						
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Conditions;