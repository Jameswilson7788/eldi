Player.prototype ={
    get lvl(){return 1+Math.floor(this.exp,.3)},
    exp:0,
    str:1,
    agi:1,
    dex:1,
    vit:1,
    punch:function(){
        this.exp ++;
    }
}

var player = new Player();

function render(){
        $('#lvl').text(player.lvl);
        $('#str').text(player.str);
        $('#agi').text(player.agi);
        $('#dex').text(player.dex);
        $('#vit').text(player.vit);
        $('#exp').text(player.exp);   
}
render();

$('#punch').click(function(){
    player.punch();
    render();
});

