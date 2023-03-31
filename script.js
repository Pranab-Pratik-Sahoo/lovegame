const loveForm = document.querySelector('#love-form');
const resultDiv = document.querySelector('#result');

loveForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const yourName = document.querySelector('#your-name').value;
  const theirName = document.querySelector('#their-name').value;
  const score = Math.floor(Math.random() * 101);
  const message = `Your love compatibility score is ${score}%`;
  resultDiv.textContent = message;
});
