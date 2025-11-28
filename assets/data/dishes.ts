import type { Dish } from "../../types/types";

export const dishes: Dish[] = [
  {
    title: "Минский Бургер",
    restaurant: "Вкусно и точка",
    id: "vit-burger-001",
    description:
      "По-белорусски вкусный! Бургер с сочным бифштексои из натуральной говядины на гриле, румяным картофельным оладушком, свежим салатом, двумя ломтиками сыра, хрустящим ароматным беконом, маринованными огурчиками, соусом «Сметана-укроп», и всё это — на воздушной горячей булочка с хрустящей крошкой",
    weight: 278,
    nutrition: { calories: 727, proteins: 34, fats: 45, carbohydrates: 45 },
    image:
      "https://vkusnotochkamenu.ru/image/cache/catalog/photo/249987774-minskij-burger-200x200.png",
  },
  {
    title: "Минский Бургер с курицей",
    restaurant: "Вкусно и точка",
    id: "vit-burger-002",
    description:   "По-белорусски вкусный! Бургер с сочной куриной котлетой в хрустящей панировке, румяным картофельным оладушком, свежим салатом, двумя ломтиками сыра, хрустящим ароматным беконом, маринованными огурчиками, соусом «Сметана-укроп», и всё это — на воздушной горячей булочка с хрустящей крошкой",
    weight: 284,
    nutrition: { calories: 695, proteins: 26, fats: 39, carbohydrates: 60 },
    image:
      "https://vkusnotochkamenu.ru/image/cache/catalog/photo/737980502-minskij-burger-s-kuritsej-200x200.png",
  },
  {
    title: "Биг Спешиал",
    restaurant: "Вкусно и точка",
    id: "vit-burger-003",
    description:
      "Это неповторимый сандвич с большим рубленым бифштексом из 100% отборной говядины на большой булочке с кунжутом. Особенный вкус сандвичу придают три кусочка сыра Эмменталь, два ломтика помидора, свежий салат, лук и соус с дымком",
    weight: 340,
    nutrition: { calories: 812, proteins: 44, fats: 48, carbohydrates: 50 },
    image:
      "https://vkusnotochkamenu.ru/image/cache/catalog/photo/642751924-big-speshial-200x200.jpg",
  },
  {
    title: "Двойной Биг Спешиал",
    restaurant: "Вкусно и точка",
    id: "vit-burger-004",
    description:
      "Тот самый Бургер с двумя большими рублеными бифштексами из 100% говядины на булочке с кунжутом. Особенный вкус сандвичу придают три кусочка сыра Эмменталь, два ломтика помидора, свежий салат, лук и соус с дымком",
    weight: 450,
    nutrition: { calories: 1114, proteins: 71, fats: 69, carbohydrates: 50 },
    image:
      "https://vkusnotochkamenu.ru/image/cache/catalog/photo/646861530-dvojnoj-big-speshial-200x200.jpg",
  },
  {
    title: "Биг Спешиал Чураско",
    restaurant: "Вкусно и точка",
    id: "vit-burger-005",
    description: "Биг Спешиал Чураско — это Бургер с рубленым бифштексом из 100% говядины, тремя кусочками нежнейшего сыра Эмменталь, двумя ломтиками помидора, луком, свежим салатом и соусом с дымком теперь с добавлением пряного острого соуса «Чураско».",
    weight: 341,
    nutrition: {
      calories: 787,
      proteins: 43,
      fats: 44,
      carbohydrates: 55
    },
    image: "https://vkusnotochkamenu.ru/image/cache/catalog/photo/98936223-big-speshial-churasko-200x200.png"
  },
  {
    title: "Гранд",
    restaurant: "Вкусно и точка",
    id: "vit-burger-006",
    description: "Гранд — это сочный бифштекс из натуральной говядины, приготовленный на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, кетчуп, горчица, свежий лук и маринованные огурчики.",
    weight: 202,
    nutrition: {
      calories: 514,
      proteins: 30,
      fats: 26,
      carbohydrates: 38
    },
    image: "https://vkusnotochkamenu.ru/image/cache/catalog/photo/42181128-grand-200x200.jpg"
  },
  {
    title: "Двойной Гранд",
    restaurant: "Вкусно и точка",
    id: "vit-burger-007",
    description: "Двойной Гранд — это два сочных бифштекса из натуральной говядины, приготовленных на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, лук, маринованные огурчики, кетчуп и горчица. ",
    weight: 282,
    nutrition: {
      calories: 732,
      proteins: 49,
      fats: 42,
      carbohydrates: 38
    },
    image: "https://vkusnotochkamenu.ru/image/cache/catalog/photo/937512304-dvojnoj-grand-200x200.jpg"
  },
  {
    title: "Гранд Де Люкс",
    restaurant: "Вкусно и точка",
    id: "vit-burger-008",
    description: "Гранд Де Люкс — это сочный бифштекс из натуральной говядины, приготовленный на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, свежий салат, кусочек помидора и лук, маринованные огурчики, кетчуп, горчица и специальный соус. ",
    weight: 251,
    nutrition: {
      calories: 570,
      proteins: 31,
      fats: 31,
      carbohydrates: 40
    },
    image: "https://vkusnotochkamenu.ru/image/cache/catalog/photo/65565294-grand-de-lyuks-200x200.jpg"
  },
  {
    title: "Чизбургер",
    restaurant: "Rostic's",
    id: "rostics-001",
    description: "Пикантный Чизбургер с луком — это ароматные куриные Стрипсы в качестве главного ингредиента. Главная их особенность — оригинальная панировка с идеальным сочетанием трав и специй. К идеально приготовленной курице добавляется сочность сыра, овощей, пряного соуса и нежность булочки.",
    weight: 156,
    nutrition: {
      calories: 357, // 229 * 1.56
      proteins: 23,  // 14.5 * 1.56
      fats: 13,      // 8.3 * 1.56
      carbohydrates: 38 // 24.2 * 1.56
    },
    image: "https://s82079.cdn.ngenix.net/330x0/xeiy1udgfdombu9bro0p1uenzv8f.png"
  },
  {
    title: "Шефбургер острый",
    restaurant: "Rostic's",
    id: "rostics-002",
    description: "Состав острого Шефбургера прост и в меру наполнен любимыми ингредиентами. Главный из них — острая курица, вкус которой продолжает покорять весь мир! Мы готовим ее по секретному рецепту с идеальным сочетанием трав и специй. К бодрящей остроте курицы мы добавляем сочность свежих и соленых овощей и репчатого лука, а также фирменный соус и воздушную булочку.",
    weight: 179,
    nutrition: {
      calories: 403, // 225 * 1.79
      proteins: 26,  // 14.7 * 1.79
      fats: 16,      // 9 * 1.79
      carbohydrates: 38 // 21.3 * 1.79
    },
    image: "https://s82079.cdn.ngenix.net/330x0/qpfxz0xhnylegoeiw3zhecojwoxu.png"
  },
  {
    title: "Биг Маэстро Бургер оригинальный",
    restaurant: "Rostic's",
    id: "rostics-003",
    description: "Биг Маэстро бургер оригинальный – невероятно большой и аппетитный! В нем много сыра, сочных овощей и соуса, тающая во рту булочка и они – нежные и ароматные стрипсы из отборного куриного филе, приготовленного по секретному рецепту с идеальным сочетанием 11 трав и специй.",
    weight: 277,
    nutrition: {
      calories: 643, // 232 * 2.77
      proteins: 35,  // 12.8 * 2.77
      fats: 28,      // 10.1 * 2.77
      carbohydrates: 62 // 22.5 * 2.77
    },
    image: "https://s82079.cdn.ngenix.net/330x0/z3nk21hszqr1tjudfki6w5haunkh.png"
  },
  {
    title: "Биг Маэстро Бургер острый",
    restaurant: "Rostic's",
    id: "rostics-004",
    description: "Фантастически большой и неповторимо вкусный! Тройная порция острых куриных стрипсов, двойная порция сыра, гора свежих овощей - на тающей булочке Бриошь, под фирменным соусом, впервые в Ростикс, специально для тебя. Не пожалеешь!",
    weight: 268,
    nutrition: {
      calories: 643, // 240 * 2.68
      proteins: 36,  // 13.4 * 2.68
      fats: 30,      // 11.2 * 2.68
      carbohydrates: 58 // 21.5 * 2.68
    },
    image: "https://s82079.cdn.ngenix.net/330x0/7es0d4yzo854gq1g5kuusp3sipc1.png"
  },
  {
    title: "Шеф-ролл Джуниор",
    restaurant: "Rostic's",
    id: "rostics-005",
    description: "Шеф-ролл Джуниор — это сырное наслаждение с сочными Байтсами, которые приготовлены по секретному рецепту. В состав добавлена сочность соленых огурчиков и лука, а также пара ароматных соусов. Здесь есть всё, чтобы получить заряд бодрости и порадовать вкусовые рецепторы. Шеф-ролл Джуниор приготовлен в удобном формате — можно есть на ходу, не боясь испачкаться.",
    weight: 130,
    nutrition: {
      calories: 326, // 251 * 1.30
      proteins: 16,  // 12.5 * 1.30
      fats: 14,      // 10.7 * 1.30
      carbohydrates: 34 // 26.2 * 1.30
    },
    image: "https://s82079.cdn.ngenix.net/330x0/5nt7lertszxw15rwcbydficjgf9n.png"
  }
];
