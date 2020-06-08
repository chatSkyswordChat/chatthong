// blog
$(function () {

    var append = "";
    var img = [
      "blog-1.jpg",
      "blog-2.jpg",
      "blog-3.jpg",
      "blog-4.jpg",
      "blog-5.jpg",
      "blog-6.jpg",
    ];
    var head = [
      `Tourism/Airline`,
      `consectetur adipisicing`,
      `voluptatem quibusdam itaque`,
      `Lorem ipsum dolor sit amet`,
      `corporisofficia veniam voluptatem`,
      `quibusdam itaque distinctio`,
    ];
  
    for (let i = 0; i < 6; i++) {
      append += '<a href="blog-content.html" class="box-blog">';
      append += "<figure>";
      append += '<img src="images/' + img[i] + '">';
      append += "</figure>";
  
      append += '<div class="text-blog">';
      append += '<div class="triangle triangle-4"></div>';
      append += "<figcaption>";
      append += '<div class="blog-head-ellipsis">';
      append += "<h2>" + head[i] + "</h2>";
      append += "</div>";
  
      append += '<div class="blog-sub-ellipsis">';
      append += `<h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem corporis
                  officia veniam voluptatem quibusdam itaque distinctio, porro ut saepe quae
                  quod iusto enim cumque obcaecati, ullam sequi possimus labore mollitia.</h6>`;
      append += "</div>";
      append += "</figcaption>";
  
      append += '<div class="read-blog">';
      append += "<h6>read more</h6>";
      append += "</div>";
      append += "</div>";
      append += "</a>";
    }
    $(".gridContent").html(append);
  });
  
  //ส่วนของ blog
  $(function () {
    $(".blog-sub-ellipsis").dotdotdot({
      // รายละเอียด
      height: 72,
      fallbackToLetter: true,
      watch: true,
    });
    $(".blog-head-ellipsis").dotdotdot({
      // หัวข้อ
      height: 48,
      fallbackToLetter: true,
      watch: true,
    });
  
  });  