const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8'),src=html.match(/<script>([\s\S]*?)<\/script>/)[1],nodes=new Map();
function el(){return {hidden:false,textContent:'',style:{},children:[],setAttribute(){},replaceChildren(...v){this.children=v},append(...v){this.children.push(...v)}}}
for(const id of ['north','south','east','west','trick','book-result','bids','board','status','sort','sound','help','rules','next','restart'])nodes.set(id,el());
const store=new Map();const c={document:{getElementById:id=>nodes.get(id),createElement:el},localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},setTimeout:()=>1,clearTimeout(){},Math,window:{},console};
vm.createContext(c);vm.runInContext(src.replace(/\}\)\(\);\s*$/,';globalThis.qa={score,state:x=>g=x,load,card};})();'),c);
const q=c.qa;
function state(bids,tricks,bags=[0,0]){return {hands:[[],[],[],[]],trick:[],lastTrick:[],bids,tricks,scores:[0,0],bags:[...bags],phase:'play',turn:0,leader:0,done:13,round:0,broken:true}}
let g=state([3,3,3,3],[4,2,3,4],[9,0]);q.state(g);q.score();assert.equal(g.scores[0],-39,'7 tricks against 6 bid and 9 prior bags: +61 -100');assert.equal(g.bags[0],0,'ten bags resets after penalty');
g=state([0,3,3,3],[0,3,3,7]);q.state(g);q.score();assert.equal(g.scores[0],160,'successful nil +100 with partner contract +60');
g=state([0,3,3,3],[2,3,3,5]);q.state(g);q.score();assert.equal(g.scores[0],-40,'failed nil -100 with partner meeting contract +60');
g=state([0,0,0,0],[3,3,3,4],[9,9]);q.state(g);q.score();assert.ok(g.bags.every(x=>x>=0&&x<10),'bags normalize under penalty');
console.log('Joker variant bag penalties and nil scoring passed');
