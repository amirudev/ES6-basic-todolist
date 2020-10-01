const input = document.getElementById('inputMail');
const mail = document.getElementById('mail');
const buttonStar = document.getElementById('starMail');
const buttonLove = document.getElementById('loveMail');
const buttonClock = document.getElementById('clockMail');
const buttonCart = document.getElementById('cartMail');
const liMail = document.getElementsByTagName('li');
console.log(buttonStar);
console.log(buttonStar.firstChild.firstChild.src);

var imgSrc = 'star.png';

starMail = () => {
    imgSrc = 'star.png';
    sendMail();
}
loveMail = () => {
    imgSrc = 'like.png';
    sendMail();
}
clockMail = () => {
    imgSrc = 'clock1.png';
    sendMail();
}
cartMail = () => {
    imgSrc = 'shopping-cart1.png';
    sendMail();
}

sendMail = () => {
    var li = document.createElement('li');
    var img = document.createElement('img');
    li.className = 'list-group-item actives';
    img.src = imgSrc;
    img.className = 'imgList';
    var span = document.createElement('span');
    span.textContent = input.value;
    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('x'));
    deleteBtn.className = 'deleteBtn';
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    mail.appendChild(li);

    deleteMailFunc = () => {
        li.classList.add('delete');
    }
    strikeMailFunc = () => {
        li.classList.toggle('actives');
        li.classList.toggle('strikethrough');
    }

    deleteBtn.addEventListener('click', deleteMailFunc);
    li.addEventListener('click', strikeMailFunc);
}

buttonStar.addEventListener('click', starMail);
buttonLove.addEventListener('click', loveMail);
buttonClock.addEventListener('click', clockMail);
buttonCart.addEventListener('click', cartMail);

// // Delete Mail function
// deleteMailFunction = () => {
//     li.classList.add('delete');
// };
// // Strikethrough Function
// strikeMailFunction = () => {
//     li.classList.toggle('active');
//     li.classList.toggle('strikethrough');
// }

// deleteMail.addEventListener('click', deleteMailFunction);
// li.addEventListener('click', strikeMailFunction);