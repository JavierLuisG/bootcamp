/**
 *      @author Javier Luis <https://github.com/JavierLuisG>
 *      @fileoverview This script will solve the lab4 activity proposed in the bootcamp
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

let email = "";
let firstname = "";
let lastname = "";
let phone = "";
let pass = "";
let user = {};

// general methods -----------------------------------------------------------------------------------------

/**
 * @method 
 * @param data String
 * @returns String
 * @description receives the data email to modify that the email is in the small letter
 */
const dataEmailCapitalize = (data) => {
    let capitalize = null;
    if (data !== null && data !== undefined && data !== "") {
        capitalize = data.slice().toLowerCase();
    }
    return capitalize;
};

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
 * @param phone String
 * @returns if (String) | else (null)
 * @description receive phone to verify correct length
 */
const dataPhoneCapitalize = (data) => {
    let capitalize = null;
    if (data !== null && data !== undefined && data.length === 10) {
        capitalize = data;
    }
    return capitalize;
};

/**
 * @method
 * @param data String
 * @returns String encrypted
 * @description encrypt the data for security / take into account hashe of 256
 */
const encryptPassBase64 = (data) => {
    let encodedStringToBtoA = undefined;
    if (data !== null && data !== undefined && data !== "") {
        encodedStringToBtoA = btoa(data);
    } 
    return encodedStringToBtoA;
};

/**
 * @method
 * @param data type Object
 * @returns Object
 * @description Object whit other key name, example: into firstName and now is first_name, 
 *      the value is given by data.(value)
 */
const buildUserDataForRequest = (data) => {
    let user = {};
    if (data != null && data !== undefined) {
        user = {
            email: email,
            name: firstname,
            lastname: lastname,
            phone: phone,
            pass: pass
        };
    }
    return user;
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
const getUserDataForm = () => {
    // first step load data from html
    const emailCapitalize = document.getElementById("floatingEmail").value
    const firstnameCapitalize = document.getElementById("floatingName").value
    const lastnameCapitalize = document.getElementById("floatingLastName").value
    const phoneCapitalize = document.getElementById("floatingPhone").value
    const passCapitalize = document.getElementById("floatingPassword").value

    // sanitize data with validationMethods
    email = validationMethods(emailCapitalize, dataEmailCapitalize);
    firstname = validationMethods(firstnameCapitalize, dataStringCapitalize);
    lastname = validationMethods(lastnameCapitalize, dataStringCapitalize);
    phone = validationMethods(phoneCapitalize, dataPhoneCapitalize);
    pass = validationMethods(passCapitalize, encryptPassBase64);

    // prepare the data to send
    user = validationMethods({
        email: email,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        pass: pass
    }, buildUserDataForRequest);
};