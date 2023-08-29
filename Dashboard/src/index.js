function carding(username, promise) {
  return `<div class="card">
            <div class="card2">
              <h1>${username} : </h1>
              <br/>${promise}
              </div>
          </div>`;
}
fetch("https://boardofhopes.somee.com/api/PromiseHandler/GetPromsies")
  .then((res) => res.json())
  .then((cards) => {
    let container = document.getElementById("warpper");
    for (let card of cards) {
      container.innerHTML =
        carding(card.Name, card.Promise) + "\n" + container.innerHTML;
    }
  });
