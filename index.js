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

    addToCart(product, quantity) {
        let price;
        switch (product) {
            case 'item1':
                price = 10;
                break;
            case 'item2':
                price = 15;
                break;
            case 'item3':
                price = 20;
                break;
            case 'item4':
                price = 35;
                break;
            case 'item5':
                price = 25;
                break;
            case 'item6':
                price = 30;
                break;
            default:
                throw new Error('Invalid product selection');
        }

        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero');
        }

        this.cart.push({ ...this.products[product], quantity });
    }

    calculateTotal() {
        let total = 0;
        for (const item of this.cart) {
            total += item.price * item.quantity;
        }
        return total;
    }

    placeOrder() {
        // Simulate order processing
        setTimeout(() => {
            this.cart = [];
            this.displayCart();
            alert('Order placed successfully!');
        }, 2000);
    }

    displayCart() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';
        for (const item of this.cart) {
            const li = document.createElement('li');
            li.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
            cartItems.appendChild(li);
        }
        const totalPriceElement = document.getElementById('totalPrice');
        totalPriceElement.textContent = `Total: $${this.calculateTotal()}`;
    }

    updateProductDetails(product) {
        const productImage = document.getElementById('productImage');
        const productDescription = document.getElementById('productDescription');

        const selectedProduct = this.products[product];
        productImage.src = selectedProduct.image;
        productImage.alt = selectedProduct.name;
        productDescription.textContent = selectedProduct.description;
    }
}

const ecommerceStore = new EcommerceStore();

function updateProductDetails() {
    const productSelect = document.getElementById('productSelect');
    const selectedProduct = productSelect.value;

    ecommerceStore.updateProductDetails(selectedProduct);
}

function addToCart() {
    const productSelect = document.getElementById('productSelect');
    const quantityInput = document.getElementById('quantityInput');
    const errorElement = document.getElementById('error');
    try {
        const selectedProduct = productSelect.value;
        const quantity = parseInt(quantityInput.value, 10);

        ecommerceStore.addToCart(selectedProduct, quantity);
        ecommerceStore.displayCart();
        errorElement.textContent = '';
    } catch (error) {
        errorElement.textContent = error.message;
    }
}

function placeOrder() {
    ecommerceStore.placeOrder();
}

// Initialize product details on page load
updateProductDetails();
