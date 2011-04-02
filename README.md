## Outdated

This repository is for version 1.X.X and 2.X.X.

The newer version, 3.X.X, can be found in [this repository](https://github.com/SparkJS/Spark).

## About
Spark is my attitude towards coding summed up in one lovely script. I love to reinvent the wheel, but better. So what I did was take something that already exists (a JavaScript library), and make it easier to learn and use. It is easier to learn because I have tried to make all of the functions as multi-use as possible.

For example you can perform a basic AJAX call like so: `alert(Spark.ajax('get', 'someFile.php', 'data=some data'));`

You can then make this into an asynchronous request by just adding a callback, like so: `Spark.ajax('get', 'someFile.php', 'data=some data', function(data) { alert(data) });`

All functions are explained in the documentation as well as how to make plugins. Here is an example of making an element fade out to 0% opacity over the course of 1000 milliseconds, one second.

`Spark('p.myParagraph').animate({opacity: 0}, 1000);`

If you are unsure of anything then [the documentation](http://sparkjs.co.uk/documentation.html) will sort you out.

For up to date news, follow [Spark on Twitter](http://twitter.com/#!/SparkJavaScript).

## Thanks
If you are using Spark and you like it or at least like where it is going then please watch the repository or send me a message, I really would like to know how many people this is helping and what they would like to see in the future. *Any* suggestions are welcome.

## Licences

### MIT
Copyright (C) 2011 Oliver Caldwell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

### GPL
Copyright (C) 2011 Oliver Caldwell

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
