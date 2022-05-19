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
    
    console.log(triangleChosen)


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

    console.log(triangleChosen)

    rotateBack(selectedTriangle)




    // let centererX = triangleChosen.style.
    let centererX = 60
    let centererY = 80


    let divChosen = document.getElementById("div" + divNumber);
    let rect = divChosen.getBoundingClientRect()

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








    // let rect = triangleChosen.getBoundingClientRect()
    // console.log(rect.x)
    // console.log(rect.y)


    // triangleChosen.style.x = rect.x + "px";
    // triangleChosen.style.y = rect.y + "px";


    //     // NEJNEJNEJ!!! GÖR BARA SÅ ATT TRIANGLARNAS DIVVAR MED TEXT BYTER PLATS INTE ATT TRIANGELN ROTERAR!!!!



    
    // let styleForTriangle = window.getComputedStyle(triangleChosen);

    // let tr = styleForTriangle.getPropertyValue("transform") // THE MATRIX

    // var values = tr.split('(')[1];
    // values = values.split(')')[0];
    // values = values.split(',');
    // var a = values[0];
    // var b = values[1];
    // var c = values[2];
    // var d = values[3];

    // var scale = Math.sqrt(a*a + b*b);

    // // arc sin, convert from radians to degrees, round
    // // DO NOT USE: see update below
    // var sin = b/scale;
    // // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    // var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));



    // // works!
    // // console.log('First rotation: ' + angle + 'deg');
    // // console.log(styleForTriangle.getPropertyValue("transform"))

    // angle = angle + 60

    // triangleChosen.style.position = "absolute"    
    // triangleChosen.style.transform = "rotate(" + angle + "deg)"

    // console.log(styleForTriangle.getPropertyValue("transform"))
    // console.log('Got rotated to: ' + angle + 'deg');
















    

    // let triangleChosen = document.getElementById("triangle" + selectedTriangle);




    // triangleChosen.style.position = "absolute"    
    // triangleChosen.style.transform = "rotate(" + (angleTriangle1 + 60) + "deg)"


    // angle = "angletriangle" + selectedTriangle

    // angleTriangle1 + 60








    // styleForTriangle.getPropertyValue("transform") = matrix(0.5, 0.866025, -0.866025, 0.5, 0, 0)

    // transform: matrix(0.5, 0.866025, -0.866025, 0.5, 0, 0);




    // console.log(window.getComputedStyle(triangleChosen, rotate))


    // let compStyles = window.getComputedStyle(para);
    // para.textContent = 'My computed font-size is ' +
    //     compStyles.getPropertyValue('font-size') +
    //     ',\nand my computed line-height is ' +
    //     compStyles.getPropertyValue('line-height') +
    //     '.';






    // triangleChosen.style.transform = "rotate(" + 60 + "deg)"
}