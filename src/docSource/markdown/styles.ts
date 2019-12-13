import { css, CSSResultArray } from 'lit-element';

// from https://raw.githubusercontent.com/highlightjs/highlight.js/master/src/styles/github.css
export const HLJS = css`
  /*

github.com style (c) Vasily Polovnyov <vast@whiteants.net>

*/

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f8f8f8;
  }

  .hljs-comment,
  .hljs-quote {
    color: #998;
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: #333;
    font-weight: bold;
  }

  .hljs-number,
  .hljs-literal,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag .hljs-attr {
    color: #008080;
  }

  .hljs-string,
  .hljs-doctag {
    color: #d14;
  }

  .hljs-title,
  .hljs-section,
  .hljs-selector-id {
    color: #900;
    font-weight: bold;
  }

  .hljs-subst {
    font-weight: normal;
  }

  .hljs-type,
  .hljs-class .hljs-title {
    color: #458;
    font-weight: bold;
  }

  .hljs-tag,
  .hljs-name,
  .hljs-attribute {
    color: #000080;
    font-weight: normal;
  }

  .hljs-regexp,
  .hljs-link {
    color: #009926;
  }

  .hljs-symbol,
  .hljs-bullet {
    color: #990073;
  }

  .hljs-built_in,
  .hljs-builtin-name {
    color: #0086b3;
  }

  .hljs-meta {
    color: #999;
    font-weight: bold;
  }

  .hljs-deletion {
    background: #fdd;
  }

  .hljs-addition {
    background: #dfd;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }
`;

