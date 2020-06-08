$(function () {
  var append = "";
  var headCareer = [`ตามสาขาอาชีพ`, `Instance`, `Talent`, `Hilight`];
  var subCareer = [
    `Architects, Surveyors, and Cartographers`,
    `Art and Design Workers`,
    `Entertainers and Performers, Sports and Related Workers`,
    `Cooks and Food Preparation Workers`,
    `Life, Physical, and Social Science Technicians`,
    `Supervisors of Farming, Fishing, and Forestry Workers`,
    `Other Construction and Related Workers`,
    `Extraction Workers`,
    `Architects, Surveyors, and Cartographers`,
    `Life, Physical, and Social Science Technicians`,
    `Supervisors of Farming, Fishing, and Forestry Workers`,
    `Entertainers and Performers, Sports and Related Workers`,
    `Cooks and Food Preparation Workers`,
    `Life, Physical, and Social Science Technicians`,
    `Supervisors of Farming, Fishing, and Forestry Workers`,
    `Other Construction and Related Workers`,
  ];
  let careerlList = 0;
  for (let career = 0; career < 4; career++) {
    append += '<div class="headCareerWork">';
    append += `<h2>${headCareer[career]}</h2>`;
    append += '<article class="bgGridJob">';
    for (let career2 = 0; career2 < 4; career2++) {
      append += '<a href="javascript:void(0)" onclick="return Newpage();" class="flexJobCareer">';
      append += '<div class="jobCareerWork">';
      append += `<h6>${subCareer[careerlList++]}</h6>`;
      append += "<p>9 ตำแหน่งที่เปิดรับ</p>";
      append += "</div>";

      append += "<div>";
      append += '<span><i class="fas fa-chevron-right"></i></span>';
      append += "</div>";
      append += "</a>";
    }
    append += "</article>";
    append += "</div>";
  }
  $(".gridJob").html(append);
});
