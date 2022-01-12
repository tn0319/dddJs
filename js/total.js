const CLASSON = 'on';

// 탭
var tabNav = document.querySelectorAll('.tab_nav li');
var tabCon = document.querySelectorAll('.tab_con > div');

function tabMove(num) {
    tabNav.forEach((val) => {
        val.classList.remove(CLASSON);
    });
    tabNav[num].classList.add(CLASSON);
    tabCon.forEach((val) => {
        val.style.display = 'none';
    });
    tabCon[num].style.display = 'block';
}
 
tabNav.forEach((val,idx) => {
    val.addEventListener('click', () => {tabMove(idx)});
})


