javascript: (function() {
  let sel = document.getSelection();
  let selText = "";
  const reference = `[${document.title}](${location.href}) #[[Roam Capture]]`;
  const selectedRanges = [];

  if (sel.rangeCount > 1) {
    selText = reference + "\n";
    //more than one thing selected
    for (let i = 0; i < sel.rangeCount; i++) {
      selText += `\t__${sel
        .getRangeAt(i)
        .toString()
        .trim()}__ \n`;
      selectedRanges.push(sel.getRangeAt(i));
    }
  } else {
    selText = sel.toString().trim();

    //0 or 1 thing selected
    if (selText.length) {
      selectedRanges.push(sel.getRangeAt(0));
      selText = `__${selText}__ via `;
    }
    selText += reference;
  }

  const ta = document.createElement("textarea");
  ta.textContent = `${selText}`;

  document.body.appendChild(ta);
  const docSel = document.getSelection();
  docSel.removeAllRanges();
  ta.select();
  document.execCommand("copy");
  docSel.removeAllRanges();
  document.body.removeChild(ta);

  //reselect the selected text
  let newSel = document.getSelection();
  for (let i = 0; i < selectedRanges.length; i++) {
    newSel.addRange(selectedRanges[i]);
  }

  let toaster = document.createElement("div");
  toaster.innerHTML = `Copied!`;
  toaster.style.position = "fixed";
  toaster.style.display = "block";
  toaster.style.right = "10px";
  toaster.style.top = "10px";
  toaster.style.backgroundColor = "red";
  toaster.style.color = "#FFFFFF";
  toaster.style.padding = "5px";
  toaster.style.borderRadius = "5px";
  toaster.style.zIndex = "99999";
  document.body.appendChild(toaster);

  setTimeout(function() {
    toaster.style.opacity = 0;
    toaster.style.transition = "opacity 2s";
  }, 2000);

  setTimeout(function() {
    document.body.removeChild(toaster);
  }, 4000);
})();
