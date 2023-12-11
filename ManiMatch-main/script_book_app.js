function pop_up_window(event) {
    event.preventDefault();
    localStorage.setItem('app', 'true');
    document.getElementById('pop-up-window').style.display='block';
}

// document.addEventListener("DOMContentLoaded", function() {
//     if (localStorage.getItem('app')) {
//         document.getElementById('future').style.display='block';
//     }
//     if (localStorage.getItem('client')) {
//         document.getElementById('future').style.display='none';
//     }
// });
if (localStorage.getItem('app')) {
    document.getElementById('future').style.display='block';
} else {
    document.getElementById('future').style.display='none';
}

function cancel_app_in_profile(event) {
    event.preventDefault();
    localStorage.removeItem('app');
    document.getElementById('future').style.display='none';
}
function cancel_app(event) {
    event.preventDefault();
    localStorage.removeItem('app');
    // document.getElementById('future').style.display='none';
    // window.location.href = 'clientprofile.html';
    document.getElementById('pop-up-window').style.display='none';
}
function book_app(event) {
    event.preventDefault();
    document.getElementById('pop-up-window').style.display='none';
    // document.getElementById('future').style.display='block';
}