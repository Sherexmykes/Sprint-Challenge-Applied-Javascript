// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component



const headContainer = document.querySelector('.header-container');

function Header() {
    const head = document.createElement('div');
    head.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'MARCH 28, 2019';

    const headerText = document.createElement('h1');
    headerText.textContent = 'Lambda Times';

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';

    head.append(date); 
    head.append(head);
    head.append(temp);

    return head; 
}

