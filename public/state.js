export const KEY='climate-expedition-v1';
export function fresh(){return {version:1,intro:false,current:null,places:{}};}
export function place(state,id){return state.places[id]??={step:0,answers:{},complete:false,revision:1};}
export function restore(raw,destinations){try{
 const s=JSON.parse(raw);if(s?.version!==1||!s.places||typeof s.places!=='object'||Array.isArray(s.places))return fresh();
 const clean=fresh();clean.intro=!!s.intro;clean.current=destinations.some(d=>d.id===s.current)?s.current:null;
 for(const d of destinations){const p=s.places[d.id];if(!p||typeof p!=='object')continue;
  const restored=clean.places[d.id]={step:Number.isInteger(p.step)?Math.min(d.steps.length-1,Math.max(0,p.step)):0,answers:{},complete:!!p.complete,revision:Number.isInteger(p.revision)?p.revision:1};
  for(const [k,v] of Object.entries(p.answers||{})){
   if(!/^(0|[1-9]\d*)$/.test(k))continue;const step=d.steps[Number(k)];
   if(step&&Array.isArray(v))restored.answers[k]=[...new Set(v.filter(n=>Number.isInteger(n)&&n>=0&&n<step.options.length))];
  }
 }return clean;
}catch{return fresh();}}
export function solved(step,selected=[]){return step.correct.every(i=>selected.includes(i));}
export function finished(destination,p){return destination.steps.every((s,i)=>solved(s,p.answers[i]));}
export function validateProgress(state,destinations){
 for(const d of destinations){
  const p=state.places[d.id];if(!p)continue;
  if((p.revision||1)!==(d.revision||1)){p.step=0;p.answers={};p.complete=false;p.revision=d.revision||1;}
  for(const key of Object.keys(p.answers)){
   const step=d.steps[Number(key)];
   if(!step){delete p.answers[key];continue;}
   p.answers[key]=p.answers[key].filter(n=>step.correct.includes(n));
  }
  const firstUnsolved=d.steps.findIndex((s,i)=>!solved(s,p.answers[i]));
  p.step=Math.min(p.step,firstUnsolved<0?d.steps.length-1:firstUnsolved);
  p.complete=p.complete&&finished(d,p);
 }
 return state;
}
