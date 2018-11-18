var min = '(min-width:480px)';

if(window.matchMedia(min).matches){
    console.log('viewport 尺寸大于等于 400 像素')
}else{
    console.log('viewport 尺寸小于 400 像素')
}