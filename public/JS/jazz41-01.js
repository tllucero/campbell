var page;
var prev_page;
var page_box = 0;
var page_main_page = 1;
var page_calendar = 2;
var page_about_us = 3;
var page_marketing = 4;
var page_new_artists = 5;
var page_social_media = 6;
var page_our_store = 7;
var page_contact = 8;
var page_community_news = 9;

/* var radioExists = true; */
var siteRadioPaused = false;

var visibleDIV;

$(function () {
  var w = $("#mainContent").width();
  var h = $("#mainContent").height();
  var slides = $('.Slides > div');
  $('.SlideContainer').css({ height: (h - 5) + 'px' });
  $('.Slides').css({ width: slides.length + '70%' });
  slides.css({ width: w + 'px' });

  var pos = 0;

  $('.Back').click(function () {
    pos--; visibleDIV +=1;
    $('.Slides').animate({ left: (pos * w) + 'px' });
  });

  $('.Forward').click(function () {
    pos++; visibleDIV -=1;
    $('.Slides').animate({ left: (pos * w) + 'px' });
  });
});
    
function PlayPause() {
  var player;
  player = document.getElementById('myplayer');

  if (player.duration > 0 && !player.paused) {
    player.pause();
    Player2Paused();
  } else {
    if (!player2.paused) { 
      player2.pause(); 
      siteRadioPaused = true;
    }
    player.play();
  }
}

function Player2Paused() {
  if (siteRadioPaused) {
    player2.play(); 
    siteRadioPaused = false;
  }
}

function GetFirstMonthEvent() {
  $("#eTable").children().remove();
  var HighlightOn = false;

/*  $.ajax({ */
  jQuery.ajax({
    type: 'GET',
    url: "Data/EventList.xml",
    cache: false,
    datatype: "xml",
    success: function (data) {  
      filteredEventData = $(data).find("event").filter(function () {                    
        return $.trim($(this).find("startdate").text()).match("May");
      });
      $(filteredEventData).each(function () {
        var processedEventData = "";
        if (HighlightOn == false) {
          processedEventData += '<tr class="grayishblue"><td><a href="#" onClick="PlayPause();">' + 
          "Click to Listen" + "<br/>" + "<img src='" +
          $(this).find("image").text() + "'" + '/>' +
          '<audio id="myplayer">' + "<source src='" + $(this).find("audio").text() + "'" + "type='audio/mpeg'>"
          + "Your browser does not support the audio element." + '</audio></a>' +
          '</td><td>' +
          $(this).find("firstname").text() + ' ' + $(this).find("lastname").text() +
          '</td><td>' +
          $(this).find("video").text() +
          '</td><td>' +
          $(this).find("startdate").text() + "<br/>" + "To" + "<br/>" + $(this).find("enddate").text() +
          '</td><td>' +
          $(this).find("place").text() +
          '</td></tr>';
          HighlightOn = true;
        } else if (HighlightOn == true) {
          var filteredEventData = "";
          processedEventData += '<tr class="darkblue "><td><a href="#" onClick="PlayPause();">' + 
          "Click to Listen" + "<br/>" + "<img src='" +
          $(this).find("image").text() + "'" + '/>' +
          '<audio id="myplayer">' + "<source src='" + $(this).find("audio").text() + "'" + 
          "type='audio/mpeg'>" + "Your browser does not support the audio element." + '</audio></a>' +
          '</td><td>' +
          $(this).find("firstname").text() + ' ' + $(this).find("lastname").text() +
          '</td><td>' +
          $(this).find("video").text() +
          '</td><td>' +
          $(this).find("startdate").text() + "<br/>" + "To" + "<br/>" + $(this).find("enddate").text() +
          '</td><td>' +
          $(this).find("place").text() +
          '</td></tr>';
          HighlightOn = false;
        }

        //append function goes here
        $("#eTable").append(processedEventData);
      });
    },
    error: function () {
      alert("Error: Data was not successfully read.");
    }
  });
};

