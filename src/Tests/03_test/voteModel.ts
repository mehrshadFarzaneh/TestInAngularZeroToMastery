export class voteModel{
  totalVote = 0;
  positiveVote() {
    this.totalVote++;
  }
  negativeVote() {
    this.totalVote--;
  }
}
