let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
      {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

const a = {...data, name:"Rizki Triharyo Ibrahim", email : "rizkixxxxxx@gmail.com", hobby : "hiking"}
console.log(a)

const {street, city} = a.address
console.log(street)

console.log(city)