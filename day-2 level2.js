/*Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart 
than reachinb  down and lifting people up.' by John Holmes teaches us to help one another. */
console.log("The quote \'there is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")


/*Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same \-- with charity you give love, so don\'t just give money but reach out your hand instead.")


/*Check if typeof '10' is exactly equal to 10. If not make it exactly equal */
let num ="10"
let intnum = Number(num)
console.log(intnum==10)

/* Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.*/
let g= '9.8'
let intG = Math.ceil(g)
console.log(parseFloat(intG)== 10)

/*Check if 'on' is found in both python and jargon */
console.log('python'.includes('on'))
console.log('jargon'.includes('on'))

/*I hope this course is not full of jargon. Check if jargon is in the sentence. */
console.log('I hope this course is not full of jargon'.includes('jargon'))

/*Generate a random number between 0 and 100 inclusively */
let ran1 = Math.random()*101
console.log(Math.ceil(ran1))

/*Generate a random number between 50 and 100 inclusively */
let ran2 = Math.random()*101
let randomBetween50And100 = Math.ceil(ran2)
console.log(Math.min(randomBetween50And100))

/*Generate a random number between 0 and 255 inclusively */
let randomBetween0And250 = Math.random()*256
console.log(Math.ceil(randomBetween0And250))

/*Access the 'JavaScript' string characters using a random number */
let randomNum = Math.random()*10
let randomIndex = Math.floor(randomNum)
console.log('Javascript'.charAt(randomIndex))

/*Use console.log() and escape characters to print the following pattern 
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1 \t1 \t1 \t1 \t1 \n2 \t1 \t2  \t4 \t8 \n3 \t1 \t3 \t9 \t27 \n4 \t1 \t4 \t16 \t64 \n5 \t1 \t5 \t25 \t125')

/*Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction */
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf(' is'))
console.log('You cannot end a sentence with because because because is a conjunction'.substr(31,23))

