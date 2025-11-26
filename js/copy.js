document.querySelectorAll('.copy').forEach(el => {
  el.onclick = () => navigator.clipboard.writeText(el.textContent);
});
