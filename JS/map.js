const showMap = document.querySelector('.map-img');
const map = document.querySelector('.map-box');
const text = showMap.querySelector('.map-text');

function openMap () {
    if(text.textContent =='open map'){
    map.style.display = 'block';
    showMap.style.height = '800px';
    text.innerHTML = 'close map <hr class="pink-line">';
} else {
    map.style.display = 'none';
    showMap.style.height = '200px';
    text.innerHTML = 'open map <hr class="pink-line">';
    }
}

showMap.addEventListener('click', openMap);