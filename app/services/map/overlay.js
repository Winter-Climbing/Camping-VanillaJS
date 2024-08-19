import {
  updateCardElement,
  updateDetailsElements,
} from "../../components/index.js";

let currentCustomOverlay = null;

export const createOverlay = (map, position, content, data) => {
  const marker = new kakao.maps.Marker({
    position,
    clickable: true,
  });

  let overlayContent = `
    <div class="overlay"> 
      ${content}
    </div>`;

  let overlay = new kakao.maps.CustomOverlay({
    content: overlayContent,
    position: position,
    yAnchor: 1,
  });

  kakao.maps.event.addListener(marker, "click", () => {
    if (currentCustomOverlay && currentCustomOverlay !== overlay) {
      currentCustomOverlay.setMap(null);
    }

    overlay.setMap(map);
    currentCustomOverlay = overlay;
    updateCardElement(data);
    updateDetailsElements(data);
  });

  return marker;
};
