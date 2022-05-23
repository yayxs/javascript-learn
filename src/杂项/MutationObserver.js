const elem  = document.querySelector('#elem')


const ob = new MutationObserver((mutationRecords)=>{
  console.log('mutationRecords ',mutationRecords)
})
ob.observe(elem,{
  characterDataOldValue:true
})