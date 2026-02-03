function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id
  this.name = name
  this.price = price
  this.quantity = quantity
  this.category = category
  this.isAvailable = isAvailable
}

var products = [
  new Product("P1", "Laptop Pro", 35000000, 5, "Laptop", true),
  new Product("P2", "Laptop Air", 28000000, 0, "Laptop", true),
  new Product("P3", "Chuot Gaming", 1200000, 10, "Accessories", true),
  new Product("P4", "Ban phim co", 2500000, 0, "Accessories", false),
  new Product("P5", "Man hinh 27 inch", 8000000, 6, "Monitor", true),
  new Product("P6", "USB Hub", 900000, 15, "Accessories", true)
]

console.log("Danh sach san pham")
console.log(products)

var namePrice = products.map(function(p) {
  return { ten: p.name, gia: p.price }
})

console.log("Ten va gia")
console.log(namePrice)

var conHang = products.filter(function(p) {
  return p.quantity > 0
})

console.log("San pham con hang")
console.log(conHang)

var giaCao = products.some(function(p) {
  return p.price > 30000000
})

console.log("Co san pham gia cao hon 30tr khong")
console.log(giaCao)

var phuKien = products.filter(function(p) {
  return p.category.includes("Accessories")
})

var phuKienDangBan = phuKien.every(function(p) {
  return p.isAvailable
})

console.log("Tat ca phu kien dang ban khong")
console.log(phuKienDangBan)

var tongKho = products.reduce(function(tong, p) {
  return tong + p.price * p.quantity
}, 0)

console.log("Tong gia tri kho")
console.log(tongKho)

console.log("Duyet san pham")
for (var p of products) {
  var trangThai = p.isAvailable ? "dang ban" : "ngung ban"
  console.log(p.name + " - " + p.category + " - " + trangThai)
}

console.log("Thuoc tinh cua san pham dau")
var sp = products[0]
for (var key in sp) {
  console.log(key + " :", sp[key])
}

var dangBanConHang = products
  .filter(function(p) {
    return p.isAvailable && p.quantity > 0
  })
  .map(function(p) {
    return p.name
  })

console.log("Ten san pham dang ban va con hang")
console.log(dangBanConHang)
