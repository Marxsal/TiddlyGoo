// Yandex metric counter is located in $: / boot / Yandex_Metrika_Counter.js

var HEEGreadyState="onload";
var corsmax=0;
var corscurrent=0;

//document.querySelector('.userII_form').onkeypress = function (e) {  return !(/[^0-9]/.test(String.fromCharCode(e.charCode)));}

function ContactFormSubmit(){ var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,14}$/i; var
    myMail = document.querySelector('.userOO_form').value; var valid = re.test(myMail);
    document.querySelector('[aria-label^="name"]').value=document.querySelector('.userFF_form').value;
    document.querySelector('[aria-label^="telephone"]').value=document.querySelector('.userII_form').value;
    document.querySelector('[aria-label^="email"]').value=document.querySelector('.userOO_form').value;
    document.querySelector('[aria-label^="client_comments"]').value=document.querySelector('.userCC_form').value;
    document.querySelector('[aria-label^="order_number"]').value="Z_Запрос из контактной формы";
    document.querySelector('[aria-label^="link_for_your_order"]').value="https:\\\\heeg.ru";

    if (document.querySelector('.userFF_form').value === ""){
        $tw.modal.display("$:/_alert/noname"); return;} 
    if (document.querySelector('.userII_form').value === ""){
        $tw.modal.display("$:/_alert/notelephone"); 
        return;} 
    if (document.querySelector('.userOO_form').value=="") {
        document.querySelector('[aria-label^="email"]').value=$tw.wiki.renderTiddler("text/plain","$:/constant/_nomail");
    }
    if (valid || document.querySelector('.userOO_form').value=="") {} 
    else{
        $tw.modal.display("$:/_alert/noemail"); 
        return;
    }

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
            if($tw.browser) {
                $tw.wiki.addTiddler(new $tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))
            };
        }
    }
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
alert("Проверьте картинки");
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
} //stickmenu()


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
} //setAttr(,)


var disqus_developer = 1;
var strlocat3 = window.location.toString();
var pinframe=0;


