$(function () {
    $(window).on("resize", function () {
        // 获取当前窗口宽度
        let clientW = $(window).width()

        // 判断是否为小设备
        let charge = clientW > 800

        // 获取所有的item
        let $Iitems = $("#cg_banner .item")

        // 分别对大小设备进行处理
        $Iitems.each(function (index, item) {
            let imgUrl = charge ? $(item).data("sm-img") : $(item).data("lg-img")
            $(item).css({
                backgroundImage: 'url("' + imgUrl + '")',
            })
            if (charge) {
                $(item).empty()

            } else {
                let img = '<img src="' + imgUrl + '" alt="" >'
                $(item).empty().append(img)
            }
        })


    })

    $(window).trigger("resize")

    // 提示框实例
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
})