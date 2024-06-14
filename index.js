// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  let hourStr = ''; 
  let minutesStr = ''; 
  const timeDivider = ':'; 
  let stringResult = ''; 

  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  // Handle the unique cases: (like midnight, midday, o'clock);

  // Separate hour and minutes 
  let timeArray = time.split(timeDivider); 
  hourStr = timeArray[0]; 
  minutesStr = timeArray[1]; 

  const numberToWords = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '15': 'quarter',
    '25': 'twenty-five',
  }; 
  // Transform hours into words 
  // Transform minutes into words 
  let numberMinute = parseInt(minutesStr); 
  if (numberMinute == 30) {
    stringResult = 'half past ' + numberToWords[hourStr]; 
  }
  else {
    stringResult += numberMinute > 30 ? `${numberToWords[60 - numberMinute]} to ${numberToWords[parseInt(hourStr) + 1]}` : `${numberToWords[numberMinute]} past ${numberToWords[hourStr]}`; 
  }

  // Combining the two strings together 

  // return 'half past eight';
  return stringResult;
}

module.exports = { convertTimeToWords };

/*

    '0:00' > 'midnight'
    '12:00' > 'midday'
    '2:00' > 'two o'clock'
    '2:03' > 'three past two'
    '2:11' > 'eleven past two'
    '2:15' > 'quarter past two'
    '2:30' > 'half past two'
    '2:33' > 'twenty seven to three'
    '2:40' > 'twenty to three'
    '2:45' > 'quarter to three'
    '2:55' > 'five to three'
*/