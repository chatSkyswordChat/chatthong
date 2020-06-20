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
    var urling = url.split('/')
    var dashBoardActive = [
        { name : 'dashboardCandidate.html'},
        { name : 'dashboardJobApplication.html'},
        { name : 'dashboardInterestingJob.html'},
        { name : 'dashboardCompanyApplication.html'},
        { name : 'dashboardUserSettings.html'},
    ]
           
    dashboard +=`<ul class="dashboardMenu">`
        for (let dashboardMenu = 0; dashboardMenu < dashBoardActive.length; dashboardMenu++) {
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

$(()=> {
    // http://eonasdan.github.io/bootstrap-datetimepicker/
    // calendar
	$('#datetimepicker4').datetimepicker({
		locale: 'en',
		//debug: true,
		icons: {
			time: "far fa-clock",
		}
    });
    // end calendar
    
    // carousel
    $('.carousel').carousel({
        interval : 3000
    });
    // end carousel

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // https://sweetalert2.github.io/
    // บันทึก
	$('.confirmSaveAuto').on('click', function () {
        Swal.fire({
            title: 'คุณต้องการที่จะบันทึก ?',
            text: 'You want to save ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#412e6e',
            cancelButtonText: 'ยกเลิก',
			confirmButtonText: 'ตกลง',
            showClass: {
				popup: 'animated fadeInDown faster'
			},
			hideClass: {
				popup: 'animated fadeOutUp faster'
			}
        }).then((result) => {
            if (result.value) {
              Swal.fire(
                'คุณบันทึกสำเร็จแล้ว',
                'You have successfully saved.',
                'success'
              )
            }
         })
    });
    // end บันทึก

    // ลบ ประวัติการศึกษา
	$('#confirmDel').on('click', function () {
        Swal.fire({
            title: 'คุณต้องการที่จะลบประวัติการศึกษา ?',
            text: 'Do you want to delete the education history ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#412e6e',
            cancelButtonText: 'ยกเลิก',
			confirmButtonText: 'ตกลง',
            showClass: {
				popup: 'animated fadeInDown faster'
			},
			hideClass: {
				popup: 'animated fadeOutUp faster'
			}
        }).then((result) => {
            if (result.value) {
              Swal.fire(
                'คุณลบสำเร็จแล้ว',
                'You have successfully deleted',
                'success'
              )
            }
         })
    });
    // end ลบ ประวัติการศึกษา

    // ลบ ประวัติการทำงาน/ฝึกงาน
	$('#confirmDel1').on('click', function () {
        Swal.fire({
            title: 'คุณต้องการที่จะลบประวัติการทำงาน/ฝึกงาน ?',
            text: 'Do you want to delete your work / internship history ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#412e6e',
            cancelButtonText: 'ยกเลิก',
			confirmButtonText: 'ตกลง',
            showClass: {
				popup: 'animated fadeInDown faster'
			},
			hideClass: {
				popup: 'animated fadeOutUp faster'
			}
        }).then((result) => {
            if (result.value) {
              Swal.fire(
                'คุณลบสำเร็จแล้ว',
                'You have successfully deleted',
                'success'
              )
            }
         })
    });
    // end ลบ ประวัติการทำงาน/ฝึกงาน

    // ลบ ประวัติการฝึกอบรม
	$('#confirmDel2').on('click', function () {
        Swal.fire({
            title: 'คุณต้องการที่จะลบประวัติการฝึกอบรม ?',
            text: 'Do you want to delete the training history ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#412e6e',
            cancelButtonText: 'ยกเลิก',
			confirmButtonText: 'ตกลง',
            showClass: {
				popup: 'animated fadeInDown faster'
			},
			hideClass: {
				popup: 'animated fadeOutUp faster'
			}
        }).then((result) => {
            if (result.value) {
              Swal.fire(
                'คุณลบสำเร็จแล้ว',
                'You have successfully deleted',
                'success'
              )
            }
         })
    });
    // end ลบ ประวัติการฝึกอบรม

    // ลบ ภาษา
	$('#confirmDel3').on('click', function () {
        Swal.fire({
            title: 'คุณต้องการที่จะลบภาษา ?',
            text: 'Do you want to delete the language ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#412e6e',
            cancelButtonText: 'ยกเลิก',
			confirmButtonText: 'ตกลง',
            showClass: {
				popup: 'animated fadeInDown faster'
			},
			hideClass: {
				popup: 'animated fadeOutUp faster'
			}
        }).then((result) => {
            if (result.value) {
              Swal.fire(
                'คุณลบสำเร็จแล้ว',
                'You have successfully deleted',
                'success'
              )
            }
         })
    });
    // end ลบ ภาษา
});

// https://select2.org/placeholders
// สามารถเลือกอำเภอได้ไม่เกิน 5 อำเภอ
$(".js-example-placeholder-multiple").select2({
    maximumSelectionLength: 5,
    placeholder: 'สามารถเลือกอำเภอได้ไม่เกิน 5 อำเภอ',
    allowClear: true
});

// ความสามารถในการขับขี่
$(".js-example-placeholder-multiple-driver").select2({
    maximumSelectionLength: 3,
    placeholder: 'ความสามารถในการขับขี่',
    allowClear: true
});

// มียานพาหนะเป็นของตัวเอง
$(".js-example-placeholder-multiple-drivered").select2({
    maximumSelectionLength: 3,
    placeholder: 'มียานพาหนะเป็นของตัวเอง',
    allowClear: true
});

// มีใบอนุญาติขับขี่
$(".js-example-placeholder-multiple-skill-drive").select2({
    maximumSelectionLength: 3,
    placeholder: 'มีใบอนุญาติขับขี่',
    allowClear: true
});

// ความสามารถทางด้านคอมพิวเตอร์
$(".js-example-placeholder-multiple-computer").select2({
    placeholder: 'ความสามารถทางด้านคอมพิวเตอร์',
    allowClear: true
});

// ทักษะอื่นๆ
$(".js-example-placeholder-other").select2({
    placeholder: 'ทักษะอื่นๆ',
    allowClear: true
});

// คุณสมบัติอื่นๆ
$(".js-example-placeholder-other1").select2({
    placeholder: 'คุณสมบัติอื่นๆ',
    allowClear: true
});

$('.select2-search__field , .select2-search--inline').css('width', '100%');
$('.select2-container--default .select2-selection--single').css(
    {'borderColor':'#ced4da','minHeight':'36px', 'display': 'flex', 'alignItems': 'center'}
  )
$('.select2-container--default .select2-selection--single .select2-selection__rendered').css('width','100%')
$('.select2-container--default .select2-selection--single .select2-selection__clear').css({'position':'relative', 'right':'15px'})
$('.select2-container--default .select2-selection--single .select2-selection__arrow').css('top','5px')

