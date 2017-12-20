// javascript Document
// 登录
    function check(){
        var username=$("input[type=text]");
        var pwd=$("input[type=password]");
         var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;//8到16位数字与字母组合
         var nameReg = /^1[34578]\d{9}$/; //用户名
        var flag=true;
        $(".login_popup_con form .note").html("");
        if(!nameReg.test(username.val())){
            username.parent().next(".note").css("marginBottom","5px").css("display","block");
            username.parent().next(".note").html("&times&nbsp请输入用户名或者手机号");
            flag=false;
        }if(!pwdReg.test(pwd.val())){
            pwd.parent().next(".note").css("marginBottom","5px").css("display","block");;
            pwd.parent().next(".note").html("&times&nbsp密码可以使用8-16位英文数字");
            flag=false;
        }
        return flag;
    }

    // 注册
        // 验证码
    var code;
    function createCode() {
        code = "";
        var codeLength = 4; //验证码的长度
        var checkCode = document.getElementById("checkCode");
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
        for (var i = 0; i < codeLength; i++) 
        {
            var charNum = Math.floor(Math.random() * 52);
            code += codeChars[charNum];
        }
        if (checkCode) 
        {
            checkCode.className = "code";
            checkCode.innerHTML = code;
        }
    }
    function validateCode(){
        var number=$("input[name=number]");
        var nickname=$("input[name=nickname]");
        var pwd_1=$("input[name=pwd_1]");
        var pwd_2=$("input[name=pwd_2]");
        var inputCode = document.getElementById("inputCode").value;//验证码
        var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;//8到16位数字与字母组合
        var flag=true;
        $(".login_popup_con form .note").html("");
        if(number.val()=="" || !pwdReg.test(number.val())){
            number.parent().next(".note").css({"marginBottom":"0","marginTop":"-6px","display":"block"});
            number.parent().next(".note").html("&times&nbsp账号请使用8-16位英文数字");
             return false;
        }
        if(nickname.val()==""){
            nickname.parent().next(".note").css({"marginBottom":"0","marginTop":"-6px","display":"block"});
            nickname.parent().next(".note").html("&times&nbsp输入昵称");
            return false;
        }
        if(pwd_1.val()=="" || !pwdReg.test(pwd_1.val())){
            pwd_1.parent().next(".note").css({"marginBottom":"0","marginTop":"-6px","display":"block"});
            pwd_1.parent().next(".note").html("&times&nbsp密码请使用8-16位英文数字");
             return false;
        }
        if(pwd_2.val()=="" || pwd_2.val()!=pwd_1.val()){
            pwd_2.parent().next(".note").css({"marginBottom":"0","marginTop":"-6px","display":"block"});
            pwd_2.parent().next(".note").html("&times&nbsp确认密码不正确");
             return false;
        }
        if(inputCode== ""){
               $("#hint").css({"marginBottom":"0","marginTop":"-6px","display":"block"});
               $("#hint").html("&times&nbsp验证码不正确");
                return false;
        }if(inputCode.toUpperCase() != code.toUpperCase()){
                $("#hint").css({"marginBottom":"0","marginTop":"-6px","display":"block"});
                $("#hint").html("&times&nbsp验证码不正确");
                return false;
        }
        return true;
    }

//字数统计
window.onload=function(){
var require=document.getElementById("word_count");
    var require_em=document.getElementById("length");
    require.onkeyup=function(){
      var len=document.getElementById("word_count").value.length;
      require_em.innerHTML="你输入了"+len+"个字符";
          if(document.getElementById("word_count").value.length>=500){
              require_em.innerHTML="最大字符为500";
          }
     }
   } 

