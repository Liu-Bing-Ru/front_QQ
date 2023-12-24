//設立一個 button 的變數 然後在html裡面把此變數找出來
let button = document.querySelector(" form button");
//設立監聽系統
let section = document.querySelector("section");
button.addEventListener("click", (e) => {
  //先選哪一種監聽 然後e是參數
  // prevent form from being submitted
  //不希望按了直接交出去
  e.preventDefault();
  //console.log(e.target.parentElement); //就是form
  //設立一個新的變數
  let form = e.target.parentElement;
  let text = form.children[0].value;
  let hour = form.children[1].value;
  let min = form.children[2].value;
  //console.log(text, hour, min);

  /*type : 表示事件的名稱
  target : 表示觸發事件的元素
  bubbles : 表示這事件是否是在「冒泡」階段觸發 (true / false)
  pageX / pageY : 表示事件觸發時，滑鼠座標在網頁的相對位置*/
  if (text === "") {
    alert("Please Enter some Text.");
    return;
  }
  //=====================================創在新的物件=================================
  let todo = document.createElement("div"); //裡面放甚麼element
  todo.classList.add("Todo"); // 裡面放string
  let todo_text = document.createElement("p");
  todo_text.classList.add("Todo_text");
  todo_text.innerText = text;
  let time = document.createElement("p");
  time.classList.add("Todo_time");
  time.innerText = hour + "/" + min;
  //創完兩個之後 先入todo 這個object
  todo.appendChild(todo_text);
  todo.appendChild(time);
  //======================放置垃圾桶 + check piont===================================
  let check = document.createElement("button");
  check.classList.add("check");
  check.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  //按下去要有變化
  check.addEventListener("click", (e) => {
    //console.log(e.parentElement);
    //因為我這邊單純要做 這個物件監聽 上面是要取值不同
    //console.log(e.target.parentElement); //e.target = > form //e.target.parentElement = > todo
    //先寫add簡單版 再改成toggle
    let item = e.target.parentElement;
    item.classList.toggle("done");
  });

  let trash = document.createElement("button");
  trash.classList.add("trash");
  trash.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  trash.addEventListener("click", (e) => {
    //console.log(e);
    //console.log(e.target.parentElement); //class todo
    //與check同名沒關係 因為要按才會觸發
    let item = e.target.parentElement;
    //item.remove();
    item.addEventListener("animationend", () => {
      item.remove();
    });
    item.style.animation = "showdown 0.5s forwards";
    //不能這樣寫因為remove 不會等animation
    //item.remove();
  });
  //放進todo裡面
  //因為這邊先放trash
  //todo.appendChild(trash);
  todo.appendChild(check);
  todo.appendChild(trash);
  //設定動畫
  todo.style.animation = "showup 0.5s forwards";
  //todo.style.animation = "scaleUp 0.3s forwards";
  form.children[2].value = ""; //clear min input
  section.appendChild(todo);
});
