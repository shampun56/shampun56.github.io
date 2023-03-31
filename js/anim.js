//Анимация при скролле


const anim_items = document.querySelectorAll("._anim-item");
if (anim_items.length > 0) {
	window.addEventListener("scroll", function (e) {


		function animScroll() {
			anim_items.forEach((anim_item) => {
				let animHeight = anim_item.offSetHeight;
				let animTop = anim_item.getBoundingClientRect().top;
				let windowHeight = window.innerHeight;
				const cf = 8;


				let anim_point = windowHeight - animHeight / cf;

				if (animHeight > windowHeight) {
					anim_point = windowHeight - windowHeight / 4;
				}
				if ((window.pageYOffset > windowHeight - anim_point) && (window.pageYOffset < (animTop + animHeight))) {
					anim_item.classList.add("active")

				} else {
					anim_item.classList.remove("active")

				}
			})
		}
		animScroll()

	})

}