import anime from "../node_modules/animejs/lib/anime.es.js";
import logHej from "./modules/my_func.js";
import { displayImage } from "./modules/my_func.js";
anime({
    targets: 'h1',
    translateX: '90px'
})

anime({
    
})
export{anime}
logHej();

anime({
    targets: displayImage(),
    translateX: '90px',
    loop: true
})