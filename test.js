describe('#fizzbuzz()', function() {
  describe('3の倍数 fizz', function() {
    it('3', function() {
      assert(fizzbuzz(3) === "fizz");
    });
    it('12', function() {
      assert(fizzbuzz(12) === "fizz");
    });
  });
  describe('5の倍数 buzz', function() {
    it('5', function() {
      assert(fizzbuzz(5) === "buzz");
    });
    it('10', function() {
      assert(fizzbuzz(10) === "buzz");
    });
  });
  describe('15の倍数 fizzbuzz', function() {
    it('15', function() {
      assert(fizzbuzz(5) === "buzz");
    });
    it('30', function() {
      assert(fizzbuzz(10) === "buzz");
    });
  });
});

describe('Array', function() {
  describe('#fill()', function() {
    it('序の口(まずはなんでもいいからメソッドを作ってみるところから。prototypeとは何かとか調べるといいと思うよ！)', function() {
      var a = [1,2,3];
      assert(a.fill(1)[0] === 1);
    });
    describe('fillはその配列の中身が全て引数になったものを返すのです', function() {
      it('1', function() {
        var a = [1,2,3,4];
        assert(a.fill(1)[1] === 1);
      });
      it('3', function() {
        var a = [1,2,3,4];
        assert(a.fill(1)[3] === 1);
      });
    });
    it('副作用がないこと(オブジェクトのコピーは…)', function() {
      var a = [1,2,3];
      a.fill(1);
      assert(a[1] === 2);
    });
  });
});