import { Invoice, Payment } from './classImplementsInterface'
import { HasPrint } from './interfaceForClass'

const documentOne: HasPrint = new Invoice('Bistech', 'Learn Programming', 1000)
const documentTwo: HasPrint = new Payment('Cybersoft', 'fly', 2000)

const allDocuments: HasPrint[] = []
allDocuments.push(documentOne)
allDocuments.push(documentTwo)
