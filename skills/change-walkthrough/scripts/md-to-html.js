#!/usr/bin/env node
/**
 * Markdown to HTML converter with syntax highlighting.
 *
 * Usage: node md-to-html.js <input.md> [output.html]
 * If output is not specified, creates <input>.html alongside the input file.
 */

import { readFileSync, writeFileSync } from 'fs';
import { basename, dirname, join } from 'path';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Walkthrough</title>
    <style>
        :root {
            --bg: #fafafa;
            --text: #333;
            --heading: #2c3e50;
            --heading-border: #3498db;
            --code-bg: #2d3748;
            --code-text: #e2e8f0;
            --inline-code-bg: #edf2f7;
            --inline-code-text: #e53e3e;
            --table-border: #ddd;
            --table-alt: #f9f9f9;
            --blockquote-border: #3498db;
            --blockquote-bg: #f0f7ff;
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --bg: #1a202c;
                --text: #e2e8f0;
                --heading: #90cdf4;
                --heading-border: #4299e1;
                --code-bg: #2d3748;
                --code-text: #e2e8f0;
                --inline-code-bg: #4a5568;
                --inline-code-text: #fc8181;
                --table-border: #4a5568;
                --table-alt: #2d3748;
                --blockquote-border: #4299e1;
                --blockquote-bg: #2a4365;
            }
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
            color: var(--text);
            background: var(--bg);
        }

        h1 {
            color: var(--heading);
            border-bottom: 2px solid var(--heading-border);
            padding-bottom: 0.5rem;
        }
        h2 { color: var(--heading); margin-top: 2rem; }
        h3 { color: var(--heading); opacity: 0.9; }
        h4 { color: var(--heading); opacity: 0.8; font-family: monospace; }

        pre {
            background: var(--code-bg);
            color: var(--code-text);
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
        }
        code {
            font-family: 'SF Mono', Monaco, 'Courier New', monospace;
            font-size: 0.9em;
        }
        p code, li code, td code {
            background: var(--inline-code-bg);
            padding: 0.2em 0.4em;
            border-radius: 4px;
            color: var(--inline-code-text);
        }
        pre code {
            background: none;
            padding: 0;
            color: inherit;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            margin: 1rem 0;
        }
        th, td {
            border: 1px solid var(--table-border);
            padding: 0.75rem;
            text-align: left;
        }
        th { background: var(--table-alt); }
        tr:nth-child(even) { background: var(--table-alt); }

        ul, ol { padding-left: 1.5rem; }
        li { margin: 0.5rem 0; }

        blockquote {
            border-left: 4px solid var(--blockquote-border);
            margin: 1rem 0;
            padding: 0.5rem 1rem;
            background: var(--blockquote-bg);
        }

        hr {
            border: none;
            border-top: 1px solid var(--table-border);
            margin: 2rem 0;
        }

        /* highlight.js theme overrides for dark code blocks */
        .hljs { background: var(--code-bg); color: var(--code-text); }
        .hljs-keyword, .hljs-selector-tag, .hljs-built_in { color: #ff79c6; }
        .hljs-string, .hljs-attr { color: #f1fa8c; }
        .hljs-comment, .hljs-quote { color: #6272a4; font-style: italic; }
        .hljs-variable, .hljs-template-variable { color: #f8f8f2; }
        .hljs-number, .hljs-literal { color: #bd93f9; }
        .hljs-function, .hljs-title { color: #50fa7b; }
        .hljs-type, .hljs-class { color: #8be9fd; }
        .hljs-symbol, .hljs-bullet { color: #ffb86c; }
        .hljs-name, .hljs-tag { color: #ff79c6; }
    </style>
</head>
<body>
{{BODY}}
</body>
</html>`;

function main() {
    const args = process.argv.slice(2);

    if (args.length < 1) {
        console.error('Usage: node md-to-html.js <input.md> [output.html]');
        process.exit(1);
    }

    const inputPath = args[0];
    const outputPath = args[1] || inputPath.replace(/\.md$/, '.html');

    let mdContent;
    try {
        mdContent = readFileSync(inputPath, 'utf-8');
    } catch (err) {
        console.error(`Error: Cannot read file: ${inputPath}`);
        process.exit(1);
    }

    // Configure marked with syntax highlighting
    const marked = new Marked(
        markedHighlight({
            langPrefix: 'hljs language-',
            highlight(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return hljs.highlightAuto(code).value;
            }
        })
    );

    // Enable GitHub Flavored Markdown features
    marked.use({
        gfm: true,
        breaks: false
    });

    const htmlBody = marked.parse(mdContent);
    const htmlDoc = HTML_TEMPLATE.replace('{{BODY}}', htmlBody);

    try {
        writeFileSync(outputPath, htmlDoc, 'utf-8');
        console.log(`Created: ${outputPath}`);
    } catch (err) {
        console.error(`Error: Cannot write file: ${outputPath}`);
        process.exit(1);
    }
}

main();
