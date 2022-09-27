function add(a, b){
  return Math.round((Number(a) + Number(b))*1e12) / 1e12
}

function substract(a, b){
  return Math.round((Number(a) - Number(b))*1e12) / 1e12
}

function divide(a, b){
  return Math.round((Number(a) / Number(b))*1e12) / 1e12
}

function multiply(a, b){
  return Math.round((Number(a) * Number(b))*1e12) / 1e12
}

module.exports = {add, substract, divide, multiply};