//var currhash=window.location.hash;
//if (currhash =="" || currhash =="#" || currhash =="null" ) { currhash ="index"};

 if (window.parent.frames.length > 0) {
    pinframe=1;
 
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

                //var		deferredChanges = Object.create(null);
                //$tw.pageWidgetNode.refresh(deferredChanges);
                //window.location.hash=currhash;

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
}else if(SpreadsheetsUse=="no"){stickmenu();
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



var valuta = ($tw.wiki.renderTiddler("text/plain","$:/constant/_valuta")).replace (/\&lt;/g, '<').replace (/\&quot;/g, '"').replace (/\&gt;/g, '>'); 
var noliq =  $tw.wiki.renderTiddler("text/plain","$:/constant/_00")+" " ;
var noMail=$tw.wiki.renderTiddler("text/plain","$:/constant/_nomail");


var quantityName =  $tw.wiki.renderTiddler("text/plain","$:/constant/_quantityName") +" " ;

var refer= "["+ decodeURI(document.location).split('#')[0].split('?')[1]+"]";
if(refer=="[undefined]"){refer=" ";}




var userCook="";
var noMailVal=0;

var NextId=1,Custom="Custom",PayPal="PayPal",Email="Email",AustralianDollar=AUD="AUD",CanadianDollar=CAD="CAD",CzechKoruna=CZK="CZK",DanishKrone=DKK="DKK",Euro=EUR="EUR",HongKongDollar=HKD="HKD",HungarianForint=HUF="HUF",IsraeliNewSheqel=ILS="ILS",JapaneseYen=JPY="JPY",MexicanPeso=MXN="MXN",NorwegianKrone=NOK="NOK",NewZealandDollar=NZD="NZD",PolishZloty=PLN="PLN",PoundSterling=GBP="GBP",SingaporeDollar=SGD="SGD",SwedishKrona=SEK="SEK",SwissFranc=CHF="CHF",USDollar=USD="USD";RussianRUB=RUB="RUB";
function Cart(){

	var me = this;
	/* member variables */
	me.Version = '2.0.1';
	me.Shelf = new Shelf();
	me.items = {};
	me.isLoaded = false;
	me.pageIsReady = false;
	me.quantity = 0;
	me.total = 0;
	me.taxRate = 0;
	me.taxCost = 0;
	me.shippingFlatRate = 0;
	me.shippingTotalRate = 0;
	me.shippingQuantityRate = 0;
	me.shippingRate = 0;
	me.shippingCost = 0;
	me.currency =$tw.wiki.renderTiddler("text/plain","$:/_Paypal_currency");
	me.checkoutTo = PayPal;
	me.email = $tw.wiki.renderTiddler("text/plain","$:/_Paypal_email");

	me.merchantId	 = "";
me.saleRate = $tw.wiki.renderTiddler("text/plain","$:/constant/_saleval");





	me.cartHeaders = ['Name','Price','Quantity','Total'];
	/* 
		cart headers: 
		you can set these to which ever order you would like, and the cart will display the appropriate headers
		and item info.  any field you have for the items in the cart can be used, and 'Total' will automatically 
		be price*quantity.  
		
		there are keywords that can be used:
			
			1) "_input" - the field will be a text input with the value set to the given field. when the user
				changes the value, it will update the cart.  this can be useful for quantity. (ie "Quantity_input")
			
			2) "increment" - a link with "+" that will increase the item quantity by 1
			
			3) "decrement" - a link with "-" that will decrease the item quantity by 1
			
			4) "remove" - a link that will remove the item from the cart 
			
			5) "_image" or "Image" - the field will be an img tag with the src set to the value. You can simply use "Image" if
				you set a field in the items called "Image".  If you have a field named something else, like "Thumb", you can add
				the "_image" to create the image tag (ie "Thumb_image").
				
			6) "_noHeader" - this will skip the header for that field (ie "increment_noHeader")
		
	
	*/
	
	


	/******************************************************
			add/remove items to cart  
 	 ******************************************************/

	me.add = function () {
		var me=this;
		/* load cart values if not already loaded */
		if( !me.pageIsReady 	) { 
			me.initializeView(); 
			me.update();	
		}
		if( !me.isLoaded 		) { 
			me.load(); 
			me.update();	
		}
		
		var newItem = new CartItem();
		
		/* check to ensure arguments have been passed in */
		if( !arguments || arguments.length === 0 ){
			error( 'No values passed for item.');
			return;
		}
		var argumentArray = arguments;
		if( arguments[0] && typeof( arguments[0] ) != 'string' && typeof( arguments[0] ) != 'number'  ){ 
			argumentArray = arguments[0]; 
		} 
	
		newItem.parseValuesFromArray( argumentArray );
		newItem.checkQuantityAndPrice();
		
		/* if the item already exists, update the quantity */
		if( me.hasItem(newItem) ) {
			var id=me.hasItem(newItem);
			me.items[id].quantity= parseInt(me.items[id].quantity,10) + parseInt(newItem.quantity,10);

//alert(me.items[id].quantity + " второй "+ me.items[id].name);

ostatok=parseFloat(me.items[id].ostatok.replace(/\s/g, ''));

if(ostatok<me.items[id].quantity && ostatok!=""){
no_good( ostatok, me.items[id].caption);
return;
};

		} else {
			me.items[newItem.id] = newItem;
//alert(me.items[newItem.id].quantity + " третий " + newItem.name);

ostatok=parseFloat(me.items[newItem.id].ostatok.replace(/\s/g, ''));

if(ostatok<me.items[newItem.id].quantity && ostatok!=""){
no_good( ostatok, newItem.caption);
return;
};

		}	

	





me.update();



	













$tw.notifier.display("$:/_addCartNotify");


if($tw.wiki.renderTiddler("text/plain","$:/constant/_chooseOrder")=="yes"){

$tw.modal.display("$:/_addCartModal");
me.addEventToArray( getElementsByClassName('simpleCart_hide') , simpleCart.hide , "click");
};

	};
	
	
	me.remove = function( id ){
	
var tempArray = {};




		for( var item in this.items ){
			if( item != id ){ 
				tempArray[item] = this.items[item]; 
			}
		}
		this.items = tempArray;







};
	
	me.empty = function () {
	
simpleCart.items = {};
		simpleCart.update();

document.querySelector('#free_from_dost').innerHTML ="0";

document.querySelector('#total_check').innerHTML ="0";






	};
	
	/******************************************************
			 item accessor functions
     ******************************************************/

	me.find = function (criteria) {
		if( !criteria )
			return null;
		var results = [];
		for( var next in me.items ){
			var item = me.items[next],
				fits = true;
			for( var name in criteria ){
				if( !item[name] || item[name] != criteria[name] )
					fits = false;
			}
			if( fits )
				results.push( me.next )
		}
		return (results.length == 0 ) ? null : results;
	}

	/******************************************************
			 checkout management 
     ******************************************************/





	me.checkout = function() {
		if( simpleCart.total<$tw.wiki.renderTiddler("text/plain","$:/constant/_minzakaz")){

$tw.modal.display("$:/_alert/minzakaz");

			return;}

		if( simpleCart.quantity === 0 ){

$tw.modal.display("$:/_alert/noitems");

			return;}



		if(  (document.querySelector('.userFF').value) === ""){

$tw.modal.display("$:/_alert/noname");
                   return;}

		if(  (document.querySelector('.userII').value) === ""){

$tw.modal.display("$:/_alert/notelephone");
                   return;}

if (typeof isNumber == 'function') {
	


	if(  (isNumber(costTK)) !=true && document.querySelector('.selectDost').value=="dostDrGorod"){

$tw.modal.display("$:/_alert/nocity");
                   return;}
};

		
var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,14}$/i;
    var myMail = document.querySelector('.userOO').value;
    var valid = re.test(myMail);



/* ПОЧТЫ НЕТ*/

	 if  (valid || document.querySelector('.userOO').value=="") {} else{ $tw.modal.display("$:/_alert/noemail"); return;}

if  (document.querySelector('.userOO').value=="") {document.querySelector('.userOO').value=$tw.wiki.renderTiddler("text/plain","$:/constant/_nomail"); noMailVal=1;}else{noMailVal=0;}
                   


		switch( simpleCart.checkoutTo ){
			case PayPal:
		
					simpleCart.paypalCheckout();
break;
			
			case Email:
				simpleCart.emailCheckout();
				break;
			default:
				simpleCart.customCheckout();
				break;
		}
	};

me.history2 = function() {
	
history.go(-1);
return false;
                   }





me.hide = function() {
	
if (document.getElementById("hideCart").style.height != '0px') {
         document.getElementById("hideCart").style.height = '0px';
         document.getElementById("hideCart").style.overflow = 'hidden';
    document.getElementById("cart_backdrop").style.display = 'none';
document.getElementById("hideCart").style.padding = '0px';
  document.getElementById("cart_backdrop").style.position = 'fixed';

if (typeof vkwidth == 'function') {
vkwidth(); 
}


}
      else {
          
 document.getElementById("hideCart").style.height= '100%';
         document.getElementById("hideCart").style.overflow="auto" ;
document.getElementById("hideCart").style.padding = '6%';

document.getElementById("cart_backdrop").style.display = 'block';
document.getElementById("cart_backdrop").style.position = 'fixed';



     document.querySelector('.userII').onkeypress = function (e) {  return !(/[^0-9]/.test(String.fromCharCode(e.charCode)));}
 
/*
if(document.querySelector('.tc-modal-wrapper')!=null){
 mymodal = document.querySelector('.tc-modal-wrapper');
 mymodal.parentNode.removeChild(mymodal);
if (typeof vkwidth == 'function') {
vkwidth(); 
}


}
*/
}

return false;
                   }

me.checkout2 = function() {
		if( simpleCart.quantity === 0 ){

$tw.modal.display("$:/_alert/noitems");
			return;}
		if(  (document.querySelector('.userFF').value) === ""){
$tw.modal.display("$:/_alert/noname");
                   return;}

		if(  (document.querySelector('.userII').value) === ""){
$tw.modal.display("$:/_alert/notelephone");
                   return;}
		



var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,14}$/i;
    var myMail = document.querySelector('.userOO').value;
    var valid = re.test(myMail);



if  (valid) {} else{
$tw.modal.display("$:/_alert/noemail");
                   return;}


		switch( simpleCart.checkoutTo ){
			case PayPal:
						simpleCart.paypal2();
				break;
			
			case Email:
				simpleCart.emailCheckout();
				break;
			default:
				simpleCart.customCheckout();
				break;
		}
	};






	
	me.paypalCheckout = function() {


var dddd = new Date();
 dddd.setHours(dddd.getHours() + 3);
var randomNumber =  ('00000' + Math.floor(Math.random()*10001)).slice(-5);
var fullDate=dddd.toISOString();

var fullOrder=fullDate+"_"+randomNumber;


document.getElementById("aside1").style.display = 'block';




userFF1=(document.querySelector('.userFF').value);
userII1=(document.querySelector('.userII').value);
userOO1=(document.querySelector('.userOO').value);
userAA1= (document.querySelector('.userAA').value);
userCC1= (document.querySelector('.userCC').value);
samovivoz1=document.querySelector('.samovivoz label input');	

dostav1= $tw.wiki.renderTiddler("text/plain","$:/state/_tip_dostavki");
var  tovDostavSt= parseFloat($tw.wiki.renderTiddler("text/plain","$:/constant/_deliveryPrice2"));


//var  tovDostavSt= parseFloat($tw.wiki.renderTiddler("text/plain","$:/constant/_deliveryPrice")) ;
var tovDostavFreeFrom= parseFloat($tw.wiki.renderTiddler("text/plain","$:/constant/_deliveryFreeFrom")) ;




var tkV="";


if (typeof isNumber == 'function') {

if(document.querySelector('.selectDost').value=="dostDrGorod"){tovDostavSt=parseFloat(costTK); tkV="("+s+")"+GorodVal;};
};

tip_oplati1=$tw.wiki.renderTiddler("text/plain","$:/state/_tip_oplati2");
var  tip_oplatiSt= 0 ;

valuta=$tw.wiki.renderTiddler("text/plain","$:/constant/_valuta");
quantityName =  $tw.wiki.renderTiddler("text/plain","$:/constant/_quantityName");
var   ShowVm3T="";
var   ShowMkgT="";
var   obM3allTov=0;
var  vesKgallTov=0;
var  ShowVm3="";
var ShowMkg="";
var ShowVm3All_ ="";
var ShowMkgAll_="";
var ShowVm3All ="";
var ShowMkgAll="";
var YaProducts = '';
var ordersTableArr =[];
var strn4Google='';

		var me = this,
			winpar = "scrollbars,location,resizable,status";
			strn  = "" 
		strn3  = "";
                       itogi=0;
                       Itogo=0;
			counter = 1;
			itemsString = "";
			itemsStringTable = "";

			
/*
if (document.querySelector('[title="$:/_show_Vm3_Mkg"]').getAttribute('vm3')=="no") {ShowVm3T=""}  else{ShowVm3T="/<th class='h'  style='background-color: #f0f0f0;    font-weight: bold;'> м3</th><th class='h'  style='background-color: #f0f0f0;    font-weight: bold;'> общ. м3</th>"};
if (document.querySelector('[title="$:/_show_Vm3_Mkg"]').getAttribute('mkg')=="no") {ShowMkgT=""}  else{ShowMkgT="<th class='h'  style='background-color: #f0f0f0;    font-weight: bold;'> кг</th><th class='h'  style='background-color: #f0f0f0;    font-weight: bold;'> общ. кг </th>"};
*/

strnTop="<table border='1'   style=' width: auto; max-width: 100%; caption-side: bottom; margin-top: 1em; margin-bottom: 1em; border-collapse: collapse; border-spacing: 0;'><caption>Таблица заказа товаров</caption><tr><th style='background-color: #f0f0f0;    font-weight: bold;'> "+$tw.wiki.renderTiddler("text/plain","$:/constant/_quantityName")+"</th>"+ShowVm3T+ShowMkgT+" <th  style='background-color: #f0f0f0;    font-weight: bold;'>Цена "+valuta+ " </th>  <th style='background-color: #f0f0f0;    font-weight: bold;'>Стоим. "+valuta+ " </th></tr>"

	

ordersTableArr[ordersTableArr.length]=	["Арт.", "Название",$tw.wiki.renderTiddler("text/plain","$:/constant/_quantityName"), "Цена","Стоим."];	



		for( var current in me.items ){
			var item = me.items[current];

var currentPrice=parseFloat(item.price); 



			
			                             var optionsString = "";
			itogi=(currentPrice*item.quantity) ;
			                             optionsString = optionsString.substring(2);
			

//obM3=parseFloat(document.querySelector('[title="'+item.name+'"]').getAttribute('v_m3'));

obM3=0;
obM3all=(obM3*item.quantity).toFixed(2);
obM3allTov=((obM3allTov*100+obM3all*100)/100).toFixed(2);

//vesKg=parseFloat(document.querySelector('[title="'+item.name+'"]').getAttribute('ves_kg'));

vesKg=0;
vesKgall=(vesKg*item.quantity).toFixed(2);  
vesKgallTov=((vesKgallTov*100+vesKgall*100)/100).toFixed(2);
noliq =  $tw.wiki.renderTiddler("text/plain","$:/constant/_00")+" " ;


yacaption=(item.caption.replace(/<.*?>|➨/g, "")).replace(/\"|\'/gi, "”");

/*
if (document.querySelector('[title="$:/_show_Vm3_Mkg"]').getAttribute('vm3')=="no") {ShowVm3=""}  else{ShowVm3="<td class='h'>" + obM3 +"</td><td class='h'>"+ obM3all +"</td>"};
if (document.querySelector('[title="$:/_show_Vm3_Mkg"]').getAttribute('mkg')=="no") {ShowMkg=""}  else{ShowMkg="<td class='h'>"+ vesKg +"</td><td class='h'>"+ vesKgall +"</td>"};
*/

itemsStringTable=itemsStringTable + "<tr><td colspan='3'><a href=\' #" + item.name + "\'>"+  yacaption+"</a>"   +"</td></tr><tr><td>"+ item.quantity+"</td>"+ ShowVm3+ShowMkg+"<td>"+ addSpaces( currentPrice.toFixed(noliq)) +"</td><td>"+addSpaces(itogi.toFixed(noliq))  +"</td></tr>";
 Itogo=Itogo+itogi ;



ordersTableArr[ordersTableArr.length]=[item.name,yacaption,item.quantity,currentPrice,itogi];

 

YaProducts =YaProducts+ '{'+    '"id":'+'"'+ item.name+'"' +','+ '"name":'+ '"'+yacaption+'"'+','+ '"price":'  +currentPrice+','+    '"quantity":'+ item.quantity +'}'+',';

YaProducts =YaProducts.replace(/\r?\n/g, "");

			itemsString = itemsString 	+ ";" 	+  item.name  +
						";"		+  item.quantity +
						 ";"		+   currentPrice.toFixed(noliq) ; 
										
			counter++;
		}



if (Itogo>tovDostavFreeFrom ){tovDostavSt=0};
itogoZakaz=Itogo+ tovDostavSt+ tip_oplatiSt;

/*
if (document.querySelector('[title="$:/_show_Vm3_Mkg"]').getAttribute('vm3')=="no") {ShowVm3All_=""}  else{ShowVm3All_="<td class='h'></td><td class='h'></td>"};
if (document.querySelector('[title="$:/_show_Vm3_Mkg"]').getAttribute('mkg')=="no") {ShowMkgAll_=""}  else{ShowMkgAll_="<td class='h'></td><td class='h'></td>"};

if (document.querySelector('[title="$:/_show_Vm3_Mkg"]').getAttribute('vm3')=="no") {ShowVm3All=""}  else{ShowVm3All="<td class='h'></td><td class='h'>"+obM3allTov+"</td>"};
if (document.querySelector('[title="$:/_show_Vm3_Mkg"]').getAttribute('mkg')=="no") {ShowMkgAll=""}  else{ShowMkgAll="<td class='h'></td><td class='h'>"+ vesKgallTov+"</td>"};
*/
oplataSel=document.querySelector('.oplataSelect').options[document.querySelector('.oplataSelect').options.selectedIndex].text; 
// dostavkaSel=document.querySelector('[title="'+dostav1 +'"]').getAttribute('caption');

dostavkaSel="Доставка";

 dostvar="<tr><td colspan='3'>" +"<b>"  +oplataSel  + "</b>"  + "</td></tr><tr><td></td>"+ShowVm3All_+ShowMkgAll_+"<td></td><td>" + " OK"+"</td></tr> "+"<tr><td colspan='3'>" +"<b>"  +  dostavkaSel + "</b>"  + "</td></tr><tr><td></td>"+ShowVm3All_+ShowMkgAll_+"<td></td><td>" + addSpaces(tovDostavSt.toFixed(noliq))+"</td></tr> "+"<tr><td  colspan='3'></td></tr><tr><td></td>"+ShowVm3All +ShowMkgAll+"<td> ИТОГО:</td> <td>"+"<b>"  + addSpaces((itogoZakaz).toFixed(noliq))+" "+valuta+ "</b>" + "</td></tr>";


dostvarURL=";"+dostav1+";1;"+tovDostavSt+";"+tip_oplati1+";1;"+tip_oplatiSt;



 
ordersTableArr[ordersTableArr.length]=[document.querySelector('.oplataSelect').value, oplataSel,"1","OK","OK"];
ordersTableArr[ordersTableArr.length]=[dostav1, dostavkaSel,"1","OK",tovDostavSt];
ordersTableArr[ordersTableArr.length]=["итог:", " "," "," ",itogoZakaz];


 var max =[0,0,0,0,0];
 var ordersTableArrLen =[];
for (var i = 0; i < ordersTableArr.length ; i++) {
ordersTableArrLen[i] = [];
for (var r = 0; r < ordersTableArr[i].length ; r++) {
ordersTableArrLen[i][r] =ordersTableArr[i][r].toString().length;
if(ordersTableArr[i][r].toString().length>max[r]){max[r]=ordersTableArr[i][r].toString().length}
}
}

for (var i = 0; i < ordersTableArr.length ; i++) {
strn4Google=strn4Google+"[ ";
for (var r = 0; r < ordersTableArr[i].length ; r++) {
if(r < ordersTableArr[i].length-1){stick=" | "}else{stick=""}
strn4Google=strn4Google+ordersTableArr[i][r]+a(max[r]-ordersTableArr[i][r].toString().length) + stick;
}
strn4Google=strn4Google+" ]\r\n";
}

		


				
strn3=strnTop + itemsStringTable+ dostvar + "</table>";


		
strn = strn + itemsString ;




var wlocation= encodeURI (strn +dostvarURL+";$" + userFF1+"$" +userII1+"$" +userOO1+"$" + fullOrder );

         document.getElementById("hideCart").style.height = '0px';
         document.getElementById("hideCart").style.overflow = 'hidden';
    document.getElementById("cart_backdrop").style.display = 'none';
document.getElementById("hideCart").style.padding = '0px';



window.location="#!heeg#"; 
 
var myshopid='';

 if (history.pushState) {
if(getUrlVars()["id"]!=undefined){myshopid="&id="+getUrlVars()["id"]};

        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        var newUrl = baseUrl + '?'+wlocation+myshopid+"#!heeg";
        history.pushState(null, null, newUrl);
    }
    else {
        console.warn('History API не поддерживается');
    };






setTimeout(function(){


if( tip_oplati1=="AC" || tip_oplati1=="PC" || tip_oplati1=="MC") {

document.querySelector('[name="firstname"]').value=userFF1;
document.querySelector('[name="phone"]').value=userII1;
document.querySelector('[name="email"]').value=userOO1;
document.querySelector('[name="street"]').value=tkV+" "+userAA1;
document.querySelector('[name="comment"]').value=userCC1+" (не удаляйте ссылку на заказ)  Ссылка на заказ "+ $tw.wiki.renderTiddler("text/plain","$:/_siteURL")+"?"+wlocation+"#!heeg"; 
document.querySelector('[name="label"]').value=fullOrder;
document.querySelector('[name="paymentType"]').value=tip_oplati1;
document.querySelector('[name="sum"]').value=itogoZakaz;



document.querySelector('[action="https://money.yandex.ru/quickpay/confirm.xml"]').submit();

}

if( tip_oplati1=="Paypal" ) {simpleCart.checkout2(); }






document.querySelector('[aria-label^="name"]').value=userFF1;
document.querySelector('[aria-label^="telephone"]').value=userII1;
document.querySelector('[aria-label^="email"]').value=userOO1;
document.querySelector('[aria-label^="delivery_adress"]').value=tkV+" "+userAA1;
document.querySelector('[aria-label^="client_comments"]').value=userCC1+refer;
document.querySelector('[aria-label^="order_number"]').value=fullOrder;
/* document.querySelector('[aria-label^="random_number"]').value=randomNumber; *******************************/
document.querySelector('[aria-label^="manager_comments"]').value=strn4Google;

/* УБИРАЕМ document.querySelector('[aria-label^="link_for_your_order"]').value=$tw.wiki.renderTiddler("text/plain","$:/_siteURL")+"?"+wlocation+"#!heeg";
*/
document.querySelector('[aria-label^="link_for_your_order"]').value=$tw.wiki.renderTiddler("text/plain","$:/_siteURL")+"?"+wlocation+"#!heeg";



if (document.getElementById('zakaz') ){ 



document.querySelector('[name="rsubmit"]').click();

if( tip_oplati1.indexOf("moneta") >-1) {window.open($tw.wiki.renderTiddler("text/plain","$:/_Moneta_url_zaprosa")+"?paymentSystem.unitId="+tip_oplati1.replace(/moneta/gi, "")+"&paymentSystem.limitIds="+tip_oplati1.replace(/moneta/gi, "")+"&MNT_ID="+$tw.wiki.renderTiddler("text/plain","$:/_Moneta_id_magazina")+"&MNT_TEST_MODE="+$tw.wiki.renderTiddler("text/plain","$:/_Moneta_test_1or0")+"&MNT_TRANSACTION_ID="+fullOrder+"&MNT_CURRENCY_CODE="+$tw.wiki.renderTiddler("text/plain","$:/_Moneta_valuta_moneta")+"&MNT_AMOUNT="+itogoZakaz+"","_blank") };

if( tip_oplati1=="all") {window.open($tw.wiki.renderTiddler("text/plain","$:/_Moneta_url_zaprosa")+"?"+"&MNT_ID="+$tw.wiki.renderTiddler("text/plain","$:/_Moneta_id_magazina")+"&MNT_TEST_MODE="+$tw.wiki.renderTiddler("text/plain","$:/_Moneta_test_1or0")+"&MNT_TRANSACTION_ID="+fullOrder+"&MNT_CURRENCY_CODE="+$tw.wiki.renderTiddler("text/plain","$:/_Moneta_valuta_moneta")+"&MNT_AMOUNT="+itogoZakaz+"","_blank") };




if  (noMailVal==1){userOO1="не указана";}

var tablezakaz = "<a>"+"Ваше имя&nbsp;&nbsp;&nbsp;<b>"+userFF1+"</b><br>"+"Ваш телефон:&nbsp;&nbsp;&nbsp;<b>"+userII1+"</b><br>"+"Ваша почта:&nbsp;&nbsp;&nbsp; <b>"+userOO1+"</b><br>"+"Адрес доставки:&nbsp;&nbsp;&nbsp;<b>"+tkV+userAA1 + "</b><br>" +"Точное время заказа:&nbsp;&nbsp;&nbsp;<b>"+fullOrder+"</b><br>"+ "Ваши комментарии к заказу:&nbsp;&nbsp;&nbsp;<b>"+userCC1+"</b><br>"+" "+"</a>" + strn3 +"<br><br><a class='linkO' href='"+$tw.wiki.renderTiddler("text/plain","$:/_siteURL")+"?"+wlocation+"#!heeg"+"'>Ссылка на заказ<\/a>"; 


document.getElementById('zakaz').innerHTML = tablezakaz; 



 










me.empty();


$tw.modal.display("$:/_alert/ordersent");



document.querySelector('[target="my_iframe"]').reset();










YaProducts=YaProducts.replace(/\(/g,"_");
YaProducts=YaProducts.replace(/\)/g,"_");
YaProducts=JSON.parse('['+YaProducts.slice(0, -1)+']');








} else {alert("ccылкa на НЕEG.RU не oбнаружeна");}
},100);



return false;

	};



me.paypal2 = function() {




var strnPP ="";
function toTranslit(text) {
    return text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
    function (all, ch, space, words, i) {
        if (space || words) {
            return space ? '+' : '';
        }
        var code = ch.charCodeAt(0),
            index = code == 1025 || code == 1105 ? 0 :
                code > 1071 ? code - 1071 : code - 1039,
            t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                'shch', '', 'y', '', 'e', 'yu', 'ya'
            ]; 
        return t[index];
    });
}				var	me = this;
		var winpar = "scrollbars,location,resizable,status",
			strnPP  = "https://www.paypal.com/"+document.querySelector('[title="$:/_Paypal_country"] > pre').innerHTML+"/cgi-bin/webscr?cmd=_cart" +
		   			"&upload=1" +
		        	"&business=" + document.querySelector('[title="$:/_Paypal_email"] > pre').innerHTML + 
					"&currency_code=" + document.querySelector('[title="$:/_Paypal_currency"] > pre').innerHTML ,
			counter = 1,
			itemsString = "",
