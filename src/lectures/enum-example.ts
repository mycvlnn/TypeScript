//Ứng dụng của enum trong việc reverse mapping.

enum Language {
  ja = 1,
  vi = 2,
  ko = 3,
  en = 4
}

console.log(Language.en)
console.log(Language[1])

enum STATUS {
  SUCCESS = 200,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
  FAILED = 422,
  FORBIDDEN = 403
}
