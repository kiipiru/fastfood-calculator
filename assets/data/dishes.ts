import type { Dish } from "../../types/types";

export const dishes: Dish[] = [
  {
    title: "Минский Бургер",
    restaurant: "Вкусно и точка",
    id: "vit-burger-001",
    description: "Сочный бургер с говяжьей котлетой, сыром, луком и фирменным соусом",
    weight: 278,
    nutrition: {calories: 727,
    proteins: 34,
    fats: 45,
    carbohydrates: 45},
    image: "https://vkusnotochkamenu.ru/image/cache/catalog/photo/249987774-minskij-burger-200x200.png"
  },
  {
    title: "Минский Бургер с курицей",
    restaurant: "Вкусно и точка",
    id: "vit-burger-002",
    description: "Хрустящая куриная котлета с беконом, сыром и свежими овощами",
    weight: 284,
    nutrition: {calories: 695,
    proteins: 26,
    fats: 39,
    carbohydrates: 60},
    image: "https://vkusnotochkamenu.ru/image/cache/catalog/photo/737980502-minskij-burger-s-kuritsej-200x200.png"
  },
  {
    title: "Биг Спешиал",
    restaurant: "Вкусно и точка",
    id: "vit-burger-003",
    description: "Классический двухэтажный бургер с говядиной, сыром, салатом и специальным соусом",
    weight: 340,
    nutrition: {calories: 812,
    proteins: 44,
    fats: 48,
    carbohydrates: 50},
    image: "https://vkusnotochkamenu.ru/image/cache/catalog/photo/642751924-big-speshial-200x200.jpg"
  },
  {
    title: "Двойной Биг Спешиал",
    restaurant: "Вкусно и точка",
    id: "vit-burger-004",
    description: "Увеличенная версия Биг Спешиал с двумя котлетами, двойным сыром и овощами",
    weight: 450,
    nutrition: {calories: 1114,
    proteins: 71,
    fats: 69,
    carbohydrates: 50},
    image: "https://vkusnotochkamenu.ru/image/cache/catalog/photo/646861530-dvojnoj-big-speshial-200x200.jpg"
  }
]