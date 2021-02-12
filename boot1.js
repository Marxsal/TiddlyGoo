<script>
//Yandex metric counter is located $:/boot/Yandex_Metrika_Counter.js  

var HEEGreadyState="onload";
var corsmax=0;
var corscurrent=0;

function ContactFormSubmit(){
	var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,14}$/i;
	var myMail = document.querySelector('.userOO_form').value;
	var valid = re.test(myMail);

	document.querySelector('[aria-label^="name"]').value=document.querySelector('.userFF_form').value;
	document.querySelector('[aria-label^="telephone"]').value=document.querySelector('.userII_form').value;
	document.querySelector('[aria-label^="email"]').value=document.querySelector('.userOO_form').value;
	document.querySelector('[aria-label^="client_comments"]').value=document.querySelector('.userCC_form').value;
	document.querySelector('[aria-label^="order_number"]').value="Z_Запрос из контактной формы";
	document.querySelector('[aria-label^="link_for_your_order"]').value="https:\\\\heeg.ru";

	if (document.querySelector('.userFF_form').value === ""){ $tw.modal.display("$:/_alert/noname"); return;}
	if (document.querySelector('.userII_form').value === ""){$tw.modal.display("$:/_alert/notelephone"); return;}
	if (document.querySelector('.userOO_form').value=="") {document.querySelector('[aria-label^="email"]').value=$tw.wiki.renderTiddler("text/plain","$:/constant/_nomail");}
	if (valid || document.querySelector('.userOO_form').value=="") {} else{ $tw.modal.display("$:/_alert/noemail"); return;}

	document.querySelector('[name="rsubmit"]').click();
	$tw.modal.display("$:/_alert/form_send");
	document.querySelector('[target="my_iframe"]').reset();
};


function isLocalStorageAvailable() {
	var test2 = 'test2';
	try {
		localStorage.setItem(test2, test2);
		return true;
	} catch(e) {
		return false;
	}
};


function StaticCut(){
	if (isLocalStorageAvailable()) { 
		var dataSt= localStorage.getItem("userStaticCutLS"+getUrlVars()["id"]); 
		if(dataSt!=null){
			var fields = Object.create(null);
			fields.title="$:/temp/userStaticCutLS";
			fields.text=dataSt.replace (/\+\+/g, '\n').replace (/\|\|/g, ':');
			fields.type="application/x-tiddler-dictionary"
			if($tw.browser) {$tw.wiki.addTiddler(new $tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))};
		}}
};

StaticCut();

function download(file,className) {
	for(var a=0;a<file.length;a++) {
		const link = document.createElement("a");
		const objectURL = URL.createObjectURL(file[a]);
		var fields = Object.create(null);
		if(typeof className == "string"){ 
			link.download =className+"_"+ file[a].name.replace (/\~/g, '_'); fields.tags=className;
		}else{link.download =file[a].name};
		link.href = objectURL;
		document.body.appendChild(link);

		fields.title=link.download;fields._canonical_uri=link.download;fields.type="image/jpeg";
		if($tw.browser) {$tw.wiki.addTiddler(new $tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))};

		//	requestAnimationFrame(() => {
		link.click();
		link.remove();
		URL.revokeObjectURL(objectURL);
		//	});
	}
	alert("Check pictures");
}

function a(i){
	var text="";
	for (var k = 0; k < i; k++){
		text=text+" ";

	}
	return text;
}


function stickmenu() {
	if (document.getElementById('aside1')){
		var a = document.querySelector('#aside1'), b = null;  
		window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false); 
		function Ascroll() {
			if (b == null) {  
				var Sa = getComputedStyle(a, ''), s = '';
				for (var i = 0; i < Sa.length; i++) {  
					if (Sa[i].indexOf('box-sizing') == 0 || Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
						s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
					}
				}
				//  document.querySelector('#stick').outerHTML = '<div id="stick"  style="'+s+'">'+document.querySelector('#stick').innerHTML+'</div>';
				b = document.querySelector('#stick');
				//  a.style.height = b.getBoundingClientRect().height +6+ 'px';  
				a.style.padding = '0';
				a.style.border = '0';  

				// simpleCart.initialize();
			}
			if (a.getBoundingClientRect().top <= 0) { 
				b.className = 'sticky';
			} else {
				b.className = 'sticky2';
			}
		}
	}
}


