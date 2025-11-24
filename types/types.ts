export interface Dish {
    title: string,
    restaurant: "Вкусно и точка" | "Rostic's" | "Теремок" | "Burger King" | "Блинбери",
    id: string,
    description: string,
    weight: number,
    calories: number,
    proteins: number,
    fats: number,
    carbohydrates: number,
}