function GetEventData(){
  $("#eTable").children().remove();
  var HighlightOn = false;        
         
/*  $.ajax({ */
  jQuery.ajax({
    type: 'GET',
    url: "Data/EventList.xml",
    cache: false,
    datatype: "xml",
    success: function (data) {
      filteredEventData = $(data).find("event").filter(function () {                    
        return $.trim($(this).find("startdate").text()).indexOf($("#events").val()) >= 0;
      });
      $(filteredEventData).each(function () {
        var processedEventData = "";
        if (HighlightOn == false) {
          processedEventData += '<tr class="grayishblue"><td><a href="#" onClick="PlayPause();">' + "Click to Listen" + "<br/>" + "<img src='" +
          $(this).find("image").text() + "'" + '/>' +
          '<audio id="myplayer">' + "<source src='" + $(this).find("audio").text() + "'" + "type='audio/mpeg'>" 
          + "Your browser does not support the audio element." + '</audio></a>' +
          '</td><td>' +
          $(this).find("firstname").text() + ' ' +  $(this).find("lastname").text() +
          '</td><td>' +
          $(this).find("video").text() +
          '</td><td>' +
          $(this).find("startdate").text() + "<br/>" + "To" + "<br/>" + $(this).find("enddate").text() +
          '</td><td>' +
          $(this).find("place").text() +
          '</td></tr>';   
          HighlightOn = true;
        }
        else
        if (HighlightOn == true) {
          var filteredEventData = "";
          processedEventData += '<tr class="darkblue "><td><a href="#" onClick="PlayPause();">' + "Click to Listen" + "<br/>" + "<img src='" +
          $(this).find("image").text() + "'" + '/>' +
          '<audio id="myplayer">' + "<source src='" + $(this).find("audio").text() + "'" + "type='audio/mpeg'>"
          + "Your browser does not support the audio element." + '</audio></a>' +
          '</td><td>' +
          $(this).find("firstname").text() + ' ' + $(this).find("lastname").text() +
          '</td><td>' +
          $(this).find("video").text() +
          '</td><td>' +
          $(this).find("startdate").text() + "<br/>" + "To" + "<br/>" + $(this).find("enddate").text() +
          '</td><td>' +
          $(this).find("place").text() +
          '</td></tr>';
          HighlightOn = false;
        }
        //append function goes here
        $("#eTable").append(processedEventData);
      });
    },
    error: function () {
      alert("Error: Data was not successfully read.");
    }
  });
};

function DisplayCalendar() {
/*
  $("#IframeButtons").replaceWith('<div id="calendarInfo"><table id="eTable"></table></div>');  
*/

/* TLL 2015/03/08 edit 101*/
  prev_page = page; 
  hide_all ();
  $("#calendarInfo").replaceWith('<div id="calendarInfo"><table id="eTable"></table></div>');  
/*  document.getElementById("calendarInfo").style.visibility = "visible"; */
  document.getElementById("calendarInfo").style.display = "block";

/* TLL 2015/03/08 end edit 101*/

/* TLL 2015/03/07 */
  $("#radioContainer").css("z-Index", 1);
  $("#eCalendarTitle").css("z-Index", 900);          
/* TLL 2015/02/04 */
  document.getElementById("months").style.visibility = "visible";

};

/* TLL 2015/02/04 */
function HideCalendar() {
  $("#eCalendarTitle").css("z-Index", -1);          
  document.getElementById("months").style.visibility = "hidden"; 
  document.getElementById("calendarInfo").style.display = "none";
};


function showRadio() {
/* this kills radio from Event calendar */
  $("#eTable").children().remove();

/* creates new Radio */
  var radioData = "";
/*
  radioData += '<iframe src="http://www.innerscopemagazine.com/RadioPlayer.html" ' +
    'id="RadPlayer" name="FlashRadioPlayer"  width="502" height="32" ' +
    'scrolling="no" frameborder="0">' +
    '</iframe>'
*/

  radioData += '<div id="RadPlayer"> ' +
                 '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' +
                 'width="501" height="32" bgcolor="#FFFFFF" id="musicBox"> ' +
                 '<param name="flashvars" value="url=http://usa7.fastcast4u.com:5813/;' +
                 '&lang=en&codec=mp3&volume=35&introurl=&autoplay=true&traking=true' +
                 '&jsevents=false&buffering=5&title=Free%20Radio Columbus"> ' +
                 '<param name="wmode" value="window" /> ' +
                 '<param name="allowscriptaccess" value="always" /> ' +
                 '<param name="scale" value="noscale" /> ' +
               '</div>'

 $("#radio").append(radioData);

/* fix two radio
  radioExists = true;
*/
}
      
