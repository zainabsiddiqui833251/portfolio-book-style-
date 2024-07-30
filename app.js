//loading page
window.addEventListener('load',
    function(){
        document.getElementById('maincontent').style.display = 'none';
this.setTimeout(function(){
    document.getElementById('loading').style.display = 'none';

    document.getElementById('maincontent').style.display = 'block';
},5000)
    }
)