function setAttr(prmName,val) {
	var res = '';
	var d = location.href.split("#")[0].split("?");
	var base = d[0];
	var query = d[1];
	if(query) {
		var params = query.split("&");
		for(var i = 0; i < params.length; i++) {
			var keyval = params[i].split("=");
			if(keyval[0] != prmName) {
				res += params[i] + '&';
			}
		}
	}
	res += prmName + '=' + val;
	window.history.pushState(null, null, base + '?' + res);
	return false;
}


var disqus_developer = 1;
var strlocat3 = window.location.toString();
var pinframe=0;


//var currhash=window.location.hash;
//if (currhash =="" || currhash =="#" || currhash =="null" ) { currhash ="index"};


if (window.parent.frames.length > 0) {pinframe=1;
}

var mytext="";
var CallbackRegistry = {}; 
function scriptRequest(url, onSuccess, onError) {
	var scriptOk = false; 
	var callbackName = 'cb' + String(Math.random()).slice(-6);
	url += ~url.indexOf('?') ? '&' : '?';
	url += 'callback=CallbackRegistry.' + callbackName;
	CallbackRegistry[callbackName] = function(data) {
		scriptOk = true; 
		delete CallbackRegistry[callbackName]; 
		onSuccess(data); 
	};

	function checkCallback() {
		if (scriptOk) return; 
		delete CallbackRegistry[callbackName];
		onError(url); 
	}

	var script = document.createElement('script');
	script.onreadystatechange = function() {
		if (this.readyState == 'complete' || this.readyState == 'loaded') {
			this.onreadystatechange = null;
			setTimeout(checkCallback, 0); 
		}
	}
	script.onload = script.onerror = checkCallback;
	script.src = url;
	document.head.appendChild(script);
}


function ok(data) { 
    var spreadsheetsmail=data.feed.author[0].email.$t;
    //if(SpreadsheetsUse!="hide"){ setAttr("mail", spreadsheetsmail); }
    if (typeof banlist !== 'undefined') { 
        for (var i=0; i<banlist.length; i++){
            if(banlist[i]+"@gmail.com"==spreadsheetsmail) {
                $tw.modal.display("$:/_alert/banlist"); 
                return;
            }; 
        } 
    }
    var fields = Object.create(null);

    fields.title="googlespreadsheetmail";
    fields.text=spreadsheetsmail;
    if($tw.browser) {
        $tw.wiki.addTiddler(
            new $tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))
    };
    fields.title="googlespreadsheet";
    fields.text="https://docs.google.com/spreadsheets/d/"+getUrlVars()["id"]+"/";
    if($tw.browser) {
        $tw.wiki.addTiddler(
            new $tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))
    };
    fields.title="googlespreadsheettime";
    fields.text=data.feed.updated.$t;
    if($tw.browser) {
        $tw.wiki.addTiddler(
            new $tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))
    };

    //console.log( "Загружен пользователь " + spreadsheetsmail);
    //console.log(data.feed.entry[0].link[0].href);
    //console.log(data.feed.updated.$t);
    corsmax=data.feed.entry.length; 
    for (var i1=0; i1<data.feed.entry.length; i1++) {
        scriptRequest(data.feed.entry[i1].link[0].href+"?alt=json-in-script", ok2, fail);
    }
}


