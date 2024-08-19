import { setTextColorByAvailability } from "../util";

export const updateDetailsElements = (data) => {
  const mapping = {
    homepage: ".detailContents_homepage > a",
    manageStatus: ".detailContents_operation > p",
    direction: ".detailBox_direction > p",
    resveCl: ".detailBox_resveCl > p",
    caravInnerFclty: ".detailBox_caravInnerFclty > p",
    glampInnerFclty: ".detailBox_glampInnerFclty > p",
    animalCmgCl: ".detailBox_animalCmgCl > p",
  };

  const mappingDetailList = (key) => {
    const selector = mapping[key];
    const element = document.querySelector(selector);

    if (element) {
      if (key === "homepage") {
        element.href = data[key] || "#";
        element.target = "_blank";
        element.textContent = data[key] || `업데이트 중`;
        setTextColorByAvailability(element, data[key], "#0b75ad");
      } else {
        element.textContent = data[key] || `정보 업데이트 중`;
      }

      if ((key === "manageStatus") | (key === "resveCl")) {
        setTextColorByAvailability(element, data[key], "#0b75ad");
      }

      if (key === "animalCmgCl") {
        setTextColorByAvailability(element, "불", "red", "green", true);
      }
    }
  };

  Object.keys(mapping).forEach(mappingDetailList);
};
