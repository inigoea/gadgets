/**FileExplorer Gadget Actions**/
/** Author inigo.elijalde@bbva.com 28/03/2017 **/

function fileAction_html(fileName , filePath){
	var win = window.open(filePath, '_blank');
	if (win) {
		win.focus();
	} else {
		alert('Please allow popups for this website');
	}
};

function fileAction_google(fileName , filePath){
	var win = window.open(filePath, '_blank');
	if (win) {
		win.focus();
	} else {
		alert('Please allow popups for this website');
	}
};

function fileAction_zip(fileName , filePath){
	var win = window.open(filePath, '_blank');
	if (win) {
		win.focus();
	} else {
		alert('Please allow popups for this website');
	}
};

function fileAction_txt(fileName , filePath){
	var _html ='<iframe src="'+ filePath +
	'/preview" style="width:880px; height:525px;" frameborder="0"></iframe>';
	showModal(fileName, _html, filePath);	
};

function fileAction_calendar(fileName , filePath){
	var _html = '<iframe id="iframe_calendar_modal" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;hl=es&amp;bgcolor=%23ffffff&amp;'+
	'src=' + filePath + '&amp;color=%230F4B38&amp;ctz=Europe%2FMadrid"'+
	' style="border-width:0" width="880" height="525" frameborder="0" scrolling="no"></iframe>';
	showModal(fileName, _html, "https://calendar.google.com/calendar/embed?src="+filePath);
	
};

function fileAction_ppt(fileName , filePath){
	var _html = '<iframe src="' + filePath + '/embed?start=false&loop=false"'+
	' frameborder="0" width="880" height="525" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
	showModal(fileName, _html, filePath);
};

function fileAction_pdf(fileName , filePath){
	var _html ='<iframe src="' + filePath +
	'/preview?usp=drivesdk" style="width:880px; height:525px;" frameborder="0"></iframe>';
	showModal(fileName, _html, filePath);	
};

function fileAction_doc(fileName, filePath){
	var _html ='<iframe src="' + filePath +
	'?rm=minimal" style="width:880px; height:525px;" frameborder="0"></iframe>';
	showModal(fileName, _html, filePath);
}

function fileAction_xls(fileName, filePath){
	var _html ='<iframe src="' + filePath +
	'?rm=minimal" style="width:880px; height:525px;" frameborder="0"></iframe>';
	showModal(fileName, _html, filePath);
}

function fileAction_avi(fileName, filePath){
	var _html ='<iframe src="' + filePath + 
	'/preview" style="width:880px; height:525px;" frameborder="0"></iframe>';
	showModal(fileName, _html, filePath);	
}

function showModal(fileName, _html, filePath){
	$("#modal-button-url").click(function(){
		fileAction_html(fileName, filePath); 
	});
	$("#modal-body").html(_html);
	$("#modal-title").text(fileName);
	$("#fileExplorerModal1").modal('show');
};