// From https://github.com/sindresorhus/github-markdown-css/blob/gh-pages/github-markdown.css
const GFM1 = css`
  @font-face {
    font-family: octicons-link;
    src: url(data:font/woff;charset=utf-8;base64,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)
      format('woff');
  }
`;
const GFM2 = css`
  .markdown-body .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }

  .markdown-body .anchor {
    float: left;
    line-height: 1;
    margin-left: -20px;
    padding-right: 4px;
  }

  .markdown-body .anchor:focus {
    outline: none;
  }

  .markdown-body h1 .octicon-link,
  .markdown-body h2 .octicon-link,
  .markdown-body h3 .octicon-link,
  .markdown-body h4 .octicon-link,
  .markdown-body h5 .octicon-link,
  .markdown-body h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  .markdown-body h1:hover .anchor,
  .markdown-body h2:hover .anchor,
  .markdown-body h3:hover .anchor,
  .markdown-body h4:hover .anchor,
  .markdown-body h5:hover .anchor,
  .markdown-body h6:hover .anchor {
    text-decoration: none;
  }

  .markdown-body h1:hover .anchor .octicon-link,
  .markdown-body h2:hover .anchor .octicon-link,
  .markdown-body h3:hover .anchor .octicon-link,
  .markdown-body h4:hover .anchor .octicon-link,
  .markdown-body h5:hover .anchor .octicon-link,
  .markdown-body h6:hover .anchor .octicon-link {
    visibility: visible;
  }
  .markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    color: var(--markdown-text-color);
    font-family: var(--markdown-font-family);
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .markdown-body .pl-c {
    color: #6a737d;
  }

  .markdown-body .pl-c1,
  .markdown-body .pl-s .pl-v {
    color: #005cc5;
  }

  .markdown-body .pl-e,
  .markdown-body .pl-en {
    color: #6f42c1;
  }

  .markdown-body .pl-s .pl-s1,
  .markdown-body .pl-smi {
    color: #24292e;
  }

  .markdown-body .pl-ent {
    color: #22863a;
  }

  .markdown-body .pl-k {
    color: #d73a49;
  }

  .markdown-body .pl-pds,
  .markdown-body .pl-s,
  .markdown-body .pl-s .pl-pse .pl-s1,
  .markdown-body .pl-sr,
  .markdown-body .pl-sr .pl-cce,
  .markdown-body .pl-sr .pl-sra,
  .markdown-body .pl-sr .pl-sre {
    color: #032f62;
  }

  .markdown-body .pl-smw,
  .markdown-body .pl-v {
    color: #e36209;
  }

  .markdown-body .pl-bu {
    color: #b31d28;
  }

  .markdown-body .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .markdown-body .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .markdown-body .pl-c2:before {
    content: '^M';
  }

  .markdown-body .pl-sr .pl-cce {
    font-weight: 700;
    color: #22863a;
  }

  .markdown-body .pl-ml {
    color: #735c0f;
  }

  .markdown-body .pl-mh,
  .markdown-body .pl-mh .pl-en,
  .markdown-body .pl-ms {
    font-weight: 700;
    color: #005cc5;
  }

  .markdown-body .pl-mi {
    font-style: italic;
    color: #24292e;
  }

  .markdown-body .pl-mb {
    font-weight: 700;
    color: #24292e;
  }

  .markdown-body .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .markdown-body .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
  }

  .markdown-body .pl-mc {
    color: #e36209;
    background-color: #ffebda;
  }

  .markdown-body .pl-mi2 {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .markdown-body .pl-mdr {
    font-weight: 700;
    color: #6f42c1;
  }

  .markdown-body .pl-ba {
    color: #586069;
  }

  .markdown-body .pl-sg {
    color: #959da5;
  }

  .markdown-body .pl-corl {
    text-decoration: underline;
    color: #032f62;
  }

  .markdown-body details {
    display: block;
  }

  .markdown-body summary {
    display: list-item;
  }

  .markdown-body a {
    background-color: initial;
  }

  .markdown-body a:active,
  .markdown-body a:hover {
    outline-width: 0;
  }

  .markdown-body strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  .markdown-body h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  .markdown-body img {
    border-style: none;
  }

  .markdown-body code,
  .markdown-body kbd,
  .markdown-body pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  .markdown-body hr {
    box-sizing: initial;
    height: 0;
    overflow: visible;
  }

  .markdown-body input {
    font: inherit;
    margin: 0;
  }

  .markdown-body input {
    overflow: visible;
  }

  .markdown-body [type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }

  .markdown-body * {
    box-sizing: border-box;
  }

  .markdown-body input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .markdown-body a {
    color: var(--markdown-link-color);
    text-decoration: none;
  }

  .markdown-body a:hover {
    text-decoration: underline;
  }

  .markdown-body strong {
    font-weight: 600;
  }

  .markdown-body hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--markdown-divider-color);
  }

  .markdown-body hr:after,
  .markdown-body hr:before {
    display: table;
    content: '';
  }

  .markdown-body hr:after {
    clear: both;
  }

  .markdown-body table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  .markdown-body td,
  .markdown-body th {
    padding: 0;
  }

  .markdown-body details summary {
    cursor: pointer;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--markdown-heading-color);
  }

  .markdown-body h1 {
    font-size: 32px;
  }

  .markdown-body h1,
  .markdown-body h2 {
    font-weight: 600;
  }

  .markdown-body h2 {
    font-size: 24px;
  }

  .markdown-body h3 {
    font-size: 20px;
  }

  .markdown-body h3,
  .markdown-body h4 {
    font-weight: 600;
  }

  .markdown-body h4 {
    font-size: 16px;
  }

  .markdown-body h5 {
    font-size: 14px;
  }

  .markdown-body h5,
  .markdown-body h6 {
    font-weight: 600;
  }

  .markdown-body h6 {
    font-size: 12px;
  }

  .markdown-body p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .markdown-body blockquote {
    margin: 0;
  }

  .markdown-body ol,
  .markdown-body ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body ol ol,
  .markdown-body ul ol {
    list-style-type: lower-roman;
  }

  .markdown-body ol ol ol,
  .markdown-body ol ul ol,
  .markdown-body ul ol ol,
  .markdown-body ul ul ol {
    list-style-type: lower-alpha;
  }

  .markdown-body dd {
    margin-left: 0;
  }

  .markdown-body code,
  .markdown-body pre {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
  }

  .markdown-body pre {
    margin-top: 0;
    margin-bottom: 0;
    background: var(--markdown-pre-background) !important;
  }

  .markdown-body input::-webkit-inner-spin-button,
  .markdown-body input::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .markdown-body .border {
    border: 1px solid #e1e4e8 !important;
  }

  .markdown-body .border-0 {
    border: 0 !important;
  }

  .markdown-body .border-bottom {
    border-bottom: 1px solid #e1e4e8 !important;
  }

  .markdown-body .rounded-1 {
    border-radius: 3px !important;
  }

  .markdown-body .bg-white {
    background-color: #fff !important;
  }

  .markdown-body .bg-gray-light {
    background-color: #fafbfc !important;
  }

  .markdown-body .text-gray-light {
    color: #6a737d !important;
  }

  .markdown-body .mb-0 {
    margin-bottom: 0 !important;
  }

  .markdown-body .my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .markdown-body .pl-0 {
    padding-left: 0 !important;
  }

  .markdown-body .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .markdown-body .pl-1 {
    padding-left: 4px !important;
  }

  .markdown-body .pl-2 {
    padding-left: 8px !important;
  }

  .markdown-body .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .markdown-body .pl-3,
  .markdown-body .px-3 {
    padding-left: 16px !important;
  }

  .markdown-body .px-3 {
    padding-right: 16px !important;
  }

  .markdown-body .pl-4 {
    padding-left: 24px !important;
  }

  .markdown-body .pl-5 {
    padding-left: 32px !important;
  }

  .markdown-body .pl-6 {
    padding-left: 40px !important;
  }

  .markdown-body .f6 {
    font-size: 12px !important;
  }

  .markdown-body .lh-condensed {
    line-height: 1.25 !important;
  }

  .markdown-body .text-bold {
    font-weight: 600 !important;
  }

  .markdown-body .pl-7 {
    padding-left: 48px !important;
  }

  .markdown-body .pl-8 {
    padding-left: 64px !important;
  }

  .markdown-body .pl-9 {
    padding-left: 80px !important;
  }

  .markdown-body .pl-10 {
    padding-left: 96px !important;
  }

  .markdown-body .pl-11 {
    padding-left: 112px !important;
  }

  .markdown-body .pl-12 {
    padding-left: 128px !important;
  }

  .markdown-body hr {
    border-bottom-color: #eee;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .markdown-body:after,
  .markdown-body:before {
    display: table;
    content: '';
  }

  .markdown-body:after {
    clear: both;
  }

  .markdown-body > :first-child {
    margin-top: 0 !important;
  }

  .markdown-body > :last-child {
    margin-bottom: 0 !important;
  }

  .markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }
`;
export const GFM3 = css`
  .markdown-body blockquote,
  .markdown-body details,
  .markdown-body dl,
  .markdown-body ol,
  .markdown-body p,
  .markdown-body pre,
  .markdown-body table,
  .markdown-body ul {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .markdown-body hr {
    height: 1px;
    padding: 0;
    margin: 24px 0;
    background: var(--markdown-divider-color);
    border: 0;
  }

  .markdown-body blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  .markdown-body blockquote > :first-child {
    margin-top: 0;
  }

  .markdown-body blockquote > :last-child {
    margin-bottom: 0;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .markdown-body h1 {
    font-size: 2em;
  }

  .markdown-body h1,
  .markdown-body h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid var(--markdown-divider-color);
  }

  .markdown-body h2 {
    font-size: 1.5em;
  }

  .markdown-body h3 {
    font-size: 1.25em;
  }

  .markdown-body h4 {
    font-size: 1em;
  }

  .markdown-body h5 {
    font-size: 0.875em;
  }

  .markdown-body h6 {
    font-size: 0.85em;
    color: #6a737d;
  }

  .markdown-body ol,
  .markdown-body ul {
    padding-left: 2em;
  }

  .markdown-body ol ol,
  .markdown-body ol ul,
  .markdown-body ul ol,
  .markdown-body ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body li {
    word-wrap: break-all;
  }

  .markdown-body li > p {
    margin-top: 16px;
  }

  .markdown-body li + li {
    margin-top: 0.25em;
  }

  .markdown-body dl {
    padding: 0;
  }

  .markdown-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  .markdown-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .markdown-body table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  .markdown-body table th {
    font-weight: 600;
    background: var(--markdown-secondary-background);
  }

  .markdown-body table td,
  .markdown-body table th {
    padding: 6px 13px;
    border: 1px solid var(--markdown-divider-color);
  }

  .markdown-body table tr {
    background: var(--markdown-primary-background);
    border-top: 1px solid var(--markdown-divider-color);
  }

  .markdown-body table tr:nth-child(2n) {
    background: var(--markdown-secondary-background);
  }

  .markdown-body img {
    max-width: 100%;
    box-sizing: initial;
    background-color: #fff;
  }

  .markdown-body img[align='right'] {
    padding-left: 20px;
  }

  .markdown-body img[align='left'] {
    padding-right: 20px;
  }

  .markdown-body code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: var(--markdown-code-background);
    border-radius: 3px;
  }

  .markdown-body pre {
    word-wrap: normal;
  }

  .markdown-body pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .markdown-body .highlight {
    margin-bottom: 16px;
  }

  .markdown-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .markdown-body .highlight pre,
  .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background: var(--markdown-secondary-background);
    border-radius: 3px;
    border: 1px solid var(--markdown-divider-color);
  }

  .markdown-body pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: initial;
    border: 0;
  }

  .markdown-body .commit-tease-sha {
    display: inline-block;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 90%;
    color: #444d56;
  }

  .markdown-body .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
  }

  .markdown-body .blob-wrapper {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .markdown-body .blob-wrapper-embedded {
    max-height: 240px;
    overflow-y: auto;
  }

  .markdown-body .blob-num {
    width: 1%;
    min-width: 50px;
    padding-right: 10px;
    padding-left: 10px;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    line-height: 20px;
    color: rgba(27, 31, 35, 0.3);
    text-align: right;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .markdown-body .blob-num:hover {
    color: rgba(27, 31, 35, 0.6);
  }

  .markdown-body .blob-num:before {
    content: attr(data-line-number);
  }

  .markdown-body .blob-code {
    position: relative;
    padding-right: 10px;
    padding-left: 10px;
    line-height: 20px;
    vertical-align: top;
  }

  .markdown-body .blob-code-inner {
    overflow: visible;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    color: #24292e;
    word-wrap: normal;
    white-space: pre;
  }

  .markdown-body .pl-token.active,
  .markdown-body .pl-token:hover {
    cursor: pointer;
    background: #ffea7f;
  }

  .markdown-body :checked + .radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
  }

  .markdown-body .select-menu-item input[type='radio']:not(:checked) + .octicon-check,
  .markdown-body .select-menu-item input[type='radio']:not(:checked) + .octicon-circle-slash {
    visibility: hidden;
  }

  .markdown-body .pl-7 {
    padding-left: 48px !important;
  }

  .markdown-body .pl-8 {
    padding-left: 64px !important;
  }

  .markdown-body .pl-9 {
    padding-left: 80px !important;
  }

  .markdown-body .pl-10 {
    padding-left: 96px !important;
  }

  .markdown-body .pl-11 {
    padding-left: 112px !important;
  }

  .markdown-body .pl-12 {
    padding-left: 128px !important;
  }

  .markdown-body .tab-size[data-tab-size='1'] {
    -moz-tab-size: 1;
    tab-size: 1;
  }

  .markdown-body .tab-size[data-tab-size='2'] {
    -moz-tab-size: 2;
    tab-size: 2;
  }

  .markdown-body .tab-size[data-tab-size='3'] {
    -moz-tab-size: 3;
    tab-size: 3;
  }

  .markdown-body .tab-size[data-tab-size='4'] {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  .markdown-body .tab-size[data-tab-size='5'] {
    -moz-tab-size: 5;
    tab-size: 5;
  }

  .markdown-body .tab-size[data-tab-size='6'] {
    -moz-tab-size: 6;
    tab-size: 6;
  }

  .markdown-body .tab-size[data-tab-size='7'] {
    -moz-tab-size: 7;
    tab-size: 7;
  }

  .markdown-body .tab-size[data-tab-size='8'] {
    -moz-tab-size: 8;
    tab-size: 8;
  }

  .markdown-body .tab-size[data-tab-size='9'] {
    -moz-tab-size: 9;
    tab-size: 9;
  }

  .markdown-body .tab-size[data-tab-size='10'] {
    -moz-tab-size: 10;
    tab-size: 10;
  }

  .markdown-body .tab-size[data-tab-size='11'] {
    -moz-tab-size: 11;
    tab-size: 11;
  }

  .markdown-body .tab-size[data-tab-size='12'] {
    -moz-tab-size: 12;
    tab-size: 12;
  }

  .markdown-body .task-list-item {
    list-style-type: none;
  }

  .markdown-body .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .markdown-body .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }
`;

export const GFM: CSSResultArray = [GFM1, GFM2, GFM3];
