class Slider {
    static #content = null;
    static #left = null;
    static #right = null;

    static #count = 0;
    static #max = null;

    static init = () => {
        this.#content = document.querySelector('.slider__content');
        this.#left = document.querySelector('.slider__button--left');
        this.#right = document.querySelector('.slider__button--right');

        this.#max = this.#content.childElementCount - 1;

        this.#left.onclick = () => this.#slide('left');
        this.#right.onclick = () => this.#slide('right');
    }

    static #slide = (side) => {
        console.log(side)
        const offsetWidth = this.#content.offsetWidth;
        const scrollLeft = this.#content.scrollLeft;
        const scrollWidth = this.#content.scrollWidth;

        let scroll = 0;

        if ( side === 'left') {
            if (this.#count > 0) {
                this.#count -= 1;

                scroll = this.#count * offsetWidth;
            } else {
                this.#count = this.#max;
                scroll = this.#count * offsetWidth;
            }
        }

        if ( side === 'right') {
            if (this.#count < this.#max) {
                this.#count += 1;

                scroll = this.#count * offsetWidth;
            } else {
                this.#count = 0;
                scroll = 0;
            }
        }

        console.log(scroll)

        this.#content.scrollTo({
            top: 0,
            left: scroll,
            behavior: 'smooth',
        })
    }
}

class Header {

    static #block__menu = null;
    static #btn__menu = null;
    static #menu__visible = false;

    static init = () => {
        this.#block__menu = document.querySelector('.menu');
        this.#btn__menu = document.querySelector('.nav__menu');

        this.#btn__menu.onclick = () => this.openMenu()
    }

    static openMenu = () => {
        if (this.#menu__visible) {
            this.#block__menu.classList.remove('menu--open');
            this.#btn__menu.src = '/svg/menu.svg';
            this.#menu__visible = !this.#menu__visible;
        } else {
            this.#block__menu.classList.add('menu--open');
            this.#btn__menu.src = '/svg/x.svg';
            this.#menu__visible = !this.#menu__visible;
        }
    }
}

Header.init()
Slider.init()
