const menu=document.querySelector('.menu-btn'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Закрыть':'Меню';});
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));document.querySelectorAll('[data-group]').forEach(row=>row.hidden=btn.dataset.filter!=='Все'&&btn.dataset.filter!==row.dataset.group);}));
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
// Демонстрационная форма: без запросов, хранения данных и счётчиков.
const signupForm = document.querySelector('#signup-form');
signupForm?.addEventListener('submit', event => {
  event.preventDefault();
  const name = signupForm.querySelector('#name').value.trim();
  const result = document.querySelector('#signup-result');
  result.textContent = `${name || 'Спасибо'}, заявка принята!`;
  result.hidden = false;
  signupForm.reset();
});
