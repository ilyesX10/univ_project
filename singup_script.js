var validation_one = false,
    validation_two = false,
    inpt = document.getElementsByTagName("INPUT"),
    lab = document.getElementsByTagName("LABEL"),
    error = document.getElementById("error_message"),
    correct = true;

function f_style() {
    let v = 0;
    for (let i = 0; i < inpt.length - 1; i++) {
        if (document.activeElement == inpt[i]) {
            inpt[4].checked = false;
            inpt[i].style.outline = "transparent";
            inpt[i].style.border = "solid 1px #0066ff";
            inpt[i].style.boxShadow = "0 0 0 5px #0066ff86";
        }
    }
}

function userNameError() {
    inpt[0].style.border = " solid 1px black";
    inpt[0].style.boxShadow = "none";
    let str = inpt[0].value;
    if (str.length) {
        lab[0].style.display = "none";
        for (let i = 0; i < str.length; i++) {
            if (!((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z"))) {
                correct = false;
                for (let i = 0; i < inpt.length; i++) {
                    if (i != 4) inpt[i].setAttribute("disabled", "");
                }
                error.innerText = "The Username Shoudn't Contains A Number Or A Special Character";
                error.style.display = "block";
                setTimeout(function() {
                    inpt[0].removeAttribute("disabled", "");
                    error.style.display = 'none';
                }, 7000);
                inpt[0].style.boxShadow = "0 0 0 5px rgba(255, 0, 0, 0.657)";
                inpt[0].style.border = "solid 1.5px red";
                return 0;
            } else {
                correct = true;
                for (let i = 1; i < inpt.length - 1; i++) {
                    inpt[i].removeAttribute("disabled", "");
                }
                inpt[0].style.boxShadow = "none";
                inpt[0].style.border = "solid 1px black";
            }
        }
    } else {
        lab[0].style.display = "block";
        inpt[0].style.boxShadow = "none";
        inpt[0].style.border = "solid 1px black";
    }
}

function passwordError() {
    inpt[2].style.border = " solid 1px black";
    inpt[2].style.boxShadow = "none";
    let str = inpt[2].value
    if (str.length) {
        lab[2].style.display = "none";
        for (let i = 0; i < str.length; i++) {
            if (((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z")) || (str[i] >= "0" && str[i] <= "9")) {
                correct = true;
                inpt[2].style.boxShadow = "none";
                inpt[2].style.border = "solid 1px black";
                if ((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z")) {
                    validation_one = true;
                } else {
                    validation_two = true;
                }
            } else {
                correct = false;
                for (let i = 0; i < inpt.length; i++) {
                    if (i != 4) inpt[i].setAttribute("disabled", "");
                }
                error.innerText = "The Password Shoudn't Contains An Characters Specials";
                error.style.display = "block";
                setTimeout(function() {
                    inpt[2].removeAttribute("disabled", "");
                    error.style.display = 'none';
                }, 7000);
                inpt[2].style.boxShadow = "0 0 0 5px rgba(255, 0, 0, 0.657)";
                inpt[2].style.border = "solid 1.5px red";
                return 0;
            }
        }
        if (!(validation_one && validation_two)) {
            correct = false;
            for (let i = 0; i < inpt.length; i++) {
                if (i != 4) inpt[i].setAttribute("disabled", "");
            }
            error.innerText = "The Password Shoud Contains Letters And Numbers";
            error.style.display = "block";
            setTimeout(function() {
                inpt[2].removeAttribute("disabled", "");
                error.style.display = 'none';
            }, 7000);
            inpt[2].style.boxShadow = "0 0 0 5px rgba(255, 0, 0, 0.657)";
            inpt[2].style.border = "solid 1.5px red";
            return 0;
        } else {
            correct = true;
            for (let i = 0; i < inpt.length - 1; i++) {
                inpt[i].removeAttribute("disabled", "");
            }
        }
    } else {
        lab[2].style.display = "block";
        inpt[2].style.boxShadow = "none";
        inpt[2].style.border = "solid 1px black";
    }
    validation_one = false;
    validation_two = false;
}

function comfirmPasswordError() {
    inpt[3].style.border = " solid 1px black";
    inpt[3].style.boxShadow = "none";
    let str_01 = inpt[3].value,
        str_00 = inpt[2].value;

    if (str_01.length) {
        lab[3].style.display = "none";
        if (str_01.length != str_00.length) {
            correct = false;
            for (let i = 0; i < inpt.length; i++) {
                if (i != 4) inpt[i].setAttribute("disabled", "");
            }
            error.innerText = "The Password and the Confirm Password are not the same";
            error.style.display = "block";
            setTimeout(function() {
                inpt[3].removeAttribute("disabled", "");
                error.style.display = 'none';
            }, 7000);
            inpt[3].style.boxShadow = "0 0 0 5px rgba(255, 0, 0, 0.657)";
            inpt[3].style.border = "solid 1.5px red";
            return 0;
        }
        for (let i = 0; i < str_00.length; i++) {
            if (str_00[i] != str_01[i]) {
                correct = false;
                for (let i = 0; i < inpt.length; i++) {
                    if (i != 4) inpt[i].setAttribute("disabled", "");
                }
                error.innerText = "The Length of the Password and the Confirm Password are not equal";
                error.style.display = "block";
                setTimeout(function() {
                    inpt[3].removeAttribute("disabled", "");
                    error.style.display = 'none';
                }, 7000);
                inpt[3].style.boxShadow = "0 0 0 5px rgba(255, 0, 0, 0.657)";
                inpt[3].style.border = "solid 1.5px red";
                return 0;
            } else {
                correct = true;
                for (let i = 0; i < inpt.length - 1; i++) {
                    inpt[i].removeAttribute("disabled", "");
                }
                inpt[3].style.boxShadow = "none";
                inpt[3].style.border = "solid 1px black";
            }
        }
    } else {
        lab[3].style.display = "block";
        inpt[3].style.boxShadow = "none";
        inpt[3].style.border = "solid 1px black";
    }
}


function emailError() {
    inpt[1].style.border = " solid 1px black";
    inpt[1].style.boxShadow = "none";
    let str = inpt[1].value,
        srch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (str.length) {
        lab[1].style.display = "none";
        for (let i = 0; i < str.length; i++) {
            if (!srch.test(str)) {
                correct = false;
                for (let i = 0; i < inpt.length; i++) {
                    if (i != 4) inpt[i].setAttribute("disabled", "");
                }
                error.innerText = "The Form Of The Email is Wrong";
                error.style.display = "block";
                setTimeout(function() {
                    inpt[1].removeAttribute("disabled", "");
                    error.style.display = 'none';
                }, 7000);
                inpt[1].style.boxShadow = "0 0 0 5px rgba(255, 0, 0, 0.657)";
                inpt[1].style.border = "solid 1.5px red";
                return 0;
            } else {
                correct = true;
                for (let i = 0; i < inpt.length - 1; i++) {
                    inpt[i].removeAttribute("disabled", "");
                }
                inpt[1].style.boxShadow = "none";
                inpt[1].style.border = "solid 1px black";
            }
        }
    } else {
        lab[1].style.display = "block";
        inpt[1].style.boxShadow = "none";
        inpt[1].style.border = "solid 1px black";
    }
}

function enter(event) {
    let index = 0;
    for (let i = 0; i < inpt.length - 1; i++) {
        if (document.activeElement == inpt[i]) {
            index = i;
        }
    }
    if (event.keyCode == 13) {
        event.preventDefault(true);
        for (let i = index; i < inpt.length - 1; i++) {
            console.log(i)
            if (i + 1 != inpt.length) {
                inpt[i + 1].focus();
                break;
            }
        }
    }
}

function check(event) {
    let v = 0;
    if (event.keyCode == 13 && document.activeElement == inpt[4]) {
        inpt[4].checked = true;
    }
    for (let i = 0; i < inpt.length - 2; i++) {
        if (inpt[i].value != 0) {
            v++;
        }
    }
    if (inpt[4].checked && v == 4 && correct) inpt[5].removeAttribute("disabled", "");
    inpt[5].focus();
    v = 0;
}

document.onclick = function() {
    let v = 0;
    for (let i = 0; i < inpt.length - 2; i++) {
        if (inpt[i].value != 0) {
            v++;
        }
    }
    if (inpt[4].checked && v == 4 && correct) inpt[5].removeAttribute("disabled", "");
    else inpt[5].setAttribute("disabled", "")
    v = 0;
}