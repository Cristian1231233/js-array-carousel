

// Creare carosello
// al click l'immagine grande diventa visibile e l'immagine piccola a destra si evidenzia rispetto alle altre

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
const imageBig = document.querySelector('.image-big');
let incremento = 0;
for(let i = 0; i < items.length; i++){
    console.log(items[i]);
    const el = document.createElement('div');
    el.className = 'items';
    
    if(i === incremento){
        items.classList.add('active')
    }

    items.innerHTML = `<img src="${images[i]}" alt="">`;
}
//
const items = document.getElementsByClassName('items');
const item2 = document.getElementsByClassName('item2');


const btnSu = document.querySelector('.freccia-su');
console.log(btnSu);
const btnGiu = document.querySelector('.freccia-giu');
console.log(btnGiu);



console.log('incremento',incremento);
console.log('lista',items);
console.log('incremento lista', items[incremento]);

// for(let i = 0; i < items.length; i++){
//     console.log(items[i]);
// }

btnSu.addEventListener('click',function(){
    
    items[incremento].classList.remove('active');
    item2[incremento].classList.remove('evidence');
    incremento--;
    if(incremento < 0) incremento = items.length - 1;
    console.log(incremento);
    items[incremento].classList.add('active');
    item2[incremento].classList.add('evidence');
});
btnGiu.addEventListener('click',function(){
    item2[incremento].classList.remove('overlay');
    item2[incremento].classList.remove('evidence');
    items[incremento].classList.remove('active');
    incremento++;
    if(incremento > items.length - 1) incremento = 0;
    console.log(incremento);
    items[incremento].classList.add('active');
    item2[incremento].classList.add('evidence');
});






