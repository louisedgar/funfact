function getFact() {
  fetch("http://5e19bc3ccc623b00146789fc.mockapi.io/funfact/facts")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const fact = id => data.filter(el => el.id === id);
      showFact(fact(generateNumber()));
    });
}

function generateNumber() {
  let result = Math.round(Math.random() * 50);
  return result;
}

function showFact(facts) {
  const { fact, subFact, url } = facts[0];
  let modal = "";
  modal += `<img
              src="${url}"
              class="img-fluid rounded-circle"
              alt=""
              id="mod-img"
            />
            <p id="fact">${fact}</p>
            <p id="sub-fact">${subFact}</p>`;

  document.getElementById("content").innerHTML = modal;
}
