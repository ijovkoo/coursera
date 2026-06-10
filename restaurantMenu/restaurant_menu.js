const breakfastMenu = ['Pancakes-$100', 'Eggs Benedict-$1', 'Oatmeal-$100', 'Frittata--$990'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let hola=""
for (let i =0;i<mainCourseMenu.length;i++){
    hola += `<p>Item ${i + 1}: ${mainCourseMenu[i]}</p>`;
}
document.getElementById("maincourseMenuItems").innerHTML= hola

let desserItem = "";
for (let i = 0; i < dessertMenu.length; i++) {
    // Cambiadas las comillas "" por comillas invertidas ``
    desserItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

document.getElementById("dessertMenuItems").innerHTML = desserItem;