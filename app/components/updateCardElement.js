export const updateCardElement = (data) => {
  const $h1 = document.querySelector("#aside > h1");
  const $img = document.querySelector(".desc_imgBox > img");
  const $descContentAddress = document.querySelector(".desc_content-address");
  const $descContentParagraph = document.querySelector(
    ".desc_content-paragraph"
  );

  if ($h1 && $img && $descContentAddress && $descContentParagraph) {
    $h1.textContent = data.facltNm;
    $img.src = data.firstImageUrl || "../../imgs/noImg.jpg";
    $img.alt = data.facltNm || "이미지 설명";

    $descContentAddress.textContent = data.addr1 ?? "주소 준비 중입니다.";
    $descContentParagraph.textContent = truncateText(
      data.featureNm ?? "상세내용 준비 중입니다.",
      100
    );
  }
};

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
