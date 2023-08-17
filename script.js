 import { calculate } from './calculator.js'

// TODO: Faire la manipulation du DOM dans ce fichier

//  Récupérer la référence de l'élément d'entrée et de l'affichage du calcul
 const input = document.getElementById('input');
 const calculDisplay = document.getElementById('calcul');

 // l'Ajout un gestionnaire d'événement pour chaque bouton numérique
 const digitButtons = document.querySelectorAll('.numpad');
  digitButtons.forEach(button => {
   button.addEventListener('click', () => {
    //  Ne rien faire si le bouton zéro est déjà affiché
    if (button.textContent === '0' && input.value === '0') {
      return; 
    }

    if (button.textContent === '.' && input.value === '.') {
      return; 
    }

// pour limité le nombre de caractere entré dans l'input 
    if (input.value.length < 10 ) {
      input.value += button.textContent;
    } 

    
   });
 });
// pourempecher d'entré un nombre en utilisant le clavier
 input.addEventListener('keydown', (event) => {
  event.preventDefault(); 
 });
// pour Masquer la barre clignotante dans l'élément input
 input.style.caretColor = 'transparent';


// l'Ajout un gestionnaire d'événement pour le bouton de point décimal
 const dotButton = document.querySelector('.numpad.dot');
 dotButton.addEventListener('click', () => {
   if (!input.value.includes('.')) {
     input.value += '.';
   }
 });

 // l'Ajout un gestionnaire d'événement pour le bouton de réinitialisation (AC)
 const resetButton = document.getElementById('reset');
 resetButton.addEventListener('click', () => {
   input.value = '';
   calculDisplay.textContent = '';
 });

 // l'Ajout un gestionnaire d'événement pour le bouton de suppression (C)
 const clearButton = document.getElementById('clear');
 clearButton.addEventListener('click', () => {
   input.value = input.value.slice(0, -1);
 });

 // l'Ajout un gestionnaire d'événement pour le bouton de changement de signe (+/-)
 const plusMinusButton = document.getElementById('plusoumoins');
 plusMinusButton.addEventListener('click', () => {
   input.value = -parseFloat(input.value);
 });

// l'Ajout un gestionnaire d'événement pour le bouton de pourcentage (%)
 const percentageButton = document.getElementById('percentage');
 percentageButton.addEventListener('click', (e) => {
   input.value = parseFloat(input.value) / 100;
   e.preventDefault();
});

 // l'Ajoutun gestionnaire d'événement pour chaque opérateur (+, -, /, ×)
 const operatorButtons = document.querySelectorAll('#plus, #minus, #divideby, #times');
 operatorButtons.forEach(button => {
   button.addEventListener('click', (e) => {
     input.value += button.textContent;
     e.preventDefault();
   });
 });

//  l'Ajout un gestionnaire d'événement pour le bouton d'égalité (=)
 const equalsButton = document.getElementById('equals');
 equalsButton.addEventListener('click', (e) => {
  e.preventDefault();
   // pour Évaluer l'expression mathématique et afficher le résultat
   try {
     const result = eval(input.value);
     calculDisplay.textContent = input.value + ' =';
     input.value = result;
   } catch (error) {
     calculDisplay.textContent = 'Erreur';
   }
 });
