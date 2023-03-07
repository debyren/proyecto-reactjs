const dataItems = [{
    id: 1,
    category: "sabanas",
    stock: 20,
    title: "Sabanas 180hilos",
    price: 11000,
    imgurl: 'https://suarezhome.netlify.app/Imagenes/sabanas.jpg',
    detail: "Sabanas de 180hilos 50% algodon, 50% poliester excelente calidad",
    discount: 25,
},
{
  id: 2,
  category: "sabanas",
  stock: 25,
  title: "Sabanas 600hilos",
  price: 15000,
  imgurl: 'https://suarezhome.netlify.app/Imagenes/sabanas.jpg',
  detail: "Sabanas de 180hilos 50% algodon, 50% poliester excelente calidad",
  
},
{
  id: 3,
  category: "sabanas",
  stock: 22,
  title: "Sabanas 600hilos",
  price: 16000,
  imgurl: 'https://suarezhome.netlify.app/Imagenes/sabanas.jpg',
  detail: "Sabanas de 180hilos 50% algodon, 50% poliester excelente calidad",
},
{
    id: 4,
    category: "acolchados",
    stock: 15,
    title: "Acolchados",
    price: 10000,
    imgurl: 'https://suarezhome.netlify.app/Imagenes/acolchados.jpg',
    detail: "Acolchados de todos los tamaños y excelente calidad",
},
{
  id: 5,
  category: "acolchados",
  stock: 55,
  title: "Acolchados",
  price: 10000,
  imgurl: 'https://suarezhome.netlify.app/Imagenes/acolchados.jpg',
  detail: "Acolchados de todos los tamaños y excelente calidad",
  discount: 15,
},
{
  id: 6,
  category: "acolchados",
  stock: 95,
  title: "Acolchados",
  price: 10000,
  imgurl: 'https://suarezhome.netlify.app/Imagenes/acolchados.jpg',
  detail: "Acolchados de todos los tamaños y excelente calidad",
},
{
    id: 7,
    category: "toallas",
    stock: 10,
    title: "Juego de toallas",
    price: 4000,
    imgurl: 'https://suarezhome.netlify.app/Imagenes/toallas.jpg',
    detail: "JUego de toallas excelente calidad",
},
{
  id: 8,
  category: "toallas",
  stock: 10,
  title: "Juego de toallas",
  price: 8000,
  imgurl: 'https://suarezhome.netlify.app/Imagenes/toallas.jpg',
  detail: "JUego de toallas excelente calidad",
},
{
  id: 9,
  category: "toallas",
  stock: 10,
  title: "Juego de toallas",
  price: 7000,
  imgurl: 'https://suarezhome.netlify.app/Imagenes/toallas.jpg',
  detail: "JUego de toallas excelente calidad",
},
]

function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataItems);
      }, 1500);
    });
  }
  
  export function getSingleItem(itemid) {
    let itemR = dataItems.find( item => {
      
        return item.id === Number(itemid);
        
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemR);
      }, 1);
    });
  }
  
  export function getItemByCategory(categoryid) {
    let itemCategory = dataItems.filter( (item) => 
      
        item.category === categoryid
        
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemCategory);
      }, 1);
    });
  }

  export default getItems