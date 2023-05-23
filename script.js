//Functions for Users
//data structure to hold a single user data and some methods
// User constructor function
let User = function (email, password, name, date, nif, address, postal, city, telemo, isadmin) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.date = date;
    this.nif = nif;
    this.address = address;
    this.postal = postal;
    this.city = city;
    this.telemo = telemo;
    this.isadmin = isadmin;
}

// Methods for the User object prototype
User.prototype = {
    verifyPass: function (email, password) {
        return ((this.email === email) && (this.password === password));
    },
    getEmail: function () {
        return this.email;
    },
    getPassword: function () {
        return this.password;
    },
    getName: function () {
        return this.name;
    },
    getFName: function () {
        return this.name.split(' ')[0];
    },
    getDate: function () {
        return this.date;
    },
    getNif: function () {
        return this.nif;
    },
    getAddress: function () {
        return this.address;
    },
    getPostal: function () {
        return this.postal;
    },
    getCity: function () {
        return this.city;
    },
    getTelemo: function () {
        return this.telemo;
    },
    isAdmin: function () {
        return this.isadmin;
    },
    setEmail: function () {
        this.email = email;
    },
    setPassword: function () {
        this.password = password;
    },
    setName: function (name) {
        this.name = name;
    },
    setDate: function (date) {
        this.date = date;
    },
    setNif: function (nif) {
        this.nif = nif;
    },
    setAddress: function (address) {
        this.address = address;
    },
    setPostal: function (postal) {
        this.postal = postal;
    },
    setCity: function (city) {
        this.city = city;
    },
    setTelemo: function (telemo) {
        this.telemo = telemo;
    },
    //method that compares the current object email with the one passed as parameter
    //the email to be compared to the current object email
    checkEmail: function (email) {
        return this.email === email;
    }
};

//acess to the html elements
let topButton = 0,
    leftButton = 0,
    rightButton = 0,
    adminButton = 0,
    closeloginButton = 0,
    loginProce = 0,
    adminArea = 0,
    registerProce = 0,
    output = 0,
    info = 0,
    h1reg = 0,
    h2reg = 0,
    elemetsNotNeededForLogin = 0,
    elemetsNeededForLogin = 0,
    emailInput = 0,
    passInput = 0,
    nomeInput = 0,
    dateInput = 0,
    nifInput = 0,
    addressInput = 0,
    postalInput = 0,
    cityInput = 0,
    telemoInput = 0,
    currentUserIndex = 0,
    sectionsWomen = 0,
    sectionsMen = 0,
    storeProducts = 0,
    bagButton = 0,
    currentSectionIndex = 0,
    currentCategoryIndex = 0,
    currentProductIndex = 0,
    adminAreaBtn = 0,
    cartItemCount = 0,
    sidebarMenu = 0,
    closeLMButton = 0,
    leftMenuButton = 0;

// user array
let users = [];

//index of current autehnticated user
let userIndex = -1;

/* Start of Admin function */
// Function to create the admin area
function createAdminArea() {
    adminAreaBtn.innerHTML = '';
    storeProducts.innerHTML = '';

    closeLoginRegister();

    openCloseAdmDiv();

    clearOutput();

    // Create a table element
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    let editUserHeader = document.createElement('th');
    editUserHeader.textContent = 'Editar Utilizadores';
    headerRow.appendChild(editUserHeader);
    let editProductHeader = document.createElement('th');
    editProductHeader.textContent = 'Editar Produtos';
    headerRow.appendChild(editProductHeader);
    let addProductHeader = document.createElement('th');
    addProductHeader.textContent = 'Adicionar Produto';
    headerRow.appendChild(addProductHeader);
    table.appendChild(headerRow);

    let contentRow = document.createElement('tr');
    let editUserCell = document.createElement('td');
    let editUserButton = document.createElement('button');
    editUserButton.textContent = 'Editar Utilizadores';
    editUserButton.addEventListener('click', adminView);
    editUserCell.appendChild(editUserButton);
    contentRow.appendChild(editUserCell);

    let editProductCell = document.createElement('td');
    let editProductButton = document.createElement('button');
    editProductButton.textContent = 'Editar Produtos';
    editProductButton.addEventListener('click', adminEditProducts);
    editProductCell.appendChild(editProductButton);
    contentRow.appendChild(editProductCell);

    let addProductCell = document.createElement('td');
    let addProductButton = document.createElement('button');
    addProductButton.textContent = 'Adicionar Produto';
    addProductButton.addEventListener('click', adminAddProduct);
    addProductCell.appendChild(addProductButton);
    contentRow.appendChild(addProductCell);

    table.appendChild(contentRow);

    adminArea.innerHTML = '';
    adminArea.appendChild(table);
}

// Function to edit user data in the admin area
function adminEditData() {
    console.log("adminEditData");

    let form, saveButton;

    adminArea.innerHTML = '';

    form = document.createElement('form');

    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nome: ';
    form.appendChild(nameLabel);
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = users[currentUserIndex].getName();
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));

    let emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email: ';
    form.appendChild(emailLabel);
    let emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.value = users[currentUserIndex].email;
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));

    let passLabel = document.createElement('label');
    passLabel.textContent = 'Senha: ';
    form.appendChild(passLabel);
    let passInput = document.createElement('input');
    passInput.type = 'text';
    passInput.value = users[currentUserIndex].password;
    form.appendChild(passInput);
    form.appendChild(document.createElement('br'));

    let dateLabel = document.createElement('label');
    dateLabel.textContent = 'Data de Nascimento: ';
    form.appendChild(dateLabel);
    let dateInput = document.createElement('input');
    dateInput.type = 'text';
    dateInput.value = users[currentUserIndex].getDate();
    form.appendChild(dateInput);
    form.appendChild(document.createElement('br'));

    let nifLabel = document.createElement('label');
    nifLabel.textContent = 'NIF: ';
    form.appendChild(nifLabel);
    let nifInput = document.createElement('input');
    nifInput.type = 'text';
    nifInput.value = users[currentUserIndex].nif;
    form.appendChild(nifInput);
    form.appendChild(document.createElement('br'));

    let addressLabel = document.createElement('label');
    addressLabel.textContent = 'Endereço: ';
    form.appendChild(addressLabel);
    let addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.value = users[currentUserIndex].getAddress();
    form.appendChild(addressInput);
    form.appendChild(document.createElement('br'));

    let postalLabel = document.createElement('label');
    postalLabel.textContent = 'Código Postal: ';
    form.appendChild(postalLabel);
    let postalInput = document.createElement('input');
    postalInput.type = 'text';
    postalInput.value = users[currentUserIndex].getPostal();
    form.appendChild(postalInput);
    form.appendChild(document.createElement('br'));

    let cityLabel = document.createElement('label');
    cityLabel.textContent = 'Cidade: ';
    form.appendChild(cityLabel);
    let cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.value = users[currentUserIndex].getCity();
    form.appendChild(cityInput);
    form.appendChild(document.createElement('br'));

    let telemoLabel = document.createElement('label');
    telemoLabel.textContent = 'Telefone: ';
    form.appendChild(telemoLabel);
    let telemoInput = document.createElement('input');
    telemoInput.type = 'text';
    telemoInput.value = users[currentUserIndex].getTelemo();
    form.appendChild(telemoInput);
    form.appendChild(document.createElement('br'));

    saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    saveButton.addEventListener('click', function (event) {
        event.preventDefault(); //previne o comportamento padrão que é enviar um formulário,

        users[currentUserIndex].setName(nameInput.value);
        users[currentUserIndex].setEmail(emailInput.value);
        users[currentUserIndex].setPassword(passInput.value);
        users[currentUserIndex].setDate(dateInput.value);
        users[currentUserIndex].setNif(nifInput.value);
        users[currentUserIndex].setAddress(addressInput.value);
        users[currentUserIndex].setPostal(postalInput.value);
        users[currentUserIndex].setCity(cityInput.value);
        users[currentUserIndex].setTelemo(telemoInput.value);

        output.innerHTML = "Dados alterados com sucesso";
        adminView();
    });
    form.appendChild(saveButton);

    adminArea.appendChild(form);
}

