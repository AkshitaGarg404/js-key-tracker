window.addEventListener('keydown', (e) => {
  const insert = document.getElementById('insert');

  insert.innerHTML = `
    <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>key</small>
    </div>

    <div class="key">
      ${e.keyCode}
      <small>keyCode</small>
    </div>

    <div class="key">
      ${e.code}
      <small>code</small>
    </div>
  `;
});