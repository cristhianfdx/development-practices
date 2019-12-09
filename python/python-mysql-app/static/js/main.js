const btn_delete = document.querySelectorAll('.delete');

if(btn_delete){
    const btns = Array.from(btn_delete);

    btns.forEach(function(btn){
        btn.addEventListener('click', (evt)=>{
            if(! confirm('Are you sure you want to delete it?')){
                evt.preventDefault();
            }
        });
    })
}