// Function to display user information and provide navigation options in the admin area
function adminView() {
    adminArea.innerHTML = '';
    adminAreaBtn.innerHTML = '';

    loginProce.style.display = 'none';

    let next, editButton, deleteUserButton, previous, nome, email, pass, date, nif, address, postal, city, telemo;

    adminArea.innerHTML = '';

    let user = users[currentUserIndex];

    nome = document.createElement('label');
    nome.setAttribute("class", "userData");
    nome.innerHTML = 'Nome: ' + user.getName();
    nome.setAttribute("data-index", currentUserIndex);
    nome.style.display = 'block';
    adminArea.appendChild(nome);

    email = document.createElement('label');
    email.setAttribute("class", "userData");
    email.innerHTML = 'Email: ' + user.getEmail();
    email.setAttribute("data-index", currentUserIndex);
    email.style.display = 'block';
    adminArea.appendChild(email);

    pass = document.createElement('label');
    pass.setAttribute("class", "userData");
    pass.innerHTML = 'Password: ' + user.getPassword();
    pass.setAttribute("data-index", currentUserIndex);
    pass.style.display = 'block';
    adminArea.appendChild(pass);

    date = document.createElement('label');
    date.setAttribute("class", "userData");
    date.innerHTML = 'Data ' + user.getDate();
    date.setAttribute("data-index", currentUserIndex);
    date.style.display = 'block';
    adminArea.appendChild(date);

    nif = document.createElement('label');
    nif.setAttribute("class", "userData");
    nif.innerHTML = 'NIF: ' + user.getNif();
    nif.setAttribute("data-index", currentUserIndex);
    nif.style.display = 'block';
    adminArea.appendChild(nif);

    address = document.createElement('label');
    address.setAttribute("class", "userData");
    address.innerHTML = 'Moarada: ' + user.getAddress();
    address.setAttribute("data-index", currentUserIndex);
    address.style.display = 'block';
    adminArea.appendChild(address);

    postal = document.createElement('label');
    postal.setAttribute("class", "userData");
    postal.innerHTML = 'Codigo Postal: ' + user.getPostal();
    postal.setAttribute("data-index", currentUserIndex);
    postal.style.display = 'block';
    adminArea.appendChild(postal);

    city = document.createElement('label');
    city.setAttribute("class", "userData");
    city.innerHTML = 'Cidade: ' + user.getCity();
    city.setAttribute("data-index", currentUserIndex);
    city.style.display = 'block';
    adminArea.appendChild(city);

    telemo = document.createElement('label');
    telemo.setAttribute("class", "userData");
    telemo.innerHTML = 'Telemóvel: ' + user.getTelemo();
    telemo.setAttribute("data-index", currentUserIndex);
    telemo.style.display = 'block';
    adminArea.appendChild(telemo);

    previous = document.createElement('button');
    previous.textContent = 'Previous';
    previous.addEventListener('click', function () {
        if (currentUserIndex > 0) {
            currentUserIndex--;
            adminView();
        }
    });
    adminArea.appendChild(previous);

    next = document.createElement('button');
    next.textContent = 'Next';
    next.addEventListener('click', function () {
        if (currentUserIndex < users.length - 1) {
            currentUserIndex++;
            adminView();
        }
    });
    adminArea.appendChild(next);

    editButton = document.createElement('button');
    editButton.textContent = 'Editar dados';
    editButton.addEventListener('click', adminEditData);
    editButton.style.display = 'block';
    adminArea.appendChild(editButton);

    deleteUserButton = document.createElement('button');
    deleteUserButton.textContent = 'Eliminar registo';
    adminArea.appendChild(deleteUserButton);
    deleteUserButton.addEventListener('click', function () {
        if (confirm("Tem certeza de que deseja eliminar o registo deste utilizador?")) {
            users.splice(currentUserIndex, 1);
            if (currentUserIndex >= users.length) {
                currentUserIndex = users.length - 1;
            }
            adminView();
        }
    });

}

// Function to open or close the admin area div based on its current display status
function openCloseAdmDiv() {
    clearCatWM();

    if (adminArea.style.display === 'block') {
        adminArea.style.display = 'none';
    } else {
        adminArea.style.display = 'block';
    }
}

/* End of Admin function */

// Function to open or close the login area div based on its current display status
function openCloseLoginDiv() {
    clearCatWM();
    adminArea.innerHTML = '';
    adminAreaBtn.innerHTML = '';

    if (loginProce.style.display === 'block') {
        loginProce.style.display = 'none';
    } else {
        loginProce.style.display = 'block';
    }
    registerElementsVisibility(false);
    document.querySelector('label[for="password"]').textContent = "Palavra-passe:";
}

// Function to process the login form submission
function processLogin() {
    console.log("processLogin");

    // Check if the email or password fields are empty
    if (emailInput.value.trim() === "" || passInput.value.trim() === "") {
        output.innerHTML = "Por favor preencha todos os campos";
        return;
    }

    // Verify if the password meets the security requirements
    if (!verifyPasswordRequirements()) {
        output.innerHTML = "Palavra-passe incorreta.";
        return;
    }

    // Verify if the email is valid
    if (!verifyEmail(emailInput.value)) {
        output.innerHTML = "Email não é válido";
        return;
    }

    // Check if a user exists with the provided email and password
    for (let i = 0; i < users.length; i++) {
        if (users[i].verifyPass(emailInput.value, passInput.value)) {
            userIndex = i;
            break;
        }
    }

    // If a user is found, process the loggedin state
    if (userIndex !== -1) {
        processLoggedIn();
    } else {
        output.innerHTML = "O email " + emailInput.value + " não está registado no nosso sistema";
    }
}

// Function to control the visibility of login elements
function loginElementsVisibility(state) {
    let visibility = false;

    // Check if the elemetsNeededForLogin array is not empty
    if (elemetsNeededForLogin.length === 0) {
        console.error("O array elemetsNeededForLogin está vazio.");
        return;
    }

    state ? visibility = "block" : visibility = "none";

    for (let i = 0; i < elemetsNeededForLogin.length; i++)
        elemetsNeededForLogin[i].style.display = visibility;
}

// Function to handle the actions after successful login
function processLoggedIn() {
    console.log("processLoggedIn");

    // Update the content of the info element
    infoData(1);

    // Check if the loggedin user is an admin and adjust the display of the admin button
    if (users[userIndex].isAdmin()) {
        adminButton.style.display = 'inline-block';
    } else {
        adminButton.style.display = 'none';
    }

    // Hide the login elements
    loginElementsVisibility(false);

    // Clear all input fields
    clearAllInput();

    // Clear the output
    clearOutput();

    // Modify the values of the buttons
    leftButton.value = "Editar dados";
    rightButton.value = "Logout";

    // Remove the current event handlers from the buttons
    leftButton.removeEventListener("click", processLogin);
    rightButton.removeEventListener("click", processRegister);

    // Add new event handlers to the buttons
    leftButton.addEventListener("click", userEdit);
    rightButton.addEventListener("click", logout);
}

// Function to handle user data editing
function userEdit() {
    console.log("userEdit");

    // Show the elements that can be edited by the user
    registerElementsVisibility(true, ["name", "date", "address", "postal", "city", "telemo"]);

    // Update the information data
    infoData(2);

    // Show the current saved data
    nomeInput.value = users[userIndex].getName();
    dateInput.value = users[userIndex].getDate();
    addressInput.value = users[userIndex].getAddress();
    postalInput.value = users[userIndex].getPostal();
    cityInput.value = users[userIndex].getCity();
    telemoInput.value = users[userIndex].getTelemo();

    // Set focus on the first input element
    nomeInput.focus();

    // Modify the values of the buttons
    leftButton.value = "Efetuar alterações";
    rightButton.value = "Voltar";

    // Remove the current event handlers from the buttons
    leftButton.removeEventListener("click", userEdit);
    rightButton.removeEventListener("click", logout);

    // Add new event handlers to the buttons
    leftButton.addEventListener("click", changeUserData);
    rightButton.addEventListener("click", backToLoggedIn);
}

// Function to change user data based on the input values.
function changeUserData() {
    console.log("changeUserData");
    // Declare variables for storing input values
    let nome, date, address, postal, city, telemo;

    // Assign the values of the input elements to variables
    nome = nomeInput.value;
    date = dateInput.value;
    address = addressInput.value;
    postal = postalInput.value;
    city = cityInput.value;
    telemo = telemoInput.value;

    // Check if any of the required fields are empty
    if (nome.trim() === "" || date.trim() === "" || address.trim() === "" ||
        postal.trim() === "" || city.trim() === "" || telemo.trim() === "") {
        output.innerHTML = "Por favor preencha todos os campos";
        return;
    }

    // Update the user data with the new values
    users[userIndex].setName(nome);
    users[userIndex].setDate(date);
    users[userIndex].setAddress(address);
    users[userIndex].setPostal(postal);
    users[userIndex].setCity(city);
    users[userIndex].setTelemo(telemo);

    output.innerHTML = "Dados alterados com sucesso";
}

