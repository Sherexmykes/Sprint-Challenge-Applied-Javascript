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
    const header = document.createElement('div');
    header.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'MARCH 28, 2019';

    const headerText = document.createElement('h1');
    headerText.textContent = 'Lambda Times';

    const tempSpan = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';

    header.append(date); 
    header.append(head);
    header.append(temp);

    return header; 
}

headContainer.append(Header()); 