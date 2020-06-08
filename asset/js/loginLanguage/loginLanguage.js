$(()=>{
	var loginLang = ''
	
	// โลโก้เมนู เปลี่ยนภาษา
	var link = location.href;
	var url = link;
    var path = url.split("/");
	var logo = '';
	var flagThai = '';
	var flagEng = '';	

	if(path.length == 6){
		var logo = '<img src="asset/images/logo.png">';
		var flagThai = '<img src="asset/images/thai-flag.png" class="flag-lang">';
		var flagEng = '<img src="asset/images/eng-flag.png" class="flag-lang">';
	}else{
		var logo = '<img src="asset/images/logo.png">';
		var flagThai = '<img src="asset/images/thai-flag.png" class="flag-lang">';
		var flagEng = '<img src="asset/images/eng-flag.png" class="flag-lang">';
	}
	// end โลโก้เมนู เปลี่ยนภาษา

	// โลโก้ คลิกไปหน้า home ตรงเมนู top
	var aa = $(location).attr('href')
	var bb = aa
	var cc = bb.split('/')
	var dd = ''

	if( cc.length == 6 && 4){
		var dd = 'index.html'
	}else{
		var dd = '../index.html'
	}
	// end โลโก้ คลิกไปหน้า home ตรงเมนู top

    // โลโก้ orchid
	loginLang += '<div class="logo-orchid">'
		loginLang += `<a href="${dd}">`
            loginLang += `${logo}`
        loginLang += '</a>'
	loginLang += '</div>'
    // end โลโก้ orchid

    // login language
    loginLang += '<div class="login-lang">'
        // login
		loginLang += '<div class="login-orchid">'
			loginLang += '<ul class="nav">'
				loginLang += '<li class="resume-respon swal">'
                    loginLang += '<a href="javascript:void(0)" class="active">Create Resume'
                    loginLang += '</a>'
                loginLang += '</li>'
				loginLang += '<li class="button-dropdown">'
                    loginLang += '<a href="javascript:void(0)" class="dropdown-toggle">'
                        loginLang += '<i class="far fa-edit">'
                        loginLang += '</i> Register'
                    loginLang += '</a>'
					loginLang += '<ul class="dropdown-menu dropdown-menu-left">'
						loginLang += '<li>'
                            loginLang += '<a href="create-register-login/ผู้ประกอบการลงทะเบียน.html">ผู้ประกอบการลงทะเบียน'
                            loginLang += '</a>'
						loginLang += '</li>'
						loginLang += '<li>'
                            loginLang += '<a href="create-register-login/ผู้สมัครงานลงทะเบียน.html">ผู้สมัครงานลงทะเบียน'
                            loginLang += '</a>'
						loginLang += '</li>'
						loginLang += '<li>'
                            loginLang += '<a href="create-register-login/เอเจนซี่ลงทะเบียน.html">เอเจนซี่ลงทะเบียน'
                            loginLang += '</a>'
						loginLang += '</li>'
					loginLang += '</ul>'
                loginLang += '</li>'
                
				loginLang += '<li class="button-dropdown border-right-0">'
                    loginLang += '<a href="javascript:void(0)" class="dropdown-toggle">'
                        loginLang += '<i class="fas fa-lock">'
                        loginLang += '</i> เข้าสู่ระบบ'
                    loginLang += '</a>'
					loginLang += '<ul class="dropdown-menu">'
						loginLang += '<li>'
                            loginLang += '<a href="create-register-login/ผู้ประกอบการเข้าสู่ระบบ.html">ผู้ประกอบการเข้าสู่ระบบ'
                            loginLang += '</a>'
						loginLang += '</li>'
						loginLang += '<li>'
                            loginLang += '<a href="create-register-login/ผู้สมัครงานเข้าสู่ระบบ.html">ผู้สมัครงานเข้าสู่ระบบ'
                            loginLang += '</a>'
						loginLang += '</li>'
						loginLang += '<li>'
                            loginLang += '<a href="create-register-login/เอเจนซี่เข้าสู่ระบบ.html">เอเจนซี่เข้าสู่ระบบ'
                            loginLang += '</a>'
						loginLang += '</li>'
					loginLang += '</ul>'
				loginLang += '</li>'
			loginLang += '</ul>'
        loginLang += '</div>'
        // end login

        // language
		loginLang += '<div id="dd" class="wrapper-dropdown-5" tabindex="1">'
            loginLang += `${flagEng} English`
			loginLang += '<ul class="dropdown">'
				loginLang += '<li>'
                    loginLang += '<a href="javascript:void(0)">'
                        loginLang += `${flagEng} English`
                    loginLang += '</a>'
				loginLang += '</li>'
				loginLang += '<li>'
                    loginLang += '<a href="javascript:void(0)">'
                        loginLang += `${flagThai} Thailand`
                    loginLang += '</a>'
				loginLang += '</li>'
			loginLang += '</ul>'
        loginLang += '</div>'
        // end language
    loginLang += '</div>'
    // end login language

    $('.flexLogoLang').html(loginLang)
});

// https://codepen.io/scverano/pen/vugei
// ดรอปดาวเปลี่ยนภาษา
$(document).ready(()=>{
    function DropDown(el) {
		this.dd = el;
		this.initEvents();
	}
	DropDown.prototype = {
		initEvents: function () {
			var obj = this;

			obj.dd.on('click', function (event) {
				$(this).toggleClass('active');
				event.stopPropagation();
			});
		}
	}

	$(function () {
		var dd = new DropDown($('#dd'));
		$(document).click(function () {
			// all dropdowns
			$('.wrapper-dropdown-5').removeClass('active');
		});
	});
})

// https://sweetalert2.github.io/
// สร้าง resume
$(document).ready(()=>{
    $('.swal').on('click', function () {
		Swal.fire({
			title: 'สร้างเรซูเม่',
			text: "คุณต้องการที่จะสร้างเรซูเม่ ?",
			icon: 'info',
			showCancelButton: true,
			cancelButtonText: 'ยกเลิก',
			// confirmButtonColor: '#412e6e',
			confirmButtonText: 'ตกลง',
			showClass: {
				popup: 'animated fadeInDown faster'
			},
			hideClass: {
				popup: 'animated fadeOutUp faster'
			}
		}).then((result) => {
			if (result.value) {
				var url = 'https://rms.orchidjobs.com/th/resume/resume_select_lang';
				location.href = url
			}
		});
	});
})

// https://codepen.io/sazzad/pen/pqlgy
// register login
$(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});