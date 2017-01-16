function drag(target, event) {
    event.dataTransfer.setData("text", target.id);
}
function drop(target, event, infraID) {
    navId = event.dataTransfer.getData("text");
    target.appendChild(document.getElementById(navId));
    event.preventDefault();

    if(infraID != null){
        writeSchema("infra", infraID);
    }else{
        deleteItem("infra");
    }

}


function writeSchema(type, infraID) {

    // debugger
    var selectValue = $('#selectServerVersion').val();
    console.warn(selectValue);
    // var id = selectValue.split("::")[0];
    // console.warn(id);
    // var superId = selectValue.split("::")[1];
    // console.warn(superId);

    var uri = "ajax/" + type + "/" + selectValue + "/" + infraID + ".html";
    console.info(uri);

    $.ajax({
        url: uri,
        success: function (data) {
            $('#result').html(data);
        }
    });
}

function deleteItem(type){
    var selectValue = $('#selectServerVersion').val();
    console.warn(selectValue);
    var uri = "ajax/" + type + "/free/" +  selectValue + ".html";
    console.info(uri);

    $.ajax({
        url: uri,
        success: function (data) {
            $('#result').html(data);
        }
    });
}