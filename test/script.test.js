describe('translate', function () {
	// tests go in here
    //Multiple tests for words starting with different vowels.
    it("word starting with a", function() {
        expect(translate('apple')).toEqual('appleway')
    });

    it("word starting with e", function() {
        expect(translate('eat')).toEqual('eatway')
    });
    
	// 2. At least one test for words starting with one consonant.
	
	it("word starting with a consanant", function(){
		expect(translate('beau')).toEqual('eaubay')
	})

	// 3. At least one test for words starting with two consonants.
	it("word starting with two consanants", function(){
		expect(translate('break')).toEqual('eakbray')
	})
	// 4. At least one test for words starting with three consonants.

	it("word starting with three consanants", function(){
		expect(translate('scrape')).toEqual('apescray')
	})
	
	// 5. At least one test checking for lower case conversion.

	it("word is converted to lowercase", function(){
		expect(translate('PIG')).toEqual('pigpigay')
	})
	
});