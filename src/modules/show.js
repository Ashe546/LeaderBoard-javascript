const show = (name, score) => {
  document.querySelector('.leaderboard-score').innerHTML += `<ul >        
      <li>${name} : ${score}</li></ul>`;
};

export default show;
