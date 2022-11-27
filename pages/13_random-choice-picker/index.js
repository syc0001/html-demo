const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textArea");

// const debounce = (key, delay) => {
//   console.log("deboude");
//   let timer = null;
//   let list;
//   return () => {
//     if (timer !== null) {
//       clearInterval(timer);
//       timer = null;
//     }
//     timer = setTimeout(() => {
//       list = key
//         .split(",")
//         .filter((value) => value.trim() !== "")
//         .map((value) => value.trim());
//       console.log(list);
//     }, delay);
//     console.log(key);
//   };
// };

// textArea.onkeydown = debounce(event, 1000);

textArea.focus();

textArea.addEventListener("keydown", (event) => {
  createTags(event.target.value);
  if (event.key == "Enter") {
    setTimeout(() => {
      event.target.value = "";
    }, 10);
    randomSelect();
  }
});

const createTags = (key) => {
  let list = key
    .split(",")
    .filter((value) => value.trim() !== "")
    .map((value) => value.trim());

  // const callback = debounce(key, 500);
  // list = callback();

  tagsEl.innerHTML = "";

  list.forEach((element) => {
    const tagEl = document.createElement("span");
    tagEl.innerHTML = element;
    tagEl.classList.add("tag");
    tagsEl.appendChild(tagEl);
  });

  // console.log(list);
};

const randomSelect = () => {
  const time = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    if (randomTag !== undefined) {
      highlightTag(randomTag);
      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, time * 100);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll("#tags > .tag");
  console.log(tags[parseInt(Math.random() * tags.length)]);
  return tags[parseInt(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.classList.add("highlight");
};

const unHighlightTag = (tag) => {
  tag.classList.remove("highlight");
};
