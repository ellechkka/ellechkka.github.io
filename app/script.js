const filter_button_close = document.getElementById('filters_off')
const filter_button_open = document.getElementById('filters_on')

function open_filters() {
    console.log('oops');
    filter_button_close.style.display='none';
    filter_button_open.style.display='block';
}

function close_filters() {
    filter_button_open.style.display='none';
    filter_button_close.style.display='block';
}