$(document).ready(function () {   
  visibleDIV = 1;

/* TLL 2015/09/10 */
/* revert as FF doesn't work */
/*  $('audio').mediaelementplayer(); */
/* TLL 2015/09/10 */

/* TLL 2015/02/04 */
  HideCalendar();
  
  $("#eCalendar").click(function () {
    DisplayCalendar();
    GetFirstMonthEvent();
  });

  $("#events").val($("#events option:first").val());
  $('#events').change(function () { GetEventData(); });

  $("#back").on("click", function () {
/* TLL 2015/03/07 - so back button doesn't play the intro */
/* TLL revert 2015/03/08 */
/*    location.reload();            */
    Player2Paused();
    HideCalendar(); 

    page = prev_page; 
    show_page(page); 
  });
          
  $('#IframeButtons a').click(function () {
    $(this).attr('target', "Page" + visibleDIV);
  });
});

/* show video once function */

var vid = document.getElementById('video1');
vid.addEventListener("ended", hideVideo, false);

function hideVideo() {
  var vid = document.getElementById('video1');
  var radio = document.getElementById('radio-wrapper');
  var elem = document.getElementById('main_page');
  vid.removeEventListener("ended", hideVideo, false);
  vid.style.display = 'none';
  radio.style.display = 'block';
  show_main_page();  
}

/* End show video once funtion */

/* show divs */

function show_page (page) {
  Player2Paused();
  showRadio ();

  if (page == page_main_page) {
	  elem = document.getElementById("main_page");
  } else if (page == page_about_us) {
    elem = document.getElementById("about_us");
  } else if (page == page_marketing) {
    elem = document.getElementById("marketing");
  } else if (page == page_new_artists) {
    elem = document.getElementById("new_artists");
  } else if (page == page_social_media) {
    elem = document.getElementById("social_media");
  } else if (page == page_our_store) {
    elem = document.getElementById("our_store");
  } else if (page == page_contact) {
    elem = document.getElementById("contact");
  } else if (page == page_community_news) {
    elem = document.getElementById("community_news");
  }
	show_me (elem);  
}

function show_me (elem) {
  hide_all (); 
  elem.style.display = "block";
}

function hide_me (elem) {
  elem.style.display = "none";
}

function hide_all () {
  HideCalendar(); 
  elem = document.getElementById("box");
  hide_me (elem);
  elem = document.getElementById("main_page");
  hide_me (elem);
  elem = document.getElementById("about_us");
  hide_me (elem);
  elem = document.getElementById("calendarInfo");
  hide_me (elem);
  elem = document.getElementById("marketing");
  hide_me (elem);
  elem = document.getElementById("new_artists");
  hide_me (elem);
  elem = document.getElementById("social_media");
  hide_me (elem);
  elem = document.getElementById("our_store");
  hide_me (elem);
  elem = document.getElementById("contact");
  hide_me (elem);
  elem = document.getElementById("community_news");
  hide_me (elem);
}

function show_main_page() {
  page = page_main_page; 
  show_page(page);
/*
  $("#Cookies").attr("src", "file:///opt/campbell/jazz41.com/1.3/public/Advertise.html/");
*/
/*
  $("#Cookies").attr("src", "file:///opt/campbell/jazz41.com/1.3/public/images/Jazz.jpg");
*/
  $("#Cookies").attr("src", "http://jazz41.com/Advertise.html");
}

function show_about_us() {
  page = page_about_us; 
  show_page(page);
}

function show_marketing() {
  page = page_marketing; 
  show_page(page);
}

function show_new_artists() {
  page = page_new_artists; 
  show_page(page);
}

function show_social_media() {
  page = page_social_media; 
  show_page(page);
}

function show_our_store() {
  elem = document.getElementById("our_store");
  show_me (elem);
  page = page_our_store; 
  show_page(page);
}

function show_contact() {
  page = page_contact; 
  show_page(page);
}

function show_community_news() {
  page = page_community_news; 
  show_page(page);
}

/* End of show divs */


