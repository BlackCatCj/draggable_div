var mydiv = document.createElement('div')
mydiv.className = 'demo'
document.body.appendChild(mydiv)

var flag = false
var lastY
var lastX



mydiv.onmousedown = function (x) {
    lastX = x.clientX
    lastY = x.clientY
    flag = true
}
document.onmouseup = function () {
    flag = false
}
// 如果是监听document.body，那么css样式中的body的大小会影响移动的最大范围
// 而监听doucument（整个文档，不管有没有body，即移动不受范围、鼠标移动速度限制了）
document.onmousemove = function (x) {
    if (flag === true) {
        var deltaX = x.clientX - lastX
        var deltaY = x.clientY - lastY

        // 防止因style.top只能读取内联样式造成的bug
        var top = parseInt(mydiv.style.top) || 0
        var left = parseInt(mydiv.style.left) || 0

        // 为了防止把div移出网页，超出网页边界则强制归零位置，让div无法超过网页边界
        var resultY = top + deltaY
        var resultX = left + deltaX
        if (resultY < 0) {
            resultY = 0
        }
        if (resultX < 0) {
            resultX = 0
        }

        // mydiv的style的top属性
        mydiv.style.top = resultY + 'px'
        mydiv.style.left = resultX + 'px'
        //style.top这种只能取内联样式中的值，不能取css文件中的值 
        lastX = x.clientX
        lastY = x.clientY

    }



}










