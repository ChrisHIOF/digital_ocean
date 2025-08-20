const demoID = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all');

demoID.style.border = '1px solid red';
demoQuery.style.border = '1px solid blue';


for(i = 0; i<2; i++) {
    demoClass[i].style.border = '1px solid purple';
    demoTag[i].style.border = '1px solid yellow';
}

demoQueryAll.forEach(q => {
    q.style.border = '1px solid green';
});