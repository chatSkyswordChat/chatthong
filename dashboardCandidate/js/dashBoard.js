$(function () {
    var dashboard = ''
    var url = location.href.split('/')[7]
    
    var listMenus = [
        { name: 'เรซูเม่ของฉัน', icon: 'dashboard-orchidjobs-1', linkin: 'dashboardCandidate.html' },
        { name: 'งานที่สมัคร', icon: 'dashboard-orchidjobs-2', linkin: 'dashboardJobApplication.html' },
        { name: 'งานที่สนใจ', icon: 'dashboard-orchidjobs-3', linkin: 'dashboardInterestingJob.html' },
        { name: 'บริษัทที่เปิดดูใบสมัคร', icon: 'dashboard-orchidjobs-4', linkin: 'dashboardCompanyApplication.html' },
        { name: 'ตั้งค่าบัญชีผู้ใช้', icon: 'dashboard-orchidjobs-5', linkin: 'dashboardUserSettings.html' },
    ]

    dashboard += `<ul class="dashboardMenu">`
    listMenus.forEach(function (listMenu) {
        var classActive = '';
        if (listMenu.linkin.includes(url)) {
            classActive = 'active'
        }
        dashboard += `<li>`
        dashboard += `<a href="${listMenu.linkin}" class="${classActive}">`
        dashboard += `<img src="images/${listMenu.icon}.png"> ${listMenu.name}`
        dashboard += `</a>`
        dashboard += `</li>`
    })
    dashboard += `</ul>`
    $('#dashBoardMenu').html(dashboard)

    var application = ''
    dataTables = [
        { id: 1, name: 'บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด', position: 'Project Manager', date: '8 พ.ค. 62', del: 'ลบ', save: 'PC', note: 'บริษัทเปิดรับสมัคร' },
        { id: 2, name: 'บริษัท ทิงค์เน็ต จำกัด', position: 'Web Designer', date: '8 พ.ค. 62', del: 'ลบ', save: 'PC', note : 'บริษัทเปิดรับสมัคร' },
        { id: 3, name: 'บริษัท ยูนิเวนเจอร์ จำกัด (มหาชน)', position: 'เจ้าหน้าที่ดูแลอาคารอาวุโส / ผู้ช่วยผู้จัดการอาคารชุด (หลายโครงการทั่วกรุงเทพฯ)', date: '8 พ.ค. 62', del: 'ลบ', save: 'PC', note: 'บริษัทปิดรับสมัคร' },
        { id: 4, name: 'เจ้าหน้าที่ดูแลอาคารอาวุโส / ผู้ช่วยผู้จัดการอาคารชุด (หลายโครงการทั่วกรุงเทพฯ)', position: 'Project Manager', date: '8 พ.ค. 62', del: 'ลบ', save: 'Mobile', note : 'บริษัทปิดรับสมัคร' },
    ]

    dataTables.forEach((dataTable) => {
        application += `<tr>`
        application += `<th scope="row" class="text-align-center">${dataTable.id}</th>`
        application += `<td><a href="javascript:void(0)" onclick="Newpage()">${dataTable.name}</a></td>`
        application += `<td><a href="javascript:void(0)" onclick="Newpage()">${dataTable.position}</a></td>`
        application += `<td class="text-align-center">${dataTable.date}</td>`
        application += `<td class="text-align-center"><button type="button" class="confirmDelTable">${dataTable.del}</button></td>`
        application += `<td class="text-align-center">${dataTable.save}</td>`
        application += `</tr>`
    })

    var companyApplication = ''
    dataTables.forEach((dataTable) => {
        companyApplication += `<tr>`
        companyApplication += `<th scope="row" class="text-align-center">${dataTable.id}</th>`
        companyApplication += `<td><a href="javascript:void(0)" onclick="Newpage()">${dataTable.name}</a></td>`
        companyApplication += `<td class="text-align-center">${dataTable.date}</td>`
        companyApplication += `<td class="text-align-center">${dataTable.note}</td>`
        companyApplication += `</tr>`
    })

    if(url == 'dashboardJobApplication.html' || url == 'dashboardInterestingJob.html'){
        $('.bodyTable').html(application)
    }else{
        $('.bodyTable').html(companyApplication)
    }
})

$(document).ready(() => {
    // carousel
    $('.carousel').carousel({
        interval: 3000
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

    // ลบ
    $('.confirmDelTable').on('click', function () {
        Swal.fire({
            title: 'คุณต้องการที่จะลบ ?',
            text: 'You want to delete ?',
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
                    'You have successfully saved.',
                    'success'
                )
            }
        })
    });
    // end ลบ

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

    // ลบ ไฟล์
    $('.delFile').on('click', function () {
        Swal.fire({
            title: 'คุณต้องการที่จะลบ ?',
            text: 'Do you want to delete ?',
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
        })
    });
    // end ลบ ไฟล์
});


