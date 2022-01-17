const CLASSON = 'on';

const a = {
    tabMove: (num) => {
        var tabNav = document.querySelectorAll('.tab_nav li');
        var tabCon = document.querySelectorAll('.tab_con > div');

        tabNav.forEach((val) => {
            val.classList.remove(CLASSON);
        });
        tabNav[num].classList.add(CLASSON);
        tabCon.forEach((val) => {
            val.style.display = 'none';
        });
        tabCon[num].style.display = 'block';        
    },
}
 

export default {
    install (Vue) {
        Vue.prototype.$tabMove = a.tabMove
    }
}