itemsStringCh= "",
			me = this;
			
		
		if( me.taxRate ){
			strnPP = strnPP + 
				"&tax_cart=" +  me.currencyStringForPaypalCheckout( me.taxCost );
		}
		
		for( var current in me.items ){
			var item = me.items[current];
		var currentPrice=item.price;
	
		

			
			itemsString = itemsString 	+ "&item_name_" 	+ counter + "=" + toTranslit(item.name)  +
									 	  "&item_number_" 	+ counter + "=" + counter +
										  "&quantity_"		+ counter + "=" + item.quantity +
										  "&amount_"		+ counter + "=" + me.currencyStringForPaypalCheckout( currentPrice ) +
										   "&on0_" 			+ counter + "=" + "Name" + 
										  "&os0_"			+ counter + "=" + toTranslit(document.querySelector('[title="'+item.name +'"]').getAttribute('caption'));

			





counter++;
		}
		
		if( me.shipping() != 0){
			 itemsString = itemsString 	+ "&item_name_" 	+ counter + "=Shipping"  +
									 	  "&item_number_" 	+ counter + "=" + counter +
										  "&quantity_"		+ counter + "=1" + 
										  "&amount_"		+ counter + "=" + me.currencyStringForPaypalCheckout( me.shippingCost );
		}
		
		
		strnPP = strnPP + itemsString ;

