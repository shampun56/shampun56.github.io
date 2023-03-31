//Header плашка
/*
const headerElem = document.querySelector(".header");

const callback = function (entries, observer) {
	if (entries[0].isInteresting) {
		headerElem.classList.remove('scroll')
	} else {
		headerElem.classList.add("scroll")
	}
};

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElem)
*/
//=============================HEADER==============================================================================================================================================
//Делаем при скролле плашку Для header'a




window.addEventListener("scroll", function (e) {
	console.log('привет');

	let header = document.querySelector(".header")
	let block = document.querySelector(".full-screen")
	let offSet = block.clientHeight;
	let offSetTop = block.getBoundingClientRect().top;
	let cf = 4;
	if (window.pageYOffset > (offSet - offSetTop) / cf) {
		header.classList.add("scroll")
	} else {
		header.classList.remove("scroll")
	}

})



//Стилизуем Select (drop-menu)




document.querySelectorAll(".drop-menu").forEach((item) => {
	const drop_menu_button = item.querySelector(".drop-menu__button");
	const drop_menu_list = item.querySelector(".drop-menu__list");
	const drop_menu_item = item.querySelectorAll(".drop-menu__item");



	if (drop_menu_button) {
		drop_menu_button.addEventListener("click", function (e) {
			drop_menu_list.classList.toggle("active")
			drop_menu_button.classList.toggle("active")
			if (document.querySelectorAll(".drop-menu__list.active").length > 1) {
				document.querySelectorAll(".drop-menu__button").forEach((button) => {
					button.classList.remove("active")
				})
				document.querySelectorAll(".drop-menu__list").forEach((list) => {
					list.classList.remove("active")
				})
				e.target.classList.add("active")
				e.target.nextElementSibling.classList.add("active")
			}
		})
	}
	if (drop_menu_item.length > 0) {
		drop_menu_item.forEach((menuItem) => {
			menuItem.addEventListener("click", function (e) {
				drop_menu_button.innerText = e.target.innerText;
				drop_menu_list.classList.remove("active")
				drop_menu_button.classList.remove("active")
			})
		})
	}
})

/*
if (document.querySelector(".drop-menu__list active")) {
	document.querySelectorAll(".drop-menu__list").forEach((list) => {
		list.classList.remove("active")
	})
}
*/
document.addEventListener("click", function (e) {
	if (!e.target.closest(".drop-menu")) {
		document.querySelectorAll(".drop-menu__list").forEach((item) => {
			item.classList.remove("active")
		})
		document.querySelectorAll(".drop-menu__button").forEach((item) => {
			item.classList.remove("active")
		})
	}
})
//Делаем наведение элементам навигации по сайту

const menuHeaderLinks = document.querySelectorAll(".menu-header__link");
if (menuHeaderLinks.length > 0) {
	for (let index = 0; index < menuHeaderLinks.length; index++) {
		const element = menuHeaderLinks[index];
		element.addEventListener("mouseover", function (e) {
			if (!element.classList.contains("active")) {
				e.target.classList.add("active")
			}
		})
		element.addEventListener("mouseout", function (e) {
			if (!e.target.classList.contains("op")) {
				e.target.classList.remove("active")
			}
		})

	}
}

//Делаем burger-menu


const headerBurger = document.querySelector(".header__burger");

if (headerBurger) {
	headerBurger.addEventListener("click", function (e) {
		document.querySelector(".burger-menu").classList.toggle("active")
		headerBurger.classList.toggle("active");
		document.body.classList.toggle("scroll-lock")
		if (document.querySelectorAll(".scroll-down").length < 1) {
			document.querySelector(".burger-menu__list").insertAdjacentHTML(
				"beforebegin",
				"<div class='scroll-down'>You can scroll down</div>"
			)
		}
	})

}



//================================M=A=I=N==========================================================================================================================


//SLIDER

new Swiper(".main-slider__slider", {
	watchOverflow: true,
	slidesPerView: 1,

	breakpoints: {
		1200: {
			direction: 'vertical',
		}
	},
	navigation: {
		prevEl: ".swiper-button-arrow-prev",
		nextEl: ".swiper-button-arrow-next",
	},
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar"
	},
	spaceBetween: 24,
	initialSlide: 2,
	thumbs: {
		swiper: {
			el: '.main-slider__mini-slider',
			watchOverflow: true,
			slidesPerView: 5,

			breakpoints: {
				1200: {
					direction: 'vertical',

				},
				767:
				{
					direction: "horizontal",
					slidesPerView: 5,
				},
			},


		}
	},
})
//Фокус инпуту

const mainSliderInputFind = document.querySelector(".main-slider__find-block");
if (mainSliderInputFind) {
	let input = document.querySelector(".main-slider__input-find")
	let placeholderInput = input.getAttribute("placeholder")

	mainSliderInputFind.addEventListener("focusin", function (e) {
		mainSliderInputFind.classList.add("active")
		input.placeholder = '';
	})
	mainSliderInputFind.addEventListener("focusout", function (e) {
		mainSliderInputFind.classList.remove("active")
		input.placeholder = placeholderInput;
	})

}


//переносим заголовок и поиск


const content = document.querySelector(".main-slider__body");

if (content) {
	if (window.innerWidth <= 1200) {
		content.prepend(document.querySelector(".main-slider__find-block"))
		content.prepend(document.querySelector(".main-slider__title"))
	}
}


//Убираем класс ibg


const imagesIbg = document.querySelectorAll(".item-main-slider__image");
if (imagesIbg.length > 0) {
	if (window.innerWidth <= 1200) {
		imagesIbg.forEach((imageIbg) => {
			imageIbg.classList.remove('ibg')
			imageIbg.style = '';
		})
	}
}


//Вешаем на табы событие 

const tabs = document.querySelectorAll("li.tab-item");

if (tabs.length > 0) {
	for (let index = 0; index < tabs.length; index++) {
		const element = tabs[index];
		element.addEventListener("click", function (e) {
			tabs.forEach((item) => {
				item.classList.remove("active")
			})
			e.target.parentNode.classList.add("active")

		})
	}
}

const btnDefault = document.querySelector(".btn-default");

if (btnDefault) {
	btnDefault.addEventListener("click", function (e) {
		e.preventDefault()
	})
}

//Делаем навигацию по блокам

const chouffer = document.querySelector(".page__image");

const linkChouffer = document.querySelectorAll("#chouffer");

if (chouffer) {
	linkChouffer.forEach((item) => {
		item.addEventListener("click", function (e) {
			chouffer.scrollIntoView(top)
			e.preventDefault()
		})
	})
}

//класс active input'ам

const inputs = document.getElementsByName("inputContact");

if (inputs.length > 0) {
	inputs.forEach((item) => {
		let placeholderInput = item.placeholder;
		item.addEventListener("focusin", function (e) {
			item.placeholder = '';
			item.style.cssText = `
			border: 1px solid #33B7BC;
			transition: all 0.8s ease 0s;
			`

		})
		item.addEventListener("focusout", function (e) {
			item.placeholder = placeholderInput;
			item.style.cssText = `
			border: none;
			transition: all 0.8s ease 0s;
			`
		})
	})
}


