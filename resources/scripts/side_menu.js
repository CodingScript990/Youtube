class SideMenu {
    static preLoad() {
        // 이벤트 붙임
    }

    static postLoad() {
        let header = window.document.body.querySelector(':scope > header');
        let aside = window.document.body.querySelector(':scope > aside');
        let asideSpacer = aside.querySelector(':scope > div');
        asideSpacer.style.height = `${header.offsetHeight}px`;

        SimpleScrollbar.initEl(aside);

        window.document.body.classList.remove('preload');
    }
}