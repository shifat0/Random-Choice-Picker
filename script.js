const input = document.getElementById("input");
const tags = document.getElementById("tags");

// Event for press any key
input.addEventListener("keyup", (e) => {
  addTag(e.target.value);
  // After pressing Enter
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomChoice();
  }
});

// Showing tag at bottom
const addTag = (value) => {
  const tagArr = value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tags.innerHTML = "";

  tagArr.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tags.appendChild(tagEl);
  });
};

// Choicing random tag
const randomChoice = () => {
  const times = 30;

  // Highlighting and Unhighlighting for infinity time interval
  const interval = setInterval(() => {
    const randomTag = randomPicker();
    highlight(randomTag);
    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
  }, 100);

  // Clearing interval and setting highlight again after checking 30 times
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = randomPicker();
      highlight(randomTag);
    }, 100);
  }, 100 * times);
};

// Logic for picking random tag
const randomPicker = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

// Highlighting
const highlight = (tag) => {
  tag.classList.add("highlight");
};

// Unhighlighting
const unHighlight = (tag) => {
  tag.classList.remove("highlight");
};
