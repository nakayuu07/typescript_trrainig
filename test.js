// const numbers = [ 1, 2, 3, 4, 5, 6 ]
// console.log(newNumbers1)

// const newNumbers2 = []
// const newNumbers1 = numbers.filter(number => number % 3 === 0)
// const newNumbers2 = numbers.map(number => number % 3 === 0)
// console.log(newNumbers2);

// console.log(newNumbers2)

// const numbers3 = Array(1, 2, 3)
// console.log(numbers3)

// console.log(numbers.find(number => number % 3 === 0));

// const stringNumbers = numbers.map(number => `${number}`)
// console.log(stringNumbers)

// const numbers = [ 1, 2, 3, 4 ]

// const a = numbers.map(number => {
//   if (number % 2 === 0) return `${number}`

//   return number * 10
// })
// console.log(a)


// const b = numbers.map(number => {
//   if (number % 2 === 0)
//   {
//     return `${number}`
//   } else
//   {
//     return number * 10
//   }
// })
// console.log(b)

// for (let i = 1; i <= 30; i++)
// {
//   if (i % 15 === 0) { console.log("fizbazz") }
//   else if (i % 5 === 0) { console.log("baz") }
//   else if (i % 3 === 0) { console.log("fiz"); }
//   else { console.log(i) }
// }

// const changeString = (str) => {
//   const strings = str.split("")
//   const newStrings = strings.map(str => {
//     if (str === str.toUpperCase()) return str.toLowerCase()
//     str.toUpperCase()
//   })
//   return newStrings.join("")
// }
// console.log(changeString("YuYA"))

// let strNumber = "1234"

// const sum = points => {
//   const tatalScore = points.reduce((point, sum) => {
//     return sum += point
//   }, 0)
//   return tatalScore
// }

// const judgement = points => {
//   const tatalScore = sum(points)
//   const maxPoint = points.length * 100

//   if (tatalScore >= maxPoint * 0.8) return 'A'
//   if (tatalScore >= maxPoint * 0.6) return 'B'
//   if (tatalScore >= maxPoint * 0.4) return 'C'
//   return 'D'
// }

// const avarageScore = points => sum(points) / points.length;

// const passOrFailure = points => {
//   const isFailer = points.some(point => point < 60)
//   const judge = isFailer ? '不合格' : '合格'
//   return judge
// }

// const finalJudgement = points => {
//   const evolution = judgement(points)
//   const judge = passOrFailure(points)
//   const avarage = avarageScore(points)
//   return `あなたの平均点は${avarage}で評価は${evolution}です。結果は${judge}です！`
// }

// const points = [ 70, 80, 100 ]
// console.log(finalJudgement(points))

// 仮引数
// const minus = (num1, num2) => {
// return num1 - num2  //戻り値 or 返り値
// }

// const result = add(2, 2) //実引数
// console.log(result)

// let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// newNumbers = numbers.filter(number => (number % 3 === 0 || number % 5 === 0))
// let total = newNumbers.reduce((number, sum) => {
//   return sum += number
// }, 0)


// let user = {
//   name: 'yuya',
//   age: 27,
//   living: 'tokyo'
// }

// let user1 = {
//   name: 'takeru',
//   age: 27,
//   living: 'swiss'
// }

// let user2 = {
//   name: 'okeda',
//   age: 26,
//   living: 'tokyo'
// }

// users = [ user, user1, user2 ]
// const overTwentySevenUsers = users.map(user => {
//   if (user.age === 27) return { name: user.name }
// })
// const correctUsers = overTwentySevenUsers.filter((val) => Boolean(val));

const workers = [
  { role: '課長', name: 'yuya' },
  { role: '部長', name: 'takeru' },
  { role: '平社員', name: 'ryosuke' },
  { role: '社長', name: 'okeda' },
  { role: '専務', name: 'murau' },
]

const roles = [ '社長', '専務', '部長', '課長', '平社員' ]

const sortRank = workers.sort((a, b) => roles.indexOf(a.role) - roles.indexOf(b.role))

console.log(sortRank)