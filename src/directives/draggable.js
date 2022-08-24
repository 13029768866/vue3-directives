const draggable = {
  mounted(el) {
    // 设置移动光标
    el.style.cursor = 'move';
    el.onmousedown = function (e)   {
      // 鼠标在选中容器中的位置
      let posX = e.pageX - el.offsetLeft;
      let posY = e.pageY - el.offsetTop;
      document.onmousemove =  function (e)  {
        // 移动实时改变位置
        let x = e.pageX - posX;
        let y = e.pageY - posY;
        let maxX = document.body.clientWidth - parseInt(window.getComputedStyle(el).width);
        let maxY = document.body.clientHeight - parseInt(window.getComputedStyle(el).height)
        // 边界判断
        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }
        el.style.left = x + 'px';
        el.style.top = y + 'px';


      }
      document.onmouseup = function () {
         document.onmousemove = document.onmouseup = null;
      }
    }
  }
}

export default draggable;