// Using async function to fetch api
async function isroapi() {

  try {
    let gettingInput = await fetch("https://isro.vercel.app/api/centres");
    let res = await gettingInput.json();
    console.log(res);
  
    for (const key in res) {
      // Iterate with for in loop
      console.log(res[key]);
  
      var list = res[key];
  
      list.forEach((element) => {
        // Using the FOREACH method calls a each element
        // console.log(element.State);
        // console.log(element.Place);
        // console.log(element.name);
  
        var option = document.createElement("option"); // Using DOM add all the state name to display
        option.textContent = element.State;
        option.value = element.State;
        document.getElementById("inputItem").appendChild(option);
      });
    }
  } catch (error) {
    console.error(err);
  }
   
  }
  isroapi(); // async function call
  
  function searchSpaceCenters() {
    // Onclick trigger function
    let getItem = document.getElementById("inputItem").value; // Getting the value from the user
    //   let newArray = [];
    fetch("https://isro.vercel.app/api/centres")
      .then((resolve) => resolve.json())
  
      .then((data) => {
        for (const key in data) {
          console.log(data[key]);
  
          // let dis = data[getItem].result
  
          var result = data[key];
  
          result.forEach((element) => {
            if (element.State === getItem) {
              // Check with IF condition and display the data with template literals
  
              let message = `${getItem}
                      Name : ${element.name}
                      State : ${element.State}
                      Place : ${element.Place}`;
              // newArray.push(message);
              document.getElementById(
                "exampleModalLongTitle"
              ).textContent = ` ${getItem}`;
              document.getElementById(
                "item1"
              ).innerHTML = `<b>Name:</b> ${element.name}`;
              document.getElementById(
                "item2"
              ).innerHTML = `<b>State:</b> ${element.State}`;
              document.getElementById(
                "item3"
              ).innerHTML = `<b>Place:</b> ${element.Place}`;
            }
          });
        }
  
        let myModal = new bootstrap.Modal(
          document.getElementById("exampleModalCenter"),
          {
            keyboard: false,
          }
        );
        myModal.show();
        //  alert(newArray.join('')); // Display the data in alert box
      })
      .catch((err) => {
        alert("Error");
      });
  }
  