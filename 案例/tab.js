var that

class tab {
    constructor(id) {
        that=this
        //获取元素
        this.main = document.querySelector(id)
        // this.add = this.main.querySelector('.tabadd');
        // li的父元素
        // this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // // section 父元素
        // this.fsection = this.main.querySelector('.tabscon');
        this.lis=this.main.querySelectorAll('li')
        this.sections=document.querySelectorAll('section')
        this.init()

    }
    init() {
//存放所有绑定事件
        for (var i=0;i<this.lis.length;i++){
            this.lis[i].index=i
            this.lis[i].onclick=this.toggleTab 
        }

    }
    updateNode() {


    }
    toggleTab() {
        this.className='liactive';
        that.sections[this.index].className='conactive'  //toggletab事件调用者是li，不能用this.section，只能声明一个that的全局变量获取construactor里的参数

    }
    removeTab() {


    }
    addTab() {


    }

}

new tab('#tab')