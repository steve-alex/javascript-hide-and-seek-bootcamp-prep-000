function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return getFirstSelector("#nested").querySelector(".target")
}

function increaseRankBy(n){
  var rank = document.getElementById("app").querySelectorAll("ul.ranked-list")
  for (var i=0; i<rank.length; i++){
    rank[i].innerHTML = parseInt((rank[i].innerHTML + n));
  }
}

function deepestChild(){
  var head = document.getElementById('grand-node').querySelectorAll('div');
  return head[head.length - 1]
}