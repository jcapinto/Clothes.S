let User = function (email, password, name, date, nif, address, postal, city, telemo, isadmin) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.date = date;
    this.nif = nif;
    this.address = address;
    this.postal = postal;
    this.city = city;
    this.telemo= telemo;
    this.isadmin = isadmin;
}

User.prototype = {
    verifyPass: function (email, password) {
        return ((this.email === email) && (this.password === password));
    },
    getName: function () {
        return this.name;
    },
    getFName: function () {
        return this.name.split(' ')[0];
    },
    isAdmin: function () {
        return this.isadmin;
    },
    setName: function (name) {
        console.log('setName called with name:', name);
        this.name = name;
        console.log('this.name updated to:', this.name);
    },
    checkEmail: function (email) {
        return this.email === email;
    }
};

//acess to the html elements
let loginButton = 0,
    leftButton = 0,
    rightButton = 0,
    closeloginButton = 0,
    loginProce = 0,
    registerProce = 0,
    output = 0,
    info = 0,
    h1reg = 0,
    h2reg = 0,
    elemetsNotNeededForLogin = 0,
    elemetsNeededForLogin = 0,
    emailInput = 0,
    NomeInput=0,
    passInput = 0;


// user array
let users = [];

//index of current autehnticated user
let userIndex = -1;

function processLogin() {
    console.log ("processLogin");
    if (emailInput.value.trim() === "" || passInput.value.trim() === "") {
        output.innerHTML = "Por favor preencha todos os campos";
        return;
        
    }

    if (!verifyEmail(emailInput.value)) {
        output.innerHTML = "Email address is not valid";
        return;
    }

    // Verifica se a senha atende aos requisitos de segurança
    if (!verifyPasswordRequirements()) {
        output.innerHTML = "A senha deve ter pelo menos 6 caracteres, incluir uma letra maiúscula e um número.";
        return;
    }

    // Verifica se existe um utilizador
    for (let i = 0; i < users.length; i++) {
        if (users[i].verifyPass(emailInput.value, passInput.value)) {
            userIndex = i;
            break;
        }
    }
    if (userIndex !== -1) {
        processLoggedIn();
    } else {
        output.innerHTML = "Sorry " + emailInput.value + " is not found";
    }

    clearOutput();
}

function loginElementsVisibility(state) {
    let visibility = false;

    // Verifica se o array elemetsNeededForLogin não está vazio
    if (elemetsNeededForLogin.length === 0) {
        console.error("O array elemetsNeededForLogin está vazio.");
        return;
    }

    state ? visibility = "block" : visibility = "none";

    for (let i = 0; i < elemetsNeededForLogin.length; i++)
        elemetsNeededForLogin[i].style.display = visibility;
}

function processLoggedIn() {
    console.log ("processLoggedIn");
    // Verifica se o índice de utilizadores é valido
    if (userIndex === -1) {
        console.error("O índice do user não é válido.");
        return;
    }

    // Atualiza o conteúdo do elemento info
    infoData(1);

    // Oculta os elementos de login
    loginElementsVisibility(false);

    // Limpa todos os campos de entrada
    clearAllInput();

    clearOutput();

    // Altera os rótulos dos botões
    leftButton.value = "Editar dados";
    rightButton.value = "Logout";

    // Remove os manipuladores de eventos atuais dos botões
    leftButton.removeEventListener("click", processRegister);
    rightButton.removeEventListener("click", processLogin);

    // Adiciona novos manipuladores de eventos aos botões
    leftButton.addEventListener("click", userEdit);
    rightButton.addEventListener("click", logout);
}

