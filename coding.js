let selectedTriangle = null


function clickeddiv1(divNumber)
{
    // console.log("Clicked Div" + divNumber)

    if(selectedTriangle == null)
    {
        console.log("Theres no triangle selected")
    }
    else
    {
        movetriangle(selectedTriangle, divNumber)
    }
}

function selectTriangle(triangleNumber)
{
    console.log("Clicked Triangle" + triangleNumber)

    let triangleChosen = document.getElementById("triangle" + triangleNumber);
    


    if(triangleNumber == selectedTriangle)
    {
        selectedTriangle = null
        console.log("Unselected Triangle" + triangleNumber)
        triangleChosen.style.backgroundColor = "transparent"
    }
    else
    {
        selectedTriangle = triangleNumber
        console.log("Selected Triangle" + triangleNumber)
        triangleChosen.style.backgroundColor = "red"
    }
}

function movetriangle(selectedTriangle, divNumber)
{
    let triangleChosen = document.getElementById("triangle" + selectedTriangle);
    // let centererX = triangleChosen.style.
    let centererX = 25
    let centererY = 25

    let divChosen = document.getElementById("div" + divNumber);
    let rect = divChosen.getBoundingClientRect()

    triangleChosen.style.position = "absolute"    
    triangleChosen.style.left = rect.left - centererX + "px";
    triangleChosen.style.top = rect.top - centererY + "px";

    console.log("Moved triangle" + selectedTriangle + " to div" + divNumber)

}


// var rect = positionOfTriangle.getBoundingClientRect();
// console.log(rect.top, rect.left);


// positionOfTriangle.getBoundingClientRect() 



function placeDiv(x_pos, y_pos) {
    var d = document.getElementById('yourDivId');
    d.style.position = "absolute";
    d.style.left = x_pos+'px';
    d.style.top = y_pos+'px';
  }