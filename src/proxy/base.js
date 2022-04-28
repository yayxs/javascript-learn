let target = ['a','b']
const p = new Proxy(target,{
  get(t,p,r){
    console.log(t)
    console.log(p);
    console.log(r);
  },
  set(t,p,v){

  }
})
p[0]
