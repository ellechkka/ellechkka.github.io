const logout_button = document.getElementById('logout');
const book_button = document.getElementById('book');
const edit_button = document.getElementById('edit');

// document.addEventListener("DOMContentLoaded", function() {
//     if (localStorage.getItem('client')) {
//         logout_button.style.display='block';
//         edit_button.style.display='block';
//         book_button.style.display='none';
//     }
//     if (localStorage.getItem('master')) {
//         logout_button.style.display='none';
//         edit_button.style.display='none';
//         book_button.style.display='block';
//     }
// });

if (localStorage.getItem('master')) {
    logout_button.style.display='block';
    edit_button.style.display='block';
    book_button.style.display='none';
} else {
    logout_button.style.display='none';
    edit_button.style.display='none';
    book_button.style.display='block';
}

function log_in_client(event) {
    event.preventDefault();
    if (localStorage.getItem('master')) {
        localStorage.removeItem('master');
    }
    localStorage.setItem('client', 'true');
    // console.log(localStorage.getItem('client'));
    window.location.href = 'clientprofile.html';
}
function log_out_client(event) {
    event.preventDefault();
    localStorage.removeItem('client');
    // console.log(localStorage.getItem('client'));
    window.location.href = 'homepage.html';
}
function open_profile(event) {
    event.preventDefault();
    // console.log(localStorage.getItem('client'));
    if (localStorage.getItem('client')) {
        window.location.href = 'clientprofile.html';
    } else {
        if (localStorage.getItem('master')) {
            window.location.href = 'masterprofile.html';
        } else {
            window.location.href = 'loginсlient.html';
        }
    }
}
function try_book(event){
    event.preventDefault();
    if (localStorage.getItem('client')) {
        window.location.href = 'bookappointment.html';
    } else {
        window.location.href = 'loginсlient.html';
    }
}

function log_in_master(event) {
    event.preventDefault();
    if (localStorage.getItem('client')) {
        localStorage.removeItem('client');
    }
    localStorage.setItem('master', 'true');
    window.location.href = 'masterprofile.html';
}
function log_out_master(event) {
    event.preventDefault();
    localStorage.removeItem('master');
    // console.log(localStorage.getItem('master'));
    window.location.href = 'homepage.html';
}