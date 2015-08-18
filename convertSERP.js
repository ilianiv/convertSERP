/**
 * @param input     input string
 * @param limit     items per page before conversion
 * @param new_limit items per page after conversion
 */
function convertSERP(input, limit, new_limit) {
  var first_letter = input[0].toLowerCase();
  
  if (first_letter == 'w' || first_letter == 'x' || input.indexOf('p 9 9') === 0 || input.indexOf('P 9 9') === 0) {
    return input;
  }
  
  if (!limit) {
    limit = 10;
  }
  
  if (!new_limit) {
    new_limit = 10;
  }
  
  var prefix = input[0],
      temp = input.substring(2),
      arr = temp.split(" "),
      pure = (parseInt(arr[0]) - 1) * parseInt(limit) + parseInt(arr[1]),
      page = Math.ceil(pure / new_limit),
      offset = pure % new_limit;
  
  if (offset === 0) {
    offset = new_limit;
  }
  
  return input[0] + ' ' + page + ' ' + offset;
}

