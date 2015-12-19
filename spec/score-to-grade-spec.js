
describe('score_to_grade-spec', function() {

  it('if given 40,return D', function() {
    var result = score_to_grade(40);
    expect(result).toEqual("D");
  });

  it('if given 60,return C', function() {
    var result = score_to_grade(60);
    expect(result).toEqual("C");
  });

  it('if given 74,return B', function() {
    var result = score_to_grade(74);
    expect(result).toEqual("B");
  });

  it('if given 80,return A', function() {
    var result = score_to_grade(80);
    expect(result).toEqual("A");
  });

  it('if given 85,return A', function() {
    var result = score_to_grade(85);
    expect(result).toEqual("A");
  });

  it('if given 93,return S', function() {
    var result = score_to_grade(93);
    expect(result).toEqual("S");
  });

  it('if given 100,return S', function() {
    var result = score_to_grade(100);
    expect(result).toEqual("S");
  });

  it('if given -12,throw err too low', function() {
    expect(function (){score_to_grade(-12)}).toThrow(new Error("too low"));
  });

  it('if given 110,throw err too high', function() {
    expect(function (){score_to_grade(110)}).toThrow(new Error("too high"));
  });

  it('if given "",throw err empty',function(){
    expect(function (){score_to_grade("")}).toThrow(new Error("empty"));
  });

  it('if given abc,throw err not a number',function(){
    expect(function (){score_to_grade("abc")}).toThrow(new Error("not a number"));
  });
  
});
