document.addEventListener("DOMContentLoaded", function () {

createOrdersChart();
createUsersChart();
createRevenueChart();
createCategoryChart();

});



function createOrdersChart(){

new Chart(document.getElementById("ordersChart"),{

type:"bar",

data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
label:"Orders",
data:[12,19,8,15,10,22,17],
backgroundColor:"#0d6efd"
}]
},

options: {
responsive: true,
maintainAspectRatio: false
}
});

}



function createUsersChart(){

new Chart(document.getElementById("usersChart"),{

type:"pie",

data:{
labels:["Active","Inactive"],
datasets:[{
data:[875,325],
backgroundColor:["#28a745","#dc3545"]
}]
},
options: {
responsive: true,
maintainAspectRatio: false
}
});

}



function createRevenueChart(){

new Chart(document.getElementById("revenueChart"),{

type:"line",

data:{
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[{
label:"Revenue",
data:[5000,7000,9000,8000,10000,12450],
borderColor:"#6610f2",
fill:false
}]
},

options: {
responsive: true,
maintainAspectRatio: false
}
});

}



function createCategoryChart(){

new Chart(document.getElementById("categoryChart"),{

type:"doughnut",

data:{
labels:["Electronics","Clothing","Books","Others"],
datasets:[{
data:[40,25,20,15],
backgroundColor:[
"#007bff",
"#ffc107",
"#28a745",
"#6c757d"
]
}]
},

options:{
responsive:true,
maintainAspectRatio:false,
cutout:'65%'
}

});

}




function downloadReport(){

const { jsPDF } = window.jspdf;

const report = document.getElementById("reportContent");

html2canvas(report).then(canvas => {

const img = canvas.toDataURL("image/png");

const pdf = new jsPDF("p","mm","a4");

const imgWidth = 190;

const pageHeight = 295;

const imgHeight = canvas.height * imgWidth / canvas.width;

pdf.addImage(img,"PNG",10,10,imgWidth,imgHeight);

pdf.save("dashboard-report.pdf");

});

}
