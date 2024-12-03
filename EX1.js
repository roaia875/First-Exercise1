//רואיה חבשה -רואן חבשה

const num = 123; // דוגמה למספר

// בדיקה של חלוקה ב-2, 3 או 5
const divisibleBy2 = num % 2 === 0;
const divisibleBy3 = num % 3 === 0;
const divisibleBy5 = num % 5 === 0;

// חישוב התוצאה בעזרת פעולות לוגיות
const result = Number(divisibleBy2) + Number(divisibleBy3) + Number(divisibleBy5);

// הדפסת התוצאה
console.log(result);