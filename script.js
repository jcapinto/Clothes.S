//Functions for Users
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
    cartItemCount = 0;

// user array
let users = [];

//index of current autehnticated user
let userIndex = -1;

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
    saveButton.textContent = 'Salvar';
    saveButton.addEventListener('click', function (event) {
        event.preventDefault();

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

function adminView() {
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

function openCloseLoginDiv() {
    if (loginProce.style.display === 'block') {
        loginProce.style.display = 'none';
    } else {
        loginProce.style.display = 'block';
    }
    registerElementsVisibility(false);
    document.querySelector('label[for="password"]').textContent = "Palavra-passe:";
}

function processLogin() {
    console.log("processLogin");
    if (emailInput.value.trim() === "" || passInput.value.trim() === "") {
        output.innerHTML = "Por favor preencha todos os campos";
        return;

    }

    if (!verifyEmail(emailInput.value)) {
        output.innerHTML = "Email não é valido";
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
        output.innerHTML = "O email " + emailInput.value + " não esta registado no nosso sistema";
    }

    // Verifica se a senha atende aos requisitos de segurança
    if (!verifyPasswordRequirements()) {
        output.innerHTML = "Palavra-passe incorreta.";
        return;
    }
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
    console.log("processLoggedIn");

    // Atualiza o conteúdo do elemento info
    infoData(1);

    if (users[userIndex].isAdmin()) {
        adminButton.style.display = 'inline-block';
    } else {
        adminButton.style.display = 'none';
    }

    // Oculta os elementos de login
    loginElementsVisibility(false);

    // Limpa todos os campos de entrada
    clearAllInput();

    clearOutput();

    // Altera os rótulos dos botões
    leftButton.value = "Editar dados";
    rightButton.value = "Logout";

    // Remove os manipuladores de eventos atuais dos botões
    leftButton.removeEventListener("click", processLogin);
    rightButton.removeEventListener("click", processRegister);

    // Adiciona novos manipuladores de eventos aos botões
    leftButton.addEventListener("click", userEdit);
    rightButton.addEventListener("click", logout);
}

function userEdit() {
    console.log("userEdit");

    // Exibe os elementos correspondentes ao nome
    registerElementsVisibility(true, ["name", "date", "address", "postal", "city", "telemo"]);

    // Atualiza os dados de informação
    infoData(2);

    // Mostra os dados guardados atuais

    nomeInput.value = users[userIndex].getName();
    dateInput.value = users[userIndex].getDate();
    addressInput.value = users[userIndex].getAddress();
    postalInput.value = users[userIndex].getPostal();
    cityInput.value = users[userIndex].getCity();
    telemoInput.value = users[userIndex].getTelemo();

    // Coloca o foco no primeiro elemento
    nomeInput.focus();

    // Altera os rótulos dos botões
    leftButton.value = "Efetuar alterações";
    rightButton.value = "Voltar";

    // Remove os manipuladores de eventos atuais dos botões
    leftButton.removeEventListener("click", userEdit);
    rightButton.removeEventListener("click", logout);

    // Adiciona novos manipuladores de eventos aos botões
    leftButton.addEventListener("click", changeUserData);
    rightButton.addEventListener("click", backToLoggedIn);
}

function changeUserData() {
    console.log("changeUserData");
    let nome, date, address, postal, city, telemo;

    // Atribui o valor do elemento as viaaveis
    nome = nomeInput.value;
    date = dateInput.value;
    address = addressInput.value;
    postal = postalInput.value;
    city = cityInput.value;
    telemo = telemoInput.value;

    if (nome.trim() === "" || date.trim() === "" || address.trim() === "" ||
        postal.trim() === "" || city.trim() === "" || telemo.trim() === "") {
        output.innerHTML = "Por favor preencha todos os campos";
        return;
    }

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
    //hide elements corresponding to name

    clearOutput();

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

function clearOutput() {
    output.innerHTML = "";
}

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

    // Verifica se todos os campos foram preenchidos
    if (nome.trim() === "" || email.trim() === "" || pass.trim() === "" || date.trim() === "" || nif.trim() === "" || address.trim() === "" || postal.trim() === "" || city.trim() === "" || telemo.trim() === "") {
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

    if (!verifyPassword()) {
        output.innerHTML = "A Palavra-Passe inserida e a Palavra-Passe de confirmação não coincidem";
        return;
    }

    // Cria um novo objeto User com os dados do user e o adiciona ao array users
    users.push(new User(email, pass, nome, date, nif, address, postal, city, telemo));

    // Informa ao user que o registro foi bem-sucedido
    output.innerHTML = "Registro efetuado com sucesso";

    clearOutput();

    // Limpa todos os campos de entrada
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

    //change buttons captions - Registar e Login
    leftButton.value = "Iniciar Sessão";
    rightButton.value = "Criar conta";

    //remove current event handlers to buttons
    leftButton.removeEventListener("click", userEdit);
    rightButton.removeEventListener("click", logout);

    //add new event handlers to buttons
    leftButton.addEventListener("click", processLogin);
    rightButton.addEventListener("click", processRegister);
}

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

    //change buttons captions - Registar e Login
    leftButton.value = "Iniciar sessão";
    rightButton.value = "Criar conta";

    //remove current event handlers to buttons
    leftButton.removeEventListener("click", userRegister);
    rightButton.removeEventListener("click", backToLogin);

    //add new event handlers to buttons
    leftButton.addEventListener("click", processLogin);
    rightButton.addEventListener("click", processRegister);
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
    console.log("logout");
    userIndex = -1;
    let logButtonText = document.getElementById('log-button-text');
    logButtonText.innerHTML = "Login";
    loginProce.style.display = 'none';
    adminButton.style.display = 'none';
    adminArea.style.display = 'none';
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
    console.log("closeLoginRegister");
    loginProce.style.display = 'none';
}
//End of Functions for Users

//Functions for Store Content
let storeData = {
    sections: [
        {
            name: 'Mulheres',
            categories: [
                {
                    name: 'Casacos',
                    products: [
                        {
                            nome: 'Casaco 1',
                            preco: 100,
                            imagem: 'casaco1.png',
                            composicao: 'Algodão',
                            tamanho: 'M',
                            referencia: 'M001MP',
                            cor: 'Preto',
                            stock: 10
                        },
                        {
                            nome: 'Casaco 2',
                            preco: 100,
                            imagem: 'casaco2.png',
                            composicao: 'Algodão',
                            tamanho: 'M',
                            referencia: 'M002MP',
                            cor: 'Preto',
                            stock: 10
                        }
                    ]
                },
                {
                    name: 'Camisolas',
                    products: [
                        {
                            nome: 'Camisola 1',
                            preco: 50,
                            imagem: 'Camisola1.png',
                            composicao: 'Algodão',
                            tamanho: 'S',
                            referencia: '002SB',
                            cor: 'Branco',
                            stock: 50
                        }
                    ]
                },
                {
                    name: 'T-shirts',
                    products: [
                        {
                            nome: 'T-shirts 1',
                            preco: 10,
                            imagem: 'tshirt1.png',
                            composicao: 'Algodão',
                            tamanho: 'S',
                            referencia: '003SP',
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
                            imagem: 'ganga1.png',
                            composicao: 'Ganga',
                            tamanho: 'M',
                            referencia: '004MAZ',
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
                            nome: 'Casaco 1',
                            preco: 100,
                            imagem: 'casaco1.png',
                            composicao: 'Algodão',
                            tamanho: 'M',
                            referencia: '001MP',
                            cor: 'Preto',
                            stock: 10
                        }
                    ]
                },
                {
                    name: 'Camisolas',
                    products: [
                        {
                            nome: 'Camisola 1',
                            preco: 50,
                            imagem: 'Camisola1.png',
                            composicao: 'Algodão',
                            tamanho: 'S',
                            referencia: '002SB',
                            cor: 'Branco',
                            stock: 50
                        }
                    ]
                },
                {
                    name: 'T-shirts',
                    products: [
                        {
                            nome: 'T-shirts 1',
                            preco: 10,
                            imagem: 'tshirt1.png',
                            composicao: 'Algodão',
                            tamanho: 'S',
                            referencia: '003SP',
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
                            imagem: 'ganga1.png',
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

function getSectionName(sectionName, categoryName) {
    for (let section of storeData.sections) {
        if (section.name === sectionName) {
            for (let cat of section.categories) {
                if (cat.name === categoryName) {
                    return section.name;
                }
            }
        }
    }
}

function getProducts(sectionName, categoryName) {
    // Busca a seção e categoria correspondente
    for (let section of storeData.sections) {
        if (section.name === sectionName) {
            for (let cat of section.categories) {
                if (cat.name === categoryName) {
                    return cat.products;
                }
            }
        }
    }
}

// Função para obter o nome da categoria
function getCategoryName(category) {
    for (let section of storeData.sections) {
        for (let cat of section.categories) {
            if (cat.name === category) {
                return cat.name;
            }
        }
    }
}


function showWomenCategory() {
    let casaco, camisola, tshirt, calca;

    closeLoginRegister();

    clearStoreProducts();

    hideShopBag();

    // Limpa os produtos anteriores
    clearCatWM();

    // Cria as categoria de mulheres
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

function showMenCategory() {
    let casaco, camisola, tshirt, calca;

    closeLoginRegister();

    clearStoreProducts();

    hideShopBag();

    // Limpa os produtos anteriores
    clearCatWM();

    // Cria as categoria de homem
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

function showProducts(sectionName, categoryName) {
    closeLoginRegister();

    clearCatWM();
    // Limpa os produtos anteriores
    clearStoreProducts();

    hideShopBag();

    // Obtém os produtos da categoria selecionada
    let products = getProducts(sectionName, categoryName), cartbutton;

    // Cria um elemento para exibir o nome da seção e da categoria
    let sectionElement = document.createElement('h3');
    sectionElement.textContent = `${sectionName}/${categoryName}`;
    storeProducts.appendChild(sectionElement);

    // Cria elementos para os produtos e adiciona ao elemento store-products
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

function getMatchingProducts(query) {
    let products = [];

    // Busca os produtos em todas as seções e categorias
    for (let section of storeData.sections) {
        for (let category of section.categories) {
            for (let product of category.products) {
                // Verifica se o nome do produto contém o termo de pesquisa
                if (product.nome.toLowerCase().includes(query.toLowerCase())) {
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

function searchProducts(query) {
    closeLoginRegister();

    // Limpa os produtos anteriores
    clearStoreProducts();

    hideShopBag();

    // Busca os produtos que correspondem ao termo de pesquisa
    let products = getMatchingProducts(query), cartbutton;

    // Cria elementos para os produtos e adiciona ao elemento store-products
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

function clearStoreProducts() {
    storeProducts.innerHTML = '';
}

function clearCatWM() {
    catWomen.innerHTML = '';
    catMen.innerHTML = '';
}
//End of Functions for Store Content

//cart
let cart = [];

function hideShopBag() {
    cartContainer.style.display = 'none';
}

function createCartHTML() {
    // Cria a estrutura HTML do carrinho de compras
    let cartHTML = `
        <h2>Carrinho de compras</h2>
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody id="cart-items">
            </tbody>
        </table>
        <p>Total do carrinho: <span id="cart-total"></span></p>
    `;
    cartContainer.innerHTML = cartHTML;
    hideShopBag();
}

function addToCart(product) {
    // Verifica se há estoque disponível
    if (product.stock <= 0) {
        clearOutput();
        output.innerHTML = 'Desculpe, este produto está esgotado.';
        return;
    }

    // Adiciona o produto ao carrinho
    let existingProduct = cart.find(item => item.product.referencia === product.referencia);
    if (existingProduct) {
        // Se o produto já estiver no carrinho, aumenta a quantidade
        existingProduct.quantity++;
    } else {
        // Se o produto não estiver no carrinho, adiciona-o com quantidade 1
        cart.push({ product: product, quantity: 1 });
    }

    // Atualiza o stok do produto
    updateStock(product.referencia, -1);

    // Atualiza o carrinho de compras
    updateCart();

    cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Atualiza a contagem de itens no carrinho
    updateCartCount();
}

function updateCart() {
    // Limpa os itens do carrinho anteriores
    let cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    // Adiciona os itens do carrinho à tabela
    let cartTotal = 0;
    for (let item of cart) {
        let productTotal = item.product.preco * item.quantity;
        cartTotal += productTotal;
        let itemElement = document.createElement('tr');
        itemElement.innerHTML = `
            <td>${item.product.nome}</td>
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

        // Adiciona eventos aos botões
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

     // Adiciona o botão Limpar carrinho
     let clearCartButton = document.createElement('button');
     clearCartButton.textContent = 'Limpar carrinho';
     cartItemsElement.appendChild(clearCartButton);
     clearCartButton.addEventListener('click', function () {
         removeAll();
     });

      // Atualiza o total do carrinho
      let cartTotalElement = document.getElementById('cart-total');
      cartTotalElement.textContent = `${cartTotal}€`;
  
      // Atualiza a contagem de itens no carrinho
      updateCartCount();
  }

function updateCartCount() {
    // Calcula o número de itens no carrinho
    let cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Atualiza a contagem de itens no carrinho
    let cartCountElement = document.querySelector('.cart-button-text');
    cartCountElement.textContent = `Saco de compras (${cartItemCount})`;
}

function updateStock(referencia, change) {
    // Atualiza o estoque do produto com a referência fornecida
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

function showShopBag() {
    clearOutput();
    clearCatWM();
    clearStoreProducts();
    closeLoginRegister();

    if (cartContainer.style.display === 'none') {
        // Se o carrinho de compras estiver oculto, mostra-o
        cartContainer.style.display = 'block';
    } else {
        // Se o carrinho de compras estiver visível, oculta-o
        cartContainer.style.display = 'none';
    }
}

function increaseQuantity(referencia) {
    // Encontra o produto no carrinho e aumenta a quantidade
    let existingProduct = cart.find(item => item.product.referencia === referencia);
    if (existingProduct) {
        existingProduct.quantity++;
    }

    // Atualiza o carrinho de compras
    updateCart();

    // Atualiza a contagem de itens no carrinho
    updateCartCount();
}

function decreaseQuantity(referencia) {
    // Encontra o produto no carrinho e diminui a quantidade
    let existingProduct = cart.find(item => item.product.referencia === referencia);
    if (existingProduct) {
        existingProduct.quantity--;
        if (existingProduct.quantity === 0) {
            // Se a quantidade chegar a 0, remove o produto do carrinho
            cart = cart.filter(item => item.product.referencia !== referencia);
        }
    }

    // Atualiza o carrinho de compras
    updateCart();

    // Atualiza a contagem de itens no carrinho
    updateCartCount();
}

function removeFromCart(referencia) {
    // Remove o produto do carrinho
    cart = cart.filter(item => item.product.referencia !== referencia);

    // Atualiza o carrinho de compras
    updateCart();

    // Atualiza a contagem de itens no carrinho
    updateCartCount();
}

function removeAll() {
    // Remove todos os produtos do carrinho
    cart = [];

    // Atualiza o carrinho de compras
    updateCart();
}

//End Cart

window.onload = function () {
    users.push(
        new User("antcos@gov.pt", "Aa12345", "Antonio Costa", "1999-09-22", "123456789",
            "Largo da Ratisse", "4795-342", "Lisboa", 912345678, true));

    users.push(
        new User("mariasilva@gov.pt", "Bb12345", "Maria Silva", "1998-08-21", "987654321",
            "Rua das Flores", "1234-567", "Porto", 987654321, false));

    // Obtém os IDs dos botões
    topButton = document.getElementById('log-button');
    leftButton = document.getElementById('logproc-btn');
    rightButton = document.getElementById('create-btn');
    adminButton = document.getElementById('top-adm');
    closeloginButton = document.getElementById('close-logbtn');
    bagButton = document.getElementById('shopBag');

    // Obtém os dados do utilizador dos campos de entrada

    emailInput = document.getElementById('email');
    passInput = document.getElementById('password');
    nomeInput = document.getElementById('name');
    dateInput = document.getElementById('date');
    nifInput = document.getElementById('nif');
    addressInput = document.getElementById('address');
    postalInput = document.getElementById('postal');
    cityInput = document.getElementById('city');
    telemoInput = document.getElementById('telemo');

    loginProce = document.getElementById('login-proce');
    sectionsWomen = document.getElementById('sections-w');
    sectionsMen = document.getElementById('sections-m');
    catWomen = document.getElementById('cat-w');
    catMen = document.getElementById('cat-m');
    catAdm = document.getElementById('cat-a');
    storeProducts = document.getElementById('store-products');
    cartContainer = document.getElementById('cart-container');

    h1reg = document.getElementById('h1reg');
    h2reg = document.getElementById('h2reg');
    emailInput = document.getElementById('email');
    passInput = document.getElementById('password');
    adminArea = document.getElementById('admin-area');
    searchBox = document.getElementById('sbox');


    // Oculta a div de login
    loginProce.style.display = 'none';
    adminButton.style.display = 'none';

    createCartHTML();

    topButton.addEventListener('click', openCloseLoginDiv);

    closeloginButton.addEventListener('click', closeLoginRegister);

    leftButton.addEventListener('click', processLogin);
    rightButton.addEventListener('click', processRegister);
    adminButton.addEventListener('click', adminView);
    bagButton.addEventListener('click', showShopBag);

    searchBox.addEventListener('input', () => searchProducts(searchBox.value));

    sectionsWomen.addEventListener('mouseover', showWomenCategory);

    sectionsMen.addEventListener('mouseover', showMenCategory);



    // Array que contém todos os elementos que têm a classe "registar"
    elemetsNotNeededForLogin = document.getElementsByClassName("registar");

    // Array que contém todos os elementos necessários para o login
    elemetsNeededForLogin = document.getElementsByClassName("login");

    // Parágrafo do user para saída
    output = document.getElementById("output");

    // Parágrafo do user h1
    info = document.getElementById("info");
};

