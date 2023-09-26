const rp = (value?: number) => `Rp. ${(value || 0).toLocaleString("ID")},-`;
function capitalizeWords(inputString: string) {
  // Split the inputString into an array of words
  const words = inputString?.toLowerCase().split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words?.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a single string
  return capitalizedWords?.join(" ");
}
const remove0or62 = (num: number) => num.toString().replace(/^(0|62)/, "");

const addPhone62 = (phoneNumber: number) => {
  return 62 + phoneNumber;
};
const addPhone0 = (phoneNumber: number) => {
  return 0 + phoneNumber;
};

const addCommas = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeNonNumeric = (num: any) =>
  num.target.value.toString().replace(/[^0-9]/g, "");
// const handleCurChange = (event: any) =>
//   handleInput("price", true)(addCommas(removeNonNumeric(event.target.value)));
export {
  rp,
  capitalizeWords,
  addCommas,
  removeNonNumeric,
  remove0or62,
  addPhone62,
  addPhone0,
};
