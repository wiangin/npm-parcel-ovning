import imgUrl from '../image/enter.png'

export default function logHej(){
    console.log('Hej Hej');
    const h1El = document.createElement('h1');
    h1El.innerText = 'Hej Hej Ton';
    document.body.append(h1El);
}

function displayImage(){
    const imgEl = document.createElement('img');
    imgEl.style.width = '50px '
    imgEl.src = imgUrl
    document.body.append(imgEl);
    return imgEl
}

export{
    displayImage
}