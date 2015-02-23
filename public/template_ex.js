var xhr = new XMLHttpRequest();
var source   = document.getElementById("profiletemplate").innerHTML;
var template = Handlebars.compile(source);
var profile_handle = document.getElementById("wrapper");
var html;
var ajaxresponse = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);  
     // console.log(response);
      html = template(response);
      profile_handle.innerHTML += html;


    } else {
      console.log('There was a problem with the request.');
    }
  }
}

xhr.open('GET', 'http://localhost:3000/api', true);
xhr.onreadystatechange = ajaxresponse;
xhr.send(null);