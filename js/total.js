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

// 상품 선택 시 하단부 출력
var itemArr = [{
        id : 0,
        name : '백설공주가 먹고 너무 맛있어서 기절해버린 사과',
        unit : '박스',
        price : '10000',
        images : '../../images/best/best_img_1.jpg',
        checked : false,
    },{
        id : 1,
        name : '토마토는 야채라구요!',
        unit : '박스',
        price : '10000',
        images : '../../images/normal/img_1.jpg',
        checked : false,
    },{
        id : 2,
        name : '아쓱파라거쓱,,,,;',
        unit : '박스',
        price : '10000',
        images : '../../images/normal/img_4.jpg',
        checked : false,
    },{
        id : 3,
        name : '니모는 안팔아요. 이쁜이....',
        unit : '박스',
        price : '10000',
        images : '../../images/normal/img_2.jpg',
        checked : false,
    },{
        id : 4,
        name : '준호오빠 너무 잘생겼어요',
        unit : '박스',
        price : '10000',
        images : '../../images/normal/img_3.jpg',
        checked : false,
    },
] 