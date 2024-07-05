const YesBtn = document.querySelector('#YesBtn');

YesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a elegir la mejor opcion muah')
});

const NoBtn = document.querySelector('#NoBtn');

NoBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NoBtn.style.setProperty('top',randomY+'%');
    NoBtn.style.setProperty('left',randomX+'%');
    NoBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})