//performs context change to login state
function backToLoggedIn() {
    console.log("backToLoggedIn");

    clearOutput();

    //hide elements corresponding to name
    registerElementsVisibility(false);

    //upadate info element
    infoData(1);

    //change buttons captions - Editar dados e Logout
    leftButton.value = "Editar dados";
    rightButton.value = "Logout";

    //remove current event handlers from buttons
    leftButton.removeEventListener("click", changeUserData);
    rightButton.removeEventListener("click", backToLoggedIn);

    //add new event handlers to buttons
    leftButton.addEventListener("click", userEdit);
    rightButton.addEventListener("click", logout);
}

//function that creats the context for user registration
//left button is to creat a new register
//right button is to go back to login screen
function processRegister() {
    console.log("processRegister");

    // make register html elements visible
    registerElementsVisibility(true);

    //clear all input fields
    clearAllInput();

    // place focus on email
    emailInput.focus();

    // change buttons captions - efetuar registo e voltar
    leftButton.value = "Efetuar Registo";
    rightButton.value = "Voltar";

    // remove current event handlers from buttons
    leftButton.removeEventListener("click", processLogin);
    rightButton.removeEventListener("click", processRegister);

    // add new event handlers to buttons
    leftButton.addEventListener("click", userRegister);
    rightButton.addEventListener("click", backToLogin);

    clearOutput();
}

//clears all input fields
function clearAllInput() {
    nomeInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    document.getElementById('confpassword').value = "";
    dateInput.value = "";
    nifInput.value = "";
    addressInput.value = "";
    postalInput.value = "";
    cityInput.value = "";
    telemoInput.value = "";
}

//clear output paragraph tha is used to inform the user
function clearOutput() {
    output.innerHTML = "";
}

//function that registers a new user when the button is pressed
function userRegister() {
    console.log("userRegister");

    let nome, email, pass, date, nif, address, postal, city, telemo, userExists = false;

    clearOutput();

    //optainn user data
    nome = nomeInput.value;
    email = emailInput.value;
    pass = passInput.value;
    date = dateInput.value;
    nif = nifInput.value;
    address = addressInput.value;
    postal = postalInput.value;
    city = cityInput.value;
    telemo = telemoInput.value;

    // Verifies if all fields are filled
    if (nome.trim() === "" || email.trim() === "" || pass.trim() === "" || date.trim() === "" || nif.trim() === "" || address.trim() === "" || postal.trim() === "" || city.trim() === "" || telemo.trim() === "") {
        output.innerHTML = "Por favor preencha todos os campos";
        return;
    }

    // Verifies if the email address is valid
    if (!verifyEmail(email)) {
        output.innerHTML = "Endereço de e-mail inválido";
        return;
    }

    // Verifies if a user with the same email address already exists
    for (let i = 0; i < users.length; i++) {
        if (users[i].checkEmail(email)) {
            userExists = true;
            break;
        }
    }
    if (userExists) {
        output.innerHTML = "Email já registrado";
        return;
    }

    if (!verifyPassword()) {
        output.innerHTML = "A Palavra-Passe inserida e a Palavra-Passe de confirmação não coincidem";
        return;
    }

    // Creates a new User object with the user data and adds it to the users array
    users.push(new User(email, pass, nome, date, nif, address, postal, city, telemo));

    // Informs the user that the registration was successful
    output.innerHTML = "Registro efetuado com sucesso";

    clearOutput();

    // Clears all input fields
    clearAllInput();
}

//function that enables the user to get back to login screen (after logout)
function backToLoginAfterLogout() {
    console.log("backToLoginAfterLogout");

    clearOutput();

    //make register HTML elements invisible
    registerElementsVisibility(false);

    //make login elements visible
    loginElementsVisibility(true);

    //Change info data back to default
    infoData();

    //clear all inputs
    clearAllInput();

    //place focus on email
    emailInput.focus();

    //change buttons captions - Iniciar Sessão e Criar conta
    leftButton.value = "Iniciar Sessão";
    rightButton.value = "Criar conta";

    //remove current event handlers to buttons
    leftButton.removeEventListener("click", userEdit);
    rightButton.removeEventListener("click", logout);

    //add new event handlers to buttons
    leftButton.addEventListener("click", processLogin);
    rightButton.addEventListener("click", processRegister);
}

//set visibility of register only elements
//true (show) or false (hide), by default is hidden and the elements to show
function registerElementsVisibility(state, elementsToShow) {
    let visibility = state ? "block" : "none";
    for (let i = 0; i < elemetsNotNeededForLogin.length; i++) {
        if (!elementsToShow || elementsToShow.includes(elemetsNotNeededForLogin[i].id)) {
            elemetsNotNeededForLogin[i].style.display = visibility;
        }
    }
}

//function that enables the user to get back to login screen (after registering)
function backToLogin() {
    console.log("backToLogin");
    //make register HTML elements invisible
    registerElementsVisibility(false);

    //make login elements visible
    loginElementsVisibility(true);

    clearOutput();

    //clear all inputs
    clearAllInput();

    //place focus on email
    emailInput.focus();

    //change buttons captions - Iniciar sessão e Criar conta
    leftButton.value = "Iniciar sessão";
    rightButton.value = "Criar conta";

    //remove current event handlers to buttons
    leftButton.removeEventListener("click", userRegister);
    rightButton.removeEventListener("click", backToLogin);

    //add new event handlers to buttons
    leftButton.addEventListener("click", processLogin);
    rightButton.addEventListener("click", processRegister);
}

// Function to update information based on the state
function infoData(state) {
    let logButtonText = document.getElementById('log-button-text');
    let h1reg = document.getElementById('h1reg');
    let h2reg = document.getElementById('h2reg');
    if (userIndex === -1) {
        logButtonText.innerHTML = "Login";
        h1reg.innerHTML = "Iniciar Sessão";
        h2reg.innerHTML = "Faça login ou crie uma conta para começar a comprar na Clothes.S e ter acesso a promoções exclusivas.";
    } else {
        switch (state) {
            case 1:
                let firstName = users[userIndex].getFName();
                logButtonText.innerHTML = "Olá " + firstName;
                h1reg.innerHTML = "Bem-vindo à Clothes.S";
                h2reg.innerHTML = users[userIndex].getName();
                break;
            case 2:
                logButtonText.innerHTML = "A editar dados";
                h1reg.innerHTML = "A editar dados";
                h2reg.innerHTML = users[userIndex].getName();
                break;
        }
    }
}

// Function to handle logout functionality
function logout() {
    console.log("logout");
    userIndex = -1;
    let logButtonText = document.getElementById('log-button-text');
    logButtonText.innerHTML = "Login";
    loginProce.style.display = 'none';
    adminButton.style.display = 'none';
    adminArea.style.display = 'none';
    adminAreaBtn.innerHTML = '';
    clearCatWM();
    backToLoginAfterLogout();
}

//a simple function to verify if an email is valid
//the adredd to be verified
function verifyEmail(email) {
    let emailAdress, auxArr;
    let validationResult = true;

    if (arguments.length !== 1 || typeof email !== "string")
        return false;

    emailAdress = email;

    auxArr = emailAdress.split("@");

    //check if result split has 2 elements and both are not empty
    if (auxArr.length === 2 && auxArr[0] !== "" && auxArr[1] !== "") {
        auxArr = auxArr[1].split(".");
        //check if at least . existe anl all strings are not empty
        if (auxArr.length > 1 && auxArr.length < 4) {
            for (let i = 0; i < auxArr.length; i++) {
                if (auxArr[i] === "")
                    validationResult = false;
            }
        }
        else
            validationResult = false
    }
    else
        validationResult = false

    return validationResult;
}

// Function to verify if the password matches the confirmed password
function verifyPassword() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confpassword').value;

    return password === confirmPassword;
}

// Function to verify if the password meets certain requirements
function verifyPasswordRequirements() {
    let password = document.getElementById('password').value;
    let hasUpperCase = /[A-Z]/.test(password);
    let hasNumber = /\d/.test(password);
    // Regex (Define a search pattern in text) to Check if the password contains an uppercase letter
    // Regex to Check if the password contains a digit
    return password.length >= 6 && hasUpperCase && hasNumber;
}

