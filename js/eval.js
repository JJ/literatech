var chromosomes=[];
var initial = '1111000011110000';
for ( var i = 0; i < 10; i++ ) {
    var this_one = initial;
    for ( var j = 0; j < 10; j ++ ) {
	this_one = mutate(this_one);
    }
    chromosomes.push( this_one );
    $('#gen1').append("<p>"+this_one+"</p>");
}

$("#eval").submit(function(){
    for ( var j in chromosomes) {
	$('#gen2').append("<p>"+chromosomes[j]+"->"+max_ones(chromosomes[j])+"</p>");
    }
    return false;
});