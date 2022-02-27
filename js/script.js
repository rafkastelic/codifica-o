function mostrarPopup(){
    window.alert("Bem vindos à Games Mania!")
}

$(document).ready(function(){

    $("#barras").click(function(){
        if($("#menu").hasClass("#menu-ativo")){
            $("menu").removeClass("#menu-ativo")
        }else{
            $("#menu").addClass("menu-ativo")       
        }
    })
})