// Function to close the login/register form
function closeLoginRegister() {
    console.log("closeLoginRegister");
    loginProce.style.display = 'none';
}
/*End of Functions for Users*/

/*Functions for Store Content*/

// Data structure organization for store data
let storeData = {
    sections: [
        {
            name: 'Mulheres',
            categories: [
                {
                    name: 'Casacos',
                    products: [
                        {
                            nome: 'Casaco Longo',
                            preco: 100,
                            imagem: 'img/casaco1.png',
                            composicao: 'Algodão',
                            tamanho: 'M',
                            referencia: 'M001MP',
                            cor: 'Preto',
                            stock: 10
                        },
                        {
                            nome: 'Casaco Amarelo',
                            preco: 100,
                            imagem: 'img/casaco2.png',
                            composicao: 'Algodão',
                            tamanho: 'M',
                            referencia: 'M002MAM',
                            cor: 'Amarelo',
                            stock: 10
                        }
                    ]
                },
                {
                    name: 'Camisolas',
                    products: [
                        {
                            nome: 'Camisola Los Angeles',
                            preco: 50,
                            imagem: 'img/camisola1.png',
                            composicao: 'Algodão',
                            tamanho: 'S',
                            referencia: 'M003SB',
                            cor: 'Branca',
                            stock: 50
                        }
                    ]
                },
                {
                    name: 'T-shirts',
                    products: [
                        {
                            nome: 'T-shirt Preta',
                            preco: 10,
                            imagem: 'img/tshirt1.png',
                            composicao: 'Algodão',
                            tamanho: 'S',
                            referencia: 'M004SP',
                            cor: 'Preto',
                            stock: 20
                        }
                    ]
                },
                {
                    name: 'Calças',
                    products: [
                        {
                            nome: 'Calças de Ganga',
                            preco: 50,
                            imagem: 'img/ganga1.png',
                            composicao: 'Ganga',
                            tamanho: 'M',
                            referencia: 'M005MAZ',
                            cor: 'Azul',
                            stock: 5
                        }
                    ]
                }
            ]
        },
        {
            name: 'Homens',
            categories: [
                {
                    name: 'Casacos',
                    products: [
                        {
                            nome: 'Casaco Rocky',
                            preco: 100,
                            imagem: 'img/casacoh.png',
                            composicao: 'Couro',
                            tamanho: 'M',
                            referencia: 'H001MC',
                            cor: 'Castanho',
                            stock: 10
                        }
                    ]
                },
                {
                    name: 'Camisolas',
                    products: [
                        {
                            nome: 'Camisola Regular Fit',
                            preco: 50,
                            imagem: 'img/camisolah.png',
                            composicao: 'Algodão',
                            tamanho: 'S',
                            referencia: 'H002SCZ',
                            cor: 'Cinzenta',
                            stock: 50
                        }
                    ]
                },
                {
                    name: 'T-shirts',
                    products: [
                        {
                            nome: 'T-shirt Polo',
                            preco: 10,
                            imagem: 'img/tshirth.png',
                            composicao: 'Algodão',
                            tamanho: 'S',
                            referencia: 'H003SAZ',
                            cor: 'Azul',
                            stock: 20
                        }
                    ]
                },
                {
                    name: 'Calças',
                    products: [
                        {
                            nome: 'Calças de Ganga',
                            preco: 50,
                            imagem: 'img/gangah.png',
                            composicao: 'Ganga',
                            tamanho: 'M',
                            referencia: '004MAZ',
                            cor: 'Azul',
                            stock: 5
                        }
                    ]
                },
            ]
        },
    ]
};

//This function creates a form in the admin area of the page for adding a new product
function adminAddProduct() {
    let form, saveButton, closeButton;

    adminArea.innerHTML = '';

    form = document.createElement('form');

    // Create fields for product information
    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nome: ';
    form.appendChild(nameLabel);
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));

    let precoLabel = document.createElement('label');
    precoLabel.textContent = 'Preço: ';
    form.appendChild(precoLabel);
    let precoInput = document.createElement('input');
    precoInput.type = 'number';
    form.appendChild(precoInput);
    form.appendChild(document.createElement('br'));

    let imagemLabel = document.createElement('label');
    imagemLabel.textContent = 'Imagem: ';
    form.appendChild(imagemLabel);
    let imagemInput = document.createElement('input');
    imagemInput.type = 'text';
    form.appendChild(imagemInput);
    form.appendChild(document.createElement('br'));

    let composicaoLabel = document.createElement('label');
    composicaoLabel.textContent = 'Composição: ';
    form.appendChild(composicaoLabel);
    let composicaoInput = document.createElement('input');
    composicaoInput.type = 'text';
    form.appendChild(composicaoInput);
    form.appendChild(document.createElement('br'));

    let tamanhoLabel = document.createElement('label');
    tamanhoLabel.textContent = 'Tamanho: ';
    form.appendChild(tamanhoLabel);
    let tamanhoInput = document.createElement('input');
    tamanhoInput.type = 'text';
    form.appendChild(tamanhoInput);
    form.appendChild(document.createElement('br'));

    let referenciaLabel = document.createElement('label');
    referenciaLabel.textContent = 'Referência: ';
    form.appendChild(referenciaLabel);
    let referenciaInput = document.createElement('input');
    referenciaInput.type = 'text';
    form.appendChild(referenciaInput);
    form.appendChild(document.createElement('br'));

    let corLabel = document.createElement('label');
    corLabel.textContent = 'Cor: ';
    form.appendChild(corLabel);
    let corInput = document.createElement('input');
    corInput.type = 'text';
    form.appendChild(corInput);
    form.appendChild(document.createElement('br'));

    let stockLabel = document.createElement('label');
    stockLabel.textContent = 'Stock: ';
    form.appendChild(stockLabel);
    let stockInput = document.createElement('input');
    stockInput.type = 'number';
    form.appendChild(stockInput);
    form.appendChild(document.createElement('br'));

    // Create fields for selecting section and category
    let sectionLabel = document.createElement('label');
    sectionLabel.textContent = 'Seção: ';
    form.appendChild(sectionLabel);
    let sectionSelect = document.createElement('select');
    // Populate the section select dropdown with available sections from storeData
    for (let section of storeData.sections) {
        let option = document.createElement('option');
        option.value = section.name;
        option.textContent = section.name;
        sectionSelect.appendChild(option);
    }
    form.appendChild(sectionSelect);
    form.appendChild(document.createElement('br'));

    let categoryLabel = document.createElement('label');
    categoryLabel.textContent = 'Categoria: ';
    form.appendChild(categoryLabel);
    let categoryInput = document.createElement('input');
    categoryInput.type = 'text';
    form.appendChild(categoryInput);
    form.appendChild(document.createElement('br'));

    saveButton = document.createElement('button');
    saveButton.textContent = 'Adicionar';
    saveButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the values entered in the form
        let name = nameInput.value;
        let preco = precoInput.value;
        let imagem = imagemInput.value;
        let composicao = composicaoInput.value;
        let tamanho = tamanhoInput.value;
        let referencia = referenciaInput.value;
        let cor = corInput.value;
        let stock = stockInput.value;

        let sectionName = sectionSelect.value;
        let categoryName = categoryInput.value;

        // Create a new product object
        let newProduct = {
            nome: name,
            preco: preco,
            imagem: imagem,
            composicao: composicao,
            tamanho: tamanho,
            referencia: referencia,
            cor: cor,
            stock: stock
        };

        // Add the new product to the selected category
        for (let section of storeData.sections) {
            if (section.name === sectionName) {
                let categoryFound = false;
                for (let category of section.categories) {
                    if (category.name === categoryName) {
                        category.products.push(newProduct);
                        categoryFound = true;
                        break;
                    }
                }
                if (!categoryFound) {
                    // Create a new category if it doesn't exist
                    section.categories.push({
                        name: categoryName,
                        products: [newProduct]
                    });
                }
                break;
            }
        }

        output.innerHTML = 'Produto adicionado com sucesso.';
    });

    form.appendChild(saveButton);

    closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.addEventListener('click', function () {
        adminArea.innerHTML = '';
    });

    form.appendChild(closeButton);

    adminArea.appendChild(form);
}

