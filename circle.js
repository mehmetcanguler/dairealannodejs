function circleArea(r) {
    const pi = Math.PI

    console.log(r * r * pi)
}


function circleCircumference(r) {
    const pi = Math.PI
    console.log(2 * pi * r)
}

module.exports={
    circleArea,
    circleCircumference
}