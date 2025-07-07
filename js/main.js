//tab

const btns = document.querySelectorAll('.js_tabBtn');
const contents = document.querySelectorAll('.js_tabContent');

btns.forEach((btn, index) => {
    // console.log(index);
    btn.addEventListener('click', () => {
    
        // 全てのボタンとコンテンツから is_active を削除
        btns.forEach(b => b.classList.remove('is_active'));
        contents.forEach(c => c.classList.remove('is_active'));

        // 対象だけに is_active を付与
        btn.classList.add('is_active');
        contents[index].classList.add('is_active');
    });
});

// Swiper
const swiper = new Swiper(".swiper", {
    loop: true, // ループ有効
    slidesPerView: 3.5, // 一度に表示する枚数
    speed: 4800, // ループの時間
    allowTouchMove: false, // スワイプ無効
    spaceBetween: 24, //画像の間隔
    autoplay: {
      delay: 0, // 途切れなくループ
    }
});