export const formattedPrice = (value: number | string) =>
  new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    useGrouping: true,
  }).format(value as number);

// export const inValidForm = (form: FormInstance): boolean => {
//   return (
//     !form.isFieldsTouched(true) ||
//     form.getFieldsError().some(({ errors }) => errors.length > 0)
//   );
// };

export const formatPrice = (value: number | string) => {
  const intValue = Math.floor(parseFloat(String(value)));
  const withSpaces = intValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${withSpaces}.00`;
};
