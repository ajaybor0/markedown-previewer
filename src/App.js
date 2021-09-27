import React from "react";
import marked from "marked";
import "bootstrap/dist/css/bootstrap.css";
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


## Contact

- GitHub [@ajaybor0](https://github.com/ajaybor0)
- Twitter [@ajaybor0](https://twitter.com/ajaybor0)
- LinkedIn [@ajaybor0](https://www.linkedin.com/in/ajaybor0/)
`;

class App extends React.Component {
	state = {
		text: placeholder,
	};

	handleChange = event => {
		this.setState({
			text: event.target.value,
		});
	};

	render() {
		const { text } = this.state;
		const markdown = marked(text, { breaks: true });
		return (
			<div>
				<h2 className="text-center m-4">Convert your Markdown</h2>
				<div className="row">
					<div className="col-6">
						<h6 className="text-center">Editor</h6>
						<textarea
							style={{
								height: "450px",
								backgroundColor: "#fafafa",
								color: "#545454",
							}}
							className="form-control textarea p-2"
							id="editor"
							value={text}
							onChange={this.handleChange}
						/>
					</div>
					<div className="col-6">
						<h6 className="text-center">Previewer</h6>
						<div
							className="preview rounded p-2"
							dangerouslySetInnerHTML={{ __html: markdown }}
							id="preview"
						></div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
