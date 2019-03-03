var url = 'http://' + document.domain + ':' + location.port;
var socket = io.connect(url);

function getCurrentTime(){
    return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

$(document).ready(function(){

    socket.on( 'add_message_to_header', function( data ){
    	$("#header-messages").prepend('<a href="/chat/'+data.student_id+'"><div class="media"><div class="media-left"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="'+url+'/static/app-assets/images/portrait/small/avatar-s-19.png" alt="avatar"></span></div><div class="media-body"><h6 class="media-heading">'+data.name+'</h6><p class="notification-text font-small-3 text-muted">'+data.message+'</p><small><time class="media-meta text-muted">'+getCurrentTime()+'</time></small></div></div></a>');
    });

});