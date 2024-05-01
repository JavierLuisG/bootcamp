/**
 *      @author Javier Luis <https://github.com/JavierLuisG>
 *      @fileoverview This script will solve the lab5 activity proposed in the bootcamp
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
let pass = "";
let login = {};

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
const buildLoginDataForRequest = (data) => {
    let login = {};
    if (data !== null && data !== undefined) {
        login = {
            email: data.email,
            pass: data.pass
        };
    }
    return login;
}

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
 * getData
 */
const getLoginDataForm = () => {
    // first step load data from html
    const emailCapitalize = document.getElementById("floatingEmail").value;
    const passCapitalize = document.getElementById("floatingPassword").value;

    // sanitize data with validationMethods
    email = validationMethods(emailCapitalize, dataEmailCapitalize);
    pass = validationMethods(passCapitalize, encryptPassBase64);

    // prepare the data to send
    login = validationMethods({ 
        email: email,
        pass: pass
    }, buildLoginDataForRequest);
};