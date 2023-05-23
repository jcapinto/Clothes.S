function adminAddProduct() {
    let form, saveButton;

    adminArea.innerHTML = '';

    form = document.createElement('form');

    // Cria campos para as informações do produto
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

    // Adicione mais campos para as outras informações do produto aqui

    // Cria campos para selecionar a seção e categoria
    let sectionLabel = document.createElement('label');
    sectionLabel.textContent = 'Seção: ';
    form.appendChild(sectionLabel);
    let sectionSelect = document.createElement('select');
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
    saveButton.textContent = 'Salvar';
	saveButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Obtém os valores inseridos no formulário
        let name = nameInput.value;
        let preco = precoInput.value;
        // Obtenha os valores dos outros campos aqui

        let sectionName = sectionSelect.value;
        let categoryName = categoryInput.value;

        // Cria um novo objeto de produto
        let newProduct = {
            nome: name,
            preco: preco,
            // Adicione as outras propriedades do produto aqui
        };

        // Adiciona o novo produto à categoria selecionada
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
                    // Cria uma nova categoria se ela não existir
                    section.categories.push({
                        name: categoryName,
                        products: [newProduct]
                    });
                }
                break;
            }
        }

        output.innerHTML = "Produto adicionado com sucesso";
    });
    form.appendChild(saveButton);

    adminArea.appendChild(form);
}