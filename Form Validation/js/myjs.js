//javascript to validate form 
function validation() {
    var name = document.getElementById('fname').value;
    var phone = document.getElementById('numb').value;
    var email = document.getElementById('mail').value;
    var country = document.getElementById('location').value;
    var age = document.getElementsByName('age');
    var genre = document.getElementsByName('genre');
    
    var nameCheck = /^[A-Za-z. ]{3,30}$/ ;
    var numCheck = /[6-9][0-9]{9}/ ;
    var mailCheck = /[A-za-z]{3,}[A-za-z0-9.]{1,}@[A-Za-z]{3,}.[A-Za-z.]{2,6}/ ;
    //check for name
    if(nameCheck.test(name)) {
        document.getElementById('nameError').innerHTML = " ";
    }else {
        document.getElementById('nameError').innerHTML = "Invalid Name!";
        return false;
    }
    //check for phone number
    if(numCheck.test(phone)) {
        document.getElementById('phoneError').innerHTML = " ";
    }else {
        document.getElementById('phoneError').innerHTML = "Invalid Phone Number!";
        return false;
    }
    //check for mail
    if(mailCheck.test(email)) {
        document.getElementById('mailError').innerHTML = " ";
    }else {
        document.getElementById('mailError').innerHTML = "Invalid Email!";
        return false;
    }
    //check for country
    if(country != "") {
        document.getElementById('countryError').innerHTML = " ";
    }else {
        document.getElementById('countryError').innerHTML = "Please select an option!";
        return false;
    }
    //check for age
    var flag=0;
    for(var i = 0; i < 4; i++) {
        if(age[i].checked == true) {
            document.getElementById('radioError').innerHTML = " ";
        }else {
            flag++;
        }
    }
    if(flag == 4) {
        document.getElementById('radioError').innerHTML = "Please select an option!";
        return false;
    }
    //check  for genre
    var count = 0;
    for(var i = 0; i < 5; i++) {
        if(genre[i].checked == true) {
            document.getElementById('cboxError').innerHTML = " ";
        }else {
            count++;
        }
    }
    if(count == 5) {
        document.getElementById('cboxError').innerHTML = "This section cannot be empty!";
        return false;
    }

}