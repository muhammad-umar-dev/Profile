const btn = document.querySelector('.mobile-menu-button');
const list = document.querySelector('.menu-list');
const body = document.querySelector('.main');
function myFunction() {//grap data fromweb
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('hidden');

}
function mobileList() {
    const menu = document.querySelector('.mobile-menu');
    console.log('Mobile List Close');
    menu.classList.toggle('hidden');
}

function tabDisplay(tab) {
    const cipherSavvy = document.getElementById('cipherSavvy');
    const iconTech = document.getElementById('iconTechnologies');
    const iParagons = document.getElementById('iParagons');
    const service = document.getElementById('service');
    console.log(tab.value);

    if (tab.value === 'tab1') {

        cipherSavvy.style.display = 'block';
        iconTech.style.display = "none";
        iParagons.style.display = 'none';
        service.style.display = 'none';
    } else if (tab.value === 'tab2') {

        iconTech.style.display = 'block';
        cipherSavvy.style.display = 'none';
        iParagons.style.display = 'none';
        service.style.display = 'none';
    }
    else if (tab.value === 'tab3') {

        cipherSavvy.style.display = 'none';
        iconTech.style.display = "none";
        iParagons.style.display = 'block';
        service.style.display = 'none';

    } else if (tab.value === 'tab4') {

        cipherSavvy.style.display = 'none';
        iconTech.style.display = "none";
        iParagons.style.display = 'none';
        service.style.display = 'block';

    }

}
