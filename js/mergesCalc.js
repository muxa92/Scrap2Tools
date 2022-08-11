function calculateMerges() {

    let requiredLevel = $("#requiredLvl").val()*1
    let basicLevel = $("#basicLvl").val()*1
    let scrapyardv5Lvl = $("#scrapyardv5").val()*1
    let bm11lvl = $("#bm11").val()*1
    let gsAvarage = $("#gsAverage").val()*1

    let d4 = (scrapyardv5Lvl-1)/100+1
    let d7 = bm11lvl * 0.03 + 1
    let d9 = gsAvarage/100 + 1

    let j3 = (5*(requiredLevel*requiredLevel)+requiredLevel-6)
    let j4 = (5*(basicLevel*basicLevel)+basicLevel-6)

    console.log(d4)
    console.log(d7)
    console.log(d9)
    console.log(j3)
    console.log(j4)

    let merges = (j3-j4)/(2*d4*d7)/d9

    $("#mergesRequired").html(merges.toLocaleString())

}