window.location=strnPP;





	for( var current in me.items ){
			var item = me.items[current];

	itemsStringCh = itemsStringCh	+ "&" 	+  item.name  +
						"&"		+  item.quantity +
						 "&"		+   currentPrice.toFixed(noliq) ; 

		}




var paypalLetter= "<br><a href='"+$tw.wiki.renderTiddler("text/plain","$:/_siteURL")+"#!heeg" + encodeURI (itemsStringCh +";$" + document.querySelector('.userFF').value+"$" +document.querySelector('.userII').value+"$" +document.querySelector('.userOO').value+"$" +Math.floor(Math.random()*10001) )+"'>Проверка цен PayPal<\/a>"; 


































		
	};












	/******************************************************
				data storage and retrival 
	 ******************************************************/
	
	/* load cart from cookie */
	me.load = function () {
		var me = this;
		/* initialize variables and items array */
		me.items = {};
		me.total = 0.00;
		me.quantity = 0;
		




	

if (isLocalStorageAvailable()) {

  var elements = document.querySelectorAll('.userFF,  .userII, .userOO, .userAA ');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
      var name = element.getAttribute('class');

      element.value = localStorage.getItem(name) || '';

      element.addEventListener("input", function() {
        localStorage.setItem(name, element.value);
      });
    })(elements[i]);
  }
}










		/* retrieve item data from cookie */










if( isLocalStorageAvailable()  ){
var data= unescape(localStorage.getItem("userCookLS"+getUrlVars()["id"])).split('++');
var dataStr=data.toString();
}else 	if( readCookie('simpleCart'+getUrlVars()["id"])  ){
			var data = unescape(readCookie('simpleCart'+getUrlVars()["id"])).split('++');
			for(var x=0, xlen=data.length;x<xlen;x++){
			
				var info = data[x].split('||');
				var newItem = new CartItem();
			


				if( newItem.parseValuesFromArray( info ) ){
					newItem.checkQuantityAndPrice();
					/* store the new item in the cart */
					me.items[newItem.id] = newItem;
				}
 			}
		};


if( isLocalStorageAvailable() && dataStr !== "null" && dataStr !== "" ) {

			



			for(var x=0, xlen=data.length;x<xlen;x++){
			
				var info = data[x].split('||');
				var newItem = new CartItem();
			
				if( newItem.parseValuesFromArray( info ) ){
					newItem.checkQuantityAndPrice();
					/* store the new item in the cart */
					me.items[newItem.id] = newItem;
				}
 			}
		}else{data=""};





		me.isLoaded = true;
	};
	
	
	
	/* save cart to cookie */
	me.save = function () {
		var dataString = "";
		for( var item in this.items ){
			dataString = dataString + "++" + this.items[item].print();
		}
		
if (isLocalStorageAvailable()) { localStorage.setItem("userCookLS"+getUrlVars()["id"], dataString.substring( 2 ) );}else{
createCookie('simpleCart'+getUrlVars()["id"], dataString.substring( 2 ) , 30 );
};
	};
	

	
		
	/******************************************************
				 view management 
	 ******************************************************/
	
	me.initializeView = function() {
		var me = this;
		me.totalOutlets 			= getElementsByClassName('simpleCart_total');
		me.quantityOutlets 			= getElementsByClassName('simpleCart_quantity');
		me.cartDivs 				= getElementsByClassName('simpleCart_items');
		me.taxCostOutlets			= getElementsByClassName('simpleCart_taxCost');
		me.taxRateOutlets			= getElementsByClassName('simpleCart_taxRate');
		me.shippingCostOutlets		= getElementsByClassName('simpleCart_shippingCost');
		me.finalTotalOutlets		= getElementsByClassName('simpleCart_finalTotal');
		
		me.addEventToArray( getElementsByClassName('simpleCart_checkout') , simpleCart.checkout , "click");

me.addEventToArray( getElementsByClassName('simpleCart_history') , simpleCart.history2 , "click");
me.addEventToArray( getElementsByClassName('simpleCart_hide') , simpleCart.hide , "click");


		me.addEventToArray( getElementsByClassName('simpleCart_checkout2') , simpleCart.checkout2  , "click");
		me.addEventToArray( getElementsByClassName('simpleCart_empty') 	, simpleCart.empty , "click" );
		
		me.Shelf.readPage();

			
		me.pageIsReady = true;
		
	};
	
	
	
	me.updateView = function() {
		me.updateViewTotals();
		if( me.cartDivs && me.cartDivs.length > 0 ){ 
			me.updateCartView(); 
		}

}
	me.updateViewButtons = function() {

		

var matches = document.querySelectorAll('.simpleCart_shelfItem');
          for(var i = 0; i < matches.length; i++) { 
        matches[i].classList.remove("inCart")

      } 





for( var current in me.items ){






  var nodes = document.querySelectorAll('.simpleCart_shelfItem');
var item = me.items[current];




      [].forEach.call( nodes, function(tw) {

             var a = tw.querySelector('[href="'+'#'+ encodeURIComponent(item.name)+'"]');
             if(a){
                tw.classList.add("inCart")
             }
      });

}

	};
	
	me.updateViewTotals = function() {
valuta=$tw.wiki.renderTiddler("text/plain","$:/constant/_valuta");

                                  var outlets = [ ["quantity"		, "none"		] , 
						["total"		, "currency"	] , 
						["shippingCost"	, "currency"	] ,
						["taxCost"		, "currency"	] ,
						["taxRate"		, "percentage"	] ,
						["finalTotal"	, "currency"	] ];
						
		for( var x=0,xlen=outlets.length; x<xlen;x++){
		
			var arrayName = outlets[x][0] + "Outlets",
				outputString;
				
			for( var element in me[ arrayName ] ){
				

                                                                           switch( outlets[x][1] ){
					case "none":
						outputString = "" + me[outlets[x][0]];
						break;
					case "currency":
						outputString = "" + me[outlets[x][0]];
						break;
					case "percentage":
						outputString = "" + me[outlets[x][0]];
						break;
					default:
						outputString = "" + me[outlets[x][0]];
						break;
				}
	if	(outputString==0){me[arrayName][element].innerHTML = "<empty></empty>";
}else{		
me[arrayName][element].innerHTML =me.quantity +"<span> "+$tw.wiki.renderTiddler("text/plain","$:/constant/_quantityName")+" </span> "+ "<span> " + addSpaces(outputString) +" "+  valuta +"</span>" ;


dostav1= (document.querySelector('.dostav').value);
tovDostavSt= parseFloat($tw.wiki.renderTiddler("text/plain","$:/constant/_deliveryPrice2"));
//tovDostavSt= parseFloat($tw.wiki.renderTiddler("text/plain","$:/constant/_deliveryPrice")) ;


tovDostavFreeFrom= parseFloat($tw.wiki.renderTiddler("text/plain","$:/constant/_deliveryFreeFrom")) ;
if(outputString>tovDostavFreeFrom){document.querySelector('#free_from_dost').innerHTML ="0 "+valuta;
document.querySelector('#total_check').innerHTML=outputString +" "+valuta;
}else{
document.querySelector('#free_from_dost').innerHTML=tovDostavSt +" "+valuta;
var total_check=parseFloat(outputString)+tovDostavSt;
document.querySelector('#total_check').innerHTML=total_check +" "+valuta;


}


}
			}
		}
	};
	
	me.updateCartView = function() {
		var newRows = [],
			x,newRow,item,current,header,newCell,info,outputValue,option,headerInfo;
		
		/* create headers row */
		newRow = document.createElement('div');
		for( header in me.cartHeaders ){
			newCell = document.createElement('div');
			headerInfo = me.cartHeaders[header].split("_");
			
			newCell.innerHTML = headerInfo[0];
			newCell.className = "item" + headerInfo[0];
			for(x=1,xlen=headerInfo.length;x<xlen;x++){
				if( headerInfo[x].toLowerCase() == "noheader" ){
					newCell.style.display = "none";
				}
			}
			newRow.appendChild( newCell );
			
		}
		newRow.className = "cartHeaders";
		newRows[0] = newRow;
		
		/* create a row for each item in the cart */
		x=1;
		for( current in me.items ){
			newRow = document.createElement('div');
			item = me.items[current];
			
			for( header in me.cartHeaders ){
				
				newCell = document.createElement('div');
				info = me.cartHeaders[header].split("_");
				
				switch( info[0].toLowerCase() ){



					case "total":


outputValue = me.valueToCurrencyString(parseFloat((Math.floor(item.price*item.quantity * 100) / 100)) );


						
						break;
					case "increment":
						outputValue = me.valueToLink( "+" , "javascript:;" , "onclick=\"simpleCart.items[\'" + item.id + "\'].increment();\"" );

						break;
					case "decrement":
						outputValue = me.valueToLink( "-" , "javascript:;" , "onclick=\"simpleCart.items[\'" + item.id + "\'].decrement();\"" );
						break;
					case "remove":
						outputValue = me.valueToLink( "❌" , "javascript:;" , "onclick=\"simpleCart.items[\'" + item.id + "\'].remove();\"" );
						break;
					


case "thumb":

outputValue =  '<a class="tc-tiddlylink tc-tiddlylink-resolves" href="#'+item.name+'">'+item.thumb +'<\/a>';	
break;
case "price":
						

outputValue = me.valueToCurrencyString( item[ info[0].toLowerCase() ] ? item[info[0].toLowerCase()] : " " );

						break;
					default: 
						outputValue = item[ info[0].toLowerCase() ] ? item[info[0].toLowerCase()] : " ";
						break;
				}	
				
				for( var y=1,ylen=info.length;y<ylen;y++){
					option = info[y].toLowerCase();
					switch( option ){
						case "image":
						case "img":

							outputValue =  '<a class="tc-tiddlylink tc-tiddlylink-resolves" href="#'+item.name+'">'+ me.valueToImageString( outputValue )+'<\/a>';		
							break;
						case "input":
							outputValue = me.valueToTextInput( outputValue , "onchange=\"simpleCart.items[\'" + item.id + "\'].set(\'" + outputValue + "\' , this.value);\""  );
							break;
						case "div":
						case "span":
						case "h1":
						case "h2":
						case "h3":
						case "h4":
						case "p":
							outputValue = me.valueToElement( option , outputValue , "" );
							break;
						case "noheader":
							break;
						default:
							error( "unkown header option: " + option );
							break;
					}
				
				}		  
				newCell.innerHTML = outputValue;
				newCell.className = "item" + info[0];
				newRow.appendChild( newCell );
			}			
			newRow.className = "itemContainer";
			newRows[x] = newRow;
			x++;
		}
		
		
		
		for( current in me.cartDivs ){
			
			/* delete current rows in div */
			var div = me.cartDivs[current];
			while( div.childNodes[0] ){
				div.removeChild( div.childNodes[0] );
			}
			
			for(var j=0, jLen = newRows.length; j<jLen; j++){
				div.appendChild( newRows[j] );
			}
			
			
		}
	};

	me.addEventToArray = function ( array , functionCall , theEvent ) {
		for( var outlet in array ){
			var element = array[outlet];
			if( element.addEventListener ) {
				element.addEventListener(theEvent, functionCall , false );
			} else if( element.attachEvent ) {
			  	element.attachEvent( "on" + theEvent, functionCall );
			}
		}
	};
	
	
	me.createHiddenElement = function ( name , value ){
		var element = document.createElement("input");
		element.type = "hidden";
		element.name = name;
		element.value = value;
		return element;
	};
	
	
	
	/******************************************************
				Currency management
	 ******************************************************/
	
	me.currencySymbol = function() {		
		switch(me.currency){
			case JPY:
				return "&yen;";
			case EUR:
				return "EUR";
			case RUB:
				return "руб.";
			case GBP:
				return "&pound;";
			case USD:
			case CAD:
			case AUD:
			case NZD:
			case HKD:
			case SGD:
				return "&#36;";
			default:
				return "";
		}
	};
	
	
	me.currencyStringForPaypalCheckout = function( value ){
		if( me.currencySymbol() == "&#36;" ){
			return "$" + parseFloat( value ).toFixed(2);
		} else {
			return "" + parseFloat(value ).toFixed(2);
		}
	};
	
	/******************************************************
				Formatting
	 ******************************************************/
	
	
	me.valueToCurrencyString = function( value ) {
		return parseFloat( value )+" "+valuta ;
	};
	
	me.valueToPercentageString = function( value ){
		return parseFloat( 100*value ) + "%";
	};
	
	me.valueToImageString = function( value ){
		if( value.match(/<\s*img.*src\=/) ){
			return value;
		} else {
			return "<img src=\"" + value + "\" />";
		}
	};
	
	me.valueToTextInput = function( value , html ){
		return "<input type=\"text\" value=\"" + value + "\" " + html + " />";
	};
	
	me.valueToLink = function( value, link, html){
		return "<a href=\"" + link + "\" " + html + " >" + value + "</a>";
	};
	
	me.valueToElement = function( type , value , html ){
		return "<" + type + " " + html + " > " + value + "</" + type + ">";
	};
	
	/******************************************************
				Duplicate management
	 ******************************************************/
	
	me.hasItem = function ( item ) {
		for( var current in me.items ) {
			var testItem = me.items[current];
			var matches = true;
			for( var field in item ){
				if( typeof( item[field] ) != "function"	&& 
					field != "quantity"  				&& 
					field != "id" 						){
					if( item[field] != testItem[field] ){
						matches = false;
					}
				}	
			}
			if( matches ){ 
				return current; 
			}
		}
		return false;
	};
	
	
	
	
	/******************************************************
				Cart Update managment
	 ******************************************************/
	
	me.update = function() {
		if( !simpleCart.isLoaded ){
			simpleCart.load();
		} 

		me.updateTotals();
		me.updateView();
		me.save();
me.updateViewButtons();
me.addEventToArray( getElementsByClassName('itemcaption') , simpleCart.hide , "click");
me.addEventToArray( getElementsByClassName('itemThumb') , simpleCart.hide , "click");
	};
	
	me.updateTotals = function() {
		me.total = 0 ;
		me.quantity  = 0;
		for( var current in me.items ){
			var item = me.items[current];
			if( item.quantity < 1 ){ 
				item.remove();
			} else if( item.quantity !== null && item.quantity != "undefined" ){
				me.quantity = parseInt(me.quantity,10) + parseInt(item.quantity,10); 
			}
			if( item.price ){ 
			
me.total = parseFloat(me.total) + parseInt(item.quantity,10)*parseFloat(item.price);
me.total = Math.floor(me.total * 100) / 100;
 
			}
		}
		me.shippingCost = me.shipping();
		me.taxCost = parseFloat(me.total)*me.taxRate;
		me.finalTotal = me.shippingCost + me.taxCost + me.total;
	};
	
	me.shipping = function(){
		if( parseInt(me.quantity,10)===0 )
			return 0;
		var shipping = 	parseFloat(me.shippingFlatRate) + 
					  	parseFloat(me.shippingTotalRate)*parseFloat(me.total) +
						parseFloat(me.shippingQuantityRate)*parseInt(me.quantity,10),
			nextItem,
			next;
		for(next in me.items){
			nextItem = me.items[next];
			if( nextItem.shipping ){
				if( typeof nextItem.shipping == 'function' ){
					shipping += parseFloat(nextItem.shipping());
				} else {
					shipping += parseFloat(nextItem.shipping);
				}
			}
		}
		
		return shipping;
	}
	
	me.initialize = function() {
                       
		simpleCart.initializeView();
		simpleCart.load();
		simpleCart.update();
   



	};
				
}

