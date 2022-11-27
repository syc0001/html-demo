window.onload = function () {
  let arrowEl = document.querySelector("#head .headMain > .arrow");
  let liNodes = document.querySelectorAll(
    "#head .headMain > .nav > .list > li"
  );
  let upNodes = document.querySelectorAll(
    "#head .headMain > .nav > .list > li .up"
  );
  let firstLiNode = liNodes[0];
  let firstUpNode = firstLiNode.querySelector(".up");
  let head = document.querySelector("#head");
  let content = document.querySelector("#content");
  let cLiNodes = document.querySelectorAll("#content .list > li");
  let cList = document.querySelector("#content .list ");
  //同步当前的索引
  let now = 0;
  let timer = 0;
  //上一屏
  let preIndex = 0;

  let home2LiNodes = document.querySelectorAll(
    "#content > .list > .home .home2 > li"
  );
  let home1LiNodes = document.querySelectorAll(
    "#content > .list > .home .home1 > li"
  );
  let home1 = document.querySelector("#content > .list > .home .home1");
  let aboutUls = document.querySelectorAll(
    "#content > .list > .about .about3 > .item > ul"
  );
  let dotLis = document.querySelectorAll("#content > .dot > li");

  let team3 = document.querySelector("#content > .list > .team  .team3");
  let team3Ul = document.querySelector("#content > .list > .team .team3 ul");
  let team3Lis = document.querySelectorAll(
    "#content > .list > .team .team3 ul > li"
  );

  let mask = document.querySelector("#mask");
  let line = document.querySelector("#mask .line");
  let mians = document.querySelectorAll("#mask div");
  //开机动画
  loadingAn();
  function loadingAn() {
    let arr = [
      "bg1.jpg",
      "bg2.jpg",
      "bg3.jpg",
      "bg4.jpg",
      "bg5.jpg",
      "about1.jpg",
      "about2.jpg",
      "about3.jpg",
      "about4.jpg",
      "worksimg1.jpg",
      "worksimg2.jpg",
      "worksimg3.jpg",
      "worksimg4.jpg",
      "team.png",
      "greenLine.png",
    ];
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
      let img = new Image();
      img.src = "./img/" + arr[i];
      img.onload = function () {
        flag++;
        line.style.width = (flag / arr.length) * 100 + "%";
      };
    }
    line.addEventListener("transitionend", function () {
      if (flag == arr.length) {
        for (let i = 0; i < mians.length; i++) {
          mians[i].style.height = 0 + "px";
          this.style.display = "none";
        }
      }
    });
    mians[0].addEventListener("transitionend", function () {
      mask.remove();
      home3D();
    });
  }

  //音频
  // music.onclick = function () {
  //   if (audio.paused) {
  //     audio.play();
  //     music.style.background = "url(img/musicon.gif)";
  //   } else {
  //     audio.pause();
  //     music.style.background = "url(img/musicoff.gif)";
  //   }
  // };

  //出入场状态
  let anArr = [
    {
      inAn: function () {
        let home1 = document.querySelector("#content > .list > .home .home1");
        let home2 = document.querySelector("#content > .list > .home .home2");
        home1.style.transform = "translateY(0px)";
        home2.style.transform = "translateY(0px)";
        home1.style.opacity = 1;
        home2.style.opacity = 1;
      },
      outAn: function () {
        let home1 = document.querySelector("#content > .list > .home .home1");
        let home2 = document.querySelector("#content > .list > .home .home2");
        home1.style.transform = "translateY(-400px)";
        home2.style.transform = "translateY(100px)";
        home1.style.opacity = 0;
        home2.style.opacity = 0;
      },
    },
    {
      inAn: function () {
        let plane1 = document.querySelector("#content  .course .plane1");
        let plane2 = document.querySelector("#content  .course .plane2");
        let plane3 = document.querySelector("#content  .course .plane3");
        plane1.style.transform = "translate(0px,0px)";
        plane2.style.transform = "translate(0px,0px)";
        plane3.style.transform = "translate(0px,0px)";
      },
      outAn: function () {
        let plane1 = document.querySelector("#content  .course .plane1");
        let plane2 = document.querySelector("#content  .course .plane2");
        let plane3 = document.querySelector("#content  .course .plane3");
        plane1.style.transform = "translate(-200px,-200px)";
        plane2.style.transform = "translate(-200px,200px)";
        plane3.style.transform = "translate(200px,-200px)";
      },
    },
    {
      inAn: function () {
        let pencel1 = document.querySelector("#content  .works .pencel1");
        let pencel2 = document.querySelector("#content  .works .pencel2");
        let pencel3 = document.querySelector("#content  .works .pencel3");
        pencel1.style.transform = "translateY(0px)";
        pencel2.style.transform = "translateY(0px)";
        pencel3.style.transform = "translateY(0px)";
      },
      outAn: function () {
        let pencel1 = document.querySelector("#content  .works .pencel1");
        let pencel2 = document.querySelector("#content  .works .pencel2");
        let pencel3 = document.querySelector("#content  .works .pencel3");
        pencel1.style.transform = "translateY(-100px)";
        pencel2.style.transform = "translateY(100px)";
        pencel3.style.transform = "translateY(100px)";
      },
    },
    {
      inAn: function () {
        let Rect1 = document.querySelector(
          "#content > .list > .about .about3 > .item:nth-child(1)"
        );
        let Rect2 = document.querySelector(
          "#content > .list > .about .about3 > .item:nth-child(2)"
        );
        Rect1.style.transform = "rotate(0deg)";
        Rect2.style.transform = "rotate(0deg)";
      },
      outAn: function () {
        let Rect1 = document.querySelector(
          "#content > .list > .about .about3 > .item:nth-child(1)"
        );
        let Rect2 = document.querySelector(
          "#content > .list > .about .about3 > .item:nth-child(2)"
        );
        Rect1.style.transform = "rotate(45deg)";
        Rect2.style.transform = "rotate(-45deg)";
      },
    },
    {
      inAn: function () {
        let Rect1 = document.querySelector("#content > .list > .team .team1");
        let Rect2 = document.querySelector("#content > .list > .team .team2");

        Rect1.style.transform = "translateX(0px)";
        Rect2.style.transform = "translateX(0px)";
      },
      outAn: function () {
        let Rect1 = document.querySelector("#content > .list > .team .team1");
        let Rect2 = document.querySelector("#content > .list > .team .team2");

        Rect1.style.transform = "translateX(-200px)";
        Rect2.style.transform = "translateX(200px)";
      },
    },
  ];
  for (let i = 0; i < anArr.length; i++) {
    anArr[i]["outAn"]();
  }
  setTimeout(function () {
    anArr[0].inAn();
  }, 2000);
  //第五屏气泡效果
  biubiu();
  function biubiu() {
    let oc = null;
    let time1 = 0;
    let time2 = 0;
    for (let i = 0; i < team3Lis.length; i++) {
      team3Lis[i].onmouseenter = function () {
        for (let i = 0; i < team3Lis.length; i++) {
          team3Lis[i].style.opacity = 0.5;
        }
        this.style.opacity = 1;
        addCanvas();
        oc.style.left = this.offsetLeft + "px";
      };
    }
    function addCanvas() {
      if (!oc) {
        oc = document.createElement("canvas");
        oc.width = team3Lis[0].offsetWidth;
        oc.height = (team3Lis[0].offsetHeight * 2) / 3;
        team3.onmouseleave = function () {
          for (let i = 0; i < team3Lis.length; i++) {
            team3Lis[i].style.opacity = 1;
          }
          removeCanvas();
        };
        team3.appendChild(oc);
        QiPao();
      }
    }
    function removeCanvas() {
      oc.remove();
      oc = null;
      clearInterval(time1);
      clearInterval(time2);
    }
    function QiPao() {
      if (oc.getContext) {
        let ctx = oc.getContext("2d");
        let arr = [];
        //将数组中的圆绘制到画布上
        time1 = setInterval(function () {
          ctx.clearRect(0, 0, oc.width, oc.height);
          //动画
          for (let i = 0; i < arr.length; i++) {
            arr[i].deg += 10;
            arr[i].x =
              arr[i].startX +
              Math.sin((arr[i].deg * Math.PI) / 180) * arr[i].step * 2;
            arr[i].y =
              arr[i].startY - ((arr[i].deg * Math.PI) / 180) * arr[i].step;

            if (arr[i].y <= 50) {
              arr.splice(i, 1);
            }
          }
          //绘制
          for (let i = 0; i < arr.length; i++) {
            ctx.save();
            ctx.fillStyle =
              "rgba(" +
              arr[i].red +
              "," +
              arr[i].green +
              "," +
              arr[i].blue +
              "," +
              arr[i].alp +
              ")";
            ctx.beginPath();
            ctx.arc(arr[i].x, arr[i].y, arr[i].r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
          }
        }, 1000 / 60);

        //往arr中注入随机圆的信息
        time2 = setInterval(function () {
          let r = Math.random() * 6 + 2;
          let x = Math.random() * oc.width;
          let y = oc.height - r;
          let red = Math.round(Math.random() * 255);
          let green = Math.round(Math.random() * 255);
          let blue = Math.round(Math.random() * 255);
          let alp = 1;

          let deg = 0;
          let startX = x;
          let startY = y;
          //曲线的运动形式
          let step = Math.random() * 20 + 10;
          arr.push({
            x: x,
            y: y,
            r: r,
            red: red,
            green: green,
            blue: blue,
            alp: alp,
            deg: deg,
            startX: startX,
            startY: startY,
            step: step,
          });
        }, 50);
      }
    }
  }
  //第四屏图片炸裂效果
  picBoom();
  function picBoom() {
    for (let i = 0; i < aboutUls.length; i++) {
      change(aboutUls[i]);
    }
    function change(UL) {
      let src = UL.dataset.src;
      let w = UL.offsetWidth / 2;
      let h = UL.offsetHeight / 2;
      for (let i = 0; i < 4; i++) {
        let liNode = document.createElement("li");
        liNode.style.width = w + "px";
        liNode.style.height = h + "px";
        let imgNode = document.createElement("img");
        imgNode.style.left = -(i % 2) * w + "px";
        imgNode.style.top = -Math.floor(i / 2) * h + "px";
        imgNode.src = src;
        liNode.appendChild(imgNode);
        UL.appendChild(liNode);
      }
      // let imgNodes=document.querySelectorAll("#content > .list > .about .about3 > .item > ul > li > img")
      UL.onmouseenter = function () {
        let imgNodes = this.querySelectorAll("li>img");
        imgNodes[0].style.top = h + "px";
        imgNodes[1].style.left = -2 * w + "px";
        imgNodes[2].style.left = w + "px";
        imgNodes[3].style.top = -2 * h + "px";
      };
      UL.onmouseleave = function () {
        let imgNodes = this.querySelectorAll("li>img");
        imgNodes[0].style.top = 0 + "px";
        imgNodes[1].style.left = -w + "px";
        imgNodes[2].style.left = 0 + "px";
        imgNodes[3].style.top = -h + "px";
      };
    }
  }

  // 第一屏3D效果
  let oldIndex = 0;
  let timer3D = 0;
  let autoIndex = 0;
  // home3D();
  function home3D() {
    for (let i = 0; i < home2LiNodes.length; i++) {
      home2LiNodes[i].index = i;
      home2LiNodes[i].onclick = function () {
        clearInterval(timer3D);
        for (let i = 0; i < home2LiNodes.length; i++) {
          home2LiNodes[i].classList.remove("active");
        }
        this.classList.add("active");
        //从左往右 如果当前索引大于上一次索引
        if (this.index > oldIndex) {
          home1LiNodes[this.index].classList.remove("leftShow");
          home1LiNodes[this.index].classList.remove("leftHide");
          home1LiNodes[this.index].classList.remove("rightHide");
          home1LiNodes[this.index].classList.add("rightShow");

          home1LiNodes[oldIndex].classList.remove("leftShow");
          home1LiNodes[oldIndex].classList.remove("rightShow");
          home1LiNodes[oldIndex].classList.remove("rightHide");
          home1LiNodes[oldIndex].classList.add("leftHide");
        }
        //从右往左 如果当前索引小于上一次索引
        if (this.index < oldIndex) {
          home1LiNodes[this.index].classList.remove("rightShow");
          home1LiNodes[this.index].classList.remove("rightHide");
          home1LiNodes[this.index].classList.remove("leftHide");
          home1LiNodes[this.index].classList.add("leftShow");

          home1LiNodes[oldIndex].classList.remove("leftShow");
          home1LiNodes[oldIndex].classList.remove("leftHide");
          home1LiNodes[oldIndex].classList.remove("rightShow");
          home1LiNodes[oldIndex].classList.add("rightHide");
        }
        oldIndex = this.index;

        autoIndex = this.index;
        // move();
      };
    }
    move();
    //从左向右自动轮播
    function move() {
      clearInterval(timer3D);
      timer3D = setInterval(function () {
        autoIndex++;
        if (autoIndex == home2LiNodes.length) {
          autoIndex = 0;
        }
        for (let i = 0; i < home2LiNodes.length; i++) {
          home2LiNodes[i].classList.remove("active");
        }
        home2LiNodes[autoIndex].classList.add("active");
        home1LiNodes[autoIndex].classList.remove("leftShow");
        home1LiNodes[autoIndex].classList.remove("leftHide");
        home1LiNodes[autoIndex].classList.remove("rightHide");
        home1LiNodes[autoIndex].classList.add("rightShow");

        home1LiNodes[oldIndex].classList.remove("leftShow");
        home1LiNodes[oldIndex].classList.remove("rightShow");
        home1LiNodes[oldIndex].classList.remove("rightHide");
        home1LiNodes[oldIndex].classList.add("leftHide");
        oldIndex = autoIndex;
      }, 2000);
    }
    home1.onmouseenter = function () {
      clearInterval(timer3D);
    };
    home1.onmouseleave = function () {
      move();
    };
  }

  window.onresize = function () {
    contentBind();
    cList.style.top =
      -now * (document.documentElement.clientHeight - head.offsetHeight) + "px";
    arrowEl.style.left =
      liNodes[now].offsetLeft +
      liNodes[now].offsetWidth / 2 -
      arrowEl.offsetWidth / 2 +
      "px";
  };
  //内容区交互
  contentBind();
  function contentBind() {
    content.style.height =
      document.documentElement.clientHeight - head.offsetHeight + "px";
    for (let i = 0; i < cLiNodes.length; i++) {
      cLiNodes[i].style.height =
        document.documentElement.clientHeight - head.offsetHeight + "px";
    }
  }

  //内容区交互(滚轮)
  if (content.addEventListener) {
    content.addEventListener("DoMMouseScroll", function (ev) {
      ev = ev || event;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn(ev);
      }, 200);
    });
  }
  content.onmousewheel = function (ev) {
    ev = ev || event;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(ev);
    }, 200);
  };
  function fn(ev) {
    ev = ev || event;
    let dir = "";
    if (ev.wheelDelta) {
      dir = ev.wheelDelta > 0 ? "up" : "down";
    } else if (ev.detail) {
      dir = ev.detail < 0 ? "up" : "down";
    }
    preIndex = now;
    switch (dir) {
      case "up":
        if (now > 0) {
          now--;
          move(now);
          // console.log("up");
        }
        break;
      case "down":
        if (now < cLiNodes.length - 1) {
          now++;
          move(now);
          // console.log("down");
        }
        break;
    }
  }

  //头部交互
  headBind();
  function headBind() {
    firstUpNode.style.width = "100%";
    arrowEl.style.left =
      firstLiNode.offsetLeft +
      firstLiNode.offsetWidth / 2 -
      arrowEl.offsetWidth / 2 +
      "px";
    for (let i = 0; i < liNodes.length; i++) {
      liNodes[i].index = i;
      liNodes[i].onclick = function () {
        preIndex = now;
        move(this.index);
        now = this.index;
      };
    }
    for (let i = 0; i < dotLis.length; i++) {
      dotLis[i].index = i;
      dotLis[i].onclick = function () {
        preIndex = now;
        move(this.index);
        now = this.index;
      };
    }
  }
  function move(index) {
    for (let i = 0; i < upNodes.length; i++) {
      upNodes[i].style.width = "";
    }
    upNodes[index].style.width = "100%";
    arrowEl.style.left =
      liNodes[index].offsetLeft +
      liNodes[index].offsetWidth / 2 -
      arrowEl.offsetWidth / 2 +
      "px";
    cList.style.top =
      -index * (document.documentElement.clientHeight - head.offsetHeight) +
      "px";
    for (let i = 0; i < dotLis.length; i++) {
      dotLis[i].className = "";
    }
    dotLis[index].className = "active";
    if (anArr[index] && typeof anArr[index]["inAn"] === "function") {
      anArr[index]["inAn"]();
    }
    if (anArr[preIndex] && typeof anArr[preIndex]["inAn"] === "function") {
      anArr[preIndex]["outAn"]();
    }
  }
};