//The function retrieves the current section, category, and product from the storeData structure based 
function displayProduct() {
    adminArea.innerHTML = '';

    // Get the current section, category, and product based on the indices
    let section = storeData.sections[currentSectionIndex];
    let category = section.categories[currentCategoryIndex];
    let product = category.products[currentProductIndex];

    // Create and append elements to display the product information
    let adminAreaTitle = document.createElement('h3');
    adminAreaTitle.textContent = `Seção: ${section.name}`;
    adminArea.appendChild(adminAreaTitle);

    let adminAreaCategory = document.createElement('h4');
    adminAreaCategory.textContent = `Categoria: ${category.name}`;
    adminArea.appendChild(adminAreaCategory);

    let adminAreaProduct = document.createElement('h4');
    adminAreaProduct.textContent = `Produto: ${product.nome}`;
    adminArea.appendChild(adminAreaProduct);

    let adminAreaImage = document.createElement('img');
    adminAreaImage.src = product.imagem;
    adminAreaImage.alt = product.nome;
    adminAreaImage.style.width = '200px';
    adminArea.appendChild(adminAreaImage);

    let adminAreaPrice = document.createElement('p');
    adminAreaPrice.textContent = `Preço: ${product.preco}€`;
    adminArea.appendChild(adminAreaPrice);

    let adminAreaComposition = document.createElement('p');
    adminAreaComposition.textContent = `Composição: ${product.composicao}`;
    adminArea.appendChild(adminAreaComposition);

    let adminAreaSize = document.createElement('p');
    adminAreaSize.textContent = `Tamanho: ${product.tamanho}`;
    adminArea.appendChild(adminAreaSize);

    let adminAreaReference = document.createElement('p');
    adminAreaReference.textContent = `Referência: ${product.referencia}`;
    adminArea.appendChild(adminAreaReference);

    let adminAreaColor = document.createElement('p');
    adminAreaColor.textContent = `Cor: ${product.cor}`;
    adminArea.appendChild(adminAreaColor);
}

//This function is responsible for advancing to the next product within the store's data structure
function nextProduct() {
    let section = storeData.sections[currentSectionIndex];
    let category = section.categories[currentCategoryIndex];
    let productCount = category.products.length;

    displayProduct();

    if (currentProductIndex < productCount - 1) {
        currentProductIndex++;
    } else if (currentCategoryIndex < section.categories.length - 1) {
        currentCategoryIndex++;
        currentProductIndex = 0;
    } else if (currentSectionIndex < storeData.sections.length - 1) {
        currentSectionIndex++;
        currentCategoryIndex = 0;
        currentProductIndex = 0;
    }
}

//This function is responsible for moving to the previous product within the store's data structure
function previousProduct() {
    let section = storeData.sections[currentSectionIndex];
    let category = section.categories[currentCategoryIndex];
    let productCount = category.products.length;

    displayProduct();

    if (currentProductIndex > 0) {
        currentProductIndex--;
    } else if (currentCategoryIndex > 0) {
        currentCategoryIndex--;
        currentProductIndex = storeData.sections[currentSectionIndex].categories[currentCategoryIndex].products.length - 1;
    } else if (currentSectionIndex > 0) {
        currentSectionIndex--;
        currentCategoryIndex = storeData.sections[currentSectionIndex].categories.length - 1;
        currentProductIndex = storeData.sections[currentSectionIndex].categories[currentCategoryIndex].products.length - 1;
    }

}

//this function provides a user interface to edit the product details
function editProduct() {

    // Get the currently displayed product from the getCurrentProduct function
    let product = getCurrentProduct();

    // Clear the content of the admin area
    adminArea.innerHTML = '';
    adminAreaBtn.innerHTML = '';

    let form = document.createElement('form');

    // Create fields for the product information
    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nome: ';
    form.appendChild(nameLabel);
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = product.nome;
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));

    let precoLabel = document.createElement('label');
    precoLabel.textContent = 'Preço: ';
    form.appendChild(precoLabel);
    let precoInput = document.createElement('input');
    precoInput.type = 'number';
    precoInput.value = product.preco;
    form.appendChild(precoInput);
    form.appendChild(document.createElement('br'));

    let imagemLabel = document.createElement('label');
    imagemLabel.textContent = 'Imagem: ';
    form.appendChild(imagemLabel);
    let imagemInput = document.createElement('input');
    imagemInput.type = 'text';
    imagemInput.value = product.imagem;
    form.appendChild(imagemInput);
    form.appendChild(document.createElement('br'));

    let composicaoLabel = document.createElement('label');
    composicaoLabel.textContent = 'Composição: ';
    form.appendChild(composicaoLabel);
    let composicaoInput = document.createElement('input');
    composicaoInput.type = 'text';
    composicaoInput.value = product.composicao;
    form.appendChild(composicaoInput);
    form.appendChild(document.createElement('br'));

    let tamanhoLabel = document.createElement('label');
    tamanhoLabel.textContent = 'Tamanho: ';
    form.appendChild(tamanhoLabel);
    let tamanhoInput = document.createElement('input');
    tamanhoInput.type = 'text';
    tamanhoInput.value = product.tamanho;
    form.appendChild(tamanhoInput);
    form.appendChild(document.createElement('br'));

    let referenciaLabel = document.createElement('label');
    referenciaLabel.textContent = 'Referência: ';
    form.appendChild(referenciaLabel);
    let referenciaInput = document.createElement('input');
    referenciaInput.type = 'text';
    referenciaInput.value = product.referencia;
    form.appendChild(referenciaInput);
    form.appendChild(document.createElement('br'));

    let corLabel = document.createElement('label');
    corLabel.textContent = 'Cor: ';
    form.appendChild(corLabel);
    let corInput = document.createElement('input');
    corInput.type = 'text';
    corInput.value = product.cor;
    form.appendChild(corInput);
    form.appendChild(document.createElement('br'));

    let stockLabel = document.createElement('label');
    stockLabel.textContent = 'Stock: ';
    form.appendChild(stockLabel);
    let stockInput = document.createElement('input');
    stockInput.type = 'number';
    stockInput.value = product.stock;
    form.appendChild(stockInput);
    form.appendChild(document.createElement('br'));

    // Create the save button
    let saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    saveButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Update the product values based on the form fields
        product.nome = nameInput.value;
        product.preco = precoInput.value;
        product.imagem = imagemInput.value;
        product.composicao = composicaoInput.value;
        product.tamanho = tamanhoInput.value;
        product.referencia = referenciaInput.value;
        product.cor = corInput.value;
        product.stock = stockInput.value;
        // Update other product attributes in a similar manner

        // Display a message indicating that the product has been successfully edited
        output.innerHTML = 'Produto editado com sucesso.';
    });

    let backButton = document.createElement('button');
    backButton.textContent = 'Voltar';
    backButton.addEventListener('click', function () {
        adminEditProducts(); // Function to display the list of products again
    });

    form.appendChild(backButton);

    // Create the close button
    let closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.addEventListener('click', function () {
        adminArea.innerHTML = '';
    });

    // Add the form fields and buttons to the admin area
    form.appendChild(saveButton);
    form.appendChild(closeButton);
    adminArea.appendChild(form);
}

//this function prepares the admin area by displaying the product information and providing buttons for navigation
function adminEditProducts() {
    adminArea.innerHTML = '';
    adminAreaBtn.innerHTML = '';

    clearOutput();

    let closeButton = document.createElement('button');
    let previousButton = document.createElement('button');
    let nextButton = document.createElement('button');
    let editButton = document.createElement('button');

    displayProduct();

    closeButton.textContent = 'Fechar';
    closeButton.addEventListener('click', closeAdminArea);
    adminAreaBtn.appendChild(closeButton);

    previousButton.textContent = 'Recuar';
    previousButton.addEventListener('click', previousProduct);
    adminAreaBtn.appendChild(previousButton);

    nextButton.textContent = 'Avançar';
    nextButton.addEventListener('click', nextProduct);
    adminAreaBtn.appendChild(nextButton);

    editButton.textContent = 'Editar';
    editButton.addEventListener('click', editProduct);
    adminAreaBtn.appendChild(editButton);
}

//this function can close the admin area, clear its content, and reset the indexes
function closeAdminArea() {
    adminArea.innerHTML = '';
    currentSectionIndex = 0;
    currentCategoryIndex = 0;
    currentProductIndex = 0;
}

// Retrieve the currently displayed product
function getCurrentProduct() {
    let currentSection = storeData.sections[currentSectionIndex];
    let currentCategory = currentSection.categories[currentCategoryIndex];
    let currentProduct = currentCategory.products[currentProductIndex];

    return currentProduct;
}