function userEdit() {
    console.log ("userEdit");
    // Seleciona os elementos correspondentes a cada campo
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let nameInput = document.getElementById('name');
    let dateInput = document.getElementById('date');
    let nifInput = document.getElementById('nif');
    let addressInput = document.getElementById('address');
    let postalInput = document.getElementById('postal');
    let cityInput = document.getElementById('city');
    let telemoInput = document.getElementById('telemo');

    // Verifica se o índice de utilizadores é valido
    if (userIndex === -1) {
        console.error("O índice do user não é válido.");
        return;
    }

    // Oculta o elemento que contém a mensagem sobre os requisitos da pass
    let passwordRequirements = document.querySelector('.registar');
    let confirmPassword = document.getElementById('confpassword');
    passwordRequirements.style.display = 'none';
    confirmPassword.style.display = 'none';

    // Limpa a saída
    clearOutput();

    // Exibe os elementos correspondentes ao nome
    registerElementsVisibility(true);

    // Atualiza os dados de informação
    infoData(2);

    // Mostra os dados guardados atuais
    emailInput.value = users[userIndex].email;
    passwordInput.value = users[userIndex].password;
    nameInput.value = users[userIndex].getName();
    dateInput.value = users[userIndex].date;
    nifInput.value = users[userIndex].nif;
    addressInput.value = users[userIndex].address;
    postalInput.value = users[userIndex].postal;
    cityInput.value = users[userIndex].city;
    telemoInput.value = users[userIndex].telemo;

    // Coloca o foco no primeiro elemento
    nameInput.focus();

    // Altera os rótulos dos botões
    leftButton.value = "Efetuar alterações";
    rightButton.value = "Voltar";

    // Remove os manipuladores de eventos atuais dos botões
    leftButton.removeEventListener("click", processRegister);
    rightButton.removeEventListener("click", processLogin);

    // Adiciona novos manipuladores de eventos aos botões
    leftButton.addEventListener("click", changeUserData);
    rightButton.addEventListener("click", backToLoggedIn);
}

function changeUserData() {
    console.log ("changeUserData");
    // Seleciona o elemento com o ID 'name'
    let nameInput = document.getElementById('name');

    // Atribui o valor do elemento à variável Name
    let Name = nameInput.value;

     // Imprime o valor do elemento
     console.log('Value of nameInput:', Name);

    if (Name.trim() === "") {
        output.innerHTML = "Por favor preencha todos os campos";
        return;
    }

    users[userIndex].setName(Name);
    output.innerHTML = "Dados alterados com sucesso";
}

//performs context change to login state
function backToLoggedIn() {
    console.log ("backToLoggedIn");
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
    console.log ("processRegister");

    // make register html elements visible
    registerElementsVisibility(true);

    //clear all input fields
    clearAllInput();

    // place focus on Primeiro Nome
    NomeInput.focus();

    // change buttons captions - efetuar registo e voltar
    leftButton.value = "Efetuar Registo";
    rightButton.value = "Voltar";

    // remove current event handlers from buttons
    leftButton.removeEventListener("click", processRegister);
    rightButton.removeEventListener("click", processLogin);

    // add new event handlers to buttons
    leftButton.addEventListener("click", userRegister);
    rightButton.addEventListener("click", backToLogin);
}

function clearAllInput() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}

function clearOutput() {
    output.innerHTML = "";
}

function userRegister() {
    console.log ("userRegister");
    let name, email, pass, date, nif, address, postal, city, telemo;
    let userExists = false;

    // Limpa a saída anterior
    clearOutput();

    // Obtém os dados do utilizador dos campos de entrada
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    pass = document.getElementById('password').value;
    date = document.getElementById('date').value;
    nif = document.getElementById('nif').value;
    address = document.getElementById('address').value;
    postal = document.getElementById('postal').value;
    city = document.getElementById('city').value;
    telemo = document.getElementById('telemo').value;

    // Verifica se todos os campos foram preenchidos
    if (name.trim() === "" || email.trim() === "" || pass.trim() === "" || date.trim() === "" || nif.trim() === "" || address.trim() === "" || postal.trim() === "" || city.trim() === "" || telemo.trim() === "") {
        output.innerHTML = "Por favor preencha todos os campos";
        return;
    }

    // Verifica se o endereço de e-mail é válido
    if (!verifyEmail(email)) {
        output.innerHTML = "Endereço de e-mail inválido";
        return;
    }

    // Verifica se já existe um user com o mesmo endereço de e-mail
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

    // Cria um novo objeto User com os dados do user e o adiciona ao array users
    users.push(new User(email, pass, name, date, nif, address, postal, city, telemo));

    // Informa ao user que o registro foi bem-sucedido
    output.innerHTML = "Registro efetuado com sucesso";

    clearOutput();

    // Limpa todos os campos de entrada
    clearAllInput();
}

