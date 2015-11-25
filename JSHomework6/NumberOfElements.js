function countElements(type) {

    var count = document.getElementsByTagName(type).length;
    document.getElementById('result').innerHTML = 'count: ' + count;
    document.getElementById('btnCount').style.display = 'none';
    console.log(type + ' count: ' + count);
}