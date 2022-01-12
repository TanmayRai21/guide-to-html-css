var modal=document.getElementById('simpleModal');
var modalBtn=document.getElementById('modalBtn');
var CloseBtn=document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click',openModal);
CloseBtn.addEventListener('click',closeModal);

function openModal(){
    modal.style.display='block';
}

function closeModal(){
    modal.style.display='none';
}

window.addEventListener('click',clickOutside);

function clickOutside(e){
    if(e.target == modal){
        modal.style.display='none';
    }
}