$.ajax({
    url:'/getUser',
    data:{
        t:Math.random(),
    }
}).then((res)=>{
    let arr = res;
    for(var i=0;i<arr.length;i++){
        $(`<li class="swiper-slide"><a href="${arr[i].href}"><img src="img/home_recommend_live_app_${arr[i].src}.jpg" alt=""></a></li>`).appendTo('.banner ul');
    }
},(err)=>{
    alert('失败')
});