// Retrieve the section name based on the given section and category names
function getSectionName(sectionName, categoryName) {
    // Iterate over the sections in the storeData object
    for (let section of storeData.sections) {
        // Check if the section name matches the given sectionName
        if (section.name === sectionName) {
            // Iterate over the categories in the current section
            for (let cat of section.categories) {
                // Check if the category name matches the given categoryName
                if (cat.name === categoryName) {
                    // If both section and category names match, return the section name
                    return section.name;
                }
            }
        }
    }
}

// Retrieve the products of a given section and category
function getProducts(sectionName, categoryName) {
    // Iterate over the sections in the storeData object
    for (let section of storeData.sections) {
        // Check if the section name matches the given sectionName
        if (section.name === sectionName) {
            // Iterate over the categories in the current section
            for (let cat of section.categories) {
                // Check if the category name matches the given categoryName
                if (cat.name === categoryName) {
                    // If both section and category names match, return the products of the category
                    return cat.products;
                }
            }
        }
    }
}

// Retrieve the name of a category
function getCategoryName(category) {
    // Iterate over the sections in the storeData object
    for (let section of storeData.sections) {
        // Iterate over the categories in the current section
        for (let cat of section.categories) {
            // Check if the name of the current category matches the given category name
            if (cat.name === category) {
                // If a match is found, return the name of the category
                return cat.name;
            }
        }
    }
}

//This function is responsible for displaying the women's categories in the store
function showWomenCategory() {

    // Declare variables for each category
    let casaco, camisola, tshirt, calca;

    // Close the login/register area
    closeLoginRegister();

    // Clear the store products area
    clearStoreProducts();

    // Hide the shopping bag
    hideShopBag();

    // Clear previous categories
    clearCatWM();

    // Create the women's categories
    casaco = document.createElement('div');
    casaco.textContent = 'Casacos';
    catWomen.appendChild(casaco);
    casaco.addEventListener('click', () => showProducts('Mulheres', 'Casacos'));

    camisola = document.createElement('div');
    camisola.textContent = 'Camisolas';
    catWomen.appendChild(camisola);
    camisola.addEventListener('click', () => showProducts('Mulheres', 'Camisolas'));

    tshirt = document.createElement('div');
    tshirt.textContent = 'T-shirts';
    catWomen.appendChild(tshirt);
    tshirt.addEventListener('click', () => showProducts('Mulheres', 'T-shirts'));

    calca = document.createElement('div');
    calca.textContent = 'Calças';
    catWomen.appendChild(calca);
    calca.addEventListener('click', () => showProducts('Mulheres', 'Calças'));
}

//This function is responsible for displaying the men's categories in the store
function showMenCategory() {

    // Declare variables for each category
    let casaco, camisola, tshirt, calca;

    // Close the login/register area
    closeLoginRegister();

    // Clear the store products area
    clearStoreProducts();

    // Hide the shopping bag
    hideShopBag();

    // Clear previous categories
    clearCatWM();

    // Create the men's categories
    casaco = document.createElement('div');
    casaco.textContent = 'Casacos';
    catMen.appendChild(casaco);
    casaco.addEventListener('click', () => showProducts('Homens', 'Casacos'));

    camisola = document.createElement('div');
    camisola.textContent = 'Camisolas';
    catMen.appendChild(camisola);
    camisola.addEventListener('click', () => showProducts('Homens', 'Camisolas'));

    tshirt = document.createElement('div');
    tshirt.textContent = 'T-shirts';
    catMen.appendChild(tshirt);
    tshirt.addEventListener('click', () => showProducts('Homens', 'T-shirts'));

    calca = document.createElement('div');
    calca.textContent = 'Calças';
    catMen.appendChild(calca);
    calca.addEventListener('click', () => showProducts('Homens', 'Calças'));
}

//This function is responsible for displaying the products of a specific section and category in the store
function showProducts(sectionName, categoryName) {

    closeLoginRegister();

    clearCatWM();

    // Clear the store products area
    clearStoreProducts();

    // Hide the shopping bag
    hideShopBag();

    // Get the products of the selected category
    let products = getProducts(sectionName, categoryName), cartbutton;

    // Create an element to display the section and category names
    let sectionElement = document.createElement('h3');
    sectionElement.textContent = `${sectionName}/${categoryName}`;
    storeProducts.appendChild(sectionElement);

    // Create elements for each product and add them to the store-products element
    for (let product of products) {
        let productElement = document.createElement('div');
        productElement.innerHTML = `
            <h4>${product.nome}</h4>
            <img src="${product.imagem}" alt="${product.nome}">
            <p>Preço: ${product.preco}€</p>
            <p>Composição: ${product.composicao}</p>
            <p>Tamanho: ${product.tamanho}</p>
            <p>Referência: ${product.referencia}</p>
            <p>Cor: ${product.cor}</p>
            <label for="quantity-${product.referencia}">Quantidade:</label>
            <input type="number" id="quantity-${product.referencia}" name="quantity" min="1" max="${product.stock}" value="1">
        `;
        storeProducts.appendChild(productElement);
        productElement.classList.add('product');

        cartbutton = document.createElement('button');
        cartbutton.textContent = 'Comprar';
        cartbutton.classList.add('addtocartbutton');
        productElement.appendChild(cartbutton);
        cartbutton.addEventListener('click', function () {
            let quantityInput = document.querySelector(`#quantity-${product.referencia}`);
            let quantity = parseInt(quantityInput.value);
            if (quantity > 0 && quantity <= product.stock) {
                for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                }
                clearOutput();
            } else {
                clearOutput();
                output.innerHTML = `A quantidade deve ser entre 1 e ${product.stock}`;
            }
        });
    }
}

//This function searches for products in all sections and categories that match a given query
function getMatchingProducts(query) {
    let products = [];

    // Search for products in all sections and categories
    for (let section of storeData.sections) {
        for (let category of section.categories) {
            for (let product of category.products) {
                // Check if the product name contains the search term (case-insensitive)
                if (product.nome.toLowerCase().includes(query.toLowerCase())) {
                    // Add the matching product, section name, and category name to the products array
                    products.push({
                        product: product,
                        sectionName: section.name,
                        categoryName: category.name
                    });
                }
            }
        }
    }

    return products;
}

//this function performs a search for products based on a given query and displays the search results.
function searchProducts(query) {
    closeLoginRegister();

    // Clear previous products
    clearStoreProducts();

    hideShopBag();

    // Search for products that match the search query
    let products = getMatchingProducts(query), cartbutton;

    // Create elements for the products and add them to the store-products element
    for (let item of products) {
        let product = item.product;
        let sectionName = item.sectionName;
        let categoryName = item.categoryName;

        let productElement = document.createElement('div');
        productElement.innerHTML = `
            <h3>${sectionName}/${categoryName} - ${product.nome}</h3>
            <img src="${product.imagem}" alt="${product.nome}">
            <p>Preço: ${product.preco}€</p>
            <p>Composição: ${product.composicao}</p>
            <p>Tamanho: ${product.tamanho}</p>
            <p>Referência: ${product.referencia}</p>
            <p>Cor: ${product.cor}</p>
        `;
        storeProducts.appendChild(productElement);
        productElement.classList.add('product');

        cartbutton = document.createElement('button');
        cartbutton.textContent = 'Comprar';
        cartbutton.classList.add('addtocartbutton');
        productElement.appendChild(cartbutton);
        cartbutton.addEventListener('click', function () {
            addToCart(product);
        });
    }
}

//This function clears the contents of the storeProducts element.
function clearStoreProducts() {
    storeProducts.innerHTML = '';
}

//The function clears the contents of the catWomen and catMen elements. 
function clearCatWM() {
    catWomen.innerHTML = '';
    catMen.innerHTML = '';
}
/* End of Functions for Store Content */

/*Functions for Cart Content*/

//array for cart content
let cart = [];

//this function sets the CSS display property of the cartContainer element to 'none'
function hideShopBag() {
    cartContainer.style.display = 'none';
}

