// Extensive product database
const products = [
    // Flour & Grains
    {
        id: 1,
        name: "Jogoo Maize Flour 2kg",
        price: 200,
        category: "flour",
        image: "images/unga.jpg",
        featured: true,
        description: "Premium quality maize flour for making ugali and other dishes."
    },
    {
        id: 2,
        name: "Jogoo Maize Flour 1kg",
        price: 110,
        category: "flour",
        image: "images/unga.jpg",
        featured: false,
        description: "Premium quality maize flour - 1kg pack."
    },
    {
        id: 3,
        name: "Unga Chapati Flour 2kg",
        price: 160,
        category: "flour",
        image: "images/unga.chapati.jpg",
        featured: true,
        description: "Special blend for making soft chapatis."
    },
    {
        id: 4,
        name: "Pishori Rice 1kg",
        price: 200,
        category: "flour",
        image: "images/rice.jpg",
        featured: false,
        description: "Premium pishori rice, fragrant and long grain."
    },
    {
        id: 5,
        name: "Basmati Rice 1kg",
        price: 220,
        category: "flour",
        image: "images/basmati-rice.jpg",
        featured: false,
        description: "Imported basmati rice, perfect for pilau."
    },
    {
        id: 6,
        name: "Unga Self-Rising Flour 1kg",
        price: 120,
        category: "flour",
        image: "images/self-rising-flour.jpg",
        featured: false,
        description: "Self-rising flour for cakes and pastries."
    },

    // Sugar & Sweeteners
    {
        id: 7,
        name: "Mumias Sugar 1kg",
        price: 180,
        category: "sugar",
        image: "images/sugar.jpg",
        featured: true,
        description: "Pure cane sugar, perfect for all your sweetening needs."
    },
    {
        id: 8,
        name: "Mumias Sugar 2kg",
        price: 350,
        category: "sugar",
        image: "images/sugar-2kg.jpg",
        featured: false,
        description: "Pure cane sugar - 2kg pack."
    },
    {
        id: 9,
        name: "Kabras Sugar 1kg",
        price: 175,
        category: "sugar",
        image: "images/kabras-sugar.jpg",
        featured: false,
        description: "High quality Kabras sugar."
    },
    {
        id: 10,
        name: "Brown Sugar 500g",
        price: 120,
        category: "sugar",
        image: "images/brown-sugar.jpg",
        featured: false,
        description: "Natural brown sugar for healthy alternatives."
    },
    {
        id: 11,
        name: "Honey 500g",
        price: 450,
        category: "sugar",
        image: "images/honey.jpg",
        featured: false,
        description: "Pure natural honey from Kenyan farms."
    },

    // Cooking Oil
    {
        id: 12,
        name: "Fresh Fry Cooking Oil 1L",
        price: 300,
        category: "cooking-oil",
        image: "images/oil.jpg",
        featured: true,
        description: "Pure vegetable cooking oil for frying and cooking."
    },
    {
        id: 13,
        name: "Fresh Fry Cooking Oil 2L",
        price: 650,
        category: "cooking-oil",
        image: "images/Fresh-Fry-Cooking.jpg",
        featured: false,
        description: "Pure vegetable cooking oil - 2 liter bottle."
    },
    {
        id: 14,
        name: "Golden Fry Cooking Oil 1L",
        price: 340,
        category: "cooking-oil",
        image: "images/golden-fry-oil.jpg",
        featured: false,
        description: "Premium quality golden fry cooking oil."
    },
    {
        id: 15,
        name: "Sunflower Oil 1L",
        price: 380,
        category: "cooking-oil",
        image: "images/sunflower-oil.jpg",
        featured: false,
        description: "Healthy sunflower oil for cooking."
    },
    {
        id: 16,
        name: "Olive Oil 500ml",
        price: 650,
        category: "cooking-oil",
        image: "images/olive-oil.jpg",
        featured: false,
        description: "Extra virgin olive oil for salads and cooking."
    },

    // Soap & Detergents
    {
        id: 17,
        name: "Sunlight Soap Bar",
        price: 300,
        category: "soap",
        image: "images/sunlight-soap.jpg",
        featured: true,
        description: "Classic sunlight soap for laundry and cleaning."
    },
    {
        id: 18,
        name: "Menengai Cream Washing Bar",
        price: 220,
        category: "soap",
        image: "images/soap.jpg",
        featured: false,
        description: "Quality washing bar for clothes."
    },
    {
        id: 19,
        name: "Omo Detergent 1kg",
        price: 280,
        category: "soap",
        image: "images/omo-detergent.jpg",
        featured: false,
        description: "Powerful detergent for white clothes."
    },
    {
        id: 20,
        name: "Ariel Detergent 1kg",
        price: 300,
        category: "soap",
        image: "images/ariel-detergent.jpg",
        featured: false,
        description: "Ariel detergent for colored clothes."
    },
    {
        id: 21,
        name: "Lifebuoy Soap Bar",
        price: 85,
        category: "soap",
        image: "images/lifebuoy-soap.jpg",
        featured: false,
        description: "Antibacterial soap for personal hygiene."
    },
    {
        id: 22,
        name: "Geisha Soap Bar",
        price: 95,
        category: "soap",
        image: "images/geisha-soap.jpg",
        featured: false,
        description: "Beauty soap for skin care."
    },
    {
        id: 23,
        name: "Dettol Soap Bar",
        price: 110,
        category: "soap",
        image: "images/dettol-soap.jpg",
        featured: false,
        description: "Antiseptic soap for protection."
    },

    // Beverages
    {
        id: 24,
        name: "Brookside Milk 500ml",
        price: 65,
        category: "beverages",
        image: "images/brookside-milk.jpg",
        featured: false,
        description: "Fresh pasteurized milk."
    },
    {
        id: 25,
        name: "Brookside Milk 1L",
        price: 120,
        category: "beverages",
        image: "images/brookside-milk.jpg",
        featured: false,
        description: "Fresh pasteurized milk - 1 liter."
    },
    {
        id: 26,
        name: "Daima Milk 500ml",
        price: 60,
        category: "beverages",
        image: "images/daima.jpg",
        featured: false,
        description: "Long life milk 500ml."
    },
    {
        id: 27,
        name: "Coca Cola 500ml",
        price: 70,
        category: "beverages",
        image: "images/coca-cola.jpg",
        featured: false,
        description: "Refreshing Coca Cola soft drink."
    },
    {
        id: 28,
        name: "Fanta Orange 500ml",
        price: 70,
        category: "beverages",
        image: "images/coca-cola.jpg",
        featured: false,
        description: "Fanta orange flavored soda."
    },
    {
        id: 29,
        name: "Sprite 500ml",
        price: 70,
        category: "beverages",
        image: "images/coca-cola.jpg",
        featured: false,
        description: "Clear lemon-lime soft drink."
    },
    {
        id: 30,
        name: "Minute Maid Juice 1L",
        price: 180,
        category: "beverages",
        image: "images/minute-maid.jpg",
        featured: false,
        description: "100% fruit juice various flavors."
    },

    // Dairy Products
    {
        id: 31,
        name: "Pepe Butter 500g",
        price: 320,
        category: "dairy",
        image: "images/pepe-butter.jpg",
        featured: false,
        description: "Creamy peanut butter."
    },
    {
        id: 32,
        name: "Cowboy Butter 500g",
        price: 300,
        category: "dairy",
        image: "images/cowboy-butter.jpg",
        featured: false,
        description: "Smooth peanut butter."
    },
    {
        id: 33,
        name: "KCC Butter 500g",
        price: 280,
        category: "dairy",
        image: "images/kcc-butter.jpg",
        featured: false,
        description: "Pure dairy butter."
    },
    {
        id: 34,
        name: "Molo Milk 500g",
        price: 250,
        category: "dairy",
        image: "images/molo-milk.jpg",
        featured: false,
        description: "Powdered milk."
    },
    {
        id: 35,
        name: "Molo Milk 1kg",
        price: 480,
        category: "dairy",
        image: "images/molo-milk.jpg",
        featured: false,
        description: "Powdered milk - 1kg pack."
    },
    {
        id: 36,
        name: "Gold Crown Cheese 500g",
        price: 450,
        category: "dairy",
        image: "images/gold-crown-cheese.jpg",
        featured: false,
        description: "Cheddar cheese block."
    },
    {
        id: 37,
        name: "Molo Yoghurt 500ml",
        price: 120,
        category: "dairy",
        image: "images/molo-yoghurt.jpg",
        featured: false,
        description: "Natural yoghurt."
    },
    {
        id: 38,
        name: "Brookside Yoghurt 500ml",
        price: 130,
        category: "dairy",
        image: "images/brookside-yoghurt.jpg",
        featured: false,
        description: "Various flavored yoghurts."
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateCartCount();
    
    // Load products based on current page
    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
    }
    
    if (document.getElementById('products-grid')) {
        loadAllProducts();
        setupFilters();
    }
    
    if (document.getElementById('cart-items')) {
        loadCart();
    }
    
    setupNavigation();
}

