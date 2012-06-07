describe('テストの読み方', function() {
  it('1を代入された変数aは1と等しい。詳しくはこの文章をクリックしてみよう', function() {
    var a = 1;
    assert.equal(a, 1);
  });
});

describe('#fizzbuzz()', function() {
  describe('3の倍数 fizz', function() {
    it('3', function() {
      assert.equal(fizzbuzz(3), "fizz");
    });
    it('12', function() {
      assert.equal(fizzbuzz(12), "fizz");
    });
  });
  describe('5の倍数 buzz', function() {
    it('5', function() {
      assert.equal(fizzbuzz(5), "buzz");
    });
    it('10', function() {
      assert.equal(fizzbuzz(10), "buzz");
    });
  });
  describe('15の倍数 fizzbuzz', function() {
    it('15', function() {
      assert.equal(fizzbuzz(5), "buzz");
    });
    it('30', function() {
      assert.equal(fizzbuzz(10), "buzz");
    });
  });
});

describe('Array', function() {
  describe('#fill()', function() {
    it('序の口(まずはなんでもいいからメソッドを作ってみるところから。JavaScriptにおいて"prototype"とは何かとか調べるとヒントになると思うよ！)', function() {
      var a = [1,2,3];
      assert.equal(a.fill(1)[0], 1);
    });
    it('fillはその配列の中身が全て引数になったものを返すのです', function() {
      var i, a = [1,2,3,4];
      for (i = 0; i < a.length; i++) {
        assert.equal(a.fill(1)[i], 1);
      }
    });
    it('もちろん配列の要素が5個でも動く', function() {
      var i, a = [2,3,4,5,6];
      for (i = 0; i < a.length; i++) {
        assert.equal(a.fill(2)[i], 2);
      }
    });
    it('副作用がないこと(fillを実行した後で状態に変化がないこと)(オブジェクトのコピーは…)', function() {
      var a = [1,2,3];
      a.fill(1);
      assert.equal(a[1], 2);
    });
  });
});
