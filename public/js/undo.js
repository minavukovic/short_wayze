function add_undo() {
    var btnHTML;

    if (window.location.search !== '' && window.location.pathname.indexOf('undo') <= -1) {
        btnHTML = '<button type="button" class="btn btn-dark"' +
            'onclick="window.location.href=\'' +
            window.location.pathname + '/undo' + window.location.search + '\'" ' +
            'id="undo_btn">Undo</button>';
        console.log(btnHTML);
        $("#undo_cntr").html(btnHTML);
    }
}