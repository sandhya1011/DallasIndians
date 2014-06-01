var groceries = [
 {"name":"India Bazaar  (Plano)","address":"832 W Spring Creek Pkwy, Plano, TX -75023","phone":"(972)  312 0114","fax":"","hours":"8am to 11:00 pm Open 7 days!","website":"" }
 ,{"name":"India Bazaar  (Richardson)","address":"1425 E Belt Line Rd ,Richardson ,TX - 75081","phone":"(214) 272-3689","fax":"","hours":"10am to 9:30pm Open 7 days!","website":"" }
 ,{"name":"India Bazaar  (irving)","address":"8600 N MacArthur Blvd ,Irving ,TX -75063","phone":"(972)  312 0114","fax":"","hours":"10am to 9:30pm Open 7 days!","website":"" }
 ,{"name":"India Bazaar  (B-irving)","address":"535 W Airport Freeway, 110-B Irving ,TX-75062","phone":"(972)  312 0114","fax":"","hours":"10am to 9:30pm Open 7 days!","website":"" }
 ,{"name":"India Bazaar  (Frisco)","address":"8998 Preston Rd, Frisco, TX 75034","phone":"(972)  312 0114","fax":"","hours":"10am to 10:00pm Open 7 days!","website":"" }
 ,{"name":"Patel Brothers  (Irving)","address":"1009 W Rochelle Rd , Irving, TX -75062","phone":"(972) 570-2504","fax":"","hours":"10:30 am – 9:30 pm","website":"www.patelbros.com" }
 ,{"name":"Patel Brothers (Plano)","address":"6205 Coit Rd #201, Plano, TX 75024","phone":"(972) 398-1166","fax":"","hours":"10:00 am – 9:30 pm","website":"www.patelbros.com" }
 ,{"name":"Sai Namaste Plaza","address":"910 W Parker Rd # 107, Plano, TX 75023","phone":"(972) 516-1111","fax":"","hours":"10:00 am to 9:30 pm","website":"www.sainamasteplaza.com" }
 ,{"name":"SUBZI MANDI ( Irving)","address":"3445 N Belt Line Rd, Irving, TX 75062","phone":"(972) 870-1110","fax":"","hours":"10:00 am – 10:00 pm","website":"" }
 ,{"name":"","address":"4550 W Buckingham Rd, Garland, TX 75042","phone":"(972) 235-4300","fax":"","hours":"","website":"" }
 ,{"name":"TajMahal Imports","address":"10010 N MacArthur Blvd #150, Irving, TX 75063","phone":"(972) 584-1398","fax":"","hours":"10:00 am – 10:00 pm","website":"" }
 ,{"name":"Taj Mahal Imports","address":"100 S Central Expy #26C, Richardson, TX 75080","phone":"(972) 644-1329","fax":"","hours":"10:30 am – 8:00 pm","website":"" }
 ,{"name":"Taj Grocers","address":"10010 N MacArthur Blvd #150, Irving, TX 75063","phone":"(214) 730-6205","fax":"","hours":"10:00 am – 10:00 pm","website":"www.taj-grocers.com" }
 ,{"name":"Taj Grocers","address":"1009 W Rochelle Rd Irving, TX 75062","phone":"(972) 570-2504","fax":"","hours":"10:00 am – 10:00 pm","website":"" }
 ,{"name":"Tharkari Indian Grocery","address":"3317 Long Prairie Rd, Flower Mound, TX 75022","phone":"(972) 355-2611","fax":"","hours":"11:00 am-9:00 pm","website":"" }
];

$(document).ready(function(){
	var r = new Array(), j = -1;
	r[++j] = '<tr><th>Name</th><th>Address</th><th>Phone</th><th>Fax</th><th>Hours</th><th>Website</th></tr>'
	 for (var key=0, size=groceries.length; key<size; key++){
	     r[++j] ='<tr><td>';
	     r[++j] = groceries[key].name;
	     r[++j] = '</td><td>';
	     r[++j] = groceries[key].address;
	     r[++j] = '</td><td>';
	     r[++j] = groceries[key].phone;
	     r[++j] = '</td><td>';
	     r[++j] = groceries[key].fax;
	     r[++j] = '</td><td>';
	     r[++j] = groceries[key].hours;
	     r[++j] = '</td><td>';
	     r[++j] = groceries[key].website;
	     r[++j] = '</td></tr>';
	 }
	 $('#dataTable').html(r.join('')); 
});