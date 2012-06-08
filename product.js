var fizzbuzz = function(n) {
  return "fizz";
};

// Arrayのプロトタイプにメソッドを追加するべきかどうかは
// 議論の余地がある
// 慎重に使うべし(もし実際の開発でやるときは絶対にチームメンバーに共有すること)
// 同様のことを行なっているライブラリもあるため、こういうことができるということは知っておく必要はあるだろう
Array.prototype.fill = function() {
  return this;
};
