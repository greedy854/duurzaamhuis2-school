//Tijd

function displayTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();

    //? is een korte versie van if-else
    //dus als 'hour' waar is dus (hour < 10) zet een 0 ervoor

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    
    document.getElementById("js--clock").innerHTML = hour + ":" + min;
}

setInterval(displayTime , 1000);



const labels = [
    "Gas in m3",
    "Waterverbruik",
    "Stroom in kWh",
];

const data = {
    labels: labels,
    datasets:[
        {
            label: "Verbruik van gebruiker per maand",
            data: [207.140317, 300, 297.050817,],
            backgroundColor: ['rgba(0, 255, 77, 0.35)', 'rgba(61, 209, 211, 0.35)', 'rgba(225, 225, 28, 0.35)', ]
        }
    ]
}


const config = {
    type: 'doughnut',
    data: data,
}

const config2 = {
    type:'bar',
    data:data,
}


new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);


