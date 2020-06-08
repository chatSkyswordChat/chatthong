// keyword
$(()=>{
    var keyWord = ''
    var typeWork = [
        'งานเทคโนโลยีสารสนเทศ / IT', 'งานวิศวกร/ช่าง', 'งานการตลาด', 'งานขาย', 'งานบริการลูกค้า/Call Center',
        'งานบริหาร', 'งานบัญชีและการเงิน', 'งานธนาคาร', 'งานเทคโนโลยีอาหาร', 'งานอุตสาหกรรม', 'งานอาหารและโรงแรม', 
        'งานท่องเที่ยว', 'งาน Part-time/พนักงานชั่วคราว', 'งาน Freelance', 'งานแม่บ้าน / รภป.', 'งานสัญญาจ้าง'
    ]
    var areaWork = [
        'งานกรุงเทพมหานครและปริมณฑล', 'งานนิคมอุตสาหกรรม', 'งานภาคเหนือ', 'งานภาคใต้', 'งานตะวันออก', 
        'งานภาคตะวันออกเฉียงเหนือ', 'งานภาคกลาง', 'งานเชียงใหม่', 'งานพิษณุโลก', 'งานนครราชสีมา', 
        'งานขอนแก่น', 'งานระยอง', 'งานชลบุรี', 'งานพระนครศรีอยุธยา', 'งานสุราษฎร์ธานี', 'งานภูเก็ต'
    ]

    var xx = $(location).attr('href')
    var yy = xx
    var zz = yy.split('/')
    var zzz = ''

    if(zz.length == 6 && 4){
        var zzz = 'job-search/jobSearch.html'
    }else{
        var zzz = '../job-search/jobSearch.html'
    }

    keyWord +='<article class="container">'
		keyWord +='<div class="row">'
			keyWord +='<div class="col-12">'
                keyWord +='<article class="gridKeyword">'
                    // หางานตามประเภท
					keyWord +='<section class="flexKeyWord">'
						keyWord +='<h2>หางานตามประเภท</h2>'
						keyWord +='<div class="keyWord">'
                            for (let workType = 0; workType < 16; workType++) {
							    keyWord +='<p>'
                                    keyWord +='<a href="'+zzz+'" target="_blank">' + typeWork[workType] + ''
                                    keyWord +='</a>'
                                keyWord +='</p>'
                            }
						keyWord +='</div>'
                    keyWord +='</section>'
                    // end หางานตามประเภท

					// <!-- หางานตามพื้นที่
					keyWord +='<section class="flexKeyWord">'
						keyWord +='<h2>หางานตามพื้นที่</h2>'
                        keyWord +='<div class="keyWord">'
                        for (let workArea = 0; workArea < 16; workArea++) {
							keyWord +='<p>'
                                keyWord +=`<a href="'+zzz+'" target="_blank">${areaWork[workArea]}`
                                keyWord +='</a>'
                            keyWord +='</p>'
                        }
						keyWord +='</div>'
					keyWord +='</section>'
					// end หางานตามพื้นที่
				keyWord +='</article>'
			keyWord +='</div>'
		keyWord +='</div>'
	keyWord +='</article>'

    $('.bgKeyword').html(keyWord)
});
// end keyword

