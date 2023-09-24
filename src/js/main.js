'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // MOUSE FOLLOWER JS
    const follower = document.querySelector('.mouse-follower');
    const dotFollower = document.querySelector('.mouse-follower-dot');

    let frame = 0;
    document.addEventListener('mousemove', (e) => {
        frame++;
        if (frame % 2) {
            follower.style.left = e.pageX + 'px';
            follower.style.top = e.pageY + 'px';
            dotFollower.style.left = e.pageX + 'px';
            dotFollower.style.top = e.pageY + 'px';
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
});
