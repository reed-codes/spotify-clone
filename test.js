let arr = [
       {name :'jude', num : 1},
       {name :'jude', num : 2},
       {name :'jude', num : 6},
       {name :'qwerty', num : 3},
       {name :'fred', num : 4},
       {name :'brian', num : 5},
]

let new_arr = arr.filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t.name === thing.name
  ))
)

console.log(new_arr)