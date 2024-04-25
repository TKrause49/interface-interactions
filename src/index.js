import * as css from './styles.css';

const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

function openMenu() {
  dropdownContent.classList.add('open-menu');
}

dropdownBtn.addEventListener('click', () => openMenu());
