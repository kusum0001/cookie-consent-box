const cookieBox = document.querySelector(".outer");
acceptbtn = cookieBox.querySelector("button");

acceptbtn.onclick = ()=> {
   /* console.log("button clicked"); for checking the button working or not */ 
  document.cookie = "CookieBy=KusumSharma; max-age="+60*60*24*30; /* 1 min=60sec 1hr=60min,60min*24means for 1 day and *30means for 1 month then cookie expire*/
  if(document.cookie){  //if above cookie is set
    cookieBox.classList.add("hide"); //hide cookie box once cookie set
  } else{
    alert("Cookie can't be set ! Check Cookie Settings");
  }

  
  let checkCookie = document.cookie.indexOf("CookieBy=Kusum Sharma"); //checking our cookie
  //if cookie is set then hide the cookie box else show it
  checkCookie != 1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide"); 
}