//This function is responsible for generating the HTML structure for the shopping cart or shop bag
function createCartHTML() {
    // Create the HTML structure of the shopping cart
    let cartHTML = `
      <h2>Saco de compras</h2>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Imagem</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody id="cart-items">
        </tbody>
      </table>
      <p>Total do carrinho: <span id="cart-total"></span></p>
      <button class="finish-order-button" id="finish-order-button">Finalizar Compra</button>
    `;

    // Add the "User Data" div
    cartHTML += `<div id="user-data-container"></div>`;

    cartContainer.innerHTML = cartHTML;
    hideShopBag();

    // Add a click event to the "Finish Order" button
    document.getElementById("finish-order-button").addEventListener("click", () => {
        // Check if the user is logged in
        if (userIndex !== -1) {
            // Fill in the fields automatically
            document.getElementById("user-data-container").innerHTML = `
              <h3>Dados do Utilizador</h3>
              <p>Nome: ${users[userIndex].name}</p>
              <p>Email: ${users[userIndex].email}</p>
              <p>NIF: ${users[userIndex].nif}</p>
              <p>Morada: ${users[userIndex].address}</p>
              <p>Código Postal: ${users[userIndex].postalCode}</p>
              <p>Cidade: ${users[userIndex].city}</p>
              <p>Telemóvel: ${users[userIndex].phone}</p>
              <button class="checkout-button" id="checkout-button">Avançar</button>
            `;
        } else {
            // Request the user to fill in the fields manually
            document.getElementById("user-data-container").innerHTML = `
              <h3>Dados do Utilizador</h3>
              <label for="name-input">Nome:</label><br> 
              <input type="text" id="name-input" class="form-input" required><br> 
              <label for="email-input">Email:</label><br> 
              <input type="email" id="email-input" class="form-input" required><br> 
              <label for="nif-input">NIF:</label><br> 
              <input type="text" id="nif-input" class="form-input" required><br> 
              <label for="address-input">Morada:</label><br> 
              <input type="text" id="address-input" class="form-input" required><br> 
              <label for="postal-input">Código Postal:</label><br> 
              <input type="text" id="postal-input" class="form-input" required><br> 
              <label for="city-input">Cidade:</label><br> 
              <input type="text" id="city-input" class="form-input" required><br> 
              <label for="telemo-input">Telemóvel:</label><br> 
              <input type="text" id="telemo-input" class="form-input" required><br> 
              <button class="checkout-button" id="checkout-button">Avançar</button>
            `;
        }

        // Add a click event to the "Avançar" button
        document.getElementById("checkout-button").addEventListener("click", () => {
            // Check if all fields are filled
            let isValid = true;

            if (userIndex === -1) {
                // If the user is not logged in, check if all fields are filled
                let inputs = document.querySelectorAll(".form-input");

                inputs.forEach(input => {
                    if (input.value.trim() === "") {
                        isValid = false;
                    }
                });
            }

            if (isValid) {
                // If all fields are filled, hide the "User Data" div
                document.getElementById("user-data-container").style.display = "none";

                // Call the function showCheckoutForm
                showCheckoutForm();
            } else {
                // If any field is empty, display an error message
                alert("Por favor preencha todos os campos");
            }
        });
    });
}

// Display the checkout form for selecting the payment method
function showCheckoutForm() {
    // clean the output
    clearOutput();

    // Create the shipping information form elements
    let formHTML = `
      <h3>Forma de Pagamento</h3>
      <input type="radio" id="payment-cash" name="payment-method" value="cash">
      <label for="payment-cash">Cobrança</label><br>
      <input type="radio" id="payment-key" name="payment-method" value="key">
      <label for="payment-key">Chave de pagamento</label><br>

      <!-- Field to enter the payment key -->
      <div id="payment-key-container"></div>

      <!-- Button to confirm the payment method -->
      <button class="checkout-button" id="confirm-payment-button">Confirmar Forma de Pagamento</button>

      <!-- Error message -->
      <p id="error-message"></p>

      <!-- Success message -->
      <p id="success-message"></p>

      <!-- Button to go back -->
      <button class="checkout-button" id="back-button">Voltar</button>

    `;

    // Render the shipping information form
    output.innerHTML = formHTML;

    // Add change event listener to radio buttons
    document.getElementsByName("payment-method").forEach(radio => {
        radio.addEventListener("change", event => {
            if (event.target.value === "key") {
                // Show the field to enter the payment key
                document.getElementById("payment-key-container").innerHTML = `
                  <label for="payment-key-input">Chave:</label><br> 
                  <input type="text" id="payment-key-input"><br>
                `;
            } else {
                // Hide the field to enter the payment key
                document.getElementById("payment-key-container").innerHTML = "";
            }
        });
    });

    // Add click event listener to "Confirm Payment Method" button
    document.getElementById("confirm-payment-button").addEventListener("click", () => {
        // Check which payment method is selected
        let paymentMethodElement = document.querySelector('input[name="payment-method"]:checked');
        if (paymentMethodElement) {
            let paymentMethod = paymentMethodElement.value;
            if (paymentMethod === "cash") {
                // If payment method is Cash on Delivery, do nothing
            } else if (paymentMethod === "key") {
                // If payment method is Payment Key, check if the key is valid
                let paymentKey = document.getElementById("payment-key-input").value;

                if (isValidPaymentKey(paymentKey)) {
                    // If the key is valid, display the "Order placed successfully" message
                    document.getElementById("success-message").innerHTML = "Encomenda efetuada com sucesso";

                    // Close the cart and go back
                    setTimeout(() => {
                        showShopBag();
                        clearOutput();
                        removeAll();
                    }, 3000);
                } else {
                    // If the key is invalid, display an error message
                    document.getElementById("error-message").innerHTML = "Chave de pagamento inválida";
                }
            } else {
                // handle the case where no element was found
                document.getElementById("error-message").innerHTML = "Por favor, selecione uma forma de pagamento";
            }
        }
    });

    // Add click event listener to "Voltar" button
    document.getElementById("back-button").addEventListener("click", () => {
        clearOutput();
        showShopBag();
    });
}

// This is a simple function that simulates a payment method and validates
function isValidPaymentKey(paymentKey) {
    // Define the list of accepted payment keys
    let acceptedKeys = ["865sh78f6hny89u9", "3fg1m43n134jhw"];

    // Check if the payment key is in the list of accepted keys
    return acceptedKeys.includes(paymentKey);
}

// This function updates the cart display on the page by populating the cart items table, calculating the cart total
function updateCart() {
    // Clear previous cart items
    let cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    // Add cart items to the table
    let cartTotal = 0;
    for (let item of cart) {
        let productTotal = item.product.preco * item.quantity;
        cartTotal += productTotal;
        let itemElement = document.createElement('tr');
        itemElement.innerHTML = `
        <td>${item.product.nome}</td>
        <td><img src="${item.product.imagem}" width="50" height="50"></td>
        <td>${item.product.preco}€</td>
        <td>
            <button class="decrease-quantity">-</button>
            ${item.quantity}
            <button class="increase-quantity">+</button>
        </td>
        <td>${productTotal}€</td>
        <td><button class="remove-from-cart">Remover</button></td>
        `;
        cartItemsElement.appendChild(itemElement);

        // Add event listeners to buttons
        let decreaseQuantityButton = itemElement.querySelector('.decrease-quantity');
        decreaseQuantityButton.addEventListener('click', function () {
            decreaseQuantity(item.product.referencia);
        });
        let increaseQuantityButton = itemElement.querySelector('.increase-quantity');
        increaseQuantityButton.addEventListener('click', function () {
            increaseQuantity(item.product.referencia);
        });
        let removeFromCartButton = itemElement.querySelector('.remove-from-cart');
        removeFromCartButton.addEventListener('click', function () {
            removeFromCart(item.product.referencia);
        });


    }

    // Add the Clear Cart button
    let clearCartButton = document.createElement('button');
    clearCartButton.textContent = 'Limpar carrinho';
    clearCartButton.id = 'clear-cart-button';
    cartItemsElement.appendChild(clearCartButton);
    clearCartButton.addEventListener('click', function () {
        removeAll();
    });

    // Update the cart total
    let cartTotalElement = document.getElementById('cart-total');
    cartTotalElement.textContent = `${cartTotal}€`;

    // Update the cart item count
    updateCartCount();
}

// This function adds a product to the cart. It checks if the product is in stock
function addToCart(product) {
    // Check if there is available stock
    if (product.stock <= 0) {
        clearOutput();
        output.innerHTML = 'Desculpe, este produto está esgotado.';
        return;
    }

    // Add the product to the cart
    let existingProduct = cart.find(item => item.product.referencia === product.referencia);
    if (existingProduct) {
        // If the product is already in the cart, increase the quantity
        existingProduct.quantity++;
    } else {
        // If the product is not in the cart, add it with quantity 1
        cart.push({ product: product, quantity: 1 });
    }

    // Update the product stock
    updateStock(product.referencia, -1);

    // Update the cart display
    updateCart();

    cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Update the cart item count
    updateCartCount();
}

