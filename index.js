const input = document.getElementById('inputMail');
const mail = document.getElementById('mail');
const buttonInput = document.getElementById('buttonMail');
const liMail = document.getElementsByTagName('li');

// Start create li for list
postMail = () => {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    var deleteMail = document.createElement('button');
    deleteMail.appendChild(document.createTextNode('X'));
    deleteMail.className = 'deleteButton';
    li.appendChild(deleteMail);
    mail.appendChild(li);

    // Delete Mail function
    deleteMailFunction = () => {
        li.classList.add('delete');
    };
    // Strikethrough Function
    strikeMailFunction = () => {
        li.classList.toggle('strikethrough');
    }

    deleteMail.addEventListener('click', deleteMailFunction);
    li.addEventListener('click', strikeMailFunction);
}

buttonInput.addEventListener('click', postMail);