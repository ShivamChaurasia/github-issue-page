import { getLastPageNumber, timeSince} from './index'

describe('issueReducer', () => {

  it('should return last page index', () => {
    expect(getLastPageNumber(
      '<https://api.github.com/repositories/10270250/issues?page=2>; rel="next", <https://api.github.com/repositories/10270250/issues?page=14>; rel="last"'
    )).toEqual("14");
  });
  
  it('should return 0 seconds for same date', () => {
    expect(timeSince(new Date())).toEqual("0 seconds");
  });

  it('should return 3 minutes for 180 seconds', () => {
    let timeDiff = 180 * 1000;
    expect(timeSince(new Date() - timeDiff)).toEqual("3 minutes");
  });
  
  it('should return 2 hours for 2 * 3600 seconds', () => {
    let timeDiff = 2 * 3600 * 1000;
    expect(timeSince(new Date() - timeDiff)).toEqual("2 hours");
  });
  
  it('should return 2 days for 2 * 3600 seconds', () => {
    let timeDiff = 2 * 86400 * 1000;
    expect(timeSince(new Date() - timeDiff)).toEqual("2 days");
  });
  
  it('should return 2 months for 2 * 3600 seconds', () => {
    let timeDiff = 2 * 2592000 * 1000;
    expect(timeSince(new Date() - timeDiff)).toEqual("2 months");
  });
  
  it('should return 2 years for 2 * 3600 seconds', () => {
    let timeDiff = 2 * 31536000 * 1000;
    expect(timeSince(new Date() - timeDiff)).toEqual("2 years");
  });

});
