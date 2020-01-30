let avg =
  items.reduce(function(a, b) {
    return a + b.price
  }, 0) / items.length

console.log(avg)
document.querySelector("#answer1").innerHTML =
  "The average price is $" + avg.toFixed(2)

let between = items.filter(function(x) {
  return x.price > 14.0 && x.price < 18.0
})
var final = between
  .map(function(item) {
    return item.title + "\n\n"
  })
  .join("")

console.log(between)
document.querySelector("#answer2").innerHTML = final

let gbp = items.filter(function(w) {
  return w.currency_code === "GBP"
})
let gbpitem = ""
gbp.forEach(function(item) {
  gbpitem += item.title + " costs " + item.price
})
console.log(gbp)
document.querySelector("#answer3").innerHTML = `${gbpitem}`

let woo = items
  .filter(function(a) {
    return a.materials.includes("wood")
  })
  .map(function(wood) {
    return wood.title + "\n"
  })
  .join("")
console.log(woo)
document.querySelector("#answer4").innerHTML = woo

var eightHTML = ""
var eightOrMore = items
  .filter(function(item) {
    return item.materials.length >= 8
  })
  .forEach(function(item) {
    eightHTML += `${item.title} has ${item.materials.length} materials\n`
    eightHTML += item.materials.join("\n")
    eightHTML += "\n\n"
  })
document.querySelector("#answer5").innerHTML = eightHTML

let made = items.filter(function(a) {
  return a.who_made === "i_did"
})
document.querySelector("#answer6").innerHTML =
  made.length + " were made by their sellers"