/********************************************************************************************************
 *			Cart Item Object
 ********************************************************************************************************/
var ostatok=0;

function CartItem() {
	this.id = "c" + NextId++;
}
	CartItem.prototype.set = function ( field , value ){
		field = field.toLowerCase();
		if( typeof( this[field] ) != "function" && field != "id" ){
			if( field == "quantity" ){
				value = value.replace( /[^(\d|\.)]*/gi , "" );

				value = value.replace(/,*/gi, "");
				value = parseInt(value,10);
			} else if( field == "price"){
				value = value.replace( /[^(\d|\.)]*/gi, "");
value = value.replace( /\.$|[^\d.]/gi , "" );
				value = value.replace(/,*/gi , "");
				value = parseFloat( value );
			}
			if( typeof(value) == "number" && isNaN( value ) ){
				error( "Improperly formatted input.");
			} else {
				this[field] = value;
				this.checkQuantityAndPrice();
			}			
		} else {
			error( "Cannot change " + field + ", this is a reserved field.");
		}
		simpleCart.update();
	};
	
	CartItem.prototype.increment = function(){
		this.quantity = parseInt(this.quantity,10) + 1;

ostatok=parseFloat(this.ostatok.replace(/\s/g, ''));

if(ostatok<this.quantity && ostatok!=""){
no_good( ostatok, this.caption);
return;
};



	
		simpleCart.update();
	};
	
	CartItem.prototype.decrement = function(){
		if( parseInt(this.quantity,10) < 2 ){
			this.remove();
		} else {
			this.quantity = parseInt(this.quantity,10) - 1;

		

simpleCart.update();
		}
	};
	
	CartItem.prototype.print = function () {
		var returnString = '';
		for( var field in this ) {
			if( typeof( this[field] ) != "function" ) {
				returnString+= escape(field) + "=" + escape(this[field]) + "||";
			}
		}
		return returnString.substring(0,returnString.length-2);
	};
	
	
	CartItem.prototype.checkQuantityAndPrice = function() {
		if( !this.price || this.quantity == null || this.quantity == 'undefined'){ 
			this.quantity = 1;
			error('No quantity for item.');
		} else {
			this.quantity = ("" + this.quantity).replace(/,*/gi, "" );
			this.quantity = parseInt( ("" + this.quantity).replace( /[^(\d|\.)]*/gi, "") , 10); 
			if( isNaN(this.quantity) ){
				error('Quantity is not a number.');
				this.quantity = 1;
			}
		}
				
		if( !this.price || this.price == null || this.price == 'undefined'){
			this.price=0.00;
			error('No price for item or price not properly formatted.');
		} else {
			this.price = ("" + this.price).replace(/,*/gi, "" );
			this.price = parseFloat( ("" + this.price).replace( /[^(\d|\.)]*/gi, "") ); 
			if( isNaN(this.price) ){
				error('Price is not a number.');
				this.price = 0.00;
			}
		}
	};
	
	
	CartItem.prototype.parseValuesFromArray = function( array ) {
		if( array && array.length && array.length > 0) {
			for(var x=0, xlen=array.length; x<xlen;x++ ){
			
				/* ensure the pair does not have key delimeters */
				array[x].replace(/||/, "| |");
				array[x].replace(/\+\+/, "+ +");
			
				/* split the pair and save the unescaped values to the item */
				var value = array[x].split('=');
				if( value.length>1 ){
					if( value.length>2 ){
						for(var j=2, jlen=value.length;j<jlen;j++){
							value[1] = value[1] + "=" + value[j];
						}
					}
					this[ unescape(value[0]).toLowerCase() ] = unescape(value[1]);
				}
			}
			return true;
		} else {
			return false;
		}
	};
	
	CartItem.prototype.remove = function() {
		simpleCart.remove(this.id);
		simpleCart.update();

	};
	


