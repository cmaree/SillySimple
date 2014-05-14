function setURL(url){
	$("#result").attr('href', url);	
	$("#result").html(url);
	$("#urlBox").val(url);	
//	$('#urlBox').focus();
}

function clear(){
	setURL('');
	$("#urlBox").val('');
	$('#urlBox').focus();
}

function genericClick(url){
	clear();	
	setURL(url);
}


/* Init functions */
setURL( $("#urlBox").val());
$("#autoPanel, #lifePanel, #lrePanel, #eduPanel").hide();
		
$("#urlBox").on('keyup',function(){
	var url =  $("#urlBox").val();			
		setURL(url);
});

$("#auto, #life, #home, #lre, #edu").on('click', function(e){
	clear();
	$("#auto, #life, #home, #lre, #edu").removeClass('buttonSelected');
	$("#autoPanel, #lifePanel, #homePanel, #lrePanel, #eduPanel").hide();
	$("#"+this.id).addClass('buttonSelected');
	$("#"+this.id+"Panel").show();
});

$("#clear").click(function(){
	clear();
});		


/* AUTO apps */
$("#IAUprod").click(function(){	genericClick('https://www.lmbinsurance.com/auto/?force=');});	
$("#IAUqa").click(function(){ genericClick('https://iauqa1.lmbinsurance.com/auto/?force=');});	
$("#IAUdev").click(function(){genericClick('https://iauqa2.lmbinsurance.com/auto/?force=');});	

/* LIFE apps */
$("#LIFEprod").click(function(){genericClick('https://www.lmbinsurance.com/life/?force=');});			
$("#LIFEqa").click(function(){genericClick('https://iauqa1.lmbinsurance.com/life/?force=');});	
$("#LIFEdev").click(function(){genericClick('https://iauqa2.lmbinsurance.com/life/?force=');});

/* EDU apps */
$("#EDUprod").click(function(){	genericClick('https://www.classesusa.com/schools/?force=');});	
$("#EDUqa").click(function(){ genericClick('');});	
$("#EDUdev").click(function(){genericClick('');});	

/* LENDING apps */
$("#LENDprod").click(function(){genericClick('https://www.lmbinsurance.com/life/?force=');});			
$("#LENDqa").click(function(){genericClick('https://iauqa1.lmbinsurance.com/life/?force=');});	
$("#LENDdev").click(function(){genericClick('https://iauqa2.lmbinsurance.com/life/?force=');});
	
$('#urlBox').autoComplete({data: ['https://www.lmbinsurance.com/auto/?force=', 'https://www.lmbinsurance.com/life/?force=', 'https://iauqa1.lmbinsurance.com/auto/?force=', 'https://iauqa1.lmbinsurance.com/life/?force=', 'https://iauqa2.lmbinsurance.com/auto/?force=', 'https://iauqa2.lmbinsurance.com/life/?force=', 'https://www.lowermybills.com/lending/home-refinance/?force=', 'https://iauqa1.lowermybills.com/lending/home-refinance/?force=', 'https://iauqa6.lowermybills.com/lending/home-refinance/?force=', 'https://www.classesusa.com/schools/?force=' ], maxOptions: 5, scrollable: true});