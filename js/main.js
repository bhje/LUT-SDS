// Jallery accordion
document.addEventListener('DOMContentLoaded', () => {
    const jalleryContainer = document.querySelector('.jallery-content');

    jalleryContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.jallery-grid-text');

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.jallery-grid');
        const icon = group.querySelector('i');

        const isOpen = groupBody.classList.contains('open');

        // Close all groups first
        const otherGroups = jalleryContainer.querySelectorAll('.jallery-group');
        otherGroups.forEach((otherGroup) => {
            const otherGroupBody = otherGroup.querySelector('.jallery-grid');
            const otherIcon = otherGroup.querySelector('.jallery-grid-text i');

            otherGroupBody.classList.remove('open');
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus');
        });

        // Toggle the clicked group based on previous state
        if (!isOpen) {
            groupBody.classList.add('open');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            groupBody.classList.remove('open');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});

// Jallery content
const years = [2021, 2022, 2023, 2024, 2025];
years.forEach(year => {
  const gridContainer = document.querySelector(`.jallery-grid-${year}`);
  if (!gridContainer) return;
  let i = 1;
  function loadImage() {
    const img = document.createElement('img');
    img.src = `gallery-images/${year}/separate-${i}.jpg`;
    img.onload = () => {
        gridContainer.appendChild(img);
        i++;
        loadImage();
    };
    img.onerror = () => {
    }
  }
  loadImage();
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => 
        mobileMenu.classList.toggle('active')
    );
});