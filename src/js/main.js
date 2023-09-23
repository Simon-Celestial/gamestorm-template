'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const follower = document.querySelector('.mouse-follower');
    const dotFollower = document.querySelector('.mouse-follower-dot');

    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.pageX + 'px';
        follower.style.top = e.pageY + 'px';
        dotFollower.style.left = e.pageX + 'px';
        dotFollower.style.top = e.pageY + 'px'; 
    });
    
});
