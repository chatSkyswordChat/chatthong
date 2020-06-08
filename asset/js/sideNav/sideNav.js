// https://codepen.io/romanll/pen/jhuqw
// เมนู orchidjobs
$(() => {
    var sideNav = ''
    var icon = [
        'fa fa-home', 'far fa-address-book', 'fa fa-laptop', 'fas fa-edit', 'fas fa-search',
        'fas fa-th-large', 'fa fa-phone',
    ]
    var menuOrchidjobs = [
        'Home', 'About us', 'Services', 'Create Resume', 'Jobs Search', 'Blog', 'Contact us',
    ]
    // var menuOrchidjobs = [
    //     {'name' : 'Home','class': ''}, 
    //     {'name' : 'About us','class' : ''}, 
    //     {'name' : 'Services','class' : ''}, 
    //     {'name' : 'Create Resume','class' : 'swal'}, 
    //     {'name' : 'Jobs Search','class' : ''}, 
    //     {'name' : 'Blog','class' : ''}, 
    //     {'name' : 'Contact us','class' : ''},
    // ]

    // เปลี่ยนภาษาใน mobile
    var link = location.href
    var pathLink = link
    var path = pathLink.split('/')

    var flagThai = '';
    var flagEng = '';

    if (path.length == 6) {
        var flagThai = '<img src="asset/images/thai-flag.png" class="flag-lang">';
        var flagEng = '<img src="asset/images/eng-flag.png" class="flag-lang">';
    } else {
        var flagThai = '<img src="../asset/images/thai-flag.png" class="flag-lang">';
        var flagEng = '<img src="../asset/images/eng-flag.png" class="flag-lang">';
    }
    // end เปลี่ยนภาษาใน mobile

    // navbar เมนู
    var aa = $(location).attr('href')
    var bb = aa
    var cc = bb.split('/')
    // console.log(cc)

    if (cc.length == 6) {
        var linked = [
            { name: 'index.html' },
            { name: 'about-us/about-us.html' },
            { name: 'service/allService.html' },
            { name: 'javascript:void(0)' },
            { name: 'job-search/jobSearch.html' },
            { name: 'blog/blog.html' },
            { name: 'contact/contact.html' },
        ]
    } else {
        var linked = [
            { name: '../index.html' },
            { name: '../about-us/about-us.html' },
            { name: '../service/allService.html' },
            { name: 'javascript:void(0)' },
            { name: '../job-search/jobSearch.html' },
            { name: '../blog/blog.html' },
            { name: '../contact/contact.html' },
        ]
    }

    // end navbar เมนู

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
    sideNav += `${flagEng} English`
    sideNav += '</a>'
    sideNav += '</li>'
    sideNav += '<li>'
    sideNav += '<a href="javascript:void(0)">'
    sideNav += `${flagThai} Thailand`
    sideNav += '</a>'
    sideNav += '</li>'
    sideNav += '</ul>'
    sideNav += '</li>'
    // end show on mobile

    // เมนูด้านข้าง
    var url = $(location).attr('href');
    var parts = url.split("/");
    var last_part = parts[parts.length - 1];

    var ActivePart = [
        { name: 'index.html' },
        { name: 'about-us.html' },
        { name: 'allService.html' },
        { name: 'javascript:void(0)' },
        { name: 'jobSearch.html' },
        { name: 'blog.html' },
        { name: 'contact.html' },
    ]

    // if (last_part.indexOf("#")) {
    //     last_part = last_part.split("#")[0]
    // } else {
    //     last_part = last_part
    // }

    for (let navMenu = 0; navMenu < 7; navMenu++) {
        // ใส่ class active ใน tag A
        var classActive = ''
        if (last_part == ActivePart[navMenu]['name']) {
            classActive = 'active'
        }

        // ใส่ class swal
        var classLink = ''
        if (menuOrchidjobs[navMenu] == 'Create Resume') {
            classLink = 'swal'
        }

        sideNav += `<li class="${classLink}">`
        sideNav += `<a href="${linked[navMenu]['name']}" class="${classActive}">`
        sideNav += `<i class="${icon[navMenu]}">`
        sideNav += `</i>${menuOrchidjobs[navMenu]}`
        sideNav += '</a>'
        sideNav += '</li>'
    }
    // end เมนูด้านข้าง
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
