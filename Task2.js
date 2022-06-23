const mtk = 59
const bahasaIndonesia = 59
const bahasaInggris = 59
const ipa = 59

rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4

if (rataRata>=90){
  console.log("Rata-rata = "+rataRata+" Grade = A")
}
  else if (rataRata >=80){
  console.log("Rata-rata = "+rataRata+" Grade = B")
}
  else if (rataRata >=70){
  console.log("Rata-rata = "+rataRata+" Grade = C")
}
  else if (rataRata >=60){
  console.log("Rata-rata = "+rataRata+" Grade = D")
}else console.log("Rata-rata = "+rataRata+" Grade = E")