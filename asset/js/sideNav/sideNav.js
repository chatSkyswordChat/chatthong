// https://codepen.io/romanll/pen/jhuqw
// เมนู orchidjobs
$(() => {
    var sideNav = ''

    let splits = ($(location).attr('href').split('/').length == 6)?'':'../'
    let menuOrchids = [
        { menu: 'Home', icon: 'fa fa-home', link: splits+'index.html'},
        { menu: 'About us', icon: 'far fa-address-book', link: splits+'about-us/about-us.html'},
        { menu: 'Services', icon: 'fa fa-laptop', link: splits+'service/allService.html'},
        { menu: 'Create Resume', icon: 'fas fa-edit', link: 'javascript:void(0)', class: 'swal'},
        { menu: 'Jobs Search', icon: 'fas fa-search', link: splits+'job-search/jobSearch.html'},
        { menu: 'Blog', icon: 'fas fa-th-large', link: splits+'blog/blog.html'},
        { menu: 'Contact us', icon: 'fa fa-phone', link: splits+'contact/contact.html'}
    ]

    // เมนูด้านข้าง
    let path = $(location).attr('href').split("/");
    let last_part = path[path.length - 1];

    // เปลี่ยนภาษาใน mobile
    let lang = ($(location).attr('href').split('/').length == 6)?'':'../'
    let flag = { flagEng : lang+'asset/images/eng-flag.png', flagThai: lang+'asset/images/thai-flag.png'}

    // sideNav
    sideNav += '<ul>'
    // show on mobile
    sideNav += '<li class=" lang-mobile">'
    sideNav += '<a href="javascript:void(0)">'
    sideNav += '<i class="fas fa-globe-asia">'
    sideNav += '</i>Language'
    sideNav += '<i class="fa fa-caret-down">'
    sideNav += '</i>'
    sideNav += '</a>'
    sideNav += '<ul>'
    sideNav += '<li>'
    sideNav += '<a href="javascript:void(0)">'
    sideNav += `<img src="${flag.flagEng}" class="flag-lang"> English`
    sideNav += '</a>'
    sideNav += '</li>'
    sideNav += '<li>'
    sideNav += '<a href="javascript:void(0)">'
    sideNav += `<img src="${flag.flagThai}" class="flag-lang"> Thailand`
    sideNav += '</a>'
    sideNav += '</li>'
    sideNav += '</ul>'
    sideNav += '</li>'
    // end show on mobile

    menuOrchids.forEach((menuOrchid)=>{
        let classActive = ''
        if(menuOrchid.link.includes(last_part)){
            classActive = 'active'
        }

        sideNav += `<li class="${menuOrchid.class}">`
        sideNav += `<a href="${menuOrchid.link}" class="${classActive}">`
        sideNav += `<i class="${menuOrchid.icon}">`
        sideNav += `</i>${menuOrchid.menu}`
        sideNav += '</a>'
        sideNav += '</li>'
    })

    sideNav += '</ul>'
    // end sideNav

    // hamburger button
    sideNav += '<a id="showmenu">'
    sideNav += '<i class="fa fa-bars">'
    sideNav += '</i>'
    sideNav += '</a>'
    // end hamburger button

    $('.left').html(sideNav)
});

$(document).ready(() => {
    $("#showmenu").click(function (e) {
        $("#menu").toggleClass("show");

    });
    $("#menu a").click(function (event) {
        if ($(this).next('ul').length) {
            event.preventDefault();
            $(this).next().toggle('fast');
            $(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
        }
    });
});

//Target_Blank
Newpage = () => {
    var aLink = location.href;
    window.open(aLink, '_blank');
}
