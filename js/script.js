

// Creare carosello
// al click l'immagine grande diventa visibile e l'immagine piccola a destra si evidenzia rispetto alle altre

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];


const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const imageBig = document.querySelector('.image-big');
const imageMini = document.querySelector('.image-mini');

let incremento = 0;
for(let i = 0; i < items.length; i++){
    console.log(items[i]);
    const el = document.createElement('div');
    el.className = 'items';
    el.innerHTML = `<img src="${items[i]}" alt="">`;
    
    
    imageBig.append(el);
    

    const imagineLaterale = document.createElement('div');
    imagineLaterale.className = 'item2';
    imagineLaterale.innerHTML = `<img src="${items[i]}" alt="">`;
    imageMini.append(imagineLaterale);

   
    if(i === incremento){
        el.classList.add('active');
        imagineLaterale.classList.add('evidence');
    }
    
    
}
//
const itemsNew = document.getElementsByClassName('items');
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
    
    itemsNew[incremento].classList.remove('active');
    item2[incremento].classList.remove('evidence');
    incremento--;
    if(incremento < 0) incremento = items.length - 1;
    console.log(incremento);
    itemsNew[incremento].classList.add('active');
    item2[incremento].classList.add('evidence');
});
btnGiu.addEventListener('click',function(){
    item2[incremento].classList.remove('overlay');
    item2[incremento].classList.remove('evidence');
    itemsNew[incremento].classList.remove('active');
    incremento++;
    if(incremento > items.length - 1) incremento = 0;
    console.log(incremento);
    itemsNew[incremento].classList.add('active');
    item2[incremento].classList.add('evidence');
});






