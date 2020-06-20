// blog
$(function () {

    var append = "";

    let blogs = [
        { img: 'blog-1.jpg', head: 'Tourism/Airline', linked: 'blog/blog-content.html' },
        { img: 'blog-2.jpg', head: 'consectetur adipisicing', linked: 'blog/blog-content.html' },
        { img: 'blog-3.jpg', head: 'voluptatem quibusdam itaque', linked: 'blog/blog-content.html' },
        { img: 'blog-4.jpg', head: 'corporisofficia veniam voluptatem', linked: 'blog/blog-content.html' },
        { img: 'blog-5.jpg', head: 'quibusdam itaque distinctio', linked: 'blog/blog-content.html' },
        { img: 'blog-6.jpg', head: 'Lorem ipsum dolor sit amet', linked: 'blog/blog-content.html' },
    ]

    blogs.forEach((blog) => {
        append += `<a href="${blog.linked}" class="box-blog">`;
        append += "<figure>";
        append += `<img src="asset/images/${blog.img}">`;
        append += "</figure>";

        append += '<div class="text-blog">';
        append += '<div class="triangle triangle-4"></div>';
        append += "<figcaption>";
        append += '<div class="blog-head-ellipsis">';
        append += `<h2>${blog.head}</h2>`;
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
    })

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