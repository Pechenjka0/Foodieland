import { doc } from "prettier"
import Swiper from 'swiper';
import 'swiper/css';
import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector";

const rootSelector = '[data-js-slider]'

class Slider {
  constructor(rootElement) {
    this.rootElement = rootElement
    this.config = JSON.parse(
      this.rootElement.getAttribute(getAttrNameFromSelector(rootSelector)) // Получаем значения атрибута data-js-slider={JSON.stringify({spaceBetween: 40,})}
    )

    this.init()
  }

  init() {
    new Swiper(this.rootElement, this.config)

  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection