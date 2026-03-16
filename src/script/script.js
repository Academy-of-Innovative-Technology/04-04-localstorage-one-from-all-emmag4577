var Database = {
  keyName: "Mutant Database",
  data: []
};

function loadDataSource() {
function loadDataSource() {

  var storedData = localStorage.getItem(Database.keyName);

  var parsedData = JSON.parse(storedData);

  Database.data = parsedData.response;

}

}


function searchForMutantByAlias(mutantAlias) {

  var index = -1;

  Database.data.forEach(function(mutant, i){

    if(mutant.name.alias === mutantAlias){
      index = i;
    }

  });

  if (index === -1) {
    alert("Invalid Alias");
  } else {
    displayData(index);
  }

}


function displayData(index) {

  var mutant = Database.data[index];

  var htmlTemplate = `
  
  <div class="card mutant-card shadow-lg p-4">

    <div class="row align-items-center">

      <div class="col-md-4 text-center">
        <img src="${mutant.image}" class="mutant-image img-fluid rounded">
      </div>

      <div class="col-md-8">

        <h2 class="alias">${mutant.name.alias}</h2>
        <h5 class="real-name">${mutant.name.firstName} ${mutant.name.lastName}</h5>

        <hr>

        <p><strong>Gender:</strong> ${mutant.profile.gender}</p>
        <p><strong>Eyes:</strong> ${mutant.profile.eyes}</p>
        <p><strong>Hair:</strong> ${mutant.profile.hair}</p>
        <p><strong>Height:</strong> ${mutant.profile.height}</p>

        <p><strong>Powers:</strong> ${mutant.powers.join(", ")}</p>
        <p><strong>Affiliations:</strong> ${mutant.affiliation.join(", ")}</p>

      </div>

    </div>

  </div>

  `;

  document.querySelector("#results-section").innerHTML = htmlTemplate;
}


function getSelectedValue() {
  const selectElement = document.querySelector('#select-mutant');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedText = selectedOption.text;

  // TEST METHOD // REMOVE OR HIDE
  alert(selectedText);

  searchForMutantByAlias(selectedText);

}

document.querySelector("#select-mutant").addEventListener('change', getSelectedValue);



// CALL BY DEFAULT
loadDataSource();