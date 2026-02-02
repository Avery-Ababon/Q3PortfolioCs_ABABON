let acctString = localStorage.getItem("accounts")
if (!acctString) { accountList = {} } 
else accountList = JSON.parse(acctString) 

const form = document.getElementById("dForm"); 
form.addEventListener("submit", function(e) { 
    e.preventDefault(); 

    if (confirm("confirm (yes or no)")) {   
        const data = new FormData(form);

        const obj = Object.fromEntries(data.entries()); 
        accountList[obj.fname] = {};
        for (let key in obj) { 
            if (key != "fname") { 
                accountList[obj.fname][key] = obj[key];
            }
        }
        
        console.log(accountList) // to check all the account information if it will be saved correctly
        acctString = JSON.stringify(accountList) // convert object into string, as a requirement of localStorage
        localStorage.setItem("accounts", acctString) // save on the user's computer
        form.submit();
    }
  });

// event handler for the reset button instead of onreset on the button itself
form.addEventListener("reset", function(e) { // 
  // Ask for confirmation before clearing
  if (!confirm("do you really want to clear?")) {
    e.preventDefault(); 
  }
});

function changeColor(ele) {
  console.log(ele);
  ele.style.backgroundColor = "blue";
} 
function resetColor(ele) {
  console.log(ele);
  ele.style.backgroundColor = "white";
} 







