
let nameInput = document.getElementById('siteName');
let urlInput = document.getElementById('siteUrl');
let nameAlert = document.getElementById('siteUrl');
let urlAlert = document.getElementById('siteUrl');
let inputs = document.querySelectorAll('input');
let book = document.getElementById("book");
let bookMarks  ;

// 
if (localStorage.getItem ('markes') != null)
{
    bookMarks = JSON.parse(localStorage.getItem('markes'));
    display();
}
else
{
    bookMarks = [];
}
//  


function validate ()
    {
      
        var Regex = /^(https|http)/ ;
        if (Regex.test(urlInput.value) == true)
        {
            return true;
        }
        else{
            return false;
        }
    }

// 
function addMark()
{
    document.getElementById('nameError').style.display ='none';
    document.getElementById('urlError').style.display ='none';
    if (nameInput.value =="")
    {
        document.getElementById('nameError').style.display ='block';
    }
    else
    {
        if (validate()== true)
        {
            let marker =
            {
                name:nameInput.value,
                url:urlInput.value,
            }
            bookMarks.push(marker);
            localStorage.setItem('markes' , JSON.stringify(bookMarks));
            display();
            clear ();
        }
        else
        {
            document.getElementById('urlError').style.display ='block';
        };
    };
};
// 

function display()
{
    let cartoona = '';
    for (let i = 0; i < bookMarks.length; i++)
    {
        cartoona += 
        `
        <div class="container book my-2 " id="book">
            <div id="bookmarkList" class=" ">
                <div class = "d-flex justify-content-xl-around">
                <h2> ${bookMarks[i].name}</h2>
                <div class = ""> 
                <a class="btn btn-primary" href="${bookMarks[i].url}" target="_blank">visit</a>
                <button class="btn btn-danger" onclick="deleteSite(${i});" > Delete</button>
                </div>
                </div>
            </div>
        </div>
        `
    };
    document.getElementById('section').innerHTML =cartoona ;

};
// 
function deleteSite(siteIndex)
{
    console.log("delete function ");
    bookMarks.splice(siteIndex,1);
    localStorage.setItem("markes", JSON.stringify(bookMarks));
    display();
}
// 
function clear() {
    for (var i = 0; i < inputs.length; i++) 
    {
        inputs[i].value = "";
    }
};
