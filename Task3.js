const printSegitiga = 5
if(printSegitiga *1 == printSegitiga){
    let a = ""
    for (let x = printSegitiga; x >= 1; x--){
        for (let y = 1; y <= x; y++){
        a += y;
        }
        a+="\n";
        }
        console.log(a)
}else{
    console.log("data harus number")
}
