let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ]
let colContainer;

let rowCont = document.getElementsByClassName('row')




for (i in countriesInfo) {
    colContainer = document.createElement('div');
    console.log(colContainer)
    if (i % 2 === 0)
    {
        colContainer.setAttribute('class', 'col-lg-3 col-sm-5 offset-lg-0 offset-sm-1 offset-2 col-8 mb-3');
    }
    else
    {
        colContainer.setAttribute('class', 'col-lg-3 col-sm-5 offset-sm-0 offset-2 col-8 mb-3');
    }

    let {name,population,region,capital,flag} = countriesInfo[i];
    colContainer.innerHTML = `
    <div class="img-container">
        <img src="${flag}" alt="">
        <div class="txt-container">
        <h5>${name}</h5>
        <p><b>Population: </b>${population}</p>
        <p><b>Region: </b>${region}</p>
        <p><b>Capital: </b>${capital}</p>
        </div>
    </div>
    `;

    rowCont[0].append(colContainer);
    
}

















