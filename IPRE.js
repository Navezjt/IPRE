function getCookie(Name) {
	//document.cookie="radio_central=It works, woo-hoo!";
	cookies = document.cookie.split(';');
	for (i = 0; i < cookies.length; i++) {
		//document.write(cookies[i] + "<br />");
		isthere = cookies[i].indexOf(Name + "=");
		if (isthere != -1) {
			//document.write("Aha! I have found it! At " + cookies[i] + "<br />");
			right_number = i;
			cookie_u_want = cookies[right_number].split("=");
			cookie_content = cookie_u_want[1];
			return cookie_content;
		}
	}
}

currentID = -1
hasPlayed = 0;
a = 0;
while(channels[a]) {
channels[a].id = a;
a = a + 1;
}
categoryList = []
a = 0;
b = 0;
while(channels[a]) {
while(channels[a].category.split(", ")[b]) {
categoryList.push(channels[a].category.split(", ")[b])
b = b + 1;
}
a = a + 1;
b = 0;
}


categoryList = new Set(categoryList);
categoryList = Array.from(categoryList).sort();

function catArray(cat) {
tempChans = []
a = 0;
while(channels[a]) {
b = 0;
while(channels[a] && channels[a].category.split(", ")[b]) {
if(channels[a].category.split(", ")[b] == cat && channels[a].status == "live") {
tempChans.push(channels[a]);
b = b + 1;
}
else {
b = b + 1;
}
}
a = a + 1;
}
return tempChans;
}

function searchResults(q) {
q = q.toLowerCase()
tempChans = []
a = 0;
while(channels[a]) {
if(channels[a].description.toLowerCase().includes(q)) {
tempChans.push(channels[a])
}
else {
if(channels[a].name.toLowerCase().includes(q)) {
tempChans.push(channels[a])
}
else {
if(channels[a].name.toLowerCase() == q) {
tempChans.push(channels[a])
}
else {
if(channels[a].description.toLowerCase() == q) {
tempChans.push(channels[a])
}
else {
if(channels[a].category.toLowerCase().includes(q)) {
tempChans.push(channels[a])
}
else {
if(channels[a].category.toLowerCase() == q) {
tempChans.push(channels[a])
}
}
}
}
}
}
a = a + 1;
}
return tempChans;
}

function addRating() {
z = 0;
while(channels[z]) {
if(parseInt(getCookie("STATION_" + z + "_RATING")) > -1) {
channels[z].rating = parseInt(getCookie("STATION_" + z + "_RATING"));
}
else {
channels[z].rating = 0;
}
z = z + 1;
}
myString = "STATION_" + currentID + "_RATING"
if(document.getElementsByTagName("audio")[0].paused == false) {
if(parseInt(getCookie(myString)) > -1) {
newRating = parseInt(getCookie(myString)) + 1;
document.cookie = myString + "=" + newRating + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}
else {
document.cookie = myString + "=0" + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}
}
console.log(getCookie(myString));
}
function clearAllRatings() {
z = 0;
while(channels[z]) {
document.cookie = "STATION_" + z + "_RATING=0" + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
channels[z].rating = 0;
z = z + 1;
}
}
addRating();


topchannels = [];

function TopChan0() {
TOP = [];
//alert("TopChan");
v = 0;
a = 0;
maxval = 0;
while(channels[a]) {
console.log(channels[a].rating)
if(channels[a].rating > maxval) {
maxval = channels[a].rating;
}
a = a + 1;
}
a = 0;
v = maxval;
while(v >= 0) {
if(channels[a].rating == v) {
TOP.push(channels[a])
console.log("Added " + channels[a].name);
}
if(channels[a + 1]) {
a = a + 1;
}
else {
a = 0;
v = v - 1;
}
}
if(TOP[0]) {
topchannels = TOP;
}
else {
topchannels = channels;
}
}

TopChan0();

function TopChan() {
return topchannels;
}

