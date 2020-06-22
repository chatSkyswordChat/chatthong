// keyword
$(()=>{
    let keyWord = ''
    let typeWork = [
        'งานเทคโนโลยีสารสนเทศ / IT', 'งานวิศวกร/ช่าง', 'งานการตลาด', 'งานขาย', 'งานบริการลูกค้า/Call Center',
        'งานบริหาร', 'งานบัญชีและการเงิน', 'งานธนาคาร', 'งานเทคโนโลยีอาหาร', 'งานอุตสาหกรรม', 'งานอาหารและโรงแรม', 
        'งานท่องเที่ยว', 'งาน Part-time/พนักงานชั่วคราว', 'งาน Freelance', 'งานแม่บ้าน / รภป.', 'งานสัญญาจ้าง'
    ]
    let areaWork = [
        'งานกรุงเทพมหานครและปริมณฑล', 'งานนิคมอุตสาหกรรม', 'งานภาคเหนือ', 'งานภาคใต้', 'งานตะวันออก', 
        'งานภาคตะวันออกเฉียงเหนือ', 'งานภาคกลาง', 'งานเชียงใหม่', 'งานพิษณุโลก', 'งานนครราชสีมา', 
        'งานขอนแก่น', 'งานระยอง', 'งานชลบุรี', 'งานพระนครศรีอยุธยา', 'งานสุราษฎร์ธานี', 'งานภูเก็ต'
    ]

    let jobSearch = ($(location).attr('href').split('/').length == 7) ? '': '../'
    let linkSearch = { name : jobSearch+'job-search/jobSearch.html' }

    keyWord +='<article class="container">'
		keyWord +='<div class="row">'
			keyWord +='<div class="col-12">'
                keyWord +='<article class="gridKeyword">'
                    // หางานตามประเภท
					keyWord +='<section class="flexKeyWord">'
						keyWord +='<h2>หางานตามประเภท</h2>'
                        keyWord +='<div class="keyWord">'
                            for (let workType = 0; workType < typeWork.length; workType++) {
							    keyWord +='<p>'
                                    keyWord +=`<a href="${linkSearch.name}" target="_blank"> ${typeWork[workType]}`
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
                        for (let workArea = 0; workArea < areaWork.length; workArea++) {
							keyWord +='<p>'
                                keyWord +=`<a href="${linkSearch.name}" target="_blank">${areaWork[workArea]}`
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

    let menuGoIndex = ($(location).attr('href').split('/').length == 7) ? '':'../'
    let goIndexs = [
        { name: 'หน้าแรก', linked: menuGoIndex+'index.html'},
        { name: 'เกี่ยวกับเรา', linked: menuGoIndex+'about-us/about-us.html'},
        { name: 'บริการของเรา', linked: menuGoIndex+'service/allService.html'},
        { name: 'ค้นหางาน', linked: menuGoIndex+'job-search/jobSearch.html'},
        { name: 'ประกาศงาน', linked: 'javascript:void(0)'},
        { name: 'ฝากเรซูเม่', linked: 'javascript:void(0)'},
        { name: 'ติดต่อเรา', linked: menuGoIndex+'contact/contact.html'},
        { name: 'จัดหางาน', linked: 'javascript:void(0)'}
    ]

    let searchWorksGo = ($(location).attr('href').split('/').length == 6)? '':'../'
    let searchWorks = [
        { name : 'เว็บไซต์หางาน', linked: searchWorksGo+'job-search/jobSearch.html'},
        { name : 'บริษัทจัดหางาน', linked: searchWorksGo+'job-search/jobSearch.html'},
        { name : 'หางาน สมัครงาน', linked: searchWorksGo+'job-search/jobSearch.html'},
        { name : 'หาคนทำงาน', linked: searchWorksGo+'job-search/jobSearch.html'},
        { name : 'รับสมัครพนักงาน', linked: searchWorksGo+'job-search/jobSearch.html'},
    ]
    // end footer

    // โลโก้ footer
    let logoFooter = ($(location).attr('href').split('/').length == 7)? '':'../'
    let logoFooters = { logo : logoFooter+'asset/images/logo.png', linked : logoFooter+'index.html'}

    aboutUs += '<article class="container">'
		aboutUs += '<div class="row">'
			aboutUs += '<div class="col-12">'
				aboutUs += '<article class="gridcompany">'
                    aboutUs += '<section class="gridListCompany">'
                        // orchidjobs
                        aboutUs += '<div class="flexListCompany">'
                            aboutUs += '<h2>OrchidJobs</h2>'
                            aboutUs += '<ul>'
                            goIndexs.forEach((goIndex)=>{
                                aboutUs += '<li>'
                                    aboutUs += `<a href="${goIndex.linked}"> ${goIndex.name}`
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
                            })
						    aboutUs += '</ul>'
                        aboutUs += '</div>'
                        // end orchidjobs

                        // ค้นหางาน
                        aboutUs += '<div class="flexListCompany">'
                            aboutUs += '<h2>ค้นหางาน</h2>'
                            aboutUs += '<ul>'
                            searchWorks.forEach((searchWork)=>{
                                aboutUs += '<li>'
                                    aboutUs += `<a href="${searchWork.linked}" target="_blank">${searchWork.name}`
                                    aboutUs += '</a>'
                                aboutUs += '</li>'
                            })
						    aboutUs += '</ul>'
                        aboutUs += '</div>'
                        // end ค้นหางาน
					aboutUs += '</section>'

					aboutUs += '<section class="flexAddress">'
						aboutUs += '<div class="footer">'
							aboutUs += `<a href="${logoFooters.linked}">`
                                aboutUs += `<img src="${logoFooters.logo}">`
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