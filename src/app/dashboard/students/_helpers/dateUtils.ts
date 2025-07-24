/**
 * Calculates age as of a reference date.
 * @param birthDate - in string format (yyyy-mm-dd)
 * @param referenceDate - default is '2025-01-01'
 */
export const calculateAge = (
  birthDate: string,
  referenceDate = "2025-01-01"
) => {
  const birth = new Date(birthDate);
  const reference = new Date(referenceDate);

  let age = reference.getFullYear() - birth.getFullYear();

  const beforeBirthday =
    reference.getMonth() < birth.getMonth() ||
    (reference.getMonth() === birth.getMonth() &&
      reference.getDate() < birth.getDate());

  return beforeBirthday ? age - 1 : age;
};
