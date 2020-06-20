// ตำแหน่งงานว่าง
$(function () {
  var append = "";
  var namePosition = [
    `Architects, Surveyors, and Cartographers`,
    `Cartographers`,
    `Funeral Service Workers`,
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
    `Supervisors of Farming, Fishing, and Forestry Workers`,
  ];
  var subPosition = [
    `Cartographers`,
    `Funeral Service Workers`,
    `Personal Appearance Workers`,
    `Cartographers`,
    `Funeral Service Workers`,
    `Personal Appearance Workers`,
    `Cartographers`,
    `Funeral Service Workers`,
    `Personal Appearance Workers`,
    `Cartographers`,
    `Funeral Service Workers`,
    `Personal Appearance Workers`,
    `Cartographers`,
    `Funeral Service Workers`,
    `Personal Appearance Workers`,
  ];
  let u = 0;
  for (let i = 0; i < 4; i++) {
    append += '<article class="bgGridPosition">';
    for (let a = 0; a < 4; a++) {
      append += '<section class="card cardPosition">';
      append += "<div>";
      append +=
        `<button class="flexPosition" type="button" data-toggle="collapse" data-target="#collapse${u + 1}" aria-expanded="true" aria-controls="collapse${u + 1}">`;
      append += '<div class="namePosition">';
      append += `<h6>${namePosition[u]}</h6>`;
      append += "<p>9 ตำแหน่งที่เปิดรับ</p>";
      append += "</div>";

      append += "<div>";
      append += '<span><i class="fas fa-chevron-right"></i></span>';
      append += "</div>";
      append += "</button>";
      append += "</div>";

      append += `<div id="collapse${u + 1}" class="collapse" data-parent="#accordionExample">`;
      append += '<div class="card-body cardBodyPosition">';

      for (let b = 0; b < 3; b++) {
        append += '<section class="flexCol">';
        append += '<a href="javascript:void(0)" onclick="return Newpage();" class="inBodyPosition">';
        append += `<p>${subPosition[u]}</p>`;
        append += "<p>900 อัตรา</p>";
        append += "</a>";
        append += "</section>";
      }
      append += "</div>";
      append += "</div>";
      append += "</section>";
      u += 1;
    }
    append += "</article>";
  }
  $(".gridPosition").html(append);
});
