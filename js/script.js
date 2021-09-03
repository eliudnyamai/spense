function openMenu() {
    document.getElementById('headerLinks').style.display="block";
    document.getElementById('headerButtons').style.display="flex";
    document.getElementById('openMenu').style.display="none";
    document.getElementById('hideMenu').style.display="block";
}
function hideMenu() {
    document.getElementById('headerLinks').style.display="none";
    document.getElementById('headerButtons').style.display="none";
    document.getElementById('openMenu').style.display="block";
    document.getElementById('hideMenu').style.display="none";
}
function changeDisplay(){
    if (window.innerWidth<768) {
    document.getElementById('headerButtons').style.display="none";
    document.getElementById('openMenu').style.display="block";
    document.getElementById('hideMenu').style.display="none";
    document.getElementById('headerLinks').style.display="none";
}
    else {  
        document.getElementById('headerLinks').style.display="flex";
        document.getElementById('headerButtons').style.display="flex";
    }
 }