Step-by-Step Instructions in using Realone’s Furniture E-commerce Website
1. Exploring Products:
Upon landing on Realone’s Furniture website, you'll find an array of products displayed. To view product details and make a purchase, simply choose a product from the dropdown menu. You'll notice that as you switch between products, the product image and description will dynamically update.
2. Adding Products to Your Cart:
After selecting your desired product, specify the quantity you wish to purchase in the input field. Then, click the "Add to Cart" button. Behind the scenes, our website utilizes a class-based approach to efficiently manage your shopping cart.
3. Reviewing Your Cart:
Your selected items will appear in the "Shopping Cart" section, complete with quantities and prices. The total cost is calculated automatically using switch statements to determine the price of each product. This ensures accurate pricing for your selections.
4. Placing Your Order:
When you're ready to proceed, simply click the "Place Order" button. At this point, try-catch-finally statements come into play, providing robust error handling throughout the order process. Any potential issues are gracefully caught and managed.
5. Completing Your Purchase:
Following a brief processing period, a confirmation message will appear, indicating that your order has been successfully placed. You can shop with confidence, knowing that our website is designed for a seamless experience.

How We Use Classes, Switch Statements, and Try-Catch-Finally:
1. Classes (EcommerceStore):

   class EcommerceStore {
    constructor() {
        this.cart = [];
        this.products = {
            item1: {
                name: 'Cushion',
                price: 10,
                description: 'A high-quality cushion with multiple features.',
                image: 'images/cushion.jpg'
            },
            item2: {
                name: 'Chair',
                price: 15,
                description: 'The perfect choice for relaxation.',
                image: 'images/chair.jpg'
            },
            item3: {
                name: 'Shelves',
                price: 20,
                description: 'Experience excellence with this premium item.',
                image: 'images/shelves.jpg'
            },
            item4: {
                name: 'Bed',
                price: 35,
                description: 'A soft and comfortable piece of furniture.',
                image: 'images/bed.jpg'
            },
            item5: {
                name: 'Sofa',
                price: 25,
                description: 'An excellent choice for relaxing with ease.',
                image: 'images/sofa.jpg'
            },
            item6: {
                name: 'Table',
                price: 30,
                description: 'Experience good working posture without injuring the legs and back.',
                image: 'images/table.jpg'
            }
        };
    }
•	We have defined a JavaScript class called EcommerceStore to encapsulate the website's core functionality.
•	In the constructor, we initialize the shopping cart (this.cart) as an empty array and the product data (this.products) as an object containing various product details. Each product is represented as an object with properties like name, price, description, and image.
3. Switch Statements (addToCart Method):
•	To determine the price of a selected product, we use a switch statement within the addToCart method.
•	When a user adds a product to the cart, this switch statement identifies the selected product and assigns its corresponding price to the price variable. This ensures that the correct price is associated with each product.
4. Try-Catch-Finally Statements (addToCart and placeOrder Methods):
•	We have implemented try-catch-finally statements to handle potential errors and provide a robust user experience.
•	In the addToCart function, a try-catch block is used to catch errors related to invalid product selections or quantities. If a user selects an invalid product or specifies a quantity less than or equal to zero, an error message is thrown and displayed to the user. This prevents incorrect inputs from disrupting the website's functionality.
•	In the placeOrder method, we simulate order processing using a setTimeout function. A try-catch block manages unexpected errors that may occur during order processing. Even if an error occurs during this phase, the website ensures that the shopping cart is cleared (in the finally block) to maintain the integrity of future orders.
These features collectively enhance the website's functionality:
•	Classes provide a structured way to manage data and methods.
•	Switch statements ensure accurate pricing based on user selections.
•	Try-catch-finally statements enhance error handling and prevent disruptions to the user experience.
