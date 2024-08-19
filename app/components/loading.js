new TypeIt("#loading", { speed: 100 })
  .move(-10)
  .type("정말정말 ")
  .move(null, { to: "END" })
  .delete()
  .type("다음엔 팀으로 만나요!!!")
  .move(null, { to: "END" })
  .pause(1000)
  .delete()
  .type("로딩이 아직도 안 끝났나요?")
  .move(null, { to: "END" })
  .pause(1000)
  .delete()
  .type("아 그럼 나가린데...")
  .move(null, { to: "END" })
  .pause(2000)
  .delete()
  .type("사실 캠핑장 데이터가 적을 거라 생각해서 선택했는데")
  .move(null, { to: "END" })
  .pause(1000)
  .delete()
  .type("4000가량 되더라구요...")
  .move(null, { to: "END" })
  .pause(1000)
  .delete()
  .type("캠핑장이 4000개나 필요한가요?")
  .move(null, { to: "END" })
  .pause(1000)
  .delete()
  .type("집돌이로서 이해할 수가 없어요...")
  .move(null, { to: "END" })
  .pause(1000)
  .delete()
  .type("배신 당한 기분이네요")
  .move(null, { to: "END" })
  .pause(1000)
  .go();

export const showLoadingType = () => {
  const spinner = document.getElementById("loading");
  if (spinner) {
    spinner.style.display = "flex";
  }
};

export const hideLoadingType = () => {
  const spinner = document.getElementById("loading");
  if (spinner) {
    spinner.style.display = "none";
  }
};
