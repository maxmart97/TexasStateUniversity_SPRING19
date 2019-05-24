// 04/18/2019

// Web Scraping Notes:

// https://www.imdb.com/chart/top?ref_=nv_mv_250
// gets all links for the top 250 movies

// Script

var numOfUrls = $("td.titleColumn").length;
var myLinks = [];
var myData;
var lineResult = [];
var arrayResult = [];

for(i=0; i<numOfUrls; i++) {
    //console.log($("td.titleColumn")[i].firstElementChild.href);
    myLinks.push($("td.titleColumn")[i].firstElementChild.href);
}

function getPageHTML(aUrl) {
    return $.ajax({
        type: "GET",
        url: aUrl,
        dataType: "html",
        cache: false,
        async: false,
    }).responseText;
}

for(i=0; i<myLinks.length; i++) {
    myData = getPageHTML(myLinks[i]);
    $(myData);
    lineResult = [
        $(myData).find("div.title_wrapper h1").text().trim() + "*",
        $(myData).find("div.inline p span").text().trim() + "*",
        $(myData).find("div#titleDetails.article div.txt-block:nth-of-type(1)").text().trim() + "*",
        $(myData).find("div#titleDetails.article div.txt-block:nth-of-type(2)").text().trim() + "*",
        $(myData).find("div#titleDetails.article div.txt-block:nth-of-type(3)").text().trim() + "*",
        $(myData).find("div#titleDetails.article div.txt-block:nth-of-type(4)").text().trim() + "*",
        $(myData).find("div#titleDetails.article div.txt-block:nth-of-type(5)").text().trim() + "*",
        $(myData).find("div#titleDetails.article div.txt-block:nth-of-type(6)").text().trim() + "*",
        $(myData).find("h3.subheading:nth-of-type(3)").text().trim() + "*",
        $(myData).find("div.txt-block:nth-of-type(13)").text().trim() + "*",
        $(myData).find("div.txt-block:nth-of-type(14)").text().trim() + "*",
        $(myData).find("div.txt-block:nth-of-type(15)").text().trim() + "*",
        $(myData).find("div.txt-block:nth-of-type(16)").text().trim() + "*",
        $(myData).find("div#titleUserReviewsTeaser.article h2").text().trim() + "*",
        $(myData).find("span strong").text().trim() + "*",
        $(myData).find("div.comment-meta").text().trim() + "*",
        $(myData).find("div.user-comments p").text().trim() + "*",
        "^"
    ];
    arrayResult.push(lineResult);
}

console.table(arrayResult);