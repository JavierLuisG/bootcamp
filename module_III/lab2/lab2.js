/**
 *      @author Javier Luis <https://github.com/JavierLuisG>
 *      @fileoverview This script will solve the lab2 activity proposed in the bootcamp
 *      @licence BSD 3-Clause License
 */

// declaration vars
const url = "https://api.github.com/users/mojombo/followers";

// arrow-function
const getAvatarUrl = () => {
    fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new error("Network response was not ok.");
        }
    }).then((data) => {
        // traverse with foreach and print only the value corresponding to avatar_url
        data.forEach((element, index) => {
            console.log("Index:", index, ", Avatar_url:", element.avatar_url);
        });
    }).catch((error) => {
        console.log("there has been a problem with your fetch operation", error);
    });
};

// invoke the function
getAvatarUrl();

