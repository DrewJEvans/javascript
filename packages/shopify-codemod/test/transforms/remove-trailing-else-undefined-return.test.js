import 'test-helper';
import removeTrailingElseUndefinedReturn from 'remove-trailing-else-undefined-return';

describe('removeTrailingElseUndefinedReturn', () => {
  it('removes void returns from else generated by Decaf', () => {
    expect(removeTrailingElseUndefinedReturn).to.transform('remove-trailing-else-undefined-return/void');
  });
  it('removes undefined returns from else generated by Decaf', () => {
    expect(removeTrailingElseUndefinedReturn).to.transform('remove-trailing-else-undefined-return/undefined');
  });
  it('doesn\'t remove valid returns', () => {
    expect(removeTrailingElseUndefinedReturn).to.transform('remove-trailing-else-undefined-return/valid');
  });
  it('doesn\'t remove the entire block in multi-lined blocks', () => {
    expect(removeTrailingElseUndefinedReturn).to.transform('remove-trailing-else-undefined-return/multi');
  });
});