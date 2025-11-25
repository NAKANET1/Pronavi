document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".strengths-list li");
  const images = document.querySelectorAll(".strengths-image-placeholder li");

  const scrollStep = 300; // 300px スクロールで次のリストに変更
  let lastIndex = -1;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    let index = Math.floor(scrollY / scrollStep);

    if (index >= items.length) index = items.length - 1;
    if (index < 0) index = 0;

    if (index !== lastIndex) {
      // リスト切替
      items.forEach((item, i) => item.classList.toggle("active", i === index));
      images.forEach((img, i) => img.classList.toggle("active", i === index));
      lastIndex = index;
    }
  });

  // 初期状態
  items[0].classList.add("active");
  images[0].classList.add("active");
});
