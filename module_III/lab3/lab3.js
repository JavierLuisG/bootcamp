/**
 *      @author Javier Luis <https://github.com/JavierLuisG>
 *      @fileoverview This script will solve the lab3 activity proposed in the bootcamp
 *      @licence BSD 3-Clause License
 */

// Validation input -----------------------------------------------------------------------------------------

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

// Declaration vars -----------------------------------------------------------------------------------------

let productName = "";
let productType = "";
let quantity = "";
let price = "";
let latitude = "";
let longitude = "";
let product = {};

// general methods -----------------------------------------------------------------------------------------

/**
 * @method 
 * @param data String
 * @returns String
 * @description receives the data to modify that the first letter of the word is capitalized 
 *      and the others in small letters
 */
const dataStringCapitalize = (data) => {
    let capitalize = null;
    if (data !== null && data !== undefined && data !== "") {
        capitalize = data[0].toUpperCase() + data.slice(1).toLowerCase();
        capitalize = capitalize.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    }
    return capitalize;
};

/**
 * @method 
 * @param data int
 * @returns int
 * @description receives the data and verifies that it is a positive number
 */
const dataNumberCapitalize = (data) => {
    let capitalize = undefined;
    if (data !== null && data !== undefined && data > 0) {
        capitalize = data;
    }
    return capitalize;
};

/**
 * @method
 * @param data type Object
 * @returns Object
 * @description Object whit other key name, example: into firstName and now is first_name, 
 *      the value is given by data.(value)
 */
const buildProductDataForRequest = (data) => {
    let product = {};
    if (data !== null && data !== undefined) {
        product = {
            product_name: data.productName,
            product_type: data.producType,
            quantity: data.quantity,
            price: data.price,
            latitude: data.latitude,
            longitude: data.longitude
        };
    }
    return product;
};

/**
 * @method
 * @param items is a var
 * @param useACallback is a method 
 * @returns value given by useACallback
 * @description this method is a callback of a method with its own parameter, in this case is items
 */
const validationMethods = (items, value) => {
    return value(items);
};

/**
 *  getData
 */
const getProductDataForm = () => {
    // first step load data from html
    const productNameCapitalize = document.getElementById("floatingName").value;
    const productTypeCapitalize = document.getElementById("floatingTypeProduct").value;
    const quantityCapitalize = document.getElementById("floatingQuantity").value;
    const priceCapitalize = document.getElementById("floatingPrice").value;
    const latitudeCapitalize = document.getElementById("floatingLatitude").value;
    const longitudeCapitalize = document.getElementById("floatingLongitude").value;

    // sanitize data with validationMethods
    productName = validationMethods(productNameCapitalize, dataStringCapitalize);
    productType = validationMethods(productTypeCapitalize, dataStringCapitalize);
    quantity = validationMethods(quantityCapitalize, dataNumberCapitalize);
    price = validationMethods(priceCapitalize, dataNumberCapitalize);
    latitude = validationMethods(latitudeCapitalize, dataNumberCapitalize);
    longitude = validationMethods(longitudeCapitalize, dataNumberCapitalize);

    // prepare the data to send
    product = validationMethods({
        productName: productName,
        producType: productType,
        quantity: quantity,
        price: price,
        latitude: latitude,
        longitude: longitude
    }, buildProductDataForRequest);
};