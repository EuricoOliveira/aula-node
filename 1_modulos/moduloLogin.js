let usuarios = require("./usuarios");

function logar(email, senha){
    let podeLogar = false;
    usuarios.forEach((usuario) =>{
        
        if(usuario.email === email){
            if(usuario.senha === senha){
                podeLogar = true;
            }
        }
        
    })
    if (podeLogar){
        return "Logou!"
    } else {
        return "Não foi autorizado logar"
    }
}


module.exports = logar;