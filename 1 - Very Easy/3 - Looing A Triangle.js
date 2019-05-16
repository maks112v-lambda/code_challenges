// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

const makeTriangle = (width, item) => {
  for(let i =1; i < width; i++){
    console.log(item.repeat(i))
  }
}

makeTriangle(7,'#')