function ok2(data2) {  
    var currsheet=data2.feed.title.$t;

    if(currsheet.indexOf("hide")==0 || data2.feed.entry==undefined){return;};
    //console.log(currsheet);
    var new_value="";

    for (var i=0; i<data2.feed.entry.length; i++){ 
        var fields = Object.create(null); 
        for (var key in data2.feed.entry[i]) {
            if(key.match(/^gsx\$+/ig)=="gsx$"){ 
                new_value=data2.feed.entry[i][key].$t;
                if(key=="gsx$id" && currsheet=="ostatki"){ 
                    fields.title="ostatok_"+new_value;
                }else if(key=="gsx$id"){ 
                    if(currsheet=="GD-images"){
                        fields.tags=new_value.split('_')[0]; } 
                    fields.title=new_value} 
                else if(key=="gsx$name"){
                    fields.caption=new_value}
                else if(key=="gsx$tags" && currsheet=="parts"){ 
                    fields.tags=new_value+" $:/TOC"; }
                else if(key=="gsx$tags" && currsheet=="goods"){ 
                    fields.tags=new_value+" $:/Note"; }
                else if(key=="gsx$url" && currsheet=="images"){ 
                    fields._canonical_uri=new_value; }
                else if(key=="gsx$url" && currsheet=="GD-images"){
                    fields._canonical_uri="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=" + new_value; }
                else if(key.indexOf("gsx$hide")==0){
                    //console.log(key)
                } 
                else { 
                    var new_key=key.slice(4);
                    if(new_value.length>0){fields[new_key]=new_value; }
                };
            } // if key match
        } // for (var key...

        if(currsheet=="images" || currsheet=="GD-images" ){ fields.type="image/jpeg"  } ;
        fields.i=i+2;
        if($tw.browser) {$tw.wiki.addTiddler(new $tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))}   

        if(i==data2.feed.entry.length-1){
            corscurrent=corscurrent+1;
            if(corscurrent==corsmax-1){

                //var       deferredChanges = Object.create(null);
                //$tw.pageWidgetNode.refresh(deferredChanges);
                //window.location.hash=currhash;

// setTimeout(alert("Hello"),2000) ;

/*
                setTimeout(
                    function(){
                        HEEGreadyState="isload"; 
                        stickmenu();

 
                        var elements = document.querySelectorAll('.tw-table-of-contents-top>ul');

                        document.querySelector(".tw-table-of-contents-top>ul").onclick = function(event) {
                            for (var i = 0; i < elements.length; i++) {
                                elements[i].className="hover";
                            }
                        };

                        document.querySelector(".tw-table-of-contents-top>ul").onmouseover = 
                            function(event) {
                                for (var i = 0; i < elements.length; i++) {
                                    elements[i].className="hover";
                                }
                            } ;
                        
                    }
                ,2000); // setTimeout()
*/
            } // if corscurrent=corsmax-1
        } // if i==data2.feed.entry ....
    } // for var=0 loop

    if (typeof Swiper== 'function' && currsheet=="GD-images") {
        setTimeout(function(){sliderInit(); },700);
    };

} // function ok2



function fail(url) {
	alert( 'Error on request ' + url );
}


function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&|?#]+([^=&|^=#]+)=([^&|^#]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

var con_spreadsheetid=$tw.wiki.renderTiddler("text/plain","$:/constant/_spreadsheetid");
var SpreadsheetsUse=$tw.wiki.renderTiddler("text/plain","SpreadsheetsUse");
idfromURL=getUrlVars()["id"];

if(idfromURL===undefined && con_spreadsheetid!="" && SpreadsheetsUse=="hide"){
	getSheetsData(con_spreadsheetid);
}else if(idfromURL!=undefined && SpreadsheetsUse=="yes"){
	getSheetsData(idfromURL);
	var fields = Object.create(null);
	fields.title="$:/constant/_spreadsheetid";fields.text=idfromURL;
	if($tw.browser) {$tw.wiki.addTiddler(new 
		$tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))};
	fields = Object.create(null);
	fields.title="SpreadsheetsUse";fields.text="no";
	if($tw.browser) {$tw.wiki.addTiddler(new 
		$tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))};
}else if(SpreadsheetsUse=="no"){
	stickmenu();
	HEEGreadyState="isload";}else if(SpreadsheetsUse=="ondemand" && idfromURL== con_spreadsheetid ){
	getSheetsData(idfromURL);
}else{
	$tw.notifier.display("$:/_noidNotify");
	stickmenu();
	HEEGreadyState="isload";
}


function getSheetsData(worksheets_id) {
	//var fields = Object.create(null);
	//fields.title="$:/StoryList";fields.list="";
	//       if($tw.browser) {$tw.wiki.addTiddler(new $tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))};
	scriptRequest("https://spreadsheets.google.com/feeds/worksheets/"+worksheets_id+"/public/values?alt=json-in-script", ok, fail);
}


function addSpaces(nStr){
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ' ' + '$2');
	}
	return x1 + x2;
}

</script>
