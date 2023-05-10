// The DOM is that place in the browser where JS can directly manipulate HTML and CSS 
//DOM stands for Document Object Model
// In console, document.write('Helloooo');

// Each browser has an engine that reads the JS code line by line and executes it. It's called V8 ENGINE  for Chrome, CHALKER CORE for edge, NITRO for Safari and SPIDER MONKEY for Firefox. 
// So basically, JavaScript is used to talk to the DOM
// Think of the DOM as that place where your HTML and CSS are stored. it's a stand alone place where HTML,CSS and JS have access to.
// Document is the screen we see in the browser
// It has a parent object called WINDOW(You can check this out in the console to see that it's an object). Some functions like ALERT and PROMPT are properties of the Window object. 
// window.alert(), window.prompt() still works because they're properties of the Window object
// Reason why Alert and Prompt works on their own is because you can just think of the Window object as that big parent that houses a lot of children.
// So, If there's a need to change anything, JS speaks with the DOM and modifies the HTML and CSS. Don't forget the DOM is a JavaScript Object



// DOM Selectors
// --------------
// getElementsByTagName
// document.getElementsByTagName('p'); //Check it out in the console
// getElementsByClassName
// document.getElementsByClassName('second')[i]; //Check it out in the console
// getElementById
// document.getElementById('first'); //Check it out in the console // The [i] is to access the the specific index in the array.


// querySelector
// document.querySelector('p'); //Check it out in the console
// document.querySelector('#id'); //Check it out in the console
// document.querySelector('.class'); //Check it out in the console
// querySelectorAll
// document.querySelectorAll('p'); //Check it out in the console //this selects all elements in the html
//Check caniuse.com to check the compatibility with all browsers

// getAttribute
// document.querySelector('li').getAttribute('random'); //Check it out in the console
// setAttribute
// document.querySelector(li).setAttribute('random', '1000'); //Check it out in the console

// ##Changing Styles
// style.{property} //ok
// document.querySelector('body').style.background = 'burlywood'; //like this works

//Use codepen.io to find a bunch of css others have implemented and easily reuse
// className //best
// let h1 = document.querySelector('h1');
// h1.className = 'coolTitle';
// classList //best

// classList.add
// document.querySelector('li').classList.add('coolTitle');

// classList.remove
// document.querySelector('li').classList.remove('coolTitle');
// classList.toggle
// document.querySelector('li').classList.toggle('done');

//Check to see if classList is supported by all browsers

// ##Bonus
// innerHTML //DANGEROUS
// document.querySelector('h1').innerHTML = '<strong>!!!!</strong>';
// h1.innerHTML = '<strong>!!!!</strong>';


// parentElement
// document.querySelector('li').parentElement;
// document.querySelector('li').parentElement.parentElement;
// children
// document.querySelector('li').parentElement.parentElement.children;

// ##It is important to CACHE selectors in variables 
// This is necessary so that the browser easily remembers the name of the element stored in variables instead of having to use loads of memory to repeat same thing  

// let h1 = document.querySelector('h1');
// let myPElement = document.getElementsByTagName('p')[0];
// myPElement.style.color = 'green';



// Events and Events Listeners
// Events are things that happen in the browser like click, hover, input, mouse entering, trying something in a search bar, etc. The aformentioned events can be listened and reacted to using JavaScript
// There is a bunch of them but the ones most commonly used are Mouse and Keyboard events (90% of the time);

// click, mousenter, mouseleave
// let button = document.getElementsByTagName('button')[0];

// button.addEventListener('click', function() {
//     console.log('You don click me o!!!');
// });
// button.addEventListener('click', function() {
//     console.log('click!!');
// })

//Make sure you have good class names and IDs for elements so you can grab them easiy.
//It is easier and faster for the browser to grab an ID as opposed to class because there's just one of them

//Caching
// let button = document.getElementById('enter');
// let input = document.getElementById('user-input'); 
// let ul = document.querySelector('ul');

// button.addEventListener('click', function () {
//     console.log('Testing');
// })

// button.addEventListener('click', function () {
//     // console.log(input.value);
//    let li = document.createElement('li');
// //    console.log(li);
// //    li.appendChild(document.createTextNode('Eleyi Dapo 🤨'));
//     // console.log(li);
// li.appendChild(document.createTextNode(input.value));
// // console.log(li);

//    ul.appendChild(li); 

