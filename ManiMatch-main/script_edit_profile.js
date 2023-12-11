function edit_master_profile(event) {
    event.preventDefault();
    window.location.href = 'editmasterprofile.html';
}
function edit_client_profile(event) {
    event.preventDefault();
    window.location.href = 'editclientprofile.html';
}
function back_to_master_profile(event) {
    event.preventDefault();
    window.location.href = 'masterprofile.html';
}
function back_to_edit_master_profile(event) {
    event.preventDefault();
    window.location.href = 'editmasterprofile.html';
}
function back_to_client_profile(event) {
    event.preventDefault();
    window.location.href = 'clientprofile.html';
}
function timetable(event) {
    event.preventDefault();
    window.location.href = 'timetable.html';
}
function close_pop_up(event) {
    event.preventDefault();
    document.getElementById('add-date').style.display='none';
}
function pop_edit(event){
    event.preventDefault();
    document.getElementById('add-date').style.display='block';
}