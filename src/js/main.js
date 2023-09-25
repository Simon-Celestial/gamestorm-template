'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // MOUSE FOLLOWER JS
    // MOUSE FOLLOWER JS
    const follower = document.querySelector('.mouse-follower');
    const dotFollower = document.querySelector('.mouse-follower-dot');

    let frame = 0;
    document.addEventListener('mousemove', (e) => {
        frame++;
        if (frame % 2) {
            const mouseX = e.pageX - window.scrollX;
            const mouseY = e.pageY - window.scrollY;

            follower.style.left = mouseX + 'px';
            follower.style.top = mouseY + 'px';
            dotFollower.style.left = mouseX + 'px';
            dotFollower.style.top = mouseY + 'px';
        }
    });

    // HEADER SEARCH BUTTON JS
    const searchActive = document.getElementById("searchActive");
    const searchDropdown = document.getElementById("searchDropdown");

    let isSearchDropdownVisible = false;

    searchActive.addEventListener("click", (event) => {
        if (!isSearchDropdownVisible) {
            openDropdown();
        } else {
            closeDropdown();
        }

        isSearchDropdownVisible = !isSearchDropdownVisible;
        event.stopPropagation();
    });

    let openDropdown = () => {
        searchDropdown.style.opacity = "1";
        searchDropdown.style.top = "50px";
        searchDropdown.style.pointerEvents = "auto";
    }

    let closeDropdown = () => {
        searchDropdown.style.opacity = "0";
        searchDropdown.style.top = "180px";
        searchDropdown.style.pointerEvents = "none";
    }

    document.addEventListener("click", (event) => {
        if (isSearchDropdownVisible && event.target !== searchActive) {
            closeDropdown();
            isSearchDropdownVisible = false;
        }
    });
    searchDropdown.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // MAIN PAGE SELF WRITING TEXT JS
    const textHolder = document.getElementById('textHolder');
    const words = 'Entertaining Joy Games'.split(' ');
    const frameTime = 100;

    let currentWord = 0;
    let currentLetter = 0;
    let direction = 1;

    setInterval(() => {
        textHolder.innerHTML = words[currentWord].slice(0, currentLetter + 1);

        if (currentLetter === (direction === 1 ? words[currentWord].length : -1)) {
            direction *= -1;
            if (direction === 1) currentWord = (currentWord + 1) % words.length;
        }

        currentLetter += direction;
    }, frameTime);

    // MODAL FROM LEFT MENU
    const modalWindow = document.getElementById('modalWindow');
    const leftMenuButton = document.getElementById('leftMenuButton');
    const leftMenuClose = document.getElementById('leftMenuClose');
    const leftMenuIcon = document.getElementById('leftMenuIcon');
    const navigationModal = document.getElementById('navigationModal');
    const bottomBlockModal = document.getElementById('bottomBlockModal');



    leftMenuButton.addEventListener("click", () => {
        if (leftMenuIcon.style.display === "block" && modalWindow.style.visibility === "hidden") {
            leftMenuIcon.style.display = "none";
            leftMenuClose.style.display = "block";
            modalWindow.style.visibility = "visible";
            modalWindow.style.opacity = "1";
            navigationModal.style.gap = "30px";
            bottomBlockModal.style.bottom = "0";
            bottomBlockModal.style.opacity = "1";

        } else {
            leftMenuIcon.style.display = "block";
            leftMenuClose.style.display = "none"
            modalWindow.style.visibility = "hidden";
            modalWindow.style.opacity = "0";
            navigationModal.style.gap = "0";
            bottomBlockModal.style.bottom = "-100px";
            bottomBlockModal.style.opacity = "0";



        }
    });

    // NAVIGATION ANIMATION ON SCROLL JS
    const navAnimation = document.getElementById("navAnimation");
    let prevScrollY = 0;

    document.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100 && prevScrollY <= 100) {
            navAnimation.classList.add("nav-animation");
        } else if (currentScrollY <= 100 && prevScrollY > 100) {
            navAnimation.classList.remove("nav-animation");
        }

        prevScrollY = currentScrollY;
    });

    //RETURN TO TOP ON SCROLL ANIMATION JS
    const returnToTop = document.getElementById("returnToTop");
    let previousScrollY = 0;

    document.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 500 && previousScrollY <= 500) {
            returnToTop.style.bottom = "120px";
            returnToTop.style.right = "-10px";
            returnToTop.style.transform = "rotate(-90deg)";


        } else if (currentScrollY <= 500 && previousScrollY > 500) {
            returnToTop.style.bottom = "-25px";
            returnToTop.style.right = "80px";
            returnToTop.style.transform = "rotate(0)";

        }

        previousScrollY = currentScrollY;
    });
});
