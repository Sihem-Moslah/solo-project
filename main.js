// var pics1=document.getElementById('pic')
// var imgs1 =['https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/345653545_1437873697014843_1986027818414080996_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rdLWPo2-Cr0AX-unEfa&_nc_ht=scontent.ftun4-2.fna&oh=00_AfDA2an6KGwiBm3zWqTrBb7kL-09mFbYiwtXlhAQbiSsUg&oe=645E82DC','https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/345465830_157380213734495_2851403296195474398_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SWvcupYrak0AX--lzK6&_nc_ht=scontent.ftun4-2.fna&oh=00_AfCFn3eNWXBxN7nY1pt4I4waY2DRuUUAh1Nw5rSq0sPvfw&oe=645DE9C6','https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/345446942_1008528050556621_5196999611064143023_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=HszQSWUFztgAX8ppJnL&_nc_ht=scontent.ftun4-2.fna&oh=00_AfCJWrsOXuJO71wlq3l5-prFgE_ZucHd8qc-PxKtMOggUw&oe=645E1580','https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/345605799_241702948443516_6894414940281852742_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3hfqZQw2Fd8AX9y6PuQ&_nc_oc=AQl261fEurdtniyjr3q7uAoi3XOFAz6Sd1_z8dV1zfS5k5f3UE5xPmBw0ZPeJVhfBi0&_nc_ht=scontent.ftun4-2.fna&oh=00_AfClWrqFwDIsAWeeQtwrOCwTGdCcs34En68q3qzzPs6MhA&oe=645ED24E',]
// var i=0
// pics1.onclique=function (){
//     if(i<=imgs1.length){
//         i++
//         imgs.src=imgs[i]
//     }
// }pics1.onclique=function (){
//     if(i<=imgs1.length){
//         i--
//         imgs.src=imgs[i]
//     }
// }

function each(coll, func) {
    if (Array.isArray(coll)) {
     for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
     }
    } else {
     for (var key in coll) {
      func(coll[key], key);
     }
    }
   }
  
   function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
     acc = {};
    }
    each(coll, function (element, key) {
     acc[key] = func(element, key);
    });
    return acc;
   }


var africa1= {
    name : "africa1",
    src:"https://cdn.shopify.com/s/files/1/0588/4942/7614/products/DGN_7449_2048x2048.jpg?v=1631622388"
}
var africa2 = {
    name : "africa2",
    src:"https://www.novacolor.fr/wp-content/uploads/2017/06/Peinture-decorative-NOVACOLOR-france-metallic-Africa-8.jpg"
}

var allAfrica = [africa1,africa2]

function showAfrica(arr){
    return map(arr,function(elem){
      return  $(".c4").append("<img src="+elem.src+"/>" )
    })                        
}
var clickafrica = document.getElementsByClassName('pic')
clickafrica.onclick=showAfrica(allAfrica)

var animamundi1 = {
    name : "Animamundi1",
    src:"https://cdn.shopify.com/s/files/1/0588/4942/7614/products/DGN_7449_2048x2048.jpg?v=1631622388"
}
var animamundi2 = {
    name : "Animamundi2",
    src:"https://www.novacolor.fr/wp-content/uploads/2017/06/Peinture-decorative-NOVACOLOR-france-metallic-Africa-8.jpg"
}
var allAnimamundi1 = [animamundi1,animamundi2]


var green1 = {
    name : "Green1",
    src:"https://cdn.shopify.com/s/files/1/0588/4942/7614/products/DGN_7449_2048x2048.jpg?v=1631622388"
}
var green2 = {
    name : "Green2",
    src:"https://www.novacolor.fr/wp-content/uploads/2017/06/Peinture-decorative-NOVACOLOR-france-metallic-Africa-8.jpg"
}
var allAnimamundi1 = [green1,green2]


var green1 = {
    name : "Green1",
    src:"https://cdn.shopify.com/s/files/1/0588/4942/7614/products/DGN_7449_2048x2048.jpg?v=1631622388"
}
var green2 = {
    name : "Green2",
    src:"https://www.novacolor.fr/wp-content/uploads/2017/06/Peinture-decorative-NOVACOLOR-france-metallic-Africa-8.jpg"
}
var allAnimamundi1 = [green1,green2]