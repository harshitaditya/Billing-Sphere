
  function showTab(tabName) {
    document.getElementById('asia').classList.add('hidden');
    document.getElementById('other').classList.add('hidden');
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    if (tabName === 'asia') {
      document.getElementById('asia').classList.remove('hidden');
      document.querySelectorAll('.tab')[0].classList.add('active');
    } else {
      document.getElementById('other').classList.remove('hidden');
      document.querySelectorAll('.tab')[1].classList.add('active');
    }
  }


  document.getElementById('mobile-menu').addEventListener('click',()=>{
    document.getElementById('list').classList.toggle('active');
  });


