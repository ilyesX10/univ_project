var container = document.getElementsByClassName('the_inside'),
    next = document.getElementById('next'),
    previous = document.getElementById('previous'),
    box_card = document.getElementsByClassName('card_box')[0];
window.onresize = function() {
    if (document.documentElement.clientWidth >= 992 && document.documentElement.clientWidth < 1200) {
        container[0].scrollLeft -= 1200;
        container[1].scrollLeft -= 1200;
    } else if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 992) {
        container[0].scrollLeft -= 1200;
        container[1].scrollLeft -= 1200;
    } else if (document.documentElement.clientWidth >= 576 && document.documentElement.clientWidth < 768) {
        container[0].scrollLeft -= 1200;
        container[1].scrollLeft -= 1200;
    } else if (document.documentElement.clientWidth < 576) {
        container[0].scrollLeft -= 1200;
        container[1].scrollLeft -= 1200;
    }
}

document.onclick = function() {
    // alert(box_card.getBoundingClientRect().width);
    //alert(window.event.target.id);
    if (window.event.target.id == "next_01") {
        if (document.documentElement.clientWidth >= 1200) container[0].scrollLeft += box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 992 && document.documentElement.clientWidth < 1200) container[0].scrollLeft += box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 992) container[0].scrollLeft += box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 576 && document.documentElement.clientWidth < 768) container[0].scrollLeft += box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth < 576) container[0].scrollLeft += box_card.getBoundingClientRect().width + 30;
    } else if (window.event.target.id == "previous_01") {
        if (document.documentElement.clientWidth >= 1200) container[0].scrollLeft -= box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 992 && document.documentElement.clientWidth < 1200) container[0].scrollLeft -= box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 992) container[0].scrollLeft -= box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 576 && document.documentElement.clientWidth < 768) container[0].scrollLeft -= box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth < 576) container[0].scrollLeft -= box_card.getBoundingClientRect().width + 30;
    }
    if (window.event.target.id == "next_02") {
        if (document.documentElement.clientWidth >= 1200) container[1].scrollLeft += box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 992 && document.documentElement.clientWidth < 1200) container[1].scrollLeft += box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 992) container[1].scrollLeft += box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 576 && document.documentElement.clientWidth < 768) container[1].scrollLeft += box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth < 576) container[1].scrollLeft += box_card.getBoundingClientRect().width + 30;
    } else if (window.event.target.id == "previous_02") {
        if (document.documentElement.clientWidth >= 1200) container[1].scrollLeft -= box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 992 && document.documentElement.clientWidth < 1200) container[1].scrollLeft -= box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 992) container[1].scrollLeft -= box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth >= 576 && document.documentElement.clientWidth < 768) container[1].scrollLeft -= box_card.getBoundingClientRect().width + 30;
        else if (document.documentElement.clientWidth < 576) container[1].scrollLeft -= box_card.getBoundingClientRect().width + 30;
    }
}