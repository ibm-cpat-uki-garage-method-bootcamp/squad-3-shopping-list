import ShoppingListStorage from './ShoopingListStorage'

describe("ShoppingListStorage", () => {

    afterEach(()=> {
        window.localStorage.removeItem('jeff');
    });

    it("returns Milk, Banana and Apple as default items", () => {
        const shoppingListStorage = new ShoppingListStorage();
        const actualShoopingList = shoppingListStorage.retrieve('jeff');

        expect(actualShoopingList).toEqual(['Milk', 'Banana', 'Apple']);
    });

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
        shoppingListStorage.store('jeff', shoppingList);
        const actualShoopingList = shoppingListStorage.retrieve('jeff');

        expect(actualShoopingList).toEqual(shoppingList);
    });


});