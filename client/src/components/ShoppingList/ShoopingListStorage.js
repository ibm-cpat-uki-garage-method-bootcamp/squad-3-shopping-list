class ShoppingListStorage {
    store = (user, shoppingList) => {
        window.localStorage.setItem(user, JSON.stringify(shoppingList));
    }

    retrieve = (user) => {
        return JSON.parse(window.localStorage.getItem(user)) || ['Milk', 'Banana', 'Apple'];
    }
};

export default ShoppingListStorage;