// about
$(()=>{
    var aboutUs = ''
    var aboutCompany = [
        'หน้าแรก', 'เกี่ยวกับเรา', 'บริการของเรา', 'ค้นหางาน', 'ประกาศงาน', 'ฝากเรซูเม่', 'ติดต่อเรา', 'จัดหางาน',
    ]
    var linked =[
        'index.html', 'about-us/about-us.html', 'service/allService.html', 'job-search/jobSearch.html',
        'javascript:void(0)', 'javascript:void(0)', 'contact/contact.html', 'javascript:void(0)'
    ]
    var searchWork = [
        'เว็บไซต์หางาน', 'บริษัทจัดหางาน', 'หางาน สมัครงาน', 'หาคนทำงาน', 'รับสมัครพนักงาน', 
    ]

    // โลโก้ footer
    var link = location.href
    var url = link
    var path = url.split('/')
    var logo = ''

    if(path.length == 6){
        var logo = '<img src="asset/images/logo.png">'
    }else{
        var logo = '<img src="../asset/images/logo.png">'
    }
    // โลโก้ footer

    // เมนู คลิกไปหน้าต่าง footer
    var aa = $(location).attr('href')
    var bb = aa
    var cc = bb.split('/')
    
    if( cc.length == 6 && 4){
        var linked =[
            { name :'index.html'}, 
            { name :'about-us/about-us.html'}, 
            { name :'service/allService.html'}, 
            { name :'javascript:void(0)'}, 
            { name :'job-search/jobSearch.html'}, 
            { name :'javascript:void(0)'},
            { name :'contact/contact.html'},
            { name :'javascript:void(0)'}, 
        ]
    }else{
        var linked =[
            { name :'../index.html'}, 
            { name :'../about-us/about-us.html'}, 
            { name :'../service/allService.html'}, 
            { name :'../javascript:void(0)'}, 
            { name :'../job-search/jobSearch.html'}, 
            { name :'../javascript:void(0)'},
            { name :'../contact/contact.html'},
            { name :'../javascript:void(0)'}, 
        ]
    }
    // end เมนู คลิกไปหน้าต่าง footer

    // โลโก้ คลิกไปหน้า home
    var dd = $(location).attr('href')
	var ee = dd
	var ff = ee.split('/')
	var gg = ''

	if( ff.length == 6 && 4){
		var gg = 'index.html'
	}else{
		var gg = '../index.html'
    }
    // end โลโก้ คลิกไปหน้า home

    aboutUs += '<article class="container">'
		aboutUs += '<div class="row">'
			aboutUs += '<div class="col-12">'
				aboutUs += '<article class="gridcompany">'
                    aboutUs += '<section class="gridListCompany">'
                        // orchidjobs
                        aboutUs += '<div class="flexListCompany">'
                            aboutUs += '<h2>OrchidJobs</h2>'
                            aboutUs += '<ul>'
                            for (let companyAbout = 0; companyAbout < 8; companyAbout++) {
                                aboutUs += '<li>'
                                    aboutUs += `<a href="${linked[companyAbout]['name']}"> ${aboutCompany[companyAbout]}`
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
                            }
						    aboutUs += '</ul>'
                        aboutUs += '</div>'
                        // end orchidjobs

                        // ค้นหางาน
                        aboutUs += '<div class="flexListCompany">'
                            aboutUs += '<h2>ค้นหางาน</h2>'
                            aboutUs += '<ul>'
                            for (let workSearch = 0; workSearch < 5; workSearch++) {
                                aboutUs += '<li>'
                                    aboutUs += `<a href="job-search/jobSearch.html" target="_blank">${searchWork[workSearch]}`
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
                            }
						    aboutUs += '</ul>'
                        aboutUs += '</div>'
                        // end ค้นหางาน
					aboutUs += '</section>'

					aboutUs += '<section class="flexAddress">'
						aboutUs += '<div class="footer">'
							aboutUs += `<a href="${gg}">`
                                aboutUs += `${logo}`
                            aboutUs += '</a>'
							aboutUs += '<h6>เลขที่ 625 อาคารทัศนียา ห้องเลขที่ ยูนิต เอบีซีดี ชั้น 5'
                                aboutUs += '<br>'
								aboutUs += 'ซอยรามคำแหง 39 ถนนประชาอุทิศ แขวงวังทองหลาง เขตวังทองหลาง กรุงเทพฯ 10310'
							aboutUs += '</h6>'
							aboutUs += '<h6>'
                                aboutUs += '<span class="boldtact">ช่องทางติดต่อ'
                                aboutUs += '</span>' 
                                aboutUs += '<br>'
								aboutUs += '<span class="boldtact">โทร :' 
                                aboutUs += '</span>02-514-7499'
                                aboutUs += '<br>'
								aboutUs += '<span class="boldtact">อีเมล์ :' 
                                aboutUs += '</span>recruitment@orchidjobs.com'
                            aboutUs += '</h6>'
						aboutUs += '</div>'

						aboutUs += '<div class="social">'
							aboutUs += '<ul>'
								aboutUs += '<li>'
                                    aboutUs += '<a href="https://www.facebook.com/home.php?ref=hp" target="_blank" class="facebook">'
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
								aboutUs += '<li>'
                                    aboutUs += '<a href="https://line.me/en/" target="_blank" class="line">'
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
								aboutUs += '<li>'
                                    aboutUs += '<a href="https://www.instagram.com/" target="_blank" class="instragram">'
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
								aboutUs += '<li>'
                                    aboutUs += '<a href="https://www.google.com/" target="_blank" class="google">'
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
								aboutUs += '<li>'
                                    aboutUs += '<a href="https://skype.th.softonic.com/" target="_blank" class="skype">'
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
								aboutUs += '<li>'
                                    aboutUs += '<a href="https://www.youtube.com/" target="_blank" class="youtube">'
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
							aboutUs += '</ul>'
						aboutUs += '</div>'
					aboutUs += '</section>'
				aboutUs += '</article>'
			aboutUs += '</div>'
		aboutUs += '</div>'
    aboutUs += '</article>'
    
    $('.bgAddressOrchidJob').html(aboutUs)
})
// end about