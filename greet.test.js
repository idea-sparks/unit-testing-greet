var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

describe('test greet()', function () {
    it('Greet Elizabeth as Hello, Elizabeth', function(){
        expect(greet('Elizabeth')).toBe("Hello, Elizabeth");
    });
    
    it('Greet null values ( no names) with Hello there!', function(){
        expect(greet()).toBe("Hello there!");
    });

    it('Greet uppercase names in uppercase (shouting)', function(){
        expect(greet('JOSE')).toBe("HELLO JOSE!");
    });

    it('Greet 2 names', function(){
        expect(greet(['Jose','Pep'])).toBe("Hello, Jose, Pep");
    });

    it('Greet arbitrary number of names', function(){
        expect(greet(['Alex','Arsene','Jose','Zidane'])).toBe("Hello, Alex, Arsene, Jose, Zidane");
    });

});