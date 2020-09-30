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
    li.appendChild(deleteMail);
    mail.appendChild(li);

    // Start add .delete class
    deleteMailFunction = () => {
        li.classList.add('delete');

        // End add .delete
    }

    deleteMail.addEventListener('click', deleteMailFunction);

    // End create li
}

buttonInput.addEventListener('click', postMail);