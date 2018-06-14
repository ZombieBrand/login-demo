! function () {
    var iconLoign = document.querySelector('.icon-login')
    var filp = document.querySelector('.flip-modal')
    var modal = document.querySelectorAll('.modal')
    var login = document.querySelectorAll('.tabs .login')
    var register = document.querySelectorAll('.tabs .register')
    var close = document.querySelectorAll('.close')
    var username = document.querySelector('input[name=username]')
    console.log(username)
    /* 点击icon-login弹出filp-modal */
    iconLoign.addEventListener('click', function (e) {
        e.stopPropagation()
        if (filp.classList.contains('active') !== true) {
            filp.classList.add('active')
        }
    })
    /* 点击登录和注册旋转filp-modal */
    login.forEach(function (element, index) {
        console.log(element)
        element.addEventListener('click', function (e) {
            filp.classList.remove('register')
            filp.classList.add('login')
        })
    })
    register.forEach(function (element, index) {
        console.log(element)
        element.addEventListener('click', function (e) {
            filp.classList.remove('login')
            filp.classList.add('register')
        })
    })
    /* 点击x关闭login*/
    close.forEach(function(element,index){
        element.addEventListener('click', function (e) {
            filp.classList.remove('active')
        })
    })
    /* 点击空白位置关闭login */
    document.addEventListener('click', function (e) {
        filp.classList.remove('active')
    })
    modal.forEach(function (element, index) {
        element.addEventListener('click', function (e) {
            e.stopPropagation()
        })
    })
    /* 提交校验 */
    var loginform = document.querySelector('.modal-login form')
    var registerform = document.querySelector('.modal-register form')
    console.log(registerform)
    var error = document.querySelectorAll('.error-text')
    var ckusername = /^\w{3,8}$/.test(document.querySelector('input[name=username]').value)
    var ckpassword = /^\w{6,10}$/.test(document.querySelector('input[name=password]').value)
    /* 登录提交校验证 */
     loginform.addEventListener('submit',function(e){
         e.preventDefault()
         if((ckusername&&ckpassword) === false){
            error[0].classList.add('active')
            error[0].innerText = '用户名密码错误'
            return false
         }else if(!ckpassword){
            error[0].classList.add('active')
            error[0].innerText = '密码需输入6-10个字符,包括字母数字下划线'
            return false
         }else if(!ckusername){
            error[0].classList.add('active')
            error[0].innerText = '用户名需输入3-8个字符,包括字母数字下划线'
            return false
         }
         this.submit()
     })
     /* 注册提交校验证 */
     registerform.addEventListener('submit',function(e){
         e.preventDefault()
          if(!/^\w{3,8}$/.test(document.querySelectorAll('input[name=username]')[1].value)){
            error[1].classList.add('active')
            error[1].innerText = '用户名需输入3-8个字符,包括字母数字下划线'
            return false
         }else if(/^cyz$/.test(document.querySelectorAll('input[name=username]')[1].value)){
            error[1].classList.add('active')
            error[1].innerText = '用户名存在'
         }else if(!/^\w{6,10}$/.test(document.querySelectorAll('input[name=password]')[1].value)){
            error[1].classList.add('active')
            error[1].innerText = '密码需输入6-10个字符,包括字母数字下划线'
         }else if((document.querySelectorAll('input[name=password]')[1].value) !==(document.querySelector('input[name=repassword]').value)){
            error[1].classList.add('active')
            error[1].innerText = '两次密码输入不一致'
         }
     })
}()