function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every((element, i) => element === arr2[i]);
  } else {
    return false;
  }
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(users => users.gender === gender).map(users => users.age).reduce((acc, element, index, arr) => {
    acc += element;
    if (index === (arr.length - 1)) {
      return acc / arr.length;
    }
    return acc;
  }, 0);
}
