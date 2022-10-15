//скролл вниз по Y (при скролле будет добавляться: body style="--scrollTop: 65px;")
window.addEventListener("scroll", (e) => {
  //скролл вниз по Y (при скролле будет добавляться: body style="--scrollTop: 65px;")
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`; // += добавить стили к уже имеющимся

  //
});

//плавный скрол с помощью gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".container"
});