// Navigation
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Product Loading Functions
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    const featuredProducts = products.filter(product => product.featured);
    
    featuredContainer.innerHTML = featuredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">KSh ${product.price}</div>
                <button class="btn btn-primary add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function loadAllProducts() {
    const productsContainer = document.getElementById('products-grid');
    
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">KSh ${product.price}</div>
                <button class="btn btn-primary add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Filter and Search
function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
}

function filterProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const category = document.getElementById('category-filter').value;
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productCategory = card.dataset.category;
        
        const matchesSearch = productName.includes(searchTerm);
        const matchesCategory = category === 'all' || productCategory === category;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCartToStorage();
    loadCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            saveCartToStorage();
            loadCart();
        }
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartContainer) {
        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                    <a href="products.html" class="btn btn-primary">Shop Now</a>
                </div>
            `;
            if (cartTotal) cartTotal.textContent = '0';
            return;
        }
        
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">KSh ${item.price}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="cart-item-total">
                    KSh ${item.price * item.quantity}
                </div>
            </div>
        `).join('');
        
        if (cartTotal) {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = total;
        }
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order! Total: KSh ${total}\nOur team will contact you for delivery details.`);
    
    // Clear cart
    cart = [];
    updateCartCount();
    saveCartToStorage();
    loadCart();
}
// Enhanced Cart Functions
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const deliveryFee = document.getElementById('delivery-fee');
    
    if (cartContainer) {
        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                    <a href="products.html" class="btn btn-primary">Shop Now</a>
                </div>
            `;
            document.getElementById('checkout-form').style.display = 'none';
            if (cartSubtotal) cartSubtotal.textContent = 'KSh 0';
            if (cartTotal) cartTotal.textContent = 'KSh 0';
            return;
        }
        
        // Show checkout form if cart has items
        document.getElementById('checkout-form').style.display = 'block';
        
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="handleImageError(this)">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">KSh ${item.price}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="cart-item-total">
                    KSh ${item.price * item.quantity}
                </div>
            </div>
        `).join('');
        
        // Calculate totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const delivery = subtotal > 2000 ? 0 : 200; // Free delivery over KSh 2000
        const total = subtotal + delivery;
        
        if (cartSubtotal) cartSubtotal.textContent = `KSh ${subtotal}`;
        if (cartTotal) cartTotal.textContent = `KSh ${total}`;
        if (deliveryFee) {
            deliveryFee.textContent = delivery === 0 ? 'FREE' : `KSh ${delivery}`;
            deliveryFee.style.color = delivery === 0 ? '#27ae60' : '';
        }
    }
}

// Enhanced loadCart function
function loadCart() {
    updateCartDisplay();
    updateCartCount();
}

// Checkout Process
function processCheckout() {
    // Validate form
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const address = document.getElementById('delivery-address').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    if (!name || !phone || !address) {
        showNotification('Please fill in all required fields!', 'error');
        return;
    }
    
    // Validate phone number
    if (!isValidPhoneNumber(phone)) {
        showNotification('Please enter a valid Kenyan phone number (e.g., 0712345678)', 'error');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal > 2000 ? 0 : 200;
    const total = subtotal + delivery;
    
    if (paymentMethod === 'mpesa') {
        showMpesaModal(total);
    } else if (paymentMethod === 'cash') {
        processCashPayment(total);
    }
}

function isValidPhoneNumber(phone) {
    const phoneRegex = /^(07\d{8}|01\d{8}|\+2547\d{8})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}
// Enhanced M-Pesa STK Push Simulation
function showMpesaModal(total) {
    const modal = document.getElementById('mpesa-modal');
    const mpesaAmount = document.getElementById('mpesa-amount');
    
    mpesaAmount.textContent = `KSh ${total}`;
    modal.style.display = 'block';
    
    // Start M-Pesa simulation
    simulateMpesaSTKPush(total);
}

function simulateMpesaSTKPush(amount) {
    const phone = document.getElementById('customer-phone').value;
    const customerName = document.getElementById('customer-name').value;
    
    // Show M-Pesa prompt simulation
    showMpesaPromptSimulation(phone, amount, customerName);
}

function showMpesaPromptSimulation(phone, amount, customerName) {
    // Create M-Pesa STK Push simulation overlay
    const mpesaOverlay = document.createElement('div');
    mpesaOverlay.className = 'mpesa-prompt-overlay';
    mpesaOverlay.innerHTML = `
        <div class="mpesa-prompt">
            <div class="mpesa-header">
                <div class="safaricom-logo">
                    <i class="fab fa-mpesa"></i>
                    <span>Safaricom</span>
                </div>
                <div class="signal-bars">
                    <i class="fas fa-signal"></i>
                    <span>Safaricom</span>
                </div>
            </div>
            
            <div class="phone-time">2:45 PM</div>
            
            <div class="stk-push">
                <div class="stk-header">
                    <i class="fas fa-shield-alt"></i>
                    <span>M-Pesa Confirmation</span>
                </div>
                
                <div class="stk-content">
                    <div class="merchant-info">
                        <strong>GoodStart Holdings</strong>
                        <span>Till: 9164467</span>
                    </div>
                    
                    <div class="amount-section">
                        <span>Amount:</span>
                        <strong>KSh ${amount}</strong>
                    </div>
                    
                    <div class="phone-section">
                        <span>To:</span>
                        <strong>${phone}</strong>
                    </div>
                    
                    <div class="reference-section">
                        <span>Ref:</span>
                        <strong>GoodStart${Date.now().toString().slice(-4)}</strong>
                    </div>
                    
                    <div class="pin-section">
                        <label>Enter M-Pesa PIN:</label>
                        <div class="pin-input">
                            <input type="password" maxlength="4" class="pin-dot" readonly>
                            <input type="password" maxlength="4" class="pin-dot" readonly>
                            <input type="password" maxlength="4" class="pin-dot" readonly>
                            <input type="password" maxlength="4" class="pin-dot" readonly>
                        </div>
                        <div class="keypad">
                            <div class="key-row">
                                <button class="key" onclick="pressKey('1')">1</button>
                                <button class="key" onclick="pressKey('2')">2</button>
                                <button class="key" onclick="pressKey('3')">3</button>
                            </div>
                            <div class="key-row">
                                <button class="key" onclick="pressKey('4')">4</button>
                                <button class="key" onclick="pressKey('5')">5</button>
                                <button class="key" onclick="pressKey('6')">6</button>
                            </div>
                            <div class="key-row">
                                <button class="key" onclick="pressKey('7')">7</button>
                                <button class="key" onclick="pressKey('8')">8</button>
                                <button class="key" onclick="pressKey('9')">9</button>
                            </div>
                            <div class="key-row">
                                <button class="key clear" onclick="clearPin()">C</button>
                                <button class="key" onclick="pressKey('0')">0</button>
                                <button class="key delete" onclick="deletePin()">
                                    <i class="fas fa-backspace"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="btn-cancel" onclick="cancelMpesaPayment()">Cancel</button>
                        <button class="btn-ok" onclick="submitMpesaPin()">OK</button>
                    </div>
                </div>
            </div>
            
            <div class="phone-footer">
                <div class="home-button"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(mpesaOverlay);
    
    // Initialize PIN input
    initializePinInput();
}

