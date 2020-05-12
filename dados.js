/* 
    Author: Juliano G. da Costa
    Site: https://vetorart.com.br
    Github: https://github.com/julianogomesc
*/

function geraAssinatura(){

    var nome = document.getElementById("nome").value;
    var atuacao = document.getElementById("atuacao").value;
    var fone = document.getElementById("fone").value;

    if (nome == "" && atuacao == "" && fone == ""){
        alert("É preciso informar os dados do funcionário antes.");
    } else {
    
    document.write("<div style='width: 980px; margin: 0 auto;'>");

        var content = localStorage.getItem('tema');
        
        content = content.replace("[NOME]", nome);
        content = content.replace("[ATUACAO]", atuacao);
        content = content.replace("[FONE]", fone);
        
        var copy = "<br><br><textarea style='width: 100%; min-height: 350px;' rows='8'>"+content+"</textarea>"
        document.write("<br><br><br>");
        document.write(content);
        document.write(copy);
        
        document.write("</div>");

    
    //localStorage.clear();
}
};