//function that enables the user to get back to login screen (after logout)
function backToLoginAfterLogout() {
    console.log ("backToLoginAfterLogout");
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

    //change buttons captions - Registar e Login
    leftButton.value = "Registar";
    rightButton.value = "Login";

    //remove current event handlers to buttons
    leftButton.removeEventListener("click", userEdit);
    rightButton.removeEventListener("click", backToLogin);

    //add new event handlers to buttons
    leftButton.addEventListener("click", processRegister);
    rightButton.addEventListener("click", processLogin);
}

function registerElementsVisibility(state) {
    let visibility = false;
    state ? visibility = "block" : visibility = "none";
    for (let i = 0; i < elemetsNotNeededForLogin.length; i++) {
        elemetsNotNeededForLogin[i].style.display = visibility;
    }
}

//function that enables the user to get back to login screen (after registering)
function backToLogin() {
    console.log ("backToLogin");
    //make register HTML elements invisible
    registerElementsVisibility(false);

    //make login elements visible
    loginElementsVisibility(true);

    //clear all inputs
    clearAllInput();

    //place focus on email
    emailInput.focus();

    //change buttons captions - Registar e Login
    leftButton.value = "Registar";
    rightButton.value = "Login";

    //remove current event handlers to buttons
    leftButton.removeEventListener("click", userRegister);
    rightButton.removeEventListener("click", backToLogin);

    //add new event handlers to buttons
    leftButton.addEventListener("click", processRegister);
    rightButton.addEventListener("click", processLogin);
}

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

function logout() {
    console.log ("logout");
    userIndex = -1;
    let logButtonText = document.getElementById('log-button-text');
    logButtonText.innerHTML = "Login";
    loginProce.style.display = 'none';
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

function verifyPassword() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confpassword').value;

    return password === confirmPassword;
}

function verifyPasswordRequirements() {
    let password = document.getElementById('password').value;
    let hasUpperCase = /[A-Z]/.test(password);
    let hasNumber = /\d/.test(password);

    return password.length >= 6 && hasUpperCase && hasNumber;
}

function closeLoginRegister() {
    console.log ("closeLoginRegister");
    loginProce.style.display = 'none';
}

window.onload = function () {
    users.push(
        new User("antcos@gov.pt", "Aa12345", "Antonio Costa", "1999-09-22", "123456789",
            "Largo da Ratisse", "4795-342", "Lisboa", 912345678, false));

    // Obtém os IDs dos botões
    loginButton = document.getElementById('log-button');
    leftButton = document.getElementById('logproc-btn');
    rightButton = document.getElementById('create-btn');
    closeloginButton = document.getElementById('close-logbtn');

    loginProce = document.getElementById('login-proce');
    h1reg = document.getElementById('h1reg');
    h2reg = document.getElementById('h2reg');
    emailInput = document.getElementById('email');
    passInput = document.getElementById('password');

    // Oculta a div de login
    loginProce.style.display = 'none';

    loginButton.addEventListener('click', function() {
        loginProce.style.display = 'block';
        registerElementsVisibility(false);
    });

    closeloginButton.addEventListener('click', closeLoginRegister);

    document.getElementById('logproc-btn').addEventListener('click', processLogin);
    document.getElementById('create-btn').addEventListener('click', userRegister);

    // Array que contém todos os elementos que têm a classe "registar"
    elemetsNotNeededForLogin = document.getElementsByClassName("registar");

    // Array que contém todos os elementos necessários para o login
    elemetsNeededForLogin = document.getElementsByClassName("login");

    // Parágrafo do user para saída
    output = document.getElementById("output");

    // Parágrafo do user h1
    info = document.getElementById("info");
};

