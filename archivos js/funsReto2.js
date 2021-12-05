function traerinformacion(){
    $.ajax({
        url:"https://gfe5fe4e4a119d5-db202111151416.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });
}
function pintarRespuesta(items){
    
    let myTable ="<table>";
    for (i=0;i<items.legth;i++){
        mytable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].target+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="</tr>";
    } 
    myTable+="</table>";
    $("#resultado").append(myTable);
}