/********************************************************************************************************
 *			Shelf Object for managing items on shelf that can be added to cart
 ********************************************************************************************************/

function Shelf(){
	this.items = {};
}	
	Shelf.prototype.readPage = function () {
		this.items = {};
		var newItems = getElementsByClassName( "simpleCart_shelfItem" );
		for( var current in newItems ){
			var newItem = new ShelfItem();
			this.checkChildren( newItems[current] , newItem );
			this.items[newItem.id] = newItem;
		}
	};
	
	Shelf.prototype.checkChildren = function ( item , newItem) {
		
		for(var x=0;item.childNodes[x];x++){
			
			var node = item.childNodes[x];
			if( node.className && node.className.match(/item_[^ ]+/) ){
				
				var data = /item_[^ ]+/.exec(node.className)[0].split("_");
				
				if( data[1] == "add" || data[1] == "Add" ){
					var tempArray = [];
					tempArray.push( node );
					var addFunction = simpleCart.Shelf.addToCart(newItem.id);
					simpleCart.addEventToArray( tempArray , addFunction , "click");
					node.id = newItem.id;
				} else {
					newItem[data[1]]  = node;
				}
			}		
			if( node.childNodes[0] ){ 
				this.checkChildren( node , newItem );	
			}	
		}
	};
	
	Shelf.prototype.empty = function () {
		this.items = {};
	};
	
	
	Shelf.prototype.addToCart = function ( id ) {
		return function(){
			if( simpleCart.Shelf.items[id]){
				simpleCart.Shelf.items[id].addToCart();
			} else {
				error( "Shelf item with id of " + id + " does not exist.");
			}
		};
	};
	

