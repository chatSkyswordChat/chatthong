$(()=>{
	// feature
	var jobSearch = ''
	var boxJobSearch = [
		{ logo: 'logo-1', 
			position: 'Research Officer - Energy, Environment, Communications and Infrastructure', 
			date: '12 Jan 2019', 
			detail: `วิเคราะห์ข้อมูลทางการเงิน ความเป็นไปได้ของกิจการ ประเมินปัจจัยความเสี่ยง และจัดทำประมาณการกระแสเงินสด (cash flow projection) ของลูกค้าธุรกิจขนาดใหญ่ 
			(ฐานลูกค้าที่มียอดขายตั้งแต่ 1,000 ล้านบาทขึ้นไปหรือลูกค้าในกลุ่ม SET100) • รวบรวมและวิเคราะห์ข้อมูลภาวะเศรษฐกิจและอุตสาหกรรม • จัดทำบันทึกอนุมัติและนำเสนอต่อคณะกรรมการสินเชื่อ •
			ประสานงานร่วมกับ Relationship Manager และหน่วยงานบริหารความเสี่ยง Entry Level: 2 years experience,ปริญญาตรีหรือสูงกว่า,2 - 7 ปี,การเงิน/การธนาคาร/หลักทรัพย์,วิเคราะห์สินเชื่อ,
			สินเชื่อ, credit, วิเคราะห์ข้อมูลทางการเงิน, cash flow projection, ประมาณการกระแสเงินสด, บริหารความเสี่ยง, การเงิน, finance, financial, analyst`,
			company: ' NERA Economic Consulting', 
			area: ' Bangkok/Bangkaphi', 
			salary: ' เงินเดือน : 50,000 บาท'},

		{ logo: 'logo-2', 
			position: 'Communications and Infrastructure', 
			date: '12 Jan 2020', 
			detail: `วิเคราะห์ข้อมูลทางการเงิน, cash flow projection, ประมาณการกระแสเงินสด, บริหารความเสี่ยง, การเงิน, finance, financial, analyst`,
			company: ' Economic Consulting', 
			area: ' Bangkok/Bang Kae', 
			salary: ' เงินเดือน : 80,000 บาท'},
	]

	for (let boxJob = 0; boxJob < 2; boxJob++){
	jobSearch +='<div class="borderHilight">'
		jobSearch +='<div class="gridHilight">'
			jobSearch +='<figure class="logoCompany">'
				jobSearch +='<a href="javascript:void(0)" onclick="return Newpage();" data-toggle="tooltip" id="title" data-placement="bottom" title="ดูโปรไฟล์บริษัท">'
					jobSearch +=`<img src="images/${boxJobSearch[boxJob]['logo']}.jpg">`
				jobSearch +='</a>'
			jobSearch +='</figure>'

			jobSearch +='<a href="javascript:void(0)" onclick="return Newpage();" class="flexListPosition">'
				jobSearch +='<div class="orchidPosition">'
					jobSearch +='<p>'
						jobSearch +=`<b>${boxJobSearch[boxJob]['position']}`
						jobSearch +='</b>'
						jobSearch +=' <span class="feature"> Feature'
						jobSearch +='</span>'
						jobSearch +='<span class="readUse"> อ่านแล้ว'
						jobSearch +='</span>'
					jobSearch +='</p>'

					jobSearch +='<p>'
						jobSearch +=`<img src="images/calendar.png"> ${boxJobSearch[boxJob]['date']}`
					jobSearch +='</p>'
				jobSearch +='</div>'

				jobSearch +='<div class="flexDetail">'
					jobSearch +=`<p class="attachments-ellipsis">${boxJobSearch[boxJob]['detail']}`
					jobSearch +='</p>'

					jobSearch +='<p>'
						jobSearch +=`<img src="images/company.png">${boxJobSearch[boxJob]['company']}`
					jobSearch +='</p>'

					jobSearch +='<p>'
						jobSearch +=`<img src="images/map.png">${boxJobSearch[boxJob]['area']}`
					jobSearch +='</p>'

					jobSearch +='<p>'
						jobSearch +=`<img src="images/salary.png">${boxJobSearch[boxJob]['salary']}`
					jobSearch +='</p>'
				jobSearch +='</div>'
			jobSearch +='</a>'
		jobSearch +='</div>'

		jobSearch +='<ul class="buttonBB">'
			jobSearch +='<li>'
				jobSearch +='<button class="oc-save">บันทึก'
				jobSearch +='</button>'
			jobSearch +='</li>'
			jobSearch +='<li>'
				jobSearch +='<button class="oc-applying">สมัครงาน'
				jobSearch +='</button>'
			jobSearch +='</li>'
		jobSearch +='</ul>'
	jobSearch +='</div>'
	}
	$('.flexListSearchHilight').html(jobSearch)
	// end feature

	var jobNormal = ''
	var boxJobNormal = [
		{ logo: 'logo-3', 
			position: 'Research Officer - Energy, Environment, Communications and Infrastructure', 
			date: '12 Aug 2020', 
			detail: `วิเคราะห์ข้อมูลทางการเงิน ความเป็นไปได้ของกิจการ ประเมินปัจจัยความเสี่ยง และจัดทำประมาณการกระแสเงินสด (cash flow projection) ของลูกค้าธุรกิจขนาดใหญ่ 
			(ฐานลูกค้าที่มียอดขายตั้งแต่ 1,000 ล้านบาทขึ้นไปหรือลูกค้าในกลุ่ม SET100) • รวบรวมและวิเคราะห์ข้อมูลภาวะเศรษฐกิจและอุตสาหกรรม • จัดทำบันทึกอนุมัติและนำเสนอต่อคณะกรรมการสินเชื่อ •
			ประสานงานร่วมกับ Relationship Manager และหน่วยงานบริหารความเสี่ยง Entry Level: 2 years experience,ปริญญาตรีหรือสูงกว่า,2 - 7 ปี,การเงิน/การธนาคาร/หลักทรัพย์,วิเคราะห์สินเชื่อ,
			สินเชื่อ, credit, วิเคราะห์ข้อมูลทางการเงิน, cash flow projection, ประมาณการกระแสเงินสด, บริหารความเสี่ยง, การเงิน, finance, financial, analyst`,
			company: ' NERA Economic Consulting', 
			area: ' Bangkok/Wangthonlang', 
			salary: ' เงินเดือน : 100,000 บาท'},

		{ logo: 'logo-1', 
			position: 'Communications and Infrastructure', 
			date: '12 Nov 2020', 
			detail: `วิเคราะห์ข้อมูลทางการเงิน, cash flow projection, ประมาณการกระแสเงินสด, บริหารความเสี่ยง, การเงิน, finance, financial, analyst`,
			company: ' Economic Consulting', 
			area: ' Bangkok/Bangphi', 
			salary: ' เงินเดือน : 20,000 บาท'},
	]

	for (let boxJob1 = 0; boxJob1 < 2; boxJob1++){
	jobNormal +='<div class="bg-border-white">'
		jobNormal +='<div class="gridHilight">'
			jobNormal +='<figure class="logoCompany">'
				jobNormal +='<a href="javascript:void(0)" onclick="return Newpage();" data-toggle="tooltip" id="title" data-placement="bottom" title="ดูโปรไฟล์บริษัท">'
					jobNormal +=`<img src="images/${boxJobNormal[boxJob1]['logo']}.jpg">`
				jobNormal +='</a>'
			jobNormal +='</figure>'

			jobNormal +='<a href="javascript:void(0)" onclick="return Newpage();" class="flexListPosition">'
				jobNormal +='<div class="orchidPosition">'
					jobNormal +='<p>'
						jobNormal +=`<b>${boxJobNormal[boxJob1]['position']}`
						jobNormal +='</b>'
						jobNormal +='<span class="readUse"> อ่านแล้ว'
						jobNormal +='</span>'
					jobNormal +='</p>'

					jobNormal +='<p>'
						jobNormal +=`<img src="images/calendar.png"> ${boxJobNormal[boxJob1]['date']}`
					jobNormal +='</p>'
				jobNormal +='</div>'

				jobNormal +='<div class="flexDetail">'
					jobNormal +=`<p class="attachments-ellipsis">${boxJobSearch[boxJob1]['detail']}`
					jobNormal +='</p>'

					jobNormal +='<p>'
						jobNormal +=`<img src="images/company.png">${boxJobNormal[boxJob1]['company']}`
					jobNormal +='</p>'

					jobNormal +='<p>'
						jobNormal +=`<img src="images/map.png">${boxJobNormal[boxJob1]['area']}`
					jobNormal +='</p>'

					jobNormal +='<p>'
						jobNormal +=`<img src="images/salary.png">${boxJobNormal[boxJob1]['salary']}`
					jobNormal +='</p>'				    
				jobNormal +='</div>'
			jobNormal +='</a>'           
		jobNormal +='</div>'

		jobNormal +='<ul class="buttonBB">'
			jobNormal +='<li>'
				jobNormal +='<button class="oc-save">บันทึก'
				jobNormal +='</button>'
			jobNormal +='</li>'
			jobNormal +='<li>'
				jobNormal +='<button class="oc-applying">สมัครงาน'
				jobNormal +='</button>'
			jobNormal +='</li>'
		jobNormal +='</ul>'
	jobNormal +='</div>'
	}

	$('.flexListSearchNormal').html(jobNormal)
})

// https://sweetalert2.github.io/
$(document).ready(()=>{
	//ปุ่มกดบันทึก
	$('.oc-save').on('click', function () {
		Swal.fire({
			title: 'คุณต้องการบันทึกตำแหน่งนี้ ?',
			text: "You want to save this location",
			icon: 'info',
			showCancelButton: true,
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
				'คุณบันทึกงานสำเร็จแล้ว',
				'You have successfully saved your work.',
				'success'
			  )
			}
		})
	});

	//ปุ่มกดสมัครงาน
	$('.oc-applying').on('click', function () {
		Swal.fire({
			title: 'คุณต้องการสมัครงานตำแหน่งนี้ ?',
			text: "You want to apply for this position",
			icon: 'info',
			showCancelButton: true,
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
				'คุณสมัครงานสำเร็จแล้ว',
				'You have applied for the job successfully.',
				'success'
			  )
			}
		})
	});
})

// <!--ตัดคำ-->
$(()=>{
	$(".attachments-ellipsis").dotdotdot({
		//กำหนดความสูงโดยหาร24ลงตัว ต่ำสุดคืด 24
		height: 48,
		fallbackToLetter: true,
		watch: true,
	});
});
