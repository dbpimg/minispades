const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const js=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const nodes=new Map,store=new Map;let timerId=0;const timers=new Map;
function element(){return {style:{},children:[],hidden:false,textContent:'',className:'',setAttribute(){},replaceChildren(...x){this.children=x},append(...x){this.children.push(...x)}}}
for(const id of ['north','south','east','west','trick','bids','board','status','sort','sound','help','rules','next','restart'])nodes.set(id,element());
const ctx={document:{getElementById:id=>nodes.get(id),createElement:element},localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},setTimeout:(fn)=>{const id=++timerId;timers.set(id,fn);return id},clearTimeout:(id)=>timers.delete(id),console,Math,window:{}};
vm.createContext(ctx);vm.runInContext(js.replace(/\}\)\(\);\s*$/,';globalThis.test={state:()=>g,play,bid,legal,score,start,cpu,chooseBot};})();'),ctx);
const t=ctx.test;assert.equal(t.state().phase,'bid');assert.equal(t.state().hands.flat().length,52);
t.bid(3);assert.equal(t.state().phase,'play');
assert.equal(t.state().hands[0].length,13);
const first=t.legal(0)[0];assert.equal(t.play(0,first.id),true);if(t.state().turn!==0)t.cpu();
assert.equal(t.state().hands[0].length,12);assert.ok(store.has('minispades-solo-v1'));
let ticks=0;while(t.state().phase==='play'&&t.state().done<13&&ticks++<110){if(t.state().turn===0){const p=t.legal(0)[0];assert.ok(p);assert.equal(t.play(0,p.id),true);if(t.state().turn!==0)t.cpu()}else{const entry=timers.entries().next().value;assert.ok(entry,'AI should be scheduled');timers.delete(entry[0]);entry[1]()}}assert.ok(ticks<110,'match should finish in bounded turns');assert.equal(t.state().phase,'scored');assert.equal(t.state().done,13);assert.equal(t.state().hands.flat().length,0);
const saved=JSON.parse(store.get('minispades-solo-v1'));assert.equal(saved.done,13);assert.deepEqual(Array.from(saved.scores),Array.from(t.state().scores));
nodes.get('next').onclick();assert.equal(t.state().round,1);assert.equal(t.state().leader,1,'second hand opens with West');t.bid(3);assert.equal(t.state().turn,1,'West takes opening lead automatically');assert.equal(t.state().phase,'play');assert.ok(timers.size>0,'AI opening play was queued');const opening=timers.entries().next().value;timers.delete(opening[0]);opening[1]();assert.equal(t.state().trick[0].p,1,'AI successfully opened second hand');t.start();assert.equal(t.state().round,0);assert.equal(t.state().phase,'bid');
console.log('MiniSpades integration: 13 tricks, AI handoff, saved match, scoring and restart passed');
