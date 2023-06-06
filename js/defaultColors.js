let colors = [
    "#FF4C4C",
    "#FF794C",
    "#FFD24C",
    "#67CD67",
    "#33FFDD",
    "#3399FF",
    "#6A4CFF",
    "#FF66FF",
    "#FFFFFF",
    "#E6E6E6",
    "#CCCCCC",
    "#B3B3B3",
    "#999999",
    "#808080"];


function defaultColors() {
    for (let i = 0; i < colors.length; i++) {
        let obj = document.createElement('div');
        document.getElementById("modal-main").appendChild(obj);
        obj.id = colors[i];
        obj.className = "default__palette";
        obj.style.cssText = 'background-color:' + colors[i] + ';color:' + colors[i] + ';';
    }
}


function editColors() {
    for (let i = 0; i < colors.length; i++) {
        let obj = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "../imgs/Bin.svg")
        document.getElementById("modal-main-1").appendChild(obj);
        obj.id = colors[i] + 1;
        document.getElementById(obj.id).appendChild(img);
        obj.className = "default__palette";
        obj.style.cssText = 'background-color:' + colors[i] + ';color:' + colors[i] + ';';
        let toDeleteObject = document.getElementById(obj.id)
        toDeleteObject.addEventListener('click', function handleClick(e) {
            toDeleteObject.remove();
            document.getElementById(colors[i]).remove();
        })
    }
}

function changeColors()
{
    const col = document.getElementById('colorInput').value;
    const svg = document.getElementsByClassName('svg-color')
    document.getElementById('colorMInput').value = col;
    if(document.getElementById(col) == null ){
        if(document.getElementsByClassName('pallit').length < 21){
            svg[0].id = col;
            svg[0].addEventListener('click', function handleClick(event) {
                document.getElementById('colorMInput').value = svg[0].id;
            });
            svg[0].style.cssText = 'fill:' + col + ';color:' + col + ';';
        }
    }
}


function addColor()
{
        const col = document.getElementById('colorInput').value;
        let objMain = document.createElement('div');
        let objDelete = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "../imgs/Bin.svg")
        document.getElementById("modal-main-1").appendChild(objDelete);
        objDelete.id = col + 1;
        document.getElementById(objDelete.id).appendChild(img);
        document.getElementById("modal-main").appendChild(objMain);
        objMain.id = col;
        objMain.className = "default__palette";
        objDelete.className = "default__palette";
        objMain.style.cssText = 'background-color:' + col + ';color:' + col + ';';
        objDelete.style.cssText = 'background-color:' + col + ';color:' + col + ';';
        colors.push(objMain.id);
        objDelete.addEventListener('click', function handleClick(e) {
            objDelete.remove();
            let index = colors.indexOf(objMain.id)
            document.getElementById(colors[index]).remove();
        })

}


function load() {
    editColors()
    defaultColors();
}