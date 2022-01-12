const current=document.getElementById('current');
const imgs=document.querySelectorAll('.imgs img');
const opacity=0.4;

imgs.forEach(img => {img.addEventListener('click',show)});

function show(e){
    imgs.forEach(img=>img.style.opacity=1);
    current.src=e.target.src;
    current.classList.add('fade-in');
    setTimeout(()=>current.classList.remove('fade-in',500));
    e.target.style.opacity=opacity;
}