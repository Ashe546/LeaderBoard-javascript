import './style.scss';
import show from './modules/show';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lGcv4uHBWKY5C0XB2342/scores';

submit.addEventListener('click', () => {
  const user = document.getElementById('user');
  const score = document.getElementById('score');
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: user.value.trim(),
      score: score.value.trim(),
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  user.value = '';
  score.value = '';
});

async function getScore() {
  const requestURL = url;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scores = await response.json();
  const { result } = scores;
  document.querySelector('.leaderboard-score').innerHTML = '';
  result.forEach((score) => {
    show(score.user, score.score);
  });
}

refresh.addEventListener('click', getScore);