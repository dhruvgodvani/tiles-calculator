var tiles_height_var = "0"
var tiles_width_var = "0"

var room_height_var = "0"
var room_width_var = "0"

var ds_total_tiles_var=0
var ds_total_price_var=0

var wds_total_tiles_var=0
var wds_total_price_var=0

var tiles_height_dd_var ="mm"
var tiles_width_dd_var = "mm"
var room_height_dd_var = "mm"
var room_width_dd_var = "mm"



console.log("dhruv")
function submit_value(){
    console.log("submit call")
    tiles_height_var = document.getElementById("tiles_height").value
    tiles_width_var = document.getElementById("tiles_width").value
    room_height_var = document.getElementById("room_height").value
    room_width_var = document.getElementById("room_width").value
    one_tile_price_var = document.getElementById("one_tile_price").value 



    tiles_height_dd_var = document.getElementById("tiles_height_dd").value
    tiles_width_dd_var = document.getElementById("tiles_width_dd").value
    room_height_dd_var = document.getElementById("room_height_dd").value
    room_width_dd_var = document.getElementById("room_width_dd").value


    //tiles heigth dropdown value change
    if(tiles_height_dd_var == "mm"){
        tiles_height_var = tiles_height_var
    }
    else if(tiles_height_dd_var == "cm")
    {
        tiles_height_var = tiles_height_var * 10;
    }
    else if(tiles_height_dd_var == "feet")
    {
        tiles_height_var = tiles_height_var * 304.8;
    }
    else if(tiles_height_dd_var == "inch")
    {
        tiles_height_var = tiles_height_var * 25.4;
    }


    //tiles width dropdown value change
    if(tiles_width_dd_var == "mm"){
        tiles_width_var = tiles_width_var
    }
    else if(tiles_width_dd_var == "cm")
    {
        tiles_width_var = tiles_width_var * 10;
    }
    else if(tiles_width_dd_var == "feet")
    {
        tiles_width_var = tiles_width_var * 304.8;
    }
    else if(tiles_width_dd_var == "inch")
    {
        tiles_width_var = tiles_width_var * 25.4;
    }


    //room height dropdown value change
    if(room_height_dd_var == "mm"){
        room_height_var = room_height_var
    }
    else if(room_height_dd_var == "cm")
    {
        room_height_var = room_height_var * 10;
    }
    else if(room_height_dd_var == "feet")
    {
        room_height_var = room_height_var * 304.8;
    }
    else if(room_height_dd_var == "inch")
    {
        room_height_var = room_height_var * 25.4;
    }

    //room width dropdown value change
    if(room_width_dd_var == "mm"){
        room_width_var = room_width_var
    }
    else if(room_width_dd_var == "cm")
    {
        room_width_var = room_width_var * 10;
    }
    else if(room_width_dd_var == "feet")
    {
        room_width_var = room_width_var * 304.8;
    }
    else if(room_width_dd_var == "inch")
    {
        room_width_var = room_width_var * 25.4;
    }



    // withdesign tiles and price caluctaion
    th_count_var = Math.ceil(parseFloat(room_height_var) / parseFloat(tiles_height_var))
    tw_count_var = Math.ceil(parseFloat(room_width_var) / parseFloat(tiles_width_var))
    // console.log(th_count_var,tw_count_var)
    ds_total_tiles_var = th_count_var * tw_count_var 
    document.getElementById("ds_total_tiles").value = Math.ceil(ds_total_tiles_var)
    ds_total_price_var = ds_total_tiles_var * one_tile_price_var;
    document.getElementById("ds_total_price").value = Math.round(ds_total_price_var)


    // withoutdesign tiles and price calculation
    wds_total_tiles_var = (parseFloat(room_height_var) * parseFloat(room_width_var)) / (parseFloat(tiles_height_var)*parseFloat(tiles_width_var))
    document.getElementById("wds_total_tiles").value = Math.ceil(wds_total_tiles_var)
    wds_total_price_var = Math.ceil(wds_total_tiles_var) * one_tile_price_var;
    document.getElementById("wds_total_price").value = Math.round(wds_total_price_var)

    
}

function clear_function(){
    console.log("clear call")
    document.getElementById("tiles_height").value = "";
    document.getElementById("tiles_width").value = "";
    document.getElementById("room_height").value = "";
    document.getElementById("room_width").value = "";
    document.getElementById("one_tile_price").value = "";
    document.getElementById("ds_total_tiles").value = "";
    document.getElementById("ds_total_price").value = "";
    document.getElementById("wds_total_tiles").value = "";
    document.getElementById("wds_total_price").value = "";

    document.getElementById("tiles_height_dd").value = "mm";
    document.getElementById("tiles_width_dd").value = "mm"
    document.getElementById("room_height_dd").value = "mm"
    document.getElementById("room_width_dd").value = "mm"

    document.getElementById("th_validation_tag").style.visibility = "hidden";
    document.getElementById("tw_validation_tag").style.visibility = "hidden";
    document.getElementById("rh_validation_tag").style.visibility = "hidden";
    document.getElementById("rw_validation_tag").style.visibility = "hidden";
    document.getElementById("o_t_p_validation_tag").style.visibility = "hidden";
}



function validiate(evt) {
    var char = evt.keyCode
    if(char > 31 && (char < 46 || char > 57))
    {
        return false
    }
    return true
}
