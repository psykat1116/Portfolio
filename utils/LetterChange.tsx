export const LetterChange = (value: string) => {
  let changeString = "";
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== " ") {
      changeString += String.fromCharCode(
        value.charCodeAt(i) + 1 > 90 ? 65 : value.charCodeAt(i) + 1
      );
    } else {
      changeString += " ";
    }
  }
  return changeString;
};
