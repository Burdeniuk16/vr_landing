import { toggleVisibility, hideOnClickOutside } from "./visibilityHandler.js";
import { initSlideShow } from "./sliderActions.js";
import { getFormData } from "./formActions.js";

const body = document.body;

const bursImg = document.getElementById("burs_img");
const sidebarMenu = document.getElementById("sidebar_menu");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slides = document.querySelectorAll(".contact_us_block");

const form = document.getElementById("form");
const formInputs = document.getElementById("form_inputs_wrapper");

toggleVisibility(bursImg, sidebarMenu);
hideOnClickOutside(body, sidebarMenu);

initSlideShow(prev, next, slides);

getFormData();
