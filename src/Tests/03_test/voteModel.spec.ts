import { voteModel } from './voteModel';
describe('Vote Task Test', () => {
  // Arrange
   let Vote_Model:voteModel;
  beforeEach(() => {
    Vote_Model = new voteModel();
  });

  it('up vote work properly', () => {
    //Act
    Vote_Model.positiveVote();

    //Assert
    expect(Vote_Model.totalVote).toBe(1);
  })
  it('down vote work properly', () => {
    // Act
    Vote_Model.negativeVote();

    //Assert
    expect(Vote_Model.totalVote).toBe(-1);
  })
})
// ** For Clean Code: Use { 1- Arrange 2- Act 3- Assert }
