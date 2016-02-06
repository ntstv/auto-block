import nunjucks from 'nunjucks';
import fs from 'fs';

export default function exec() {
    nunjucks.configure('templates', {
        autoescape: true,
        throwOnUndefined: true,
        trimBlocks: false,
        lstripBlocks: true
    });
    let fileContent = nunjucks.render(
        'class-layout.nj',
        {
            className: 'my.MyClass',
            superClassName: 'lib.Class',
            requires: [
                {
                    alias: 'SomeClass',
                    className: 'lib.SomeClass'
                },
                {
                    alias: 'NextClass',
                    className: 'my.NextClass'
                },
                {
                    alias: 'YourClass',
                    className: 'your.YourClass'
                },
            ]
        }
    );

    fs.writeFileSync('t.js', fileContent.replace(/^\s*\n\r?/gm, ''));
}
