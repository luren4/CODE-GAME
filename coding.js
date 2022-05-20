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
    // let svg = document.getElementById("triup" + triangleNumber);
    // let svgfill = svg.getAttribute("fill")
    
    console.log(triangleChosen)

    // svgfill = "blue"
    // console.log(svgfill)



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
        // triangleChosen.style.backgroundColor = "red"
    }
}





function movetriangle(selectedTriangle, divNumber)
{
    let triangleChosen = document.getElementById("triangle" + selectedTriangle);
    let tri = document.getElementById("triup" + selectedTriangle);

    console.log(triangleChosen)

    rotateBack(selectedTriangle)
   
    // let centererX = triangleChosen.style.
    let centererX = 60
    let centererY = 80


    let divChosen = document.getElementById("div" + divNumber);
    let rect = divChosen.getBoundingClientRect()

    tri.style.marginTop = "0px"
    triangleChosen.style.position = "absolute"    
    // triangleChosen.style.transformOrigin = "50% 50%;"
    triangleChosen.style.left = rect.left - centererX + "px";
    triangleChosen.style.top = rect.top - centererY + "px";



    console.log("Moved triangle" + selectedTriangle + " to div" + divNumber)


}






let angleTriangle1 = 0
let angleTriangle2 = 0
let angleTriangle3 = 0
let angleTriangle4 = 0
let angleTriangle5 = 0
let angleTriangle6 = 0
let angleTriangle7 = 0
let angleTriangle8 = 0
let angleTriangle9 = 0

function rotateBack(selectedTriangle)
{
    let divtriangle = document.getElementById("triangle" + selectedTriangle);
    let tri = document.getElementById("triup" + selectedTriangle);

    divtriangle.setAttribute("data-rotated-steps", 0)

    divtriangle.style.transform = "rotate(0deg)"

}


function rotateTriangle(selectedTriangle)
{
    let divtriangle = document.getElementById("triangle" + selectedTriangle);

    let tri = document.getElementById("triup" + selectedTriangle);

    let rotatedSteps = parseInt(divtriangle.getAttribute("data-rotated-steps"))
    divtriangle.setAttribute("data-rotated-steps", rotatedSteps + 1)


    divtriangle.style.position = "absolute"    
    // if (rotatedSteps == 0)
    // {
    //     divtriangle.style.transformOrigin = "76.66% 50%;"


    // }

    // divtriangle.style.transformOrigin = "50% 57.74%";

    divtriangle.style.transformOrigin = "50% 50%";


    console.log(divtriangle.style.transformOrigin)
    tri.style.marginTop = "0px";



    let triangleChosen = document.getElementById("triangle" + selectedTriangle);


    console.log(tri)


     if (rotatedSteps == 5)
     {
         divtriangle.setAttribute("data-rotated-steps", rotatedSteps - 5)



     }

     console.log(rotatedSteps)


     if(rotatedSteps == 0)
     {        
        divtriangle.style.transformOrigin = "50% 57.74%";
        divtriangle.style.top = parseInt(divtriangle.style.top.split("px")[0]) - 60 + "px"
        divtriangle.style.transform = "rotate(" + (rotatedSteps + 1) * 60 + "deg)"
     }


     if(rotatedSteps == 1)
     {
        divtriangle.style.transformOrigin = "50% 57.74%";
        divtriangle.style.top = parseInt(divtriangle.style.top.split("px")[0]) + 60 + "px"
        divtriangle.style.transform = "rotate(" + (rotatedSteps + 1) * 60 + "deg)"
     }


     if(rotatedSteps == 2)
     {
        tri.style.marginTop = "26.79492px";
        divtriangle.style.top = parseInt(divtriangle.style.top.split("px")[0]) + 0 + "px"
        divtriangle.style.transform = "rotate(" + (rotatedSteps + 1) * 60 + "deg)"
     }


     if(rotatedSteps == 3)
     {
        tri.style.marginTop = "0px";
        divtriangle.style.transformOrigin = "50% 57.74%";
        divtriangle.style.transform = "rotate(" + (rotatedSteps + 1) * 60 + "deg)"
     }


     if (rotatedSteps == 4)
     {
        divtriangle.style.transformOrigin = "50% 57.74%";
        divtriangle.style.top = parseInt(divtriangle.style.top.split("px")[0]) - 60 + "px"
        divtriangle.style.transform = "rotate(" + (rotatedSteps + 1) * 60 + "deg)"

     }


     if (rotatedSteps == 5)
     {
        divtriangle.style.top = parseInt(divtriangle.style.top.split("px")[0]) + 60 + "px"
        divtriangle.style.transform = "rotate(" + (rotatedSteps + 1) * 60 + "deg)"
        divtriangle.setAttribute("data-rotated-steps", rotatedSteps - 5)
     }

}
