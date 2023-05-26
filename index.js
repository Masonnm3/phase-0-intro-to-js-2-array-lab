// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
  cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift( "Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.unshift()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(name){
    let copyOfCats = [...cats]
    copyOfCats.push(name)
    return copyOfCats
}

function prependCat(name){
    let copyOfCats = [...cats]
    copyOfCats.unshift(name)
    return copyOfCats
}

function removeLastCat(name){
    let copyOfCats = [...cats]
    copyOfCats.pop()
    return copyOfCats
}
function removeFirstCat(name){
    let copyOfCats = [...cats]
    copyOfCats.shift(name)
    return copyOfCats
}