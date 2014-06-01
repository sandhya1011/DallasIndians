var jewelery = [
 {"name":"Ashok Gopaldas Jewelers","address":"100 S Central Expy #15, Richardson, TX 75080","phone":"(972) 761 - 0119","fax":"","hours":"Open Daily: 12:00 pm to 7:00 pm, Tuesday Closed","website":"" }
,{"name":"Govinidji's  Jewelers","address":"245 N. Central Expressway Richardson, TX 75080","phone":"972  231  6776","fax":"972  231 3232","hours":"Open Daily: 12:00 pm to 7:00 pm, Tuesday Closed","website":"www.govindjis.com" }
,{"name":"Malani  Jewelers","address":"300 South Central Expressway,Richardson,TX-75080","phone":"(972) 234-GOLD(4653","fax":"(972) 234-4655","hours":"Mon & Wed to Fri : 11:00 Am - 7:00 PM, Sat & Sun : 12:00 Am - 7:00 Pm Tuesday Closed","website":"http://www.malanijewelers.com/" }
,{"name":"Tilak Jewelers","address":"8300 N MacArthur Blvd, Suite 100, irving,TX- 75063","phone":"972 594 8252","fax":"","hours":"Open Daily: 11:00 Am to 7:00 pm, Sunday 11:00 am to 6:00 PM Tuesday Closed","website":"www.tilakjewelers.com" }
];

$(document).ready(function(){
	var r = new Array(), j = -1;
	r[++j] = '<tr><th>Name</th><th>Address</th><th>Phone</th><th>Fax</th><th>Hours</th><th>Website</th></tr>'
	 for (var key=0, size=jewelery.length; key<size; key++){
	     r[++j] ='<tr><td>';
	     r[++j] = jewelery[key].name;
	     r[++j] = '</td><td>';
	     r[++j] = jewelery[key].address;
	     r[++j] = '</td><td>';
	     r[++j] = jewelery[key].phone;
	     r[++j] = '</td><td>';
	     r[++j] = jewelery[key].fax;
	     r[++j] = '</td><td>';
	     r[++j] = jewelery[key].hours;
	     r[++j] = '</td><td>';
	     r[++j] = jewelery[key].website;
	     r[++j] = '</td></tr>';
	 }
	 $('#dataTable').html(r.join('')); 
});