function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto() {
  return 'No, I must disagree';
}

BoardMember.prototype.approve() {
  return 'No, I must disagree';
}

BoardMember.prototype.veto() {
  return 'You can do that!';
}

BoardMember.prototype.veto() {
  return 'No, I must disagree';
}

BoardMember.prototype.veto() {
  return 'No, I must disagree';
}
