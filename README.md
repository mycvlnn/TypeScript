# TypeScript
Để có thể sử dụng được typescript thì ta phải cài các package sau: 

# Locally in your project.
npm install -D typescript
npm install -D ts-node

# Or globally with TypeScript.
npm install -g typescript
npm install -g ts-node

# Depending on configuration, you may also need these
npm install -D tslib @types/node

# cú pháp cuối cùng:
yarn global add typescript ts-node ts-lib @types/node

# Cấu hình .prettierrc
https://prettier.io/playground/#N4Igxg9gdgLgprEAuEBLWcBOAzAhmOAAgFkBPASQx3yOAB0pDDsIIAKASiUIGcZN0AcwA0DJgCNcmbgEFMmXKQA8UAK4BbcVgB8oqAF8GDOAA8ADhEwxCucXwVhrYADa4ePQgDFWhVOrPOcOoIMB5klPDUBIT0jMysnDFiTCmpTAD06YQAKgDyACK53JhwMKqYjLiVjqq4zoQAbnWqRAAWWHDJaYQlZRWEAOTtzs4QA10phnGCpYSSmImxqb3ljADaTACMehNMAEzChADMeqkAuslTUwwwpGZEAEpwAI4tfNl3RAC8gwDiAKLZAaEAA+gwAEv8ZPlgWCBgAFXIAZSBoMG8IAqqi4bl4dlyLkAHJI2GDADCRMJ-zJ2MG+X+ABlAf9SQNsg8ZGSWSBhCAIGYYKhoDxkKApJgIAB3eFSBAilB1SWKEW88QOADWpSRuGCDPQcGQeGcPDgqo1WrM+CEyH4LV5QS0ABNHXBHQyqoJajNvJh1LgYIKoIJkCBcKoYBAeSBWjB1M4AOqtVDwHiWghIuXJ1ANZOkENgdxR9AmqzwhSCP2Guom3kAKx4JiRQkCAEVVBB4FXjaaQJbMCWQ7d7jwwAIBVGzAJYPHUI6YK1kJsAAxL3mTiAm+MKMwhydwEsNA2814duBl-ny0M8AC0UDgrtdUZKr1QJTLuAruC7NZAJvUqBtTA7V-Zs4DbU9AOAmBbBnOcFyQA4QH4XBUGcIQyQgdRKxQfcAFYo1UE1slseUjR-BoWkoF1YCRUdUAFGQoEdJFbkCb84H0fQgA

# Cấu hình ts-jest để viết unit trong typescript : 
https://kulshekhar.github.io/ts-jest/docs/getting-started/installation

# Tạo ra file tsconfig.json
Lệnh : tsc --init