const findFarm = (farm) => {

  if (farm === 'Амелотекс' || farm === 'Дифлюкан' || farm === 'Зовиракс' || farm === 'Лидокаин спрей' || farm === 'Макмирор' || farm === 'Мидокалм' || farm === 'Микролакс' || farm === 'Млекоин' || farm === 'Найз табл' || farm === 'Но-шпа внутривенно' || farm === 'Но-шпа таблетки' || farm === 'Нурофен экспресс' || farm === 'Нурофен сироп детский' || farm === 'Отофа' || farm === 'Парацетомол' || farm === 'Реаферон-Липинт' || farm === 'Burn free' || farm === 'Hydrocortison' || farm === 'Пластырь детский' || farm === 'Терафлю' || farm === 'Пластырь детский' || farm === 'Пластырь детский' || farm === 'Зостерин-ультра' || farm === 'Ринофлуимуцил' || farm === 'Тантум-Верде спрей' || farm === 'Доктор мом' || farm === 'Цитрамон' || farm === 'Отикапс') {
    return 'Коробка 1';
  }


  if (farm === 'Панатус форте' || farm === 'Таваник' || farm === 'Тева мазь' || farm === 'Феррум Лек' || farm === 'Фурацилин' || farm === 'Эмла' || farm === 'Энтерол' || farm === 'Новалгин' || farm === 'Нимесил' || farm === 'Налгезин' || farm === 'Креон' || farm === 'Пивные дрожжи' || farm === 'Банки под анализы' || farm === 'Тонзилгон' || farm === 'Нурофен крем' || farm === 'Троксевазин' || farm === 'Називин детский' || farm === 'Найз крем' || farm === 'Перекись' || farm === 'Жидкий пластырь' || farm === 'Эспумизан детский' || farm === 'Презервативы' || farm === 'Имудон' || farm === 'Бинты' || farm === 'Ацикловир' || farm === 'Бепантен' || farm === 'Граммидин' || farm === 'Калгель' || farm === 'Аугументин' || farm === 'Цетрин' || farm === 'Баксет беби' || farm === 'Нафтизин раствор') {
    return 'Коробка 2';
  }


  if (farm === 'Регидрон' || farm === 'Самоклеящийся бинт' || farm === 'Пластырь' || farm === 'Рулон ваты' || farm === 'Фламин' || farm === 'Шпритц' || farm === 'Кетонал свечи' || farm === 'Йод' || farm === 'Зеленка' || farm === 'Ихтиол мазь' || farm === 'Виброцил' || farm === 'Римантадин' || farm === 'Темпалгин' || farm === 'Клотримазол' || farm === 'Гиоксизон' || farm === 'Цинковая паста' || farm === 'Энтерофурил' || farm === 'Спиртовая салфетка' || farm === 'Градусник' || farm === 'Маски медицинские' || farm === 'Корнерегель' || farm === 'Вигамокс' || farm === 'Банеоцин мазь' || farm === 'Борная кислота' || farm === 'Пиносол' || farm === 'Каптоприл' || farm === 'Касторовое масло' || farm === 'Амбробене раствор' || farm === 'Веррукацид' || farm === 'Хофитол таблетки' || farm === 'Гиоксизон' || farm === 'Кетонал' || farm === 'Мастодинон' || farm === 'Левомикон-ТФФ' || farm === 'Пипетка' || farm === 'Эспумизан' || farm === 'Смекта' || farm === 'Фосфалюгель') {
    return 'Коробка 3';
  } else {
    return 'Данного продукта нет'
  }

};



const bigBukwa = (str) => {

  if (str[0] === str[0].toUpperCase()) {

    return str;
  }

  if (str[0] !== str[0].toUpperCase()) {

    const newString = str[0];
    const newString2 = str[0].toUpperCase();
    const body = str.slice(1);
    const newString3 = newString2 + body;
    return newString3;

  }

};


const ubrProb = (str) => {

  const preobrText = str.trim();
  return preobrText;

};


function poisk() {
  let str;
  let result;

  str = document.getElementById('inp_1').value;

  result = findFarm(bigBukwa(ubrProb(str)));

  displayResult(result);
}


function displayResult(result) {

      result1.closest('.card').style.display = 'block';
      result1.innerHTML = `${result}`;

  }
