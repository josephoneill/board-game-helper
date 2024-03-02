var V=Object.defineProperty;var F=(t,e,o)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var r=(t,e,o)=>(F(t,typeof e!="symbol"?e+"":e,o),o);import{d as $,r as C,c as A,v as S,x as L,y as c,F as G,G as P,C as q,z as W,H as O,I as U,A as w,J as p}from"./entry.mLqkS1Mg.js";var k=(t=>(t[t.TWO=2]="TWO",t[t.THREE=3]="THREE",t[t.FOUR=4]="FOUR",t[t.FIVE=5]="FIVE",t[t.SIX=6]="SIX",t[t.SEVEN=7]="SEVEN",t[t.EIGHT=8]="EIGHT",t[t.NINE=9]="NINE",t[t.TEN=10]="TEN",t[t.WAGER=11]="WAGER",t))(k||{}),d=(t=>(t[t.YELLOW=0]="YELLOW",t[t.WHITE=1]="WHITE",t[t.BLUE=2]="BLUE",t[t.GREEN=3]="GREEN",t[t.RED=4]="RED",t[t.PURPLE=5]="PURPLE",t))(d||{});const z=20,K=-20;class m{constructor(e=[]){r(this,"cardEntries");this.cardEntries=e}addCardEntry(e){if(this.cardEntries.includes(e)&&e!==11)throw new Error(`Cannot add duplicate card (${e}) to expedition!`);if(e===11&&this.getWagerCards().length>=3)throw new Error("Cannot add more than 3 wager cards!");this.cardEntries.push(e)}removeCardEntry(e){if(!this.cardEntries.includes(e))throw new Error(`Cannot remove card. Card ${e} does not exist!`);this.cardEntries.splice(this.cardEntries.indexOf(e),1)}getWagerCards(){return this.cardEntries.filter(e=>e===11)}getScore(){if(this.cardEntries.length===0)return 0;let e=0;const o=this.cardEntries.filter(l=>l!==11),n=this.getWagerCards();let u=K;return o.forEach(l=>{u+=l}),u*=n.length+1,e+=u,this.cardEntries.length>=8&&(e+=z),e}getCardEntries(){return this.cardEntries}}class X{constructor(){r(this,"yellow",0);r(this,"white",0);r(this,"blue",0);r(this,"green",0);r(this,"red",0);r(this,"purple",0)}}class j{constructor(){r(this,"yellowExpedition");r(this,"whiteExpedition");r(this,"blueExpedition");r(this,"greenExpedition");r(this,"redExpedition");r(this,"purpleExpedition");this.yellowExpedition=new m,this.whiteExpedition=new m,this.blueExpedition=new m,this.greenExpedition=new m,this.redExpedition=new m,this.purpleExpedition=new m}addCard(e,o){e.addCardEntry(o)}removeCard(e,o){e.removeCardEntry(o)}addYellowExpeditionCard(e){this.addCard(this.yellowExpedition,e)}removeYellowExpeditionCard(e){this.removeCard(this.yellowExpedition,e)}addWhiteExpeditionCard(e){this.addCard(this.whiteExpedition,e)}removeWhiteExpeditionCard(e){this.removeCard(this.whiteExpedition,e)}addBlueExpeditionCard(e){this.addCard(this.blueExpedition,e)}removeBlueExpeditionCard(e){this.removeCard(this.blueExpedition,e)}addGreenExpeditionCard(e){this.addCard(this.greenExpedition,e)}removeGreenExpeditionCard(e){this.removeCard(this.greenExpedition,e)}addRedExpeditionCard(e){this.addCard(this.redExpedition,e)}removeRedExpeditionCard(e){this.removeCard(this.redExpedition,e)}addPurpleExpeditionCard(e){this.addCard(this.purpleExpedition,e)}removePurpleExpeditionCard(e){this.removeCard(this.purpleExpedition,e)}getScoreBreakdown(){const e=this.yellowExpedition.getScore(),o=this.whiteExpedition.getScore(),n=this.blueExpedition.getScore(),u=this.greenExpedition.getScore(),l=this.redExpedition.getScore(),f=this.purpleExpedition.getScore();return{yellow:e,white:o,blue:n,green:u,red:l,purple:f}}getScore(e=null){const o=e??this.getScoreBreakdown();return Object.values(o).reduce((u,l)=>u+l,0)}}class N{constructor(){r(this,"lostCitiesRound");this.lostCitiesRound=new j}addCard(e){const{card:o,expeditionType:n}=e;switch(n){case d.YELLOW:{this.lostCitiesRound.addYellowExpeditionCard(o);break}case d.WHITE:{this.lostCitiesRound.addWhiteExpeditionCard(o);break}case d.BLUE:{this.lostCitiesRound.addBlueExpeditionCard(o);break}case d.GREEN:{this.lostCitiesRound.addGreenExpeditionCard(o);break}case d.RED:{this.lostCitiesRound.addRedExpeditionCard(o);break}case d.PURPLE:{this.lostCitiesRound.addPurpleExpeditionCard(o);break}}}removeCard(e){const{card:o,expeditionType:n}=e;switch(n){case d.YELLOW:{this.lostCitiesRound.removeYellowExpeditionCard(o);break}case d.WHITE:{this.lostCitiesRound.removeWhiteExpeditionCard(o);break}case d.BLUE:{this.lostCitiesRound.removeBlueExpeditionCard(o);break}case d.GREEN:{this.lostCitiesRound.removeGreenExpeditionCard(o);break}case d.RED:{this.lostCitiesRound.removeRedExpeditionCard(o);break}case d.PURPLE:{this.lostCitiesRound.removePurpleExpeditionCard(o);break}}}getScoreBreakdown(){return this.lostCitiesRound.getScoreBreakdown()}getScore(e){return this.lostCitiesRound.getScore(e)}getRound(){return this.lostCitiesRound}}class J{constructor(){r(this,"lostCitiesRounds");r(this,"currentRoundIndex");r(this,"currentRound");this.lostCitiesRounds=[new N,new N,new N],this.currentRound=this.lostCitiesRounds[0],this.currentRoundIndex=0}setCurrentRound(e){if(e>=this.lostCitiesRounds.length)throw new RangeError("Round index is too large");this.currentRound=this.lostCitiesRounds[e],this.currentRoundIndex=e}startNewRound(){this.lostCitiesRounds.push(new N),this.setCurrentRound(this.lostCitiesRounds.length-1)}getCurrentRoundManager(){return this.currentRound}}const Q={class:"lost-city-expedition"},Z={class:"card__container"},ee=["onClick"],te=c("span",{class:"card-button__text card-button__text--top"},"W",-1),oe=c("span",{class:"card-button__text card-button__text--bottom"},"W",-1),re=[te,oe],ne=["onClick"],se={class:"card-button__text card-button__text--top face-card-button__text"},ie={class:"card-button__text card-button__text--bottom face-card-button__text"},de=c("hr",null,null,-1),y=$({__name:"LostCitiesExpedition",props:{expeditionType:{type:Number,default:d.YELLOW,required:!0},score:{type:Number,default:0,required:!0},color:{type:String,default:"initial",required:!0},textColor:{type:String,default:"white",required:!1}},emits:["add-card","remove-card"],setup(t,{expose:e,emit:o}){const n=o;class u{constructor(){r(this,"one",!1);r(this,"two",!1);r(this,"three",!1);r(this,"four",!1);r(this,"five",!1);r(this,"six",!1);r(this,"seven",!1);r(this,"eight",!1);r(this,"nine",!1);r(this,"ten",!1);r(this,"wager",[!1,!1,!1])}}const l=t,f=["two","three","four","five","six","seven","eight","nine","ten"],h=C(new u);function T(a){const i=new u;a.forEach(s=>{s===k.WAGER?(i.wager.unshift(!0),i.wager.pop()):i[k[s].toLowerCase()]=!0}),h.value=i}function b(a){return f[a-2]}function x(a,i=!1,s=0){const E=b(a),g=d[l.expeditionType].toLowerCase();return i?h.value.wager[s]:h.value[E],{"--card-background":`url(/board-game-helper/img/${g}_card.png) no-repeat`,"--card-text-color":l.textColor,"--card-hover-color":l.color}}const _=A(()=>{const a=new Map;for(let i=2;i<=10;i++){const s=b(i),E=h.value[s];a.set(i,{"card-button":!0,"face-card-button":!0,"card-button--selected":E})}for(let i=1;i<=3;i++){const s=h.value.wager[i-1];a.set(`wager-${i}`,{"card-button":!0,"wager-card-button":!0,"card-button--selected":s})}return a});function v(a,i=!1){const s=b(a),E=i?h.value.wager[a]:h.value[s],g=E;i?h.value.wager[a]=!E:h.value[s]=!E;const B=i?k.WAGER:k[s.toUpperCase()];g?n("remove-card",{card:B,expeditionType:l.expeditionType}):n("add-card",{card:B,expeditionType:l.expeditionType})}return e({loadExpeditionCardData:T}),(a,i)=>(S(),L("div",Q,[c("div",Z,[(S(),L(G,null,P(3,s=>c("button",{key:`wager-card-button-${s}`,class:O(_.value.get(`wager-${s}`)),style:U(x(s-1,!0)),onClick:E=>v(s-1,!0)},re,14,ee)),64)),(S(),L(G,null,P(9,s=>c("button",{key:`face-card-button-${s}`,class:O(_.value.get(s+1)),style:U(x(s+1)),onClick:E=>v(s+1)},[c("span",se,W(s+1),1),c("span",ie,W(s+1),1)],14,ne)),64))]),de,q(" Score: "+W(t.score),1)]))}}),ae={class:"toolbar"},le={class:"toolbar-title"},ce=$({__name:"Toolbar",setup(t){const e=C("Lost Cities Calculator");return(o,n)=>(S(),L("div",ae,[c("span",le,W(e.value),1)]))}}),ue={class:"lost-cities-container"},pe={class:"lost-cities__expeditions"},he={class:"lost-cities__round-controls"},Ee=["disabled"],Ce=["disabled"],xe={class:"lost-city__score-container"},ve=$({__name:"lostcities",setup(t){const e=C(0),o=C(new X),n=C(0),u=C(null),l=C(null),f=C(null),h=C(null),T=C(null),b=C(null),x=new J;function _(R){x.getCurrentRoundManager().addCard(R),a()}function v(R){x.getCurrentRoundManager().removeCard(R),a()}function a(){o.value=x.getCurrentRoundManager().getScoreBreakdown(),e.value=x.getCurrentRoundManager().getScore(o.value)}function i(){n.value=n.value-1,x.setCurrentRound(n.value),E()}function s(){n.value=n.value+1,x.setCurrentRound(n.value),E()}function E(){const{yellowExpedition:R,whiteExpedition:I,blueExpedition:H,greenExpedition:M,redExpedition:Y,purpleExpedition:D}=x.getCurrentRoundManager().getRound();g(u.value,R.getCardEntries()),g(l.value,I.getCardEntries()),g(f.value,H.getCardEntries()),g(h.value,M.getCardEntries()),g(T.value,Y.getCardEntries()),g(b.value,D.getCardEntries()),B()}function g(R,I){R.loadExpeditionCardData(I)}function B(){a()}return(R,I)=>(S(),L("div",null,[w(p(ce)),c("div",ue,[c("div",pe,[w(p(y),{expeditionType:p(d).YELLOW,score:o.value.yellow,color:"#fbbb23",textColor:"black",onAddCard:_,onRemoveCard:v,round:n.value,ref_key:"yellowExpeditionComp",ref:u},null,8,["expeditionType","score","round"]),w(p(y),{expeditionType:p(d).WHITE,score:o.value.white,color:"#d2dcd9",textColor:"black",onAddCard:_,onRemoveCard:v,round:n.value,ref_key:"whiteExpeditionComp",ref:l},null,8,["expeditionType","score","round"]),w(p(y),{expeditionType:p(d).BLUE,score:o.value.blue,color:"#2b60a0",textColor:"white",onAddCard:_,onRemoveCard:v,round:n.value,ref_key:"blueExpeditionComp",ref:f},null,8,["expeditionType","score","round"]),w(p(y),{expeditionType:p(d).GREEN,score:o.value.green,color:"#37a31b",textColor:"white",onAddCard:_,onRemoveCard:v,round:n.value,ref_key:"greenExpeditionComp",ref:h},null,8,["expeditionType","score","round"]),w(p(y),{expeditionType:p(d).RED,score:o.value.red,color:"#db3e17",onAddCard:_,onRemoveCard:v,round:n.value,ref_key:"redExpeditionComp",ref:T},null,8,["expeditionType","score","round"]),w(p(y),{expeditionType:p(d).PURPLE,score:o.value.purple,color:"#524286",onAddCard:_,onRemoveCard:v,round:n.value,ref_key:"purpleExpeditionComp",ref:b},null,8,["expeditionType","score","round"])])]),c("div",he,[c("button",{disabled:n.value===0,onClick:i}," Previous Round ",8,Ee),c("button",{disabled:n.value===2,onClick:s}," Next Round ",8,Ce)]),c("div",xe,[c("p",null,"Total Score: "+W(e.value),1)])]))}});export{ve as default};
