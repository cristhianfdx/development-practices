
$(document).ready(()=>{

    const socket = io();

    //DOM elements
    const $msgForm = $('#msg-form');
    const $msgBox = $('#message');
    const $chat = $('#chat');
    //DOM elements nickname-form
    const $nickForm = $('#nick-form');
    const $nickError = $('#nick-error');
    const $nickname = $('#nickname');

    const $usernames = $('#usernames');
    
    $nickForm.submit(e=>{
        e.preventDefault();
        socket.emit('new:user', $nickname.val(), data=>{
            if(data){
                $('#nickWrap').hide();
                $('#content').show();
            }else{
                $nickError.html(`
                <div class="alert alert-danger">
                    That username already exists
                </div>
                `);
            }
        });
        $nickname.val('');
    });

    $msgForm.submit(e=>{
        e.preventDefault();
        socket.emit('send:message', $msgBox.val());
        $msgBox.val('');        
    });

    socket.on('new:message', data=>{
        $chat.append(`<b>${data.nick}</b>: ${data.msg} <br/>`);
    });

    socket.on('usernames', data=>{
        let html = '';

        for(let i = 0; i< data.length; i++){
            html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`
        }

        $usernames.html(html);
    });

   

});




