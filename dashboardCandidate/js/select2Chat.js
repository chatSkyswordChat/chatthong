// https://select2.org/placeholders
$(function(){
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
    
    $('.select2-search__field , .select2-search--inline, .select2-container--default .select2-selection--single .select2-selection__rendered').css('width', '100%')
    $('.select2-container--default .select2-selection--single').css({'borderColor':'#ced4da','minHeight':'36px', 'display': 'flex', 'alignItems': 'center'})
    $('.select2-container--default .select2-selection--single .select2-selection__clear').css({'position':'relative', 'right':'15px'})
    $('.select2-container--default .select2-selection--single .select2-selection__arrow').css('top','5px')
})