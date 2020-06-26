// document.getElementById('btnlogin').addEventListener('click',()=>{
//     alert('loucura total');
   
// });


function login(){
    var user = document.getElementById('username');
    var pass = document.getElementById('pass');
    console.log(user+' '+pass)
    if(user == 'admin' && pass == 'admin'){
        window.location = __dirname +'index.html'
    }else{
        alert('BURROOO')
    }
}



function SolicitarCadastro(){
    window.location = 
}

