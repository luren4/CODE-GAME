let selectedTriangle = null


function clickeddiv1(divNumber)
{
    console.log("Clicked Div" + divNumber)
}

function selectTriangle(triangleNumber)
{
    console.log("Clicked Triangle" + triangleNumber)

    if(triangleNumber == selectedTriangle)
    {
        selectedTriangle = null
        console.log("Unselected Triangle" + triangleNumber)
    }
    else
    {
        selectedTriangle = triangleNumber
        console.log("Selected Triangle" + triangleNumber)
    }
}


