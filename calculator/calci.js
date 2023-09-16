function appendToBar(value) 
{
            document.getElementById("bar").value += value;
}

function clearBar() 
{
            document.getElementById("bar").value = "";
}

function calculate() 
{
    try {
        const result = eval(document.getElementById("bar").value);
        document.getElementById("bar").value = result;
    } catch (error) {
        document.getElementById("bar").value = "Error";
    }
}