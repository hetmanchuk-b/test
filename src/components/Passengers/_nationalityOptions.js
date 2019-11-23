const nationalityOptions = [
  { value: 'AB', label: 'Абхазия' },
  { value: 'AU', label: 'Австралия' },
  { value: 'AT', label: 'Австрия' },
  { value: 'AZ', label: 'Азербайджан' },
  { value: 'AL', label: 'Албания' },
  { value: 'DZ', label: 'Алжир' },
  { value: 'AO', label: 'Ангола' },
  { value: 'AD', label: 'Андорра' },
  { value: 'AG', label: 'Антигуа и Барбуда' },
  { value: 'AR', label: 'Аргентина' },
  { value: 'AM', label: 'Армения' },
  { value: 'AF', label: 'Афганистан' },
  { value: 'BS', label: 'Багамские Острова' },
  { value: 'BD', label: 'Бангладеш' },
  { value: 'BB', label: 'Барбадос' },
  { value: 'BH', label: 'Бахрейн' },
  { value: 'BZ', label: 'Белиз' },
  { value: 'BY', label: 'Белоруссия' },
  { value: 'BE', label: 'Бельгия' },
  { value: 'BJ', label: 'Бенин' },
  { value: 'BG', label: 'Болгария' },
  { value: 'BO', label: 'Боливия' },
  { value: 'BA', label: 'Босния и Герцеговина' },
  { value: 'BW', label: 'Ботсвана' },
  { value: 'BR', label: 'Бразилия' },
  { value: 'BN', label: 'Бруней' },
  { value: 'BF', label: 'Буркина-Фасо' },
  { value: 'BI', label: 'Бурунди' },
  { value: 'BT', label: 'Бутан' },
  { value: 'VU', label: 'Вануату' },
  { value: 'VA', label: 'Ватикан' },
  { value: 'GB', label: 'Великобритания' },
  { value: 'HU', label: 'Венгрия' },
  { value: 'VE', label: 'Венесуэла' },
  { value: 'TL', label: 'Восточный Тимор' },
  { value: 'VN', label: 'Вьетнам' },
  { value: 'GA', label: 'Габон' },
  { value: 'HT', label: 'Гаити' },
  { value: 'GY', label: 'Гайана' },
  { value: 'GM', label: 'Гамбия' },
  { value: 'GH', label: 'Гана' },
  { value: 'GT', label: 'Гватемала' },
  { value: 'GN', label: 'Гвинея' },
  { value: 'GW', label: 'Гвинея-Бисау' },
  { value: 'DE', label: 'Германия' },
  { value: 'HN', label: 'Гондурас' },
  { value: 'PS', label: 'Государство Палестина' },
  { value: 'GD', label: 'Гренада' },
  { value: 'GR', label: 'Греция' },
  { value: 'GE', label: 'Грузия' },
  { value: 'DK', label: 'Дания' },
  { value: 'DJ', label: 'Джибути' },
  { value: 'DM', label: 'Доминика' },
  { value: 'DO', label: 'Доминиканская Республика' },
  { value: 'CD', label: 'ДР Конго' },
  { value: 'EG', label: 'Египет' },
  { value: 'ZM', label: 'Замбия' },
  { value: 'ZW', label: 'Зимбабве' },
  { value: 'IL', label: 'Израиль' },
  { value: 'IN', label: 'Индия' },
  { value: 'ID', label: 'Индонезия' },
  { value: 'JO', label: 'Иордания' },
  { value: 'IQ', label: 'Ирак' },
  { value: 'IR', label: 'Иран' },
  { value: 'IE', label: 'Ирландия' },
  { value: 'IS', label: 'Исландия' },
  { value: 'ES', label: 'Испания' },
  { value: 'IT', label: 'Италия' },
  { value: 'YE', label: 'Йемен' },
  { value: 'CV', label: 'Кабо-Верде' },
  { value: 'KZ', label: 'Казахстан' },
  { value: 'KH', label: 'Камбоджа' },
  { value: 'CM', label: 'Камерун' },
  { value: 'CA', label: 'Канада' },
  { value: 'QA', label: 'Катар' },
  { value: 'KE', label: 'Кения' },
  { value: 'CY', label: 'Кипр' },
  { value: 'KG', label: 'Киргизия' },
  { value: 'KI', label: 'Кирибати' },
  { value: 'CN', label: 'Китай' },
  { value: 'KP', label: 'КНДР' },
  { value: 'CO', label: 'Колумбия' },
  { value: 'KM', label: 'Коморские Острова' },
  { value: 'CR', label: 'Коста-Рика' },
  { value: 'CI', label: 'Кот-д\'Ивуар' },
  { value: 'CU', label: 'Куба' },
  { value: 'KW', label: 'Кувейт' },
  { value: 'LA', label: 'Лаос' },
  { value: 'LV', label: 'Латвия' },
  { value: 'LS', label: 'Лесото' },
  { value: 'LR', label: 'Либерия' },
  { value: 'LB', label: 'Ливан' },
  { value: 'LY', label: 'Ливия' },
  { value: 'LT', label: 'Литва' },
  { value: 'LI', label: 'Лихтенштейн' },
  { value: 'LU', label: 'Люксембург' },
  { value: 'MU', label: 'Маврикий' },
  { value: 'MR', label: 'Мавритания' },
  { value: 'MG', label: 'Мадагаскар' },
  { value: 'MW', label: 'Малави' },
  { value: 'MY', label: 'Малайзия' },
  { value: 'ML', label: 'Мали' },
  { value: 'MV', label: 'Мальдивские Острова' },
  { value: 'MT', label: 'Мальта' },
  { value: 'MA', label: 'Марокко' },
  { value: 'MH', label: 'Маршалловы Острова' },
  { value: 'MX', label: 'Мексика' },
  { value: 'MZ', label: 'Мозамбик' },
  { value: 'MD', label: 'Молдавия' },
  { value: 'MC', label: 'Монако' },
  { value: 'MN', label: 'Монголия' },
  { value: 'MM', label: 'Мьянма' },
  { value: 'NA', label: 'Намибия' },
  { value: 'NR', label: 'Науру' },
  { value: 'NP', label: 'Непал' },
  { value: 'NE', label: 'Нигер' },
  { value: 'NG', label: 'Нигерия' },
  { value: 'NL', label: 'Нидерланды' },
  { value: 'NI', label: 'Никарагуа' },
  { value: 'NZ', label: 'Новая Зеландия' },
  { value: 'NO', label: 'Норвегия' },
  { value: 'AE', label: 'ОАЭ' },
  { value: 'OM', label: 'Оман' },
  { value: 'PK', label: 'Пакистан' },
  { value: 'PW', label: 'Палау' },
  { value: 'PA', label: 'Панама' },
  { value: 'PG', label: 'Папуа - Новая Гвинея' },
  { value: 'PY', label: 'Парагвай' },
  { value: 'PE', label: 'Перу' },
  { value: 'PL', label: 'Польша' },
  { value: 'PT', label: 'Португалия' },
  { value: 'CG', label: 'Республика Конго' },
  { value: 'KR', label: 'Республика Корея' },
  { value: 'RU', label: 'Россия' },
  { value: 'RW', label: 'Руанда' },
  { value: 'RO', label: 'Румыния' },
  { value: 'SV', label: 'Сальвадор' },
  { value: 'WS', label: 'Самоа' },
  { value: 'SM', label: 'Сан-Марино' },
  { value: 'ST', label: 'Сан-Томе и Принсипи' },
  { value: 'SA', label: 'Саудовская Аравия' },
  { value: 'MK', label: 'Северная Македония' },
  { value: 'SC', label: 'Сейшельские Острова' },
  { value: 'SN', label: 'Сенегал' },
  { value: 'VC', label: 'Сент-Винсент и Гренадины' },
  { value: 'KN', label: 'Сент-Китс и Невис' },
  { value: 'LC', label: 'Сент-Люсия' },
  { value: 'RS', label: 'Сербия' },
  { value: 'SG', label: 'Сингапур' },
  { value: 'SY', label: 'Сирия' },
  { value: 'SK', label: 'Словакия' },
  { value: 'SI', label: 'Словения' },
  { value: 'SB', label: 'Соломоновы Острова' },
  { value: 'SO', label: 'Сомали' },
  { value: 'SD', label: 'Судан' },
  { value: 'SR', label: 'Суринам' },
  { value: 'US', label: 'США' },
  { value: 'SL', label: 'Сьерра-Леоне' },
  { value: 'TJ', label: 'Таджикистан' },
  { value: 'TH', label: 'Таиланд' },
  { value: 'TZ', label: 'Танзания' },
  { value: 'TG', label: 'Того' },
  { value: 'TO', label: 'Тонга' },
  { value: 'TT', label: 'Тринидад и Тобаго' },
  { value: 'TV', label: 'Тувалу' },
  { value: 'TN', label: 'Тунис' },
  { value: 'TM', label: 'Туркмения' },
  { value: 'TR', label: 'Турция' },
  { value: 'UG', label: 'Уганда' },
  { value: 'UZ', label: 'Узбекистан' },
  { value: 'UA', label: 'Украина' },
  { value: 'UY', label: 'Уругвай' },
  { value: 'FM', label: 'Федеративные Штаты Микронезии' },
  { value: 'FJ', label: 'Фиджи' },
  { value: 'PH', label: 'Филиппины' },
  { value: 'FI', label: 'Финляндия' },
  { value: 'FR', label: 'Франция' },
  { value: 'HR', label: 'Хорватия' },
  { value: 'CF', label: 'ЦАР' },
  { value: 'TD', label: 'Чад' },
  { value: 'ME', label: 'Черногория' },
  { value: 'CZ', label: 'Чехия' },
  { value: 'CL', label: 'Чили' },
  { value: 'CH', label: 'Швейцария' },
  { value: 'SE', label: 'Швеция' },
  { value: 'LK', label: 'Шри-Ланка' },
  { value: 'EC', label: 'Эквадор' },
  { value: 'GQ', label: 'Экваториальная Гвинея' },
  { value: 'ER', label: 'Эритрея' },
  { value: 'SZ', label: 'Эсватини' },
  { value: 'EE', label: 'Эстония' },
  { value: 'ET', label: 'Эфиопия' },
  { value: 'ZA', label: 'ЮАР' },
  { value: 'OS', label: 'Южная Осетия' },
  { value: 'SS', label: 'Южный Судан' },
  { value: 'JM', label: 'Ямайка' },
  { value: 'JP', label: 'Япония' },
];

export default nationalityOptions;