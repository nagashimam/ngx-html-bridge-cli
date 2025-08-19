# ngx-html-bridge-cli

## What is this library?

This is CLI tool for running [ngx-html-bridge](https://github.com/nagashimam/ngx-html-bridge).

## What is this library for?

Main intended usecase is for debugging results of ngx-html-bridge.

## API

npx html-bridge [--plain] [--annotated]

optional arguments:
--plain: Output only plain HTMLs
--annotated: Output only HTMLs with annotations about original location of each node

## example

```bash
npx html-bridge src/app/sample/sample.html
: << 'COMMENT'
Expected output is something like:
[
{
plain: "<p><span>plain works!</span></p><p>plain works!</p>",
annotated:'<p data-ngx-html-bridge-line="0" data-ngx-html-bridge-col="0" data-ngx-html-bridge-start-offset="0" data-ngx-html-bridge-end-offset="32"><span data-ngx-html-bridge-line="0" data-ngx-html-bridge-col="3" data-ngx-html-bridge-start-offset="3" data-ngx-html-bridge-end-offset="28">plain works!</span></p><p data-ngx-html-bridge-line="1" data-ngx-html-bridge-col="0" data-ngx-html-bridge-start-offset="33" data-ngx-html-bridge-end-offset="52">plain works!</p>',
}
]
COMMENT

npx html-bridge src/app/sample/sample.html --plain
: << 'COMMENT'
Expected output is something like:
["<p><span>plain works!</span></p><p>plain works!</p>"]
COMMENT

npx html-bridge src/app/sample/sample.html --annotated
: << 'COMMENT'
Expected output is something like:
['<p data-ngx-html-bridge-line="0" data-ngx-html-bridge-col="0" data-ngx-html-bridge-start-offset="0" data-ngx-html-bridge-end-offset="32"><span data-ngx-html-bridge-line="0" data-ngx-html-bridge-col="3" data-ngx-html-bridge-start-offset="3" data-ngx-html-bridge-end-offset="28">plain works!</span></p><p data-ngx-html-bridge-line="1" data-ngx-html-bridge-col="0" data-ngx-html-bridge-start-offset="33" data-ngx-html-bridge-end-offset="52">plain works!</p>']
COMMENT
```
