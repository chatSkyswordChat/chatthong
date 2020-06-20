$(()=>{
    var dashboard = ''
    var listMenu = [
        { name : 'เรซูเม่ของฉัน', icon : 'dashboard-orchidjobs-1', linkin: 'dashboardCandidate.html'},
        { name : 'งานที่สมัคร', icon : 'dashboard-orchidjobs-2', linkin: 'dashboardJobApplication.html'},
        { name : 'งานที่สนใจ', icon : 'dashboard-orchidjobs-3', linkin: 'dashboardInterestingJob.html'},
        { name : 'บริษัทที่เปิดดูใบสมัคร', icon : 'dashboard-orchidjobs-4', linkin: 'dashboardCompanyApplication.html'},
        { name : 'ตั้งค่าบัญชีผู้ใช้', icon : 'dashboard-orchidjobs-5', linkin: 'dashboardUserSettings.html'},
    ]
    var url = $(location).attr('href')
    var linker = url
    var urling = linker.split('/')
    var dashBoardActive = [
        { name : 'dashboardCandidate.html'},
        { name : 'dashboardJobApplication.html'},
        { name : 'dashboardInterestingJob.html'},
        { name : 'dashboardCompanyApplication.html'},
        { name : 'dashboardUserSettings.html'},
    ]
           
    dashboard +=`<ul class="dashboardMenu">`
        for (let dashboardMenu = 0; dashboardMenu < 5; dashboardMenu++) {
            var classActive = '';
            if(urling[6] == dashBoardActive[dashboardMenu]['name']){
                classActive = 'active'
            }
		dashboard +=`<li>`
            dashboard +=`<a href="${listMenu[dashboardMenu]['linkin']}" class="${classActive}">`
                dashboard +=`<img src="images/${listMenu[dashboardMenu]['icon']}.png"> ${listMenu[dashboardMenu]['name']}`
            dashboard +=`</a>`
        dashboard +=`</li>`
        }
	dashboard +=`</ul>`

    $('#dashBoardMenu').html(dashboard)
})

// tooltip
$(function () {
  	$('[data-toggle="tooltip"]').tooltip();
})

// ตัดคำ
$(() => {
	//ส่วนของ แนบไฟล์
	$(".attachments-ellipsis").dotdotdot({
		height: 24,
		fallbackToLetter: true,
		watch: true,
	});
});

// http://eonasdan.github.io/bootstrap-datetimepicker/
// calendar
$(function () {
	$('#datetimepicker4').datetimepicker({
		locale: 'en',
		//debug: true,
		icons: {
			time: "far fa-clock",
		}
	});
});