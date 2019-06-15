const getSleepHours = (day) => {
  day = day.toLowerCase();
  	switch (day) {
    case 'monday':
      return 8;
    break;
    case 'tuesday':
      return 6;
    break;
    case 'wednesday':
      return 7;
    break;
    case 'thursday':
      return 6;
    break;
    case 'friday':
      return 4;
    break;
    case 'saturday':
      return 8;
    break;
    case 'sunday':
      return 10;
    break;
    default:
      return 'Invalid input';
    break;
  }

};

// testing getSleepHours / console.log(getSleepHours('Friday'));

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// testing getActualSleepHours / console.log(getActualSleepHours());

const getIdealSleepHours = (idealHours) => {
  return idealHours *7;
}

// testing getIdealSleepHours / console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} more hours sleep than you needed!`);
  } else {
    console.log(`You need at least ${idealSleepHours-actualSleepHours} hours more sleep!`);
  }
}

calculateSleepDebt();
