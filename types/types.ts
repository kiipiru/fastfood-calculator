export type Restaurant = "Вкусно и точка" | "Rostic's" | "Теремок" | "Burger King" | "Блинбери"

export interface Nutrition {
    calories: number,
    proteins: number,
    fats: number,
    carbohydrates: number,
}

export interface Dish {
    title: string,
    restaurant: Restaurant,
    id: string,
    description: string,
    weight: number,
    nutrition: Nutrition,
    image: string
}
