const displayText = (id, icon) => {
  const correspondingText = document.getElementById(id);
  const correspondingIcon = document.getElementById(icon);

  if (correspondingText.style.display == "block"){
    correspondingText.style.display = "none";
    correspondingIcon.src = "./assets/images/icon-plus.svg";

    return true;
  }

  correspondingText.style.display = "block";
  correspondingIcon.src = "./assets/images/icon-minus.svg";

  return true;
}