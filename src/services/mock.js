const dataItems = [{
    id: 1,
    category: "sabanas",
    stock: 20,
    title: "Sabanas 180hilos",
    price: 11000,
    imgurl: 'https://suarezhome.netlify.app/Imagenes/sabanas.jpg',
    detail: "Sabanas de 180hilos 50% algodon, 50% poliester excelente calidad",
},
{
    id: 2,
    category: "acolchados",
    stock: 25,
    title: "Acolchados",
    price: 10000,
    imgurl: 'https://suarezhome.netlify.app/Imagenes/acolchados.jpg',
    detail: "Acolchados de todos los tamaños y excelente calidad",
},
{
    id: 3,
    category: "toallas",
    stock: 10,
    title: "Juego de toallas",
    price: 5000,
    imgurl: 'https://suarezhome.netlify.app/Imagenes/toallas.jpg',
    detail: "JUego de toallas excelente calidad",
},
]

function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataItems);
      }, 1);
    });
  }
  
  export function getSingleItem(itemListid) {
    let itemR = dataItems.find((itemList) => {
        return itemList.id === Number(itemListid);
        
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemR);
      }, 1);
    });
  }
  
  export default getItems