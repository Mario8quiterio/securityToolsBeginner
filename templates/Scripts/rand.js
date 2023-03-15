function apiOnload(){
    var apiK = localStorage.getItem("apiKey");
    if(localStorage.getItem("apiKey")){
        document.getElementById("tInputapi").setAttribute('value', apiK);
    }
}
function saveAPI(){
    var apiK = document.getElementById("tInputapi").value;
    localStorage.setItem("apiKey", apiK);
  };
function checkIng(ipList){
    var er = [];
    apiK = localStorage.getItem("apiKey");
    const options = {
        method: 'GET',
        url: 'https://www.virustotal.com/api/v3/ip_addresses/' + '8.8.8.8',
        headers: {
            accept: 'application/json',
            'x-apikey': apiK
        }
    };
    
    axios
        .request(options)
        .then(function (response) {
            displayM(ipList);
        })
        .catch(function (error) {
            console.error("YOO", error);
        });
    
    
};
function flaggedOptions(option){
    var csv = document.getElementById("csv");
    var txt = document.getElementById("txt");
    var input = document.getElementById("input");

    var csv2 = document.getElementsByClassName("tro1");
    var txt2 = document.getElementsByClassName("tro2");
    var input2 = document.getElementsByClassName("tro3");
    if(option == 'csv'){
        csv.style.display = "flex";
        csv2[0].style.backgroundColor = "rgb(189, 129, 129)";
        txt.style.display = "none";
        txt2[0].style.backgroundColor = "rgb(130, 40, 40)";
        input.style.display = "none";
        input2[0].style.backgroundColor = "rgb(130, 40, 40)";
    }
    if(option == 'txt'){
        csv.style.display = "none";
        csv2[0].style.backgroundColor = "rgb(130, 40, 40)";
        txt.style.display = "flex";
        txt2[0].style.backgroundColor = "rgb(189, 129, 129)";
        input.style.display = "none";
        input2[0].style.backgroundColor = "rgb(130, 40, 40)";
    }
    if(option == 'input'){
        csv.style.display = "none";
        csv2[0].style.backgroundColor = "rgb(130, 40, 40)";
        txt.style.display = "none";
        txt2[0].style.backgroundColor = "rgb(130, 40, 40)";
        input.style.display = "flex";
        input2[0].style.backgroundColor = "rgb(189, 129, 129)";
    }
}

function downloadCSV(){
    console.log("SUCCESS");
};
function lookUpIp(ipS, ipList, er) {
    apiK = localStorage.getItem("apiKey");
    var info, maliciousCount;
    var temp = [], temp2 = [];
    for(var i = 0; i < ipS.length; i++){
        
        const options = {
            method: 'GET',
            url: 'https://www.virustotal.com/api/v3/ip_addresses/' + ipS[i],
            headers: {
              accept: 'application/json',
              'x-apikey': apiK
            }
          };
        
        axios
          .request(options)
          .then(function (response) {
              temp = [];
              console.log(response.data);
              info = response.data;
              maliciousCount = info.data.attributes.last_analysis_stats.malicious;
              temp.push(info.data.id);
              temp.push(maliciousCount);
              ipList.push(temp);
          })
          .catch(function (error) {
              console.error("YOO", error);
          });
    } 
    temp = [];
    temp.push("Ip Address");
    temp.push("Flag Count");
    ipList.unshift(temp);
   
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
async function displayM(ipList) {
    await sleep(3000);
    console.log(ipList);
    var rows = ipList;
    var table = document.createElement("table");
    for (var i = 0; i < rows.length; i++){
        var cells = rows[i];
        if (cells.length > 1) {
            var row = table.insertRow(-1);
            for (var j = 0; j < cells.length; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = cells[j];   
            }
        }
    }
    var dvCSV = document.getElementById("dvCSV");
    dvCSV.innerHTML = "";
    dvCSV.appendChild(table);
    var x = document.getElementsByClassName("buttonCons");
    x[0].style.display = "flex";


};
function Upload() {
    if(!localStorage.getItem("apiKey")){
        alert("MAKE SURE YOU GOT API KEY");
        return;
    }
    console.log("YUP YUP");
    var fileUpload = document.getElementById("fileUpload");
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    var deli = document.getElementById("delimeter").value;
    var er = [];
    const ipS = [];
    const ipList = [];
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var rows = e.target.result.split("\n")
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(deli);
                    if (cells.length > 1) {
                        for (var j = 0; j < cells.length; j++) {
                            if(Number.isInteger(Number(String(cells[j]).charAt(0))) && cells[j] != ""){
                                ipS.push(cells[j]);
                            }
                            
                        }
                    }
                }
                console.log(ipS);
                lookUpIp(ipS, ipList, er);
                checkIng(ipList);
                //displayM(ipList);
                //buttonCreate();
                
            }
            
            reader.readAsText(fileUpload.files[0]);
            
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }
    
}




