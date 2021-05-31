$("#c1").click(function() {
$("#cont1").hide(1500);
});

$("#c2").click(function() {
$("#cont1").show("slow");
});

$("#c1b").click(function() {
$("#cont1").toggle(1500);
},function(){ 
$("#cont1").toggle(1500);
});

$("#c3").click(function() {
$("#cont1").animate({fontSize:'2.4em',width:400,padding:24}, 2500);
});

$("#c4").click(function() {
$("#cont1").fadeToggle();
});

$("#c5").click(function() {
$("#cont1").fadeIn();
});

$("#c6").click(function(){
	
		$("#cont1").animate({opacity: "0.1", left: "+=400",fontSize:'1em',width: "200"}, 1200)
		.animate({opacity: "0.4", top: "+=160", height: "20", width: "80",fontSize:'0.5em'}, "slow")
		.animate({opacity: "1", left: "0", width: "260"}, "slow")
		.animate({top: "0",width: "260",fontSize:'1.2em'}, "fast")
		.slideUp()
		.slideDown(1800)
		return false;
	
	});

$("#c7").click(function() {
$("#cont1").css({'border':'4px solid #b7e5ff','color':'#cc3333','font-weight':'bold','background-color':'#ffffff'});
});

$("#c8").click(function() {
$("#noticias").load("index2.html");
});

$("#c9").click(function() {
$("#noticias").hide(1500);
});

$("#c10").click(function() {
var version=$().jquery;
alert("Estas usando la versiÃ³n: " +version+" de JQuery");
});

