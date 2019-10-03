Let’s imagine we have renderUI function that draws users and comments . 
This function needs to be run when both getUsers and getComments requests will return data 


function renderUI(users, comments) {
    //need to be drawn when both users and comments data will be loaded
    console.log("Rendering...");
    console.log("Users: ", users);
    console.log("Comments", comments);
}

function getUsers() {
    return new Promise((resolve, reject) => {
        // some request
    })
}

function getComments() {
    return new Promise((resolve, reject) => {
        // some request
    })
}



// Another question
var loan1 = new Promise((resolve, reject) => {

	setTimeout(() => resolve(110), 1000);
});

var loan2 = new Promise((resolve, reject) => {

	setTimeout(() => resolve(120), 2000);
});

var loan3 = new Promise((resolve, reject) => {

	reject("Bankrupt");
});

Promise.all([loan1, loan2, loan3])
.then((value) => console.log(value), reason => {console.log(reason);

})

