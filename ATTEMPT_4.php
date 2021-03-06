<?php require_once('Login_Info.php');?>
<?php $page_Name="Login Page"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap" rel="stylesheet">
    <title><?php echo $page_Name; ?></title>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
<style>
*
{
    padding:0px;
    margin:0px;
    font-family: 'Merienda One', cursive;
    box-sizing:border-box;
}
.login
{
    width:300px;
    height:350px;
    padding-top:30PX;
    padding-bottom:5px;
    margin: 60PX auto;
    background:linear-gradient(#84a9ac,#204051);
    position:relative;
    border:solid 1px black;
}
.login::before
{
    content:"";
    position:absolute;
    top:-50px;
    left:50%;
    transform:translate(-50%);
    width:80px;
    height:80px;
    border-radius:50%;
    border:solid 1px black;
    background:white url('user-solid.svg');
    background-repeat: no-repeat;
    background-size:60px;
    background-position:center 15PX;
}
.login form
{
    width:100%;
    height:90%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
}
form div
{
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
}
form div input
{
    width:250px;
    height:35px;
    padding:5px;
    background-color:none;
    border:solid 1PX transparent;
    position:relative;
    text-align:center;
    border-radius:3px;
    outline-style: none;
}

form div label
{
   position:absolute;
   z-index:2;
}
form div input:focus+.anime
{
    width:0px;
    height:2px;
    border-bottom-left-radius:2px;
    border-bottom-right-radius:2px;
    position:absolute;
    bottom:0;
    left:0;
    background-color:#ff4301;
    z-index:5;
    animation: jojo 1 1s linear forwards;
}
@keyframes jojo
{
    to
    {
        width:250px;
    }
}
.login input[type='submit']
{
    width:200px;
    height:35px;
    background:#4CCFAE;
    color:black;
    font-size:18px;
    border:solid 1px white;
    outline-style: none;
}   
.login input[type='submit']:focus
{
    box-shadow: 0px 0px 10px white;
}
.erorr,.correct
{
    border:solid 2px white;
    background-color:rgb(240, 240, 240);
    color:rgb(255, 0, 55);
    border: solid 1px black;
    display:flex;
    padding:10PX;
    width:400PX;
    margin:20PX auto;
    text-align:center;
    text-align-last:center;
    font-size:25PX;
    z-index:10;
}
.correct
{
    color:rgb(0, 219, 110);
    display:flex;
    justify-content:center;
    align-items:center;
}
.btn
{
    width:200px;
    height:35px;
    margin-top:10PX;
    background:#4CCFAE;
    color:white;
    font-size:18px;
    outline-style: none;
    position:relative;
    left:50%;
    transform:translate(-50%,0);
    border:solid 1px rgb(255, 0, 55);
}
form div label
{
    text-align:center;
    text-align-last:center;
    padding:5px;
    font-size:18px;
}
#error_box
{
    width:90%;
    margin:0px auto;
    text-align:center;
    text-align-last:center;
    color:white;
    font-size:12px;
    background-color:none;
}
</style>
<body>
<div class="login">
<form action="" method="get" autocomplete="off">
<div><input type="text" class="put" name="first_name" id="first_name" onfocusin="roro()" onkeydown="koko(event)" onfocusout="jojo(),err.firstNameError(0)" required><div class="anime"></div><label id="Lname" class="labe" for="first_name">First Name</label></div>
<div><input type="text" class="put" name="last_name" id="last_name" onfocusin="roro()" onkeydown="koko(event)" onfocusout="jojo(),err.lastNameError(0)" required><div class="anime"></div><label id="Llname" class="labe" for="last_name">Last Name</label></div>
<div><input type="email" class="put" name="email"  id="email" onfocusin="roro()" onkeydown="koko(event)" onfocusout="jojo()" required><div class="anime"></div><label id="Lemail" class="labe" for="email">Email</label></div>
<div><input type="password" class="put" name="password" id="password" onfocusin="roro()" onkeydown="koko(event)" onfocusout="jojo(),err.password(0,0,0,0)" required><div class="anime"></div><label id="Lpassword" class="labe" for="password">Password</label></div>
<input type="submit" class="put" value="Submit" name="submit">
</form>
<div id="error_box"></div>
</div>
<script>
var i=0,x="",k,c=0;
var n=document.getElementsByClassName("put"),l,j;
l=document.getElementsByClassName("labe");
function roro()
{
    a=document.activeElement;
    for (i=0;i<n.length;i++)
    {
     if(n[i]==a)
     {
        l[i].style.display='none';
     }
    }
}
function jojo()
{
    for (i=0;i<n.length;i++)
    {
     if(n[i].value==""&&l[i].style.display=="none")
     {
        l[i].style.display='block';
        break;
     }
    }
}
class Error
{
    firstNameError(i)
    {
        let x=n[0].value,
        error=document.getElementById("error_box");
        if(x.length!=0)
        {
          if(i<x.length)
         {
           if(!((x[i]>="A"&&x[i]<="Z")||(x[i]>="a"&&x[i]<="z")))
           {
              error.innerText="The First Name Shoudn't Contains A Number Or A Special Character";
              n[0].style.border="solid 1.5px red";
              return 0;
           } 
           else 
           {
              error.innerText="";
              n[0].style.border="none";
           }
           return this.firstNameError(i+1);
         }
         else return 0;
        }
        else 
        {
            error.innerText="";
            n[0].style.border="none";
        }
    }
    lastNameError(i)
    {
        let x=n[1].value,
        error=document.getElementById("error_box");
        if(x.length!=0)
        {
          if(i<x.length)
         {
           if(!((x[i]>="A"&&x[i]<="Z")||(x[i]>="a"&&x[i]<="z")))
           {
              error.innerText="The Last Name Shoudn't Contains A Number Or A Special Character";
              n[1].style.border="solid 1.5px red";
              return 0;
           } 
           else 
           {
              error.innerText="";
              n[1].style.border="none";
           }
           return this.lastNameError(i+1);
         }
         else return 0;
        }
        else 
        {
            error.innerText="";
            n[1].style.border="none";
        }
    }
    password(i,j,k,s)
    {
        let x=n[3].value,
        error=document.getElementById("error_box");
        if(x.length!=0)
        {
          if(i<x.length)
         {
           if(!(((x[i]>="A"&&x[i]<="Z")||(x[i]>="a"&&x[i]<="z"))||(x[i]>="0"&&x[i]<="9")))
           {
              error.innerText="The Password Shoudn't Contains An Characters Specials";
              n[3].style.border="solid 1.5px red";
              return 0;
           } 
           else if(((x[i]>="A"&&x[i]<="Z")||(x[i]>="a"&&x[i]<="z"))&&s==0) {j++;s=1;}
           else if((x[i]>="0"&&x[i]<="9")&&k==0) {j++;k=1;}
           else 
           {
              error.innerText="";
              n[3].style.border="none";
           }
           return this.password(i+1,j,k,s);
         }
         else 
         {
            if(j!=2)
            {
              error.innerText="The Password Shoud Contains Letters And Numbers";
              n[3].style.border="solid 1.5px red";
            }
            return 0;
         }
        }
        else 
        {
            error.innerText="";
            n[3].style.border="none";
        }
    }
}
var err=new Error;
function koko(event)
{
    x=x+String.fromCharCode(event.keyCode);
    var j=document.activeElement;
    if(event.keyCode==13)
    {
        event.preventDefault();
        for (k=0;k<n.length;k++)
         {
          if(j==n[k]&&k+1!=n.length)
            {
              n[k+1].focus();
              break;
            }
            if(k==4)
            {
                break;
            }
         }
    }
}
</script>
<?php
$valide=0;
if(isset($_GET["submit"]))
{echo "<form method='get'><input type='submit' name='btn' value='return' class='btn'></form>";
}
if(isset($_GET["btn"]))
{
    echo "<style>.btn{ display:none;}</style>";
}
if(isset($_GET["first_name"]))
{
    $first_name=$_GET["first_name"];
    if(preg_match('/[0-9]/', $first_name)||preg_match('/[\'^??$%&*()}{@#~?><>,|=_+??-]/', $first_name))
    {
       echo "<style>.login{ display:none;}</style>";
       echo "<div class='erorr'>Your First Name Was Incorrect Fil Out Again Your Info</div>";
    }
    else
    {
        $valide++;
    }
}
if(isset($_GET["last_name"]))
{
    $last_name=$_GET["last_name"];
    if(preg_match('/[0-9]/',$last_name)||preg_match('/[\'^??$%&*()}{@#~?><>,|=_+??-]/',$last_name))
    {
       echo "<style>.login{ display:none;}</style>";
       echo "<div class='erorr'>Your Last Name Was Incorrect Fil Out Again Your Info</div>";
    }
    else
    {
        $valide++;
    }
}
if(isset($_GET["email"]))
{
    $email=$_GET["email"];
    if(!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
       echo "<style>.login{ display:none;}</style>";
       echo "<div class='erorr'>Your Email Was Incorrect Fil Out Again Your Info</div>";
    }
    else
    {
        $valide++;
    }
}
if(isset($_GET["password"]))
{
    $password=$_GET["password"];
    if(!preg_match('/[0-9]/', $password)||preg_match('/[\'^??$%&*()}{@#~?><>,|=_+??-]/', $password))
    {
       echo "<style>.login{display:none;}</style>";
       echo "<div class='erorr'>Your Password Was Incorrect Fil Out Again Your Info</div>";
    }
    else
    {
        $valide++;
    }
}
if($valide==4)
{
    $first_name=mysqli_real_escape_string($connection,$first_name);
    $last_name=mysqli_real_escape_string($connection,$last_name);
    $email=mysqli_real_escape_string($connection,$email);
    $password=mysqli_real_escape_string($connection,$password);   
    $sql="insert into info values(null,'$first_name','$last_name','$email','$password')";
    $exc=mysqli_query($connection,$sql);
    if($exc)
    {
        echo "<style>.login{display:none;}</style>";
        echo "<div class='correct'>Your Fil Out is Correct</div>";
    } 
    else
    {
        echo "<style>.login{display:none;}</style>";
        echo "<div style='color:red;' class='correct'>There's An Error In The Connection</div>";
    }
}
$valide=0;
?>
</body>
</html>