// PIN Management
let currentPin = '';

function initializePinInput() {
    currentPin = '';
    updatePinDisplay();
}

function pressKey(key) {
    if (currentPin.length < 4) {
        currentPin += key;
        updatePinDisplay();
    }
}

function deletePin() {
    if (currentPin.length > 0) {
        currentPin = currentPin.slice(0, -1);
        updatePinDisplay();
    }
}

function clearPin() {
    currentPin = '';
    updatePinDisplay();
}

function updatePinDisplay() {
    const pinDots = document.querySelectorAll('.pin-dot');
    pinDots.forEach((dot, index) => {
        if (index < currentPin.length) {
            dot.value = '•';
        } else {
            dot.value = '';
        }
    });
}

function submitMpesaPin() {
    if (currentPin.length !== 4) {
        showMpesaError('Please enter 4-digit PIN');
        return;
    }
    
    if (currentPin === '0000') {
        showMpesaError('Invalid PIN. Please try again.');
        return;
    }
    
    // Simulate payment processing
    processMpesaPayment();
}

function processMpesaPayment() {
    const mpesaOverlay = document.querySelector('.mpesa-prompt-overlay');
    
    // Show processing animation
    mpesaOverlay.innerHTML = `
        <div class="mpesa-prompt processing">
            <div class="mpesa-header">
                <div class="safaricom-logo">
                    <i class="fab fa-mpesa"></i>
                    <span>Safaricom</span>
                </div>
            </div>
            
            <div class="processing-content">
                <div class="processing-spinner">
                    <i class="fas fa-circle-notch fa-spin"></i>
                </div>
                <h3>Processing Payment...</h3>
                <p>Please wait while we complete your transaction</p>
            </div>
        </div>
    `;
    
    // Simulate API call delay
    setTimeout(() => {
        showMpesaSuccess();
    }, 3000);
}

function showMpesaSuccess() {
    const mpesaOverlay = document.querySelector('.mpesa-prompt-overlay');
    
    mpesaOverlay.innerHTML = `
        <div class="mpesa-prompt success">
            <div class="mpesa-header">
                <div class="safaricom-logo">
                    <i class="fab fa-mpesa"></i>
                    <span>Safaricom</span>
                </div>
            </div>
            
            <div class="success-content">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Payment Successful!</h3>
                <div class="success-details">
                    <p><strong>GoodStart Holdings</strong></p>
                    <p>Amount: KSh ${document.getElementById('mpesa-amount').textContent.replace('KSh ', '')}</p>
                    <p>Transaction completed successfully</p>
                </div>
                <button class="btn-done" onclick="closeMpesaPrompt()">Done</button>
            </div>
        </div>
    `;
}

function showMpesaError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'mpesa-error';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <span>${message}</span>
    `;
    
    const stkContent = document.querySelector('.stk-content');
    const existingError = document.querySelector('.mpesa-error');
    
    if (existingError) {
        existingError.remove();
    }
    
    stkContent.appendChild(errorDiv);
    
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 3000);
}

function cancelMpesaPayment() {
    closeMpesaPrompt();
    showNotification('M-Pesa payment cancelled', 'info');
}

function closeMpesaPrompt() {
    const mpesaOverlay = document.querySelector('.mpesa-prompt-overlay');
    if (mpesaOverlay) {
        mpesaOverlay.remove();
    }
    
    // Complete the payment process
    confirmMpesaPayment();
}

// Real M-Pesa Integration Functions
let currentCheckoutRequestID = null;
let paymentStatusInterval = null;

async function startRealMpesaPayment() {
    const total = parseInt(document.getElementById('mpesa-amount').textContent.replace('KSh ', ''));
    const phone = document.getElementById('customer-phone').value;
    const name = document.getElementById('customer-name').value;
    const orderId = 'GS-' + Date.now().toString().slice(-6);

    // Validate inputs
    if (!phone || !name) {
        showNotification('Please fill in your name and phone number first!', 'error');
        return;
    }

    if (!isValidPhoneNumber(phone)) {
        showNotification('Please enter a valid Kenyan phone number!', 'error');
        return;
    }

    // Show processing modal
    showMpesaProcessingModal();

    try {
        // Initiate real STK Push
        const result = await mpesa.initiateSTKPush(phone, total, orderId);
        
        if (result.success) {
            currentCheckoutRequestID = result.checkoutRequestID;
            
            // Show success message and start polling for payment status
            showMpesaSTKSentModal(result.customerMessage);
            startPaymentStatusPolling();
        } else {
            showMpesaErrorModal(result.error);
        }
    } catch (error) {
        console.error('Payment initiation error:', error);
        showMpesaErrorModal('Failed to initiate payment. Please try again.');
    }
}

function startPaymentStatusPolling() {
    // Check payment status every 5 seconds
    paymentStatusInterval = setInterval(async () => {
        try {
            const status = await mpesa.checkPaymentStatus(currentCheckoutRequestID);
            
            if (status.ResultCode === 0) {
                // Payment successful
                clearInterval(paymentStatusInterval);
                showMpesaSuccessModal();
                completeMpesaPayment();
            } else if (status.ResultCode === 1032) {
                // Payment cancelled by user
                clearInterval(paymentStatusInterval);
                showMpesaCancelledModal();
            }
            // Other status codes continue polling
        } catch (error) {
            console.error('Status check error:', error);
        }
    }, 5000);

    // Stop polling after 3 minutes
    setTimeout(() => {
        if (paymentStatusInterval) {
            clearInterval(paymentStatusInterval);
            showMpesaTimeoutModal();
        }
    }, 180000);
}

// Enhanced Modal Functions for Real M-Pesa Flow
function showMpesaProcessingModal() {
    const modal = document.getElementById('mpesa-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="mpesa-processing">
                <div class="processing-spinner">
                    <i class="fas fa-circle-notch fa-spin"></i>
                </div>
                <h3>Initiating M-Pesa Payment</h3>
                <p>Please wait while we connect to M-Pesa...</p>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

function showMpesaSTKSentModal(message) {
    const modal = document.getElementById('mpesa-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="mpesa-stk-sent">
                <div class="success-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h3>Check Your Phone!</h3>
                <p>${message}</p>
                <div class="payment-info">
                    <p><strong>Enter your M-Pesa PIN on your phone to complete payment</strong></p>
                </div>
                <div class="checking-status">
                    <i class="fas fa-sync fa-spin"></i>
                    <span>Waiting for payment confirmation...</span>
                </div>
                <button class="btn btn-secondary" onclick="cancelRealMpesaPayment()">
                    Cancel Payment
                </button>
            </div>
        </div>
    `;
}

function showMpesaSuccessModal() {
    const modal = document.getElementById('mpesa-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="mpesa-success">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Payment Successful! 🎉</h3>
                <p>Your M-Pesa payment has been confirmed.</p>
                <div class="success-details">
                    <p>You will receive an M-Pesa confirmation message shortly.</p>
                </div>
                <button class="btn btn-success" onclick="closeMpesaModalAndComplete()">
                    Continue
                </button>
            </div>
        </div>
    `;
}

function showMpesaErrorModal(errorMessage) {
    const modal = document.getElementById('mpesa-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="mpesa-error">
                <div class="error-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3>Payment Failed</h3>
                <p>${errorMessage}</p>
                <button class="btn btn-primary" onclick="closeMpesaModal()">
                    Try Again
                </button>
            </div>
        </div>
    `;
}

function showMpesaCancelledModal() {
    const modal = document.getElementById('mpesa-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="mpesa-cancelled">
                <div class="cancelled-icon">
                    <i class="fas fa-times-circle"></i>
                </div>
                <h3>Payment Cancelled</h3>
                <p>You cancelled the M-Pesa payment.</p>
                <button class="btn btn-primary" onclick="closeMpesaModal()">
                    OK
                </button>
            </div>
        </div>
    `;
}

function showMpesaTimeoutModal() {
    const modal = document.getElementById('mpesa-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="mpesa-timeout">
                <div class="timeout-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <h3>Payment Timeout</h3>
                <p>Payment confirmation timed out. Please check your M-Pesa messages.</p>
                <button class="btn btn-primary" onclick="closeMpesaModal()">
                    OK
                </button>
            </div>
        </div>
    `;
}

function cancelRealMpesaPayment() {
    if (paymentStatusInterval) {
        clearInterval(paymentStatusInterval);
    }
    closeMpesaModal();
    showNotification('M-Pesa payment cancelled', 'info');
}

function closeMpesaModalAndComplete() {
    closeMpesaModal();
    completeMpesaPayment();
}

function completeMpesaPayment() {
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const address = document.getElementById('delivery-address').value;
    const email = document.getElementById('customer-email').value;
    const notes = document.getElementById('delivery-notes').value;
    
    // Create order
    const order = createOrder(name, phone, email, address, notes, 'mpesa');
    
    // Show confirmation
    showOrderConfirmation(order);
    
    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartCount();
    
    // Show success notification
    showNotification('Payment successful! Your order is confirmed.', 'success');
}
function sendOrderConfirmation(order) {
    // Simulate sending confirmation SMS/Email
    console.log(`📧 Order Confirmation Sent:
    Order ID: ${order.id}
    Customer: ${order.customer.name}
    Phone: ${order.customer.phone}
    Total: KSh ${order.total}
    `);
    
    // In real implementation, integrate with SMS/Email service
    showNotification('Order confirmation sent to your phone!', 'success');
}

// Cash on Delivery
function processCashPayment(total) {
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const address = document.getElementById('delivery-address').value;
    const email = document.getElementById('customer-email').value;
    const notes = document.getElementById('delivery-notes').value;
    
    const order = createOrder(name, phone, email, address, notes, 'cash');
    showOrderConfirmation(order);
    
    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartCount();
}

// Order Management
function createOrder(name, phone, email, address, notes, paymentMethod) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal > 2000 ? 0 : 200;
    const total = subtotal + delivery;
    
    const order = {
        id: 'GS-' + Date.now().toString().slice(-6),
        date: new Date().toLocaleString(),
        customer: { name, phone, email, address, notes },
        items: [...cart],
        subtotal: subtotal,
        delivery: delivery,
        total: total,
        paymentMethod: paymentMethod,
        status: paymentMethod === 'cash' ? 'pending' : 'paid'
    };
    
    // Save order to localStorage
    saveOrderToStorage(order);
    
    return order;
}

function saveOrderToStorage(order) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function showOrderConfirmation(order) {
    const modal = document.getElementById('order-confirmation');
    const orderId = document.getElementById('order-id');
    const orderSummary = document.getElementById('order-summary-details');
    
    orderId.textContent = order.id;
    
    // Build order summary
    orderSummary.innerHTML = `
        <div class="order-detail">
            <span>Items (${order.items.length}):</span>
            <span>KSh ${order.subtotal}</span>
        </div>
        <div class="order-detail">
            <span>Delivery:</span>
            <span>${order.delivery === 0 ? 'FREE' : 'KSh ' + order.delivery}</span>
        </div>
        <div class="order-detail total">
            <span>Total:</span>
            <span>KSh ${order.total}</span>
        </div>
        <div class="order-detail">
            <span>Payment Method:</span>
            <span>${order.paymentMethod.toUpperCase()}</span>
        </div>
        <div class="order-detail">
            <span>Delivery to:</span>
            <span>${order.customer.address}</span>
        </div>
    `;
    
    modal.style.display = 'block';
}

function printOrder() {
    window.print();
}

// Enhanced Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle';
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Modal close functionality
function setupModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });
    
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Update initializeApp function
function initializeApp() {
    updateCartCount();
    
    // Load products based on current page
    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
    }
    
    if (document.getElementById('products-grid')) {
        loadAllProducts();
        setupFilters();
    }
    
    if (document.getElementById('cart-items')) {
        loadCart();
    }
    
    setupNavigation();
    setupModals();
}

// Quick Add to Cart from Product Pages
function quickAddToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    showNotification(`${quantity} x ${product.name} added to cart!`);
}

// Clear Cart Function
function clearCart() {
    cart = [];
    updateCartCount();
    saveCartToStorage();
    loadCart();
    showNotification('Cart cleared successfully!');
}
// Enhanced product card with quantity selector
function loadProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">KSh ${product.price}</div>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="qty-btn" onclick="decreaseQuantity(${product.id})">-</button>
                        <span class="qty-display" id="qty-${product.id}">1</span>
                        <button class="qty-btn" onclick="increaseQuantity(${product.id})">+</button>
                    </div>
                    <button class="btn btn-primary add-to-cart" onclick="addToCartWithQuantity(${product.id})">
                        <i class="fas fa-cart-plus"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Quantity management for product cards
let productQuantities = {};

function increaseQuantity(productId) {
    if (!productQuantities[productId]) {
        productQuantities[productId] = 1;
    }
    productQuantities[productId]++;
    updateQuantityDisplay(productId);
}

function decreaseQuantity(productId) {
    if (!productQuantities[productId] || productQuantities[productId] <= 1) {
        return;
    }
    productQuantities[productId]--;
    updateQuantityDisplay(productId);
}

function updateQuantityDisplay(productId) {
    const display = document.getElementById(`qty-${productId}`);
    if (display) {
        display.textContent = productQuantities[productId] || 1;
    }
}

function addToCartWithQuantity(productId) {
    const quantity = productQuantities[productId] || 1;
    addToCart(productId, quantity);
    // Reset quantity after adding to cart
    productQuantities[productId] = 1;
    updateQuantityDisplay(productId);
}
// Backend API configuration
const API_BASE_URL = 'http://localhost:3000/api';

// Enhanced checkout function with backend integration
async function processCheckout() {
    // Validate form
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const address = document.getElementById('delivery-address').value;
    const email = document.getElementById('customer-email').value;
    const notes = document.getElementById('delivery-notes').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    if (!name || !phone || !address) {
        showNotification('Please fill in all required fields!', 'error');
        return;
    }
    
    if (!isValidPhoneNumber(phone)) {
        showNotification('Please enter a valid Kenyan phone number (e.g., 0712345678)', 'error');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal > 2000 ? 0 : 200;
    const total = subtotal + delivery;
    
    try {
        // 1. First create order on backend
        const orderData = {
            customer: { name, phone, email, address, notes },
            items: cart,
            total: total,
            subtotal: subtotal,
            delivery: delivery
        };
        
        const orderResponse = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderData })
        });
        
        if (!orderResponse.ok) {
            throw new Error('Failed to create order');
        }
        
        const orderResult = await orderResponse.json();
        console.log('Order created:', orderResult);
        
        if (paymentMethod === 'mpesa') {
            // 2. Initiate M-Pesa payment
            await initiateMpesaPayment(total, phone, orderResult.orderId, orderResult.checkoutRequestID);
        } else if (paymentMethod === 'cash') {
            // 3. Process cash payment
            completeCashPayment(orderResult.orderId);
        }
        
    } catch (error) {
        console.error('Checkout error:', error);
        showNotification('Failed to process order. Please try again.', 'error');
    }
}

// Initiate M-Pesa payment with backend
async function initiateMpesaPayment(amount, phone, orderId, checkoutRequestID) {
    try {
        showNotification('Initiating M-Pesa payment...', 'info');
        
        // In a real implementation, you would call your backend to initiate STK Push
        // For now, we'll simulate the process
        
        console.log(`Initiating M-Pesa payment: ${amount} to ${phone} for order ${orderId}`);
        
        // Show M-Pesa modal
        showMpesaModal(amount);
        
        // Simulate backend M-Pesa initiation (you'll replace this with real API call)
        setTimeout(() => {
            simulateMpesaCallback(checkoutRequestID, amount);
        }, 3000);
        
    } catch (error) {
        console.error('M-Pesa initiation error:', error);
        showNotification('Failed to initiate M-Pesa payment', 'error');
    }
}

// Simulate M-Pesa callback (for testing)
function simulateMpesaCallback(checkoutRequestID, amount) {
    // This simulates M-Pesa sending a callback to your server
    const callbackData = {
        Body: {
            stkCallback: {
                MerchantRequestID: "sim-" + Date.now(),
                CheckoutRequestID: checkoutRequestID,
                ResultCode: 0,
                ResultDesc: "Success",
                CallbackMetadata: {
                    Item: [
                        {Name: "Amount", Value: amount},
                        {Name: "MpesaReceiptNumber", Value: "MPE" + Date.now().toString().slice(-6)},
                        {Name: "TransactionDate", Value: new Date().getTime()},
                        {Name: "PhoneNumber", Value: 254712345678}
                    ]
                }
            }
        }
    };
    
    // Send simulated callback to your server
    fetch(`${API_BASE_URL}/mpesa-callback`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(callbackData)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Simulated callback result:', result);
        if (result.ResultCode === 0) {
            showNotification('Payment successful! Order confirmed.', 'success');
            completeOrder(checkoutRequestID);
        }
    })
    .catch(error => {
        console.error('Callback simulation error:', error);
    });
}

// Complete cash payment
async function completeCashPayment(orderId) {
    try {
        showNotification('Order placed successfully! We will contact you for delivery.', 'success');
        
        // Clear cart
        cart = [];
        saveCartToStorage();
        updateCartCount();
        loadCart();
        
        // Show order confirmation
        showOrderConfirmation({
            id: orderId,
            customer: { name: document.getElementById('customer-name').value },
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            paymentMethod: 'cash'
        });
        
    } catch (error) {
        console.error('Cash payment completion error:', error);
        showNotification('Failed to complete order', 'error');
    }
}

// Complete order after payment
async function completeOrder(checkoutRequestID) {
    try {
        // Check order status from backend
        const statusResponse = await fetch(`${API_BASE_URL}/order-status/${checkoutRequestID}`);
        if (!statusResponse.ok) {
            throw new Error('Failed to check order status');
        }
        
        const orderStatus = await statusResponse.json();
        console.log('Order status:', orderStatus);
        
        // Clear cart
        cart = [];
        saveCartToStorage();
        updateCartCount();
        loadCart();
        
        // Show order confirmation
        showOrderConfirmation(orderStatus);
        
    } catch (error) {
        console.error('Order completion error:', error);
        showNotification('Order completed but status check failed', 'warning');
    }
}

// Enhanced order confirmation
function showOrderConfirmation(order) {
    const modal = document.getElementById('order-confirmation');
    const orderId = document.getElementById('order-id');
    const orderSummary = document.getElementById('order-summary-details');
    
    orderId.textContent = order.orderId || order.id;
    
    // Build order summary
    orderSummary.innerHTML = `
        <div class="order-detail">
            <span>Order ID:</span>
            <span>${order.orderId || order.id}</span>
        </div>
        <div class="order-detail">
            <span>Status:</span>
            <span>${order.status || 'confirmed'}</span>
        </div>
        <div class="order-detail">
            <span>Customer:</span>
            <span>${order.customer.name}</span>
        </div>
        <div class="order-detail">
            <span>Total Amount:</span>
            <span>KSh ${order.total}</span>
        </div>
        <div class="order-detail">
            <span>Payment Method:</span>
            <span>${order.paymentMethod || 'mpesa'}</span>
        </div>
        ${order.receiptNumber ? `
        <div class="order-detail">
            <span>M-Pesa Receipt:</span>
            <span>${order.receiptNumber}</span>
        </div>
        ` : ''}
        <div class="order-detail">
            <span>Delivery to:</span>
            <span>${order.customer.address || 'Address will be confirmed'}</span>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Check server health on page load
async function checkServerHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        if (response.ok) {
            const health = await response.json();
            console.log('Server health:', health);
            return true;
        }
    } catch (error) {
        console.warn('Backend server not available:', error);
        showNotification('Backend server not available. Some features may not work.', 'warning');
        return false;
    }
}

// Update initializeApp function
function initializeApp() {
    updateCartCount();
    
    // Load products based on current page
    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
    }
    
    if (document.getElementById('products-grid')) {
        loadAllProducts();
        setupFilters();
    }
    
    if (document.getElementById('cart-items')) {
        loadCart();
    }
    
    setupNavigation();
    setupModals();
    
    // Check backend server health
    checkServerHealth();
}
// Enhanced server health check
async function checkServerHealth() {
    const statusElement = document.getElementById('server-status');
    
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        if (response.ok) {
            const health = await response.json();
            console.log('Server health:', health);
            
            if (statusElement) {
                statusElement.innerHTML = '<i class="fas fa-server"></i><span>Backend connected - Orders will be processed</span>';
                statusElement.className = 'server-status connected';
            }
            return true;
        }
    } catch (error) {
        console.warn('Backend server not available:', error);
        
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-server"></i><span>Backend offline - Some features disabled</span>';
            statusElement.className = 'server-status disconnected';
        }
        
        showNotification('Backend server not available. You can still browse products.', 'warning');
        return false;
    }
}