/********************************************************************************************************
 *			Shelf Item Object
 ********************************************************************************************************/


function ShelfItem(){
	this.id = "s" + NextId++;
}	
	ShelfItem.prototype.remove = function () {
		simpleCart.Shelf.items[this.id] = null;
	};
	
	
	ShelfItem.prototype.addToCart = function () {
		var outStrings = [],valueString;
		for( var field in this ){
			if( typeof( this[field] ) != "function" && field != "id" ){
				valueString = "";
				
				switch(field){
					case "price":
						if( this[field].value ){
							valueString = this[field].value; 
						} else if( this[field].innerHTML ) {
							valueString = this[field].innerHTML;
						}
						/* remove all characters from price except digits and a period */
						valueString = valueString.replace( /[^(\d|\.)]*/gi , "" );
valueString = valueString.replace( /\.$|[^\d.]/gi , "" );
						valueString = valueString.replace( /,*/ , "" );
						break;
					case "image":
						valueString = this[field].src;
						break;
					default:
						if( this[field].value ){
							valueString = this[field].value; 
						} else if( this[field].innerHTML ) {
							valueString = this[field].innerHTML;
						} else if( this[field].src ){
							valueString = this[field].src;
						} else {
							valueString = this[field];
						}
						break;
				}
				outStrings.push( field + "=" + valueString );
			}
		}
		
		simpleCart.add( outStrings );
	};
	



function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {

	createCookie(name,"",-1);
}


//*************************************************************************************************
	
var getElementsByClassName = function (className, tag, elm){
	if (document.getElementsByClassName) {
		getElementsByClassName = function (className, tag, elm) {
			elm = elm || document;
			var elements = elm.getElementsByClassName(className),
				nodeName = (tag)? new RegExp("\\b" + tag + "\\b", "i") : null,
				returnElements = [],
				current;
			for(var i=0, il=elements.length; i<il; i+=1){
				current = elements[i];
				if(!nodeName || nodeName.test(current.nodeName)) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	else if (document.evaluate) {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = "",
				xhtmlNamespace = "http://www.w3.org/1999/xhtml",
				namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace)? xhtmlNamespace : null,
				returnElements = [],
				elements,
				node;
			for(var j=0, jl=classes.length; j<jl; j+=1){
				classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
			}
			try	{
				elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
			}
			catch (e) {
				elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
			}
			while ((node = elements.iterateNext())) {
				returnElements.push(node);
			}
			return returnElements;
		};
	}
	else {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = [],
				elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
				current,
				returnElements = [],
				match;
			for(var k=0, kl=classes.length; k<kl; k+=1){
				classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
			}
			for(var l=0, ll=elements.length; l<ll; l+=1){
				current = elements[l];
				match = false;
				for(var m=0, ml=classesToCheck.length; m<ml; m+=1){
					match = classesToCheck[m].test(current.className);
					if (!match) {
						break;
					}
				}
				if (match) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	return getElementsByClassName(className, tag, elm);
};


/********************************************************************************************************
 *  Helpers
 ********************************************************************************************************/


String.prototype.reverse=function(){return this.split("").reverse().join("");};
Number.prototype.withCommas=function(){var x=6,y=parseFloat(this).toFixed(2).toString().reverse();while(x<y.length){y=y.substring(0,x)+","+y.substring(x);x+=4;}return y.reverse();};
Number.prototype.toCurrency=function(){return(arguments[0]?arguments[0]:"$")+this.withCommas();};


/********************************************************************************************************
 * error management 
 ********************************************************************************************************/

function error( message ){
	try{ 
		console.log( message ); 
	}catch(err){ 
	//	alert( message );
	}
}


var simpleCart = new Cart();





	simpleCart.email = document.querySelector('[title="$:/_Paypal_email"] > pre').innerHTML;
	simpleCart.checkoutTo = PayPal;
    simpleCart.currency = document.querySelector('[title="$:/_Paypal_currency"] > pre').innerHTML;
	simpleCart.taxRate  = 0.00;
	simpleCart.shippingFlatRate = document.querySelector('[title="$:/_Paypal_shipping"] > pre').innerHTML;

	simpleCart.cartHeaders = ["Thumb_noHeader" ,"Name_noHeader" , "caption_noHeader","Price_noHeader" , "decrement_noHeader" , "Quantity_noHeader", "increment_noHeader", "remove_noHeader", "Total_noHeader" ];



var elements = document.querySelectorAll('.tw-table-of-contents-top>ul');



document.querySelector(".tw-table-of-contents-top>ul").onclick = function(event) {

  for (var i = 0; i < elements.length; i++) {
elements[i].className="hover";
  }
};

document.querySelector(".tw-table-of-contents-top>ul").onmouseover = function(event) {

  for (var i = 0; i < elements.length; i++) {
elements[i].className="hover";
  }
};



var t;
function up() {
  for (var i = 0; i < elements.length; i++) {
elements[i].className = 'nohover';
  }


if ( pinframe==1){document.body.scrollIntoView(); }else{


  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);

  } else clearTimeout(t); 
  return false;
}
 

};

function no_good( ost, cap){
var fields = Object.create(null);
fields.title="$:/temp/_no_good";fields.text="<div style='padding:10px;'>"+"На складе осталось только " +  ost + " "+$tw.wiki.renderTiddler("text/plain","$:/constant/_quantityName")+" "+ cap+ "<\/div>";
fields.subtitle="Нехватка товара на складе";   
$tw.wiki.addTiddler(new $tw.Tiddler($tw.wiki.getModificationFields(),fields,$tw.wiki.getCreationFields()))
$tw.modal.display("$:/temp/_no_good");
}


if (document.querySelector('[type="search"]')){
document.querySelector('[type="search"]').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
window.location.hash="search";
    }
});

};








 

