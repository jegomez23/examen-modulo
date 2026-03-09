let productos = [200,150,300,120,500]


productos.splice(3,1)
console.log(productos)

productos.unshift(800)
console.log(productos)

let nuevoArray = productos.map(producto=> producto + 3.5)

console.log(nuevoArray)

productos.forEach(producto=> console.log(producto))

nuevoArray.forEach(conAñadido=>console.log(conAñadido))