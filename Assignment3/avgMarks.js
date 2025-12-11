let marks = [80,90,70,85,95]
let averageMarks = marks.reduce((acc,val)=>acc+val,0)
console.log(`Average marks = ${averageMarks/marks.length}`)