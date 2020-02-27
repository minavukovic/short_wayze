function get_image_origin() {
    var imgHTML, origin;
    origin = window.location.search.substr(1).split("=")[1];
    imgHTML = '<img id=map_image src="/images/' + origin + '_map.png">';
    console.log(origin);
    console.log(imgHTML);
    $('#map_img_container').html(imgHTML);
}
function get_image_end() {
    var imgHTML, origin, end, origin_name, origin_end;
    origin = window.location.search.substr(1).split("&")[0].split("=")[1];
    end = window.location.search.substr(1).split("&")[1].split("=")[1];
    imgHTML = '<img id=map_image src="/images/' + origin + '_' + end + '_map.png">';
    console.log(imgHTML);
    $('#map_img_container').html(imgHTML);

    $('#start_title').text('Origin: ' + $('#p_' + origin).text());
    $('#end_title').text('Destination: ' + $("#p_" + end).text());
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
    $('#start_title').text('Origin: ' + same_end.textContent);
    same_end.parentNode.removeChild(same_end);

}
function remove_repeated_nav() {
    var pathname = window.location.pathname;
    var nav_item = document.getElementById("nav_item_" + pathname);
    if (nav_item) {
        nav_item.parentNode.removeChild(nav_item);
    }
}
function get_building_plan() {
    var plan_div, building_plan;
    building_plan = window.location.search.substr(1).split("=")[1];
    building_plan = building_plan.replace(/%20/g, ' ');
    plan_div = document.getElementById("plan_" + building_plan);
    console.log(building_plan);
    console.log(plan_div);
    plan_div.style.display = "block";
}
remove_repeated_nav();