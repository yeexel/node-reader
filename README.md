<h1>node-reader</h1>
<p>Node.js command line RSS reader</p>
<p>Oleksii Kulikov "yeexel@gmail.com"</p>
<h2>Installation</h2>
<p><b>Note!</b> Before using this app you've to install MongoDB on your machine. For more information click <a href="http://docs.mongodb.org/manual/installation/">here.</a></p>
<p><b>Unix:</b> <code>sudo npm install -g node-reader</code></p>
<p>You can add an alias for convinience: <code>alias nr='node-reader'</code></p>
<h2>Usage</h2>
<p>Available options: <code>--add, --purge, --list, --read, --help</code></p>
<h3>--add</h3>
<p>If you want to add a RSS feed, just type <code>nr --add "<i>alias</i>" "<i>url</i>"</code></p>
<p><b>Example: </b><code>nr -add "engadget" "http://www.engadget.com/rss.xml"</code></p>
<h3>--list</h3>
<p>Type <code>nr --list</code> to get the current RSS feeds.</p>
<img src="http://oi41.tinypic.com/nvzjft.jpg" alt="list">
<h3>--read</h3>
<p>This option shows you the RSS feed. Example <code>nr --read "engadget"</code></p>
<img src="http://oi43.tinypic.com/xd5u6r.jpg" alt="read">
<h3>--purge</h3>
<p>Type <code>nr --purge "engadget"</code> to remove this feed from your collection.</p>
<h2>License</h2>
<p>The MIT License (MIT)

Copyright (c) "2013" "Oleksii Kulikov and contributors."<br><br>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.<br><br>

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE</p>
