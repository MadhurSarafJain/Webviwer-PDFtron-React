/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[9],{570:function(xa,ta,n){function qa(fa){fa.Va();fa.advance();var ca=fa.current.textContent;fa.Eb();return ca}function na(fa){var ca=[];for(fa.Va();fa.advance();){var ma=fa.jb();"field"===ma?ca.push(String(fa.ja("name"))):Object(a.j)("unrecognised field list element: "+ma)}fa.Eb();return ca}function oa(fa,ca){return ca?"false"!==fa:"true"===fa}function ha(fa,ca){var ma=fa.jb();switch(ma){case "javascript":return{name:"JavaScript",
javascript:fa.current.textContent};case "uri":return{name:"URI",uri:fa.ja("uri")};case "goto":ma=null;fa.Va();if(fa.advance()){var ka=fa.ja("fit");ma={page:fa.ja("page"),fit:ka};if("0"===ma.page)Object(a.j)("null page encountered in dest");else switch(ca=ca(Number(ma.page)),ka){case "Fit":case "FitB":break;case "FitH":case "FitBH":ma.top=ca.xa({x:0,y:fa.ja("top")||0}).y;break;case "FitV":case "FitBV":ma.left=ca.xa({x:fa.ja("left")||0,y:0}).x;break;case "FitR":ka=ca.xa({x:fa.ja("left")||0,y:fa.ja("top")||
0});ca=ca.xa({x:fa.ja("right")||0,y:fa.ja("bottom")||0});ca=new w.d(ka.x,ka.y,ca.x,ca.y);ma.top=ca.y1;ma.left=ca.x1;ma.bottom=ca.y2;ma.right=ca.x2;break;case "XYZ":ka=ca.xa({x:fa.ja("left")||0,y:fa.ja("top")||0});ma.top=ka.y;ma.left=ka.x;ma.zoom=fa.ja("zoom")||0;break;default:Object(a.j)("unknown dest fit: "+ka)}ma={name:"GoTo",dest:ma}}else Object(a.j)("missing dest in GoTo action");fa.Eb();return ma;case "submit-form":ma={name:"SubmitForm",url:fa.ja("url"),format:fa.ja("format"),method:fa.ja("method")||
"POST",exclude:oa(fa.ja("exclude"),!1)};ca=fa.ja("flags");ma.flags=ca?ca.split(" "):[];for(fa.Va();fa.advance();)switch(ca=fa.jb(),ca){case "fields":ma.fields=na(fa);break;default:Object(a.j)("unrecognised submit-form child: "+ca)}fa.Eb();return ma;case "reset-form":ma={name:"ResetForm",exclude:oa(fa.ja("exclude"),!1)};for(fa.Va();fa.advance();)switch(ca=fa.jb(),ca){case "fields":ma.fields=na(fa);break;default:Object(a.j)("unrecognised reset-form child: "+ca)}fa.Eb();return ma;case "hide":ma={name:"Hide",
hide:oa(fa.ja("hide"),!0)};for(fa.Va();fa.advance();)switch(ca=fa.jb(),ca){case "fields":ma.fields=na(fa);break;default:Object(a.j)("unrecognised hide child: "+ca)}fa.Eb();return ma;case "named":return{name:"Named",action:fa.ja("name")};default:Object(a.j)("Encountered unexpected action type: "+ma)}return null}function la(fa,ca,ma){var ka={};for(fa.Va();fa.advance();){var ja=fa.jb();switch(ja){case "action":ja=fa.ja("trigger");if(ca?-1!==ca.indexOf(ja):1){ka[ja]=[];for(fa.Va();fa.advance();){var ra=
ha(fa,ma);Object(b.isNull)(ra)||ka[ja].push(ra)}fa.Eb()}else Object(a.j)("encountered unexpected trigger on field: "+ja);break;default:Object(a.j)("encountered unknown action child: "+ja)}}fa.Eb();return ka}function ia(fa){return new ea.a(fa.ja("r")||0,fa.ja("g")||0,fa.ja("b")||0,fa.ja("a")||1)}function z(fa,ca){var ma=fa.ja("name"),ka=fa.ja("type")||"Type1",ja=fa.ja("size"),ra=ca.xa({x:0,y:0});ja=ca.xa({x:Number(ja),y:0});ca=ra.x-ja.x;ra=ra.y-ja.y;ma={name:ma,type:ka,size:Math.sqrt(ca*ca+ra*ra)||
0,strokeColor:[0,0,0],fillColor:[0,0,0]};for(fa.Va();fa.advance();)switch(ka=fa.jb(),ka){case "stroke-color":ma.strokeColor=ia(fa);break;case "fill-color":ma.fillColor=ia(fa);break;default:Object(a.j)("unrecognised font child: "+ka)}fa.Eb();return ma}function aa(fa){var ca=[];for(fa.Va();fa.advance();){var ma=fa.jb();switch(ma){case "option":ma=ca;var ka=ma.push;var ja=fa;ja={value:ja.ja("value"),displayValue:ja.ja("display-value")||void 0};ka.call(ma,ja);break;default:Object(a.j)("unrecognised options child: "+
ma)}}fa.Eb();return ca}function r(fa,ca){var ma=fa.ja("name"),ka={type:fa.ja("type"),quadding:fa.ja("quadding")||"Left-justified",maxLen:fa.ja("max-len")||-1},ja=fa.ja("flags");Object(b.isString)(ja)&&(ka.flags=ja.split(" "));for(fa.Va();fa.advance();)switch(ja=fa.jb(),ja){case "actions":ka.actions=la(fa,["C","F","K","V"],function(){return ca});break;case "default-value":ka.defaultValue=qa(fa);break;case "font":ka.font=z(fa,ca);break;case "options":ka.options=aa(fa);break;default:Object(a.j)("unknown field child: "+
ja)}fa.Eb();return new window.da.Annotations.ka.wa(ma,ka)}function h(fa,ca){switch(fa.type){case "Tx":try{if(Object(ba.c)(fa.actions))return new e.a.DatePickerWidgetAnnotation(fa,ca)}catch(ma){Object(a.j)(ma)}return new e.a.TextWidgetAnnotation(fa,ca);case "Ch":return fa.flags.get(x.WidgetFlags.COMBO)?new e.a.ChoiceWidgetAnnotation(fa,ca):new e.a.ListWidgetAnnotation(fa,ca);case "Btn":return fa.flags.get(x.WidgetFlags.PUSH_BUTTON)?new e.a.PushButtonWidgetAnnotation(fa,ca):fa.flags.get(x.WidgetFlags.RADIO)?
new e.a.RadioButtonWidgetAnnotation(fa,ca):new e.a.CheckButtonWidgetAnnotation(fa,ca);case "Sig":return new e.a.SignatureWidgetAnnotation(fa,ca);default:Object(a.j)("Unrecognised field type: "+fa.type)}return null}function f(fa,ca,ma,ka){var ja=[],ra={};fa.Va();var pa=[],sa={},ua=[];Object(y.a)(function(){if(fa.advance()){var wa=fa.jb();switch(wa){case "calculation-order":pa="calculation-order"===fa.jb()?na(fa):[];break;case "document-actions":sa=la(fa,["Init","Open"],ca);break;case "pages":wa=[];
for(fa.Va();fa.advance();){var Fa=fa.jb();switch(Fa){case "page":Fa=wa;var Da=Fa.push,Ba=fa,Ma=ca,Ha={number:Ba.ja("number")};for(Ba.Va();Ba.advance();){var Ia=Ba.jb();switch(Ia){case "actions":Ha.actions=la(Ba,["O","C"],Ma);break;default:Object(a.j)("unrecognised page child: "+Ia)}}Ba.Eb();Da.call(Fa,Ha);break;default:Object(a.j)("unrecognised page child: "+Fa)}}fa.Eb();ua=wa;break;case "field":Fa=r(fa,ca(1));ra[Fa.name]=Fa;break;case "widget":wa={border:{style:"Solid",width:1},backgroundColor:[],
fieldName:fa.ja("field"),page:fa.ja("page"),index:fa.ja("index")||0,rotation:fa.ja("rotation")||0,flags:[],isImporting:!0};(Fa=fa.ja("appearance"))&&(wa.appearance=Fa);(Fa=fa.ja("flags"))&&(wa.flags=Fa.split(" "));for(fa.Va();fa.advance();)switch(Fa=fa.jb(),Fa){case "rect":Da=fa;Ba=ca(Number(wa.page));Fa=Ba.xa({x:Da.ja("x1")||0,y:Da.ja("y1")||0});Da=Ba.xa({x:Da.ja("x2")||0,y:Da.ja("y2")||0});Fa=new w.d(Fa.x,Fa.y,Da.x,Da.y);Fa.normalize();wa.rect={x1:Fa.x1,y1:Fa.y1,x2:Fa.x2,y2:Fa.y2};break;case "border":Fa=
fa;Da={style:Fa.ja("style")||"Solid",width:Fa.ja("width")||1,color:[0,0,0]};for(Fa.Va();Fa.advance();)switch(Ba=Fa.jb(),Ba){case "color":Da.color=ia(Fa);break;default:Object(a.j)("unrecognised border child: "+Ba)}Fa.Eb();wa.border=Da;break;case "background-color":wa.backgroundColor=ia(fa);break;case "actions":wa.actions=la(fa,"E X D U Fo Bl PO PC PV PI".split(" "),ca);break;case "appearances":Fa=fa;Da=Object(ba.b)(wa,"appearances");for(Fa.Va();Fa.advance();)if(Ba=Fa.jb(),"appearance"===Ba){Ba=Fa.ja("name");
Ma=Object(ba.b)(Da,Ba);Ba=Fa;for(Ba.Va();Ba.advance();)switch(Ha=Ba.jb(),Ha){case "Normal":Object(ba.b)(Ma,"Normal").data=Ba.current.textContent;break;default:Object(a.j)("unexpected appearance state: ",Ha)}Ba.Eb()}else Object(a.j)("unexpected appearances child: "+Ba);Fa.Eb();break;case "extra":Fa=fa;Da=ca;Ba={};for(Fa.Va();Fa.advance();)switch(Ma=Fa.jb(),Ma){case "font":Ba.font=z(Fa,Da(1));break;default:Object(a.j)("unrecognised extra child: "+Ma)}Fa.Eb();Fa=Ba;Fa.font&&(wa.font=Fa.font);break;case "captions":Da=
fa;Fa={};(Ba=Da.ja("Normal"))&&(Fa.Normal=Ba);(Ba=Da.ja("Rollover"))&&(Fa.Rollover=Ba);(Da=Da.ja("Down"))&&(Fa.Down=Da);wa.captions=Fa;break;default:Object(a.j)("unrecognised widget child: "+Fa)}fa.Eb();(Fa=ra[wa.fieldName])?(wa=h(Fa,wa),ja.push(wa)):Object(a.j)("ignoring widget with no corresponding field data: "+wa.fieldName);break;default:Object(a.j)("Unknown element encountered in PDFInfo: "+wa)}return!0}return!1},function(){fa.Eb();ma({calculationOrder:pa,widgets:ja,fields:ra,documentActions:sa,
pages:ua,custom:[]})},ka)}n.r(ta);n.d(ta,"parse",function(){return f});var a=n(3),b=n(1);n.n(b);var e=n(145),w=n(4),ea=n(9),y=n(27),ba=n(128),x=n(20)}}]);}).call(this || window)
