document.getElementById('getApi').addEventListener('click', getApi);
document.getElementById('getApi').addEventListener('onkeydown', getApi);

function getApi() {
  ip = encodeURI(document.getElementById('ipAddress').value);
  console.log("IP address :", ip);

  fetch(`https://get.geojs.io/v1/ip/country.json?ip=${ip}`, {
    method: 'GET',
  })
    .then(function (data) {
      return data.json();
    })
    .then((data) => {
      let output = `
            <div>
                <div style="color:black; width:10rem; background-color:white; border-radius: 10px;" class="p-3">        
                    <p class="m-0" style="font-width:bold; font-size:2rem;">${data[0].country}</p>
                    <p class="m-0" style="font-width:bold; font-size:2rem;"> ${data[0].name.toUpperCase()}</sup></p>
                </div>
            </div>
            `;
      console.log('printing data', data);
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err))
}
