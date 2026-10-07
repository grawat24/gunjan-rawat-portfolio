(function(){
  var chips=document.querySelectorAll('.chip');
  var sections=document.querySelectorAll('[data-group]');
  var status=document.querySelector('.filter-status');
  function apply(f){
    sections.forEach(function(s){
      var groups=s.getAttribute('data-group').split(' ');
      s.hidden=!(f==='all'||groups.indexOf(f)>-1);
    });
    chips.forEach(function(c){c.setAttribute('aria-pressed',String(c.dataset.filter===f));});
    if(status){var n=document.querySelectorAll('[data-group]:not([hidden]) .card').length;status.textContent='Showing '+n+' samples';}
  }
  chips.forEach(function(c){
    c.addEventListener('click',function(){
      apply(c.dataset.filter);
      if(history.replaceState)history.replaceState(null,'',c.dataset.filter==='all'?location.pathname:'#'+c.dataset.filter);
      document.getElementById('work').scrollIntoView({block:'start'});
    });
  });
  var h=location.hash.slice(1);
  if(['docs','kalp','flexera','marketing'].indexOf(h)>-1)apply(h);
  var y=document.getElementById('yr'); if(y)y.textContent=new Date().getFullYear();
})();
