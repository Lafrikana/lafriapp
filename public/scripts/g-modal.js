$(function(){
    console.log("something here")
    for(var i = 0; i < $('.item-effects').length; i++){
        $(".item-effects").eq(i).on('click', function(){
            var access = $(this).siblings('img');
            var t = access.attr("src");
            var date = access.attr('data-date')
            var description = access.attr('data-description')
            let build = `<div class="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="w-full rounded-t-lg img-responsive" src="${t}"/>
                <div class="p-5">
                    <p class="mb-1 text-lg font-normal text-gray-700">${date}</p>
                    <p class="mb-3 text-lg font-bold text-gray-900">${description}</p>
                </div>
            </div>`
            $(".modal-body").html(build);
            $("#galleryModal").modal();
        });
    }
    for(var i = 0; i < $('video').length; i++){
        $("video").eq(i).on('click', function(){
            var v = $(this).children("source");
            var t = v.attr("src");
            var date = v.attr('data-date')
            var description = v.attr('data-description')
            console.log(t)
            console.log(date)
            console.log(description)
            let build = `<div class="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <video class='model-vid' controls><source src='${t}' type='video/mp4'></source></video>
                <div class="p-5">
                    <p class="mb-1 text-lg font-normal text-gray-700">${date}</p>
                    <p class="mb-3 text-lg font-bold text-gray-900">${description}</p>
                </div>
            </div>`
            $(".modal-body").html(build);
            $("#galleryModal").modal();
        });
    }
});