// })

// //Mouse Event
// button.addEventListener('click', function () {
//    if (input.value.length > 2) {

//     let li = document.createElement('li');
   
//    li.appendChild(document.createTextNode(input.value));
//    ul.appendChild(li);
//    input.value = '';
//    } else {
//     alert('Enter a minimum of 3 characters')
//     input. value = '';
//    }
// }) 

// // Keyboard Event
// input.addEventListener('keypress', function (event) {
//     //We listen to something called event.which or event.keyCode or event.charCode
//     // console.log(event); 
//     if (input.value.length > 2 && event.keyCode === 13) {
//      let li = document.createElement('li');
    
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = '';
//     }
//  });
 

 //DRY and Refactoring
 //Dry means Don't Repeat Yourself
 //Refractoring is act of making your code cleaner and simpler
// let button = document.getElementById('enter');
// let input = document.getElementById('user-input'); 
// let ul = document.querySelector('ul');

//     function inputLength() {
//    return  input.value.length > 2
//     }

//    function createListElement() {
//     let li = document.createElement('li');
    
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = '';
//     } 

//     function addListAfterkeypress(event) {
//         if (inputLength() && event.keyCode === 13) {
//             createListElement();
//         }  
//     //      else {
//     //         alert('Enter a minimum of 3 characters');
//     // input.value = '';
//     //     }       
//     }

//     function addListAfterClick() {
//         if (inputLength()) {
//          createListElement();
//         } 
//     }

//  input.addEventListener('keypress', addListAfterkeypress);

//  button.addEventListener('click', addListAfterClick);

//  //In the course of cleaning up our code, we did something strange. When we called the addListAfterkeypress and the addListAfterClick functions, we didn't put the (). The reason for this is because we want that action to be performed only if the event is triggered. This is called a "CALL BACK" function
    
//"https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes";
// "https://developer.mozilla.org/en-US/docs/Web/Events";

let list;
const savedList = JSON.parse(localStorage.getItem('mySavedList'));
Array.isArray(savedList)
    ? (list = savedList)
    : (list = [
    {
        id: '1',
        item: 'Notebook',
    },
    {
        id: '2',
        item: 'Ewa',
    },
    {
        id: '3',
        item: 'Garri',
    },
    {
        id: '4',
        item: 'Cassava',
    },
    {
        id: '5',
        item: 'Agbado',
    }
]
)
// Get references to the ul Element, input field and button

let button = document.getElementById('enter');
let input = document.getElementById('user-input'); 
let ul = document.querySelector('ul');

// render the shopping list to the ul
listRendering();

function listRendering() {
    ul.innerHTML = '';
    
    for(let i=0; i < list.length; i++){
        const currentIteration = list[i];
        const li = document.createElement('li')
        li.style = 'margin-bottom: 5px; list-style: none;';
        li.appendChild(document.createTextNode(currentIteration.item));
        // console.log(currentIteration.id);

// create a Delete button

        const deleteButton = document.createElement('button');
        deleteButton.id = currentIteration.id;
        deleteButton.innerText = 'remove'; 
        deleteButton.style = 'margin-left: 20px;';
        deleteButton.addEventListener('click', deleteItem);
        // deleteButton.onClick = deleteItem;
        li.appendChild(deleteButton);
        ul.appendChild(li);
    }
}

function inputLength() {
    return input.value.length >2
}

function createListElement() {
        let id ='' + Math.floor(Math.random() * 10000) + 1;
        console.log(id)
        // let id = new Date().getTime();
        const newItem = {id: id,item: input.value}
        list.push(newItem)
        listRendering();
        input.value = '';
        saveList();
       
    } 
    function addListAfterkeypress(event) {
        if (inputLength() && event.keyCode === 13) {
            createListElement();
        }   
    }

    function addListAfterClick() {
        if (inputLength()) {
         createListElement();
        } 
    }

 input.addEventListener('keypress', addListAfterkeypress);

 button.addEventListener('click', addListAfterClick);

 function deleteItem(e) {
    // console.log('e.target');
    const deleteButton = e.target;
    const iDToDelete = deleteButton.id;

    list = list.filter(function (task) {
        return task.id === iDToDelete ? false : true;
    });

    listRendering(); 
    saveList();
}

function saveList(){
    localStorage.setItem('mySavedList', JSON.stringify(list));
}

    
