var markdown = require('../../lib/markdown-parser');

describe('markdown-parser', function () {

    describe('#parse', function () {

        it('should parse emphasized text', function () {
            markdown.parse('I am __emphasized__.')
                .should.equal('<p>I am <strong>emphasized</strong>.</p>\n');
        });

        it('should parse an inline-style link', function () {
            markdown.parse('[An inline-style link](https://www.google.com)')
                .should.equal('<p><a href="https://www.google.com">An inline-style link</a></p>\n');
        });

        it('should parse an inline-style image with relative URL (with `/` prefix)', function () {
            markdown.parse('![Hello World](/assets/images/hello_world.png)')
                .should.equal('<p><img src="api/rest/raw/assets/images/hello_world.png" alt="Hello World"></p>\n');
        });

        it('should parse an inline-style image with relative URL (without `/` prefix)', function () {
            markdown.parse('![Hello World](assets/images/hello_world.png)')
                .should.equal('<p><img src="api/rest/raw/assets/images/hello_world.png" alt="Hello World"></p>\n');
        });

        it('should parse an inline-style image with absolute URL', function () {
            markdown.parse('![Hello World](http://somewhere.com/images/hello_world.png)')
                .should.equal('<p><img src="http://somewhere.com/images/hello_world.png" alt="Hello World"></p>\n');
        });

    });

});