function showMenu() {
document.getElementsByTagName("navmenu")[0].id="visible"
//document.getElementsByTagName("navbutton")[0].getElementsByTagName("a")[0].href="javascript:hideMenu()";
}
function hideMenu() {
document.getElementsByTagName("navmenu")[0].id=""
//document.getElementsByTagName("navbutton")[0].getElementsByTagName("a")[0].href="javascript:showMenu()";
}
//showMenu();
function clearChanList() {
document.getElementsByTagName("topchan")[0].innerHTML = "";
}
function addShow(name, img, url) {
if(currentID == searchResults(name)[0].id) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href="javascript:showNP()"><chantab><img src="' + img + '"></img><chantext>' + name + '</chantext></chantab></a>';
}
else {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href="javascript:playChan(' + "'" + url + "', " + "'" + name + "', " + "'" + img + "'" + ')"><chantab><img src="' + img + '"></img><chantext>' + name + '</chantext></chantab></a>';
}
}
function addCat(label) {
linkstring = 'javascript:showCategory("' + label + '")';
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<chanhead><a href=' + "'" + linkstring + "'>" + label + '</a></chanhead>'
}
function addHead(label) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<chanhead>' + label + '</chanhead>'
}
function playPause() {
hasPlayed = 1;
document.getElementsByTagName("navcenter")[0].getElementsByTagName("a")[3].href = "javascript:showNP()";
if(document.getElementsByTagName("audio")[0].paused) {
document.getElementsByTagName("audio")[0].src = document.getElementsByTagName("audio")[0].src;
document.getElementsByTagName("audio")[0].play();
document.getElementsByTagName("npc")[0].getElementsByTagName("img")[0].src = "stop.png";
}
else {
document.getElementsByTagName("audio")[0].pause();
document.getElementsByTagName("audio")[0].src = document.getElementsByTagName("audio")[0].src;
document.getElementsByTagName("npc")[0].getElementsByTagName("img")[0].src = "play.png";
}
}
function showPlay() {
document.getElementsByTagName("npbg")[0].id = "visible";
document.getElementsByTagName("npimg")[0].id = "visible";
document.getElementsByTagName("nptitle")[0].id = "visible";
document.getElementsByTagName("npc")[0].id = "visible";
}
function hidePlay() {
document.getElementsByTagName("npbg")[0].id = "";
document.getElementsByTagName("npimg")[0].id = "";
document.getElementsByTagName("nptitle")[0].id = "";
document.getElementsByTagName("npc")[0].id = "";
}
function showBrowse() {
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Browse");
z = 0;
while(z < 20 && z < TopChan().length) {
if(TopChan()[z].status == "live") {
addShow(TopChan()[z].name, TopChan()[z].img, TopChan()[z].url)
}
z = z + 1
}
hideMenu();
hidePlay();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}
function doSearch() {
w = document.getElementsByTagName("input")[0].value;
arr = searchResults(w);
if(document.getElementsByTagName("input")[0] == document.activeElement && event.keyCode === 13) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML.split("<br>")[0] + "<br>";
mySearchResults = [];
a = 0;
//console.log(arr[0].name);
while(a < arr.length) {
console.log("Name: " + arr[a].name);
if(arr[a].status == "live") {
mySearchResults.push(arr[a])
}
a = a + 1;
}
a = 0;
console.log(w);
console.log(searchResults(w)[0]);
console.log(mySearchResults);
if(mySearchResults[0]) {
a = 0;
while(a < mySearchResults.length) {
b = a;
a = b;
console.log(a)
console.log(mySearchResults.length)
addShow(mySearchResults[a].name, mySearchResults[a].img, mySearchResults[a].url)
a = b + 1;
console.log("Test: " + mySearchResults[a])
console.log("Test: " + a)
}
}
else {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML.split("<br>")[0] + "</input><br />No results found.";
}
document.getElementsByTagName("input")[0].value = w;
document.getElementsByTagName("input")[0].addEventListener("keyup", doSearch);
}
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}
function showSearch() {
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Search");
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML.split("</input>")[0] + '<input type="text" value="Search for genres, stations, or podcasts" onclick="this.select()"></input><br />';
document.getElementsByTagName("input")[0].addEventListener("keyup", doSearch);
hideMenu();
hidePlay();
}

function showCategory(cat) {
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
z = 0;
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + "<chanhead>" + cat + "</chanhead>";
while(catArray(cat)[z]) {
addShow(catArray(cat)[z].name, catArray(cat)[z].img, catArray(cat)[z].url)
z = z + 1;
}
hideMenu();
hidePlay();
document.getElementsByTagName("chanhead")[0].scrollIntoView()
}

function showExplore() {
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
z = 0;
while(categoryList[z]) {
x = 0;
if(catArray(categoryList[z])[0]) {
addCat(categoryList[z]);
}
z = z + 1
}
hideMenu();
hidePlay();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}
function showNP() {
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
showPlay();
}
function playChan(url, name, img) {
hideMenu();
currentID = searchResults(name)[0].id;
document.getElementsByTagName("topchan")[0].innerHTML = "";
document.getElementsByTagName("audio")[0].src = url;
playPause();
document.getElementsByTagName("np")[0].innerHTML = '<npbg><img src="' + img + '"></npbg><npimg><img src="' + img + '"></npimg><nptitle>' + name + '</nptitle><npc><a href="javascript:playPause()"><img src="stop.png" id="icon2"></img></a></npc>';
showPlay();
}

clearChanList();
showBrowse();
setInterval(addRating, 1000);
