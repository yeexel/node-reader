<h1>node-reader</h1>
<p>Node.js command line RSS reader</p>
<p>Oleksii Kulikov "yeexel@gmail.com"</p>
<h2>Installation</h2>
<p><b>Note!</b> Before using this app you've to install MongoDB on your machine. For more info click <a href="http://docs.mongodb.org/manual/installation/">here.</a></p>
<p><b>Unix:</b> <code>sudo npm install -g node-reader</code></p>
<p>You can add an alias for convinience: <code>alias nr='node-reader'</code></p>
<h2>Usage</h2>
<p>Available options: <code>--add, --purge, --list, --read, --help</code></p>
<h3>add</h3>
<p>If you want to add a RSS feed, just type <code>nr --add "<i>alias</i>" "<i>url</i>"</code></p>
<p><b>Example: </b><code>nr -add "engadget" "http://www.engadget.com/rss.xml"</code></p>
<h3>list</h3>
<p>Type <code>nr --list</code> to get the current RSS feeds.</p>