// This function updates the cart item count displayed on the cart button.
function updateCartCount() {
    // Calculate the number of items in the cart
    let cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Update the cart item count
    let cartCountElement = document.querySelector('.cart-button-text');
    cartCountElement.textContent = `Saco de compras (${cartItemCount})`;
}

// This function updates the stock of a product with the given reference
function updateStock(referencia, change) {
    // Update the stock of the product with the provided reference
    for (let section of storeData.sections) {
        for (let category of section.categories) {
            for (let product of category.products) {
                if (product.referencia === referencia) {
                    product.stock += change;
                }
            }
        }
    }
}

// This function displays the shopping bag.
function showShopBag() {
    clearOutput();
    clearCatWM();
    clearStoreProducts();
    closeLoginRegister();

    if (cartContainer.style.display === 'none') {
        // If the shopping bag is hidden, display it
        cartContainer.style.display = 'block';
    } else {
        // If the shopping bag is visible, hide it
        cartContainer.style.display = 'none';
    }
}

// This function increases the quantity of a product in the cart.
function increaseQuantity(referencia) {
    // Find the product in the cart and increase the quantity
    let existingProduct = cart.find(item => item.product.referencia === referencia);
    if (existingProduct) {
        existingProduct.quantity++;
    }

    // Update the shopping cart
    updateCart();

    // Update the item count in the shopping cart
    updateCartCount();
}

// This function decreases the quantity of a product in the cart.
function decreaseQuantity(referencia) {
    // Find the product in the cart and decrease the quantity
    let existingProduct = cart.find(item => item.product.referencia === referencia);
    if (existingProduct) {
        existingProduct.quantity--;
        if (existingProduct.quantity === 0) {
            // If the quantity reaches 0, remove the product from the cart
            cart = cart.filter(item => item.product.referencia !== referencia);
        }
    }

    // Update the shopping cart
    updateCart();

    // Update the item count in the shopping cart
    updateCartCount();
}

// This function removes a product from the cart.
function removeFromCart(referencia) {
    // Remove the product from the cart
    cart = cart.filter(item => item.product.referencia !== referencia);

    // Update the shopping cart
    updateCart();

    // Update the item count in the shopping cart
    updateCartCount();
}

// This function removes all products from the cart.
function removeAll() {
    // Remove all products from the cart
    cart = [];

    // Update the shopping cart
    updateCart();
}

/* End of Cart Function*/

/* Functions for the Left Menu */

// This function opens or closes the left menu
function openCloseleftMenu() {
    clearCatWM();
    adminArea.innerHTML = '';
    adminAreaBtn.innerHTML = '';

    if (sidebarMenu.style.display === 'block') {
        sidebarMenu.style.display = 'none';
    } else {
        sidebarMenu.style.display = 'block';
    }
}

// This function creates the left menu.
function createLeftMenu() {
    // Create the sidebar-menu element
    sidebarMenu = document.createElement('div');
    sidebarMenu.id = 'sidebar-menu';

    // Add the 'sidebar-menu' class for CSS styling
    sidebarMenu.classList.add('sidebar-menu');

    // Create the close button
    closeLMButton = document.createElement('button');
    closeLMButton.id = 'close-button';
    closeLMButton.innerHTML = 'X';

    // Add the 'close-button' class for CSS styling
    closeLMButton.classList.add('close-button');

    // Add click event to the close button
    closeLMButton.addEventListener('click', openCloseleftMenu);

    // Append the close button to the sidebar menu
    sidebarMenu.appendChild(closeLMButton);

    // Create spacing element
    let p3 = document.createElement('br');
    sidebarMenu.appendChild(p3);
    sidebarMenu.appendChild(p3.cloneNode());
    sidebarMenu.appendChild(p3.cloneNode());

    // Create the "Sobre" label
    let aboutLabel = document.createElement('label');
    aboutLabel.innerHTML = 'Sobre: ';

    // Add the 'about-label' class for CSS styling
    aboutLabel.classList.add('about-label');

    // Append the "Sobre" label to the sidebar menu
    sidebarMenu.appendChild(aboutLabel);

    sidebarMenu.appendChild(p3.cloneNode());
    sidebarMenu.appendChild(p3.cloneNode());

    // Create a new label with text
    let newLabel = document.createElement('label');
    newLabel.innerHTML = 'Clothes.S desenvolvido por: João Pinto<br>';
    newLabel.innerHTML += 'Momento de Avaliação 2<br>';
    newLabel.innerHTML += 'Aluno Nº: 20221050<br>';
    newLabel.innerHTML += 'Unidade Curricular: Desenvolvimento Web<br>';
    newLabel.innerHTML += 'Professor: Paulo Neves<br>';
    newLabel.innerHTML += 'Curso Técnico Superior Profissional em Tecnologias e Programação de Sistemas de Informação';

    // Add the 'info-label' class for CSS styling
    newLabel.classList.add('info-label');

    // Append the new label to the sidebar menu
    sidebarMenu.appendChild(newLabel);

    // Append the element to the document body
    document.body.appendChild(sidebarMenu);
}

window.onload = function () {

    // admin and user data to the users array
    users.push(
        new User("admin@clothess.pt", "Aa12345", "Administrator João", "1991-09-22", "123456789",
            "Rua Principal", "6200-001", "Covilhã", 912345678, true));
    // regular and user data to the users array
    users.push(
        new User("ana@ipcb.pt", "Bb12345", "Ana Pinto", "2003-12-07", "987654321",
            "Rua das Flores", "1234-567", "Porto", 987654321, false));

    // Get button IDs
    topButton = document.getElementById('log-button');
    leftButton = document.getElementById('logproc-btn');
    rightButton = document.getElementById('create-btn');
    adminButton = document.getElementById('top-adm');
    closeloginButton = document.getElementById('close-logbtn');
    bagButton = document.getElementById('shopBag');
    leftMenuButton = document.getElementById('left-menu-btn');

    // Get user data from input fields
    emailInput = document.getElementById('email');
    passInput = document.getElementById('password');
    nomeInput = document.getElementById('name');
    dateInput = document.getElementById('date');
    nifInput = document.getElementById('nif');
    addressInput = document.getElementById('address');
    postalInput = document.getElementById('postal');
    cityInput = document.getElementById('city');
    telemoInput = document.getElementById('telemo');

    // Get references of HTML elements by their IDs
    loginProce = document.getElementById('login-proce');
    sectionsWomen = document.getElementById('sections-w');
    sectionsMen = document.getElementById('sections-m');
    catWomen = document.getElementById('cat-w');
    catMen = document.getElementById('cat-m');
    storeProducts = document.getElementById('store-products');
    cartContainer = document.getElementById('cart-container');
    h1reg = document.getElementById('h1reg');
    h2reg = document.getElementById('h2reg');
    adminArea = document.getElementById('admin-area');
    adminAreaBtn = document.getElementById('admin-areabtn');
    searchBox = document.getElementById('sbox');
    sidebarMenu = document.getElementById('sidebar-menu');

    // Hide the login div
    loginProce.style.display = 'none';
    // Hide the admin button
    adminButton.style.display = 'none';
    // window.onload call this function to create Left Menu
    createLeftMenu();
    // Hide Left Menu after create
    sidebarMenu.style.display = 'none';
    // window.onload call this function to create de Store Cart
    createCartHTML();

    // Adding event listeners to buttons
    topButton.addEventListener('click', openCloseLoginDiv);
    leftMenuButton.addEventListener('click', openCloseleftMenu);
    closeloginButton.addEventListener('click', closeLoginRegister);
    leftButton.addEventListener('click', processLogin);
    rightButton.addEventListener('click', processRegister);
    adminButton.addEventListener('click', createAdminArea);
    bagButton.addEventListener('click', showShopBag);

    // Adding event listener to Search Box
    searchBox.addEventListener('input', () => searchProducts(searchBox.value));

    // Adding event listener to mouseover for the sections to show the category
    sectionsWomen.addEventListener('mouseover', showWomenCategory);
    sectionsMen.addEventListener('mouseover', showMenCategory);

    // Array containing all elements with the class "registar"
    elemetsNotNeededForLogin = document.getElementsByClassName("registar");

    // Array containing all elements needed for login
    elemetsNeededForLogin = document.getElementsByClassName("login");

    // User output paragraph
    output = document.getElementById("output");

    // User h1 paragraph
    info = document.getElementById("info");
};