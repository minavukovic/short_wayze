function get_image_origin() {
    var imgHTML, origin;
    origin = window.location.search.substr(1).split("=")[1];
    imgHTML = '<img id=map_image src="/images/' + origin + '_map.png">'
    $('#map_img_container').html(imgHTML);
}
function get_image_end() {
    var img = document.getElementById("map_image");
    var origin = window.location.search.substr(1).split("?")[0].split("=")[1];
    var end = window.location.search.substr(1).split("?")[1].split("=")[1];
    img.src = "/images/" + origin + "_" + end + "_map.png";
}
function add_start_path() {
    var end_links = document.getElementsByClassName("end_links");
    var origin = window.location.search.substr(1).split("=")[1];
    var prev_link, new_link;
    for(var i = 0; i < end_links.length; i++){
        prev_link = end_links[i].href;
        prev_link = prev_link.split("?");
        new_link = prev_link[0] + "?origin=" + origin + "&" + prev_link[1];
        end_links[i].href = new_link;
    }
}
function remove_start() {
    var origin = window.location.search.substr(1).split("=")[1];
    var same_end = document.getElementById("end_" + origin);
    same_end.parentNode.removeChild(same_end);
}
function remove_repeated_nav() {
    console.log('WASSUP');
    var pathname = window.location.pathname;
    var nav_item = document.getElementById("nav_item_" + pathname);
    console.log(nav_item);
    if (nav_item != null) {
        console.log('hi');
    }
    if (nav_item) {
        console.log('removing');
        nav_item.parentNode.removeChild(nav_item);
    }
}
remove_repeated_nav();