const filter_button_close = document.getElementById('filters-off');
const filter_button_open = document.getElementById('filters-on');

function open_filters() {
    filter_button_close.style.display='none';
    filter_button_open.style.display='block';
}

function close_filters() {
    filter_button_open.style.display='none';
    filter_button_close.style.display='block';
}