var post = document.querySelector('#post-btn');
var d = document.querySelector('#no');
alert(d.value)
post.addEventListener('click',function(){// 第一引数にclickを指定
  // クリックイベントの処理を記述
  alert('投稿されました');
});

