$(document).ready(function() {
  console.log("document ready");
  db.collection("cards")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(doc => {
        let card = $("<img>");
        card.attr("src", doc.data().path);
        $("#display-area").append(card);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
});
