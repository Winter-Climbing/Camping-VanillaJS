export function setTextColorByAvailability(
  element,
  text,
  matchColor,
  notMatchColor = "black",
  checkInclude = false
) {
  const matchCondition = checkInclude
    ? element.textContent.includes(text)
    : element.textContent === text;

  element.style.color = matchCondition ? matchColor : notMatchColor;
}
