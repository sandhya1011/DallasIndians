var temples = [
{"name":"Flower Mound Hindu Temple","address":"3325 Long Prairie Rd, Flower Mound, TX 75022","phone":"(214) 513-2564","fax":"","hours":"Monday-Friday 9:30 a.m. - 12:30 p.m. 5:30 p.m. - 8:30 p.m. Aarti - 11 a.m. & 8 p.m. Saturday-Sunday 9:30 a.m. - 1:30 p.m. 4:30 p.m. - 8:30 p.m. Aarti - Noon & 8 p.m.","website":"http://www.fmhtcc.org/"}
,{"name":"Ganesh Temple","address":"6508,K-Avenue Plano, Texas 75074","phone":"(972)943-9543","fax":"","hours":"Monday - Friday 9:30 am - 12:30 pm  5:30 pm - 8:30 pm Saturday - Sunday, Holidays 8:30 am - 8:30 pm Deeparadhana 12:00 noon & 7:45 pm","website":"http://www.htnt.org/"}
,{"name":"GuruDwara Temple ( Sikh Temple)","address":"506 Gatewood Dr Garland, TX 75043","phone":"(972)240-5348","fax":"","hours":"Sunday Services: 10AM - 1PM  Friday Services: 7PM - 9PM ","website":"http://gurdwaragarland.org/"}
,{"name":"GuruDwara Temple (Irving)","address":"834 N Nursery Rd Irving, TX 75061","phone":"(972) 579-9646 or (214) 289-8690","fax":"","hours":"Every Sunday : 11:30am – 1:00pm , Kirtan followed by Guru-Ka-Langar  Every Friday   : 7:30pm – 9:00pm ,Kirtan followed by Guru-Ka-Langar","website":"http://www.irvinggurdwara.org/"}
,{"name":"Hanuman Temple(Frisco)","address":"12030 Independence Pkwy, Frisco, TX 75035","phone":"(866)996-6767","fax":"","hours":"Monday - Friday 10:00 am - 1:00 pm  5:30 pm - 8:30 pm Weekends & National Holidays Saturday - Sunday, Holidays 9:30 am - 8:30 pm Aarti: 12 noon & 8 pm kakada Aarti:thu 8:15pm  Annadanam: Lunch evry Sat. Dinner during major Festivals","website":"www.dallashanuman.org/"}
,{"name":"DFW Hindu Temple","address":"1605 N Britain Rd Irving, TX 75061","phone":"(972) 445-3111","fax":"","hours":"Monday - Friday: 9:30am - 12:30pm | 5:30pm - 8:30pm Saturday - Sunday: 9:00am - 8:30pm aily Aarti: 12:00pm and 7:30pm","website":"http://dfwhindutemple.org/"}
,{"name":"Iskon temple","address":"5430 Gurley Ave, Dallas, TX 75223","phone":"(214) 827-6333","fax":"","hours":"Arati (Worship) :30 AM     Mangala Arati :00 AM     Deity Greeting :00 AM     Dhupa Arati 2 Noon     Raj-Bhoga Arati 4:00 PM     Vaikalika Arati 6:30 PM     Sandhya Arati 8:00 PM     Shayana Arati Darshan 4:30 AM     5 AM 7:00 AM     11 AM 12 Noon     12:30 PM 4:00 PM     7:00 PM 8:00 PM     8:45 PM Sunday Feast 5:30 PM     Arati & Kirtan 6:45 PM     Gita Class 7:30 PM     Feast 8:00 PM     Bhajans","website":"http://www.radhakalachandji.com/"}
,{"name":"Lakshmi Ganapathi Temple(Plano)","address":"3829 W Spring Creek Pkwy Suite # 110  Plano TX 75023","phone":"972-635-3456","fax":"","hours":"Monday to Friday 10:00AM to 12:30 PM 6:00PM to 8:30 PM Saturday & Sunday 10:00AM to 2:00PM  5:00PM to 9:00PM Yoga Class Saturday 8:30AM to 9:30AM  Bala Bharathi Sunday 3:00PM to 4:00PM","website":"http://hindutempleofplano.org/"}
,{"name":"Siridi Sai Baba Temple ( Irving)","address":"1037 W Rochelle Rd, Irving, TX 75062","phone":"(214) 236-4011","fax":"","hours":"Morning: 8.45 a.m - 1.00 p.m Evening: 6.00 p.m - 9.00 p.m Saturdays & Sundays: 9.00 a.m. - 9.00 p.m. Arati Schedule: 9.00 a.m - Kakada Arati 12.00 Noon - Madhyana Arati 6.30 p.m. - Dhoopa Arat 8.30 p.m. - Seja Arati (Except on special occasions like new year, etc.) Thursday Only 10.00 a.m. - Shirdi Sai Baba Abhishekam  7.30-8.30 p.m. - Bhajans  Monday Only  7.00 p.m. - Siva Abhishekam","website":"www.shirdisairam.org/‎"}
,{"name":"Shiridi Sai Baba temple ( Plano)","address":"2109 W Parker Rd #212, Plano, TX 75023","phone":"(469) 467-3388","fax":"","hours":"Week Days (Mon,Tue,Wed,Fri) 5:00 AM ~ 6:00 AM 12:00 PM ~ 01:00 PM 6:00 PM ~ 9:30 PM Thursdays 5:00 AM ~ 1:30 PM 3:30 PM ~ 9:30 PM Weekends (Sat,Sun) 5:00 AM ~ 9:30 PM  Aarti Timings 5:15 AM        Kakad Arati 12:00 PM Madhyan Arati 6:15 PM        Dhoop Arati 9:00 PM        Shej Arati","website":"www.shirdisaidallas.org/"}
,{"name":"Sri Lalitha Peetam","address":"910 W Parker Rd, #340, Plano, TX 75075","phone":"(972) 423-2009","fax":"","hours":"Saturday and Sunday 9:00 AM - 2:00 PM 6:00 PM - 8:30 PM Monday - Friday 10:30 AM - 12:30 PM 6:00 PM - 8:30 PM","website":"www.lalithapeetham.org/"}
,{"name":"Swami Narayana Temple","address":"4601 N StateHighway 161,Irving TX 75038 USA","phone":"(972) 243 8669","fax":"(972) 406 8481  ","hours":"Daily Arti 7:00 am & 7:00 pm (Summer), 6:30 pm (Winter) Darshan Timings: Monday - Friday 7:00 am to 12:00 noon 4:00 pm to 8:00 pm Saturday- Sunday 7:00 am to 8:00 pm","website":"http://www.baps.org/Global-Network/North-America/Dallas.aspx"}
,{"name":"Sri Hari Hara Peetam","address":"761, S Macarthur Blvd Suite # 115, Coppell,TX- 75019","phone":"214-257-8500","fax":"","hours":"MORNING 9.30 AM to 12.30 PM EVENING 5.30 PM to 8.30 PM (Every Mon, Tues, Wed, Fri) 5.30 PM to 9.30 PM  (Every Thur,Sat,Sun)","website":"http://srihariharapeetham.org/"}
];

$(document).ready(function(){
	var r = new Array(), j = -1;
	r[++j] = '<tr><th>Name</th><th>Address</th><th>Phone</th><th>Fax</th><th>Hours</th><th>Website</th></tr>'
	 for (var key=0, size=temples.length; key<size; key++){
	     r[++j] ='<tr><td>';
	     r[++j] = temples[key].name;
	     r[++j] = '</td><td>';
	     r[++j] = temples[key].address;
	     r[++j] = '</td><td>';
	     r[++j] = temples[key].phone;
	     r[++j] = '</td><td>';
	     r[++j] = temples[key].fax;
	     r[++j] = '</td><td>';
	     r[++j] = temples[key].hours;
	     r[++j] = '</td><td>';
	     r[++j] = temples[key].website;
	     r[++j] = '</td></tr>';
	 }
	 $('#dataTable').html(r.join('')); 
});