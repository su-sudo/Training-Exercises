class Product {
    constructor() {
        this.inventory = []; 
    }
    addProduct(name, price, quantity) {
        const product = {
            name: name,
            price: parseFloat(price).toFixed(2),
            quantity: parseInt(quantity)
        };
        this.inventory.push(product);
        this.updateTable();
    }
    updateTable() {
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
        this.inventory.forEach((product) => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const priceCell = document.createElement('td');
            const quantityCell = document.createElement('td');
            nameCell.textContent = product.name;
            priceCell.textContent = `${product.price}`;
            quantityCell.textContent = product.quantity;
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(quantityCell);
            tbody.appendChild(row);
        });
    }
}

const productManager = new Product();


document.getElementById('btn-addproduct').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const price = document.getElementById('price').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    
    if (name && !isNaN(price) && !isNaN(quantity) && price > 0 && quantity > 0) {
        productManager.addProduct(name, price, quantity);
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
    } else {
        alert('Please enter valid product details.');
    }
});
