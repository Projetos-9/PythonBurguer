// document.getElementById('btnlogin').addEventListener('click',()=>{
//     alert('loucura total');
   
// });



    function login(){
        var user = document.getElementById("username");
        var pass = document.getElementById("pass");
    
        //console.log(username.value+pass.value);
        window.close()
        if(user.value == "admin" && pass.value == "admin"){
            localStorage.setItem("acesso", true);
            alert("Usuário autenticado");           
            window.close()
        }else{
            alert("Usuário ou senha invalidos!")
        }
    }




  function SolicitarCadastro(){
    //alert('teste')
    
    //location.assign('../view/index.html');
    //window.location.href = "C:\Users\Gio\Documents\Python\prog\PythonBurguer\view\index.html"
    //Window.assign('file://' + __dirname + '/view/index.html');
    //mainWindow.loadURL('./index.html');
     //window.location.href = "./index.html" 
     document.location.replace("C:\Users\Gio\Documents\Python\prog\PythonBurguer\view\index.html")
    }



