class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <strong>Product name</strong>: ${product.name}
                    <strong>Product price</strong>: ${product.price}
                    <strong>Product year</strong>: ${product.year}
                    <a href="#" class="btnn" name="delete">Delete</a>
                </div> 
            </div>
        
        `;
        productList.appendChild(element);
    }

    resetForm(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(element){
        if(element.name == "delete"){
            element.parentElement
            .parentElement.parentElement.remove();
            this.showMessage("delete producto eliminado")
        }
    }
    showMessage(message, colorCss){
        const div = document.createElement("div");
        div.className = `alert alert-${colorCss}`;
        div.appendChild(document.createTextNode(message));
        // in dom
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000)

    }
}

//capturar eventos DOM

document.getElementById("product-form")
    .addEventListener("submit", function(e){

        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const year = document.getElementById("year").value;

        const product = new Product(name, price, year);

        const ui = new UI();

        if(name === ""){
            return ui.showMessage("complete fields please")
        };
        ui.addProduct(product);
        ui.resetForm(); //vaciar el form
        ui.showMessage("producto agregado")

        e.preventDefault();
    });

//evento delete
document.getElementById("product-list")
.addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})