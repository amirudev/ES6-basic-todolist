const input = document.getElementById('inputMail');
const mail = document.getElementById('mail');
const buttonStar = document.getElementById('starMail');
const buttonLove = document.getElementById('loveMail');
const buttonClock = document.getElementById('clockMail');
const buttonCart = document.getElementById('cartMail');
const liMail = document.getElementsByTagName('li');

// Start create li for list
starMail = () => {
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = 'star.png';
    img.className = 'imgList';
    var p = document.createElement('span');
    p.textContent = input.value;
    li.appendChild(img);
    li.appendChild(p);
    var deleteMail = document.createElement('button');
    deleteMail.appendChild(document.createTextNode('X'));
    deleteMail.className = 'deleteButton';
    li.appendChild(deleteMail);
    li.className += 'active';
    mail.appendChild(li);

    // Delete Mail function
    deleteMailFunction = () => {
        li.classList.add('delete');
    };
    // Strikethrough Function
    strikeMailFunction = () => {
        li.classList.toggle('active');
        li.classList.toggle('strikethrough');
    }

    deleteMail.addEventListener('click', deleteMailFunction);
    li.addEventListener('click', strikeMailFunction);
}

loveMail = () => {
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = 'like.png';
    img.className = 'imgList';
    var p = document.createElement('span');
    p.textContent = input.value;
    li.appendChild(img);
    li.appendChild(p);
    var deleteMail = document.createElement('button');
    deleteMail.appendChild(document.createTextNode('X'));
    deleteMail.className = 'deleteButton';
    li.appendChild(deleteMail);
    li.className += 'active';
    mail.appendChild(li);

    // Delete Mail function
    deleteMailFunction = () => {
        li.classList.add('delete');
    };
    // Strikethrough Function
    strikeMailFunction = () => {
        li.classList.toggle('active');
        li.classList.toggle('strikethrough');
    }

    deleteMail.addEventListener('click', deleteMailFunction);
    li.addEventListener('click', strikeMailFunction);
}

clockMail = () => {
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = 'clock1.png';
    img.className = 'imgList';
    var p = document.createElement('span');
    p.textContent = input.value;
    li.appendChild(img);
    li.appendChild(p);
    var deleteMail = document.createElement('button');
    deleteMail.appendChild(document.createTextNode('X'));
    deleteMail.className = 'deleteButton';
    li.appendChild(deleteMail);
    li.className += 'active';
    mail.appendChild(li);

    // Delete Mail function
    deleteMailFunction = () => {
        li.classList.add('delete');
    };
    // Strikethrough Function
    strikeMailFunction = () => {
        li.classList.toggle('active');
        li.classList.toggle('strikethrough');
    }

    deleteMail.addEventListener('click', deleteMailFunction);
    li.addEventListener('click', strikeMailFunction);
}

cartMail = () => {
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = 'shopping-cart1.png';
    img.className = 'imgList';
    var p = document.createElement('span');
    p.textContent = input.value;
    li.appendChild(img);
    li.appendChild(p);
    var deleteMail = document.createElement('button');
    deleteMail.appendChild(document.createTextNode('X'));
    deleteMail.className = 'deleteButton';
    li.appendChild(deleteMail);
    li.className += 'active';
    mail.appendChild(li);

    // Delete Mail function
    deleteMailFunction = () => {
        li.classList.add('delete');
    };
    // Strikethrough Function
    strikeMailFunction = () => {
        li.classList.toggle('active');
        li.classList.toggle('strikethrough');
    }

    deleteMail.addEventListener('click', deleteMailFunction);
    li.addEventListener('click', strikeMailFunction);
}

buttonStar.addEventListener('click', starMail);
buttonLove.addEventListener('click', loveMail);
buttonClock.addEventListener('click', clockMail);
buttonCart.addEventListener('click', cartMail);