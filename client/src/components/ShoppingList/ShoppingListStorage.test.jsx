import ShoppingListStorage from './ShoopingListStorage'

describe("ShoppingListStorage", () => {
    it("stores item", () => {
        const shoppingList = [
            {
                name:"Milk",
                checked:false
            },
            {
                name:"Banana",
                checked:false
            },
            {
                name:"Ice Cream",
                checked:false
            }
        ];
        const shoppingListStorage = new ShoppingListStorage();
        shoppingListStorage.store('seamus', shoppingList);
        const actualShoopingList = shoppingListStorage.retrieve('seamus');

        expect(actualShoopingList).toEqual(shoppingList);
    });


});