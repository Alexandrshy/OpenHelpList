export default {
  state: {
    tasks: [
      {
        id: 1,
        author: "Alex Shu",
        authorLink: "https://github.com/Alexandrshy",
        project: "OpenHelpList",
        projectLink: "https://github.com/Alexandrshy/OpenHelpList",
        projectLogo:
          "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",
        projectissue: "https://github.com/GoogleChrome/puppeteer/issues/3761",
        title: "Modify README.md",
        description:
          '# h1 Heading\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n---\n\n***\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"\n\n\n',
        language: "JavaScript",
        level: "junior",
        completed: false,
        tag: ["JavaScript", "React", "Redux", "Jest"]
      },
      {
        id: 2,
        author: "Alex Shu",
        authorLink: "https://github.com/Alexandrshy",
        project: "OpenHelpList",
        projectLink: "https://github.com/Alexandrshy/OpenHelpList",
        projectLogo:
          "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",
        title: "Make the first commit",
        description:
          "<p>Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit</p> <p>Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the <a href='#'>first</a> commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit</p>",
        language: "JavaScript",
        level: "junior",
        completed: true
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    tasks(state) {
      return state.tasks;
    },
    completeTasks(state, getters) {
      return getters.tasks.filter(task => task.completed);
    },
    completeTasksLength(state, getters) {
      return getters.completeTasks.length;
    },
    openTasks(state, getters) {
      return getters.tasks.filter(task => !task.completed);
    },
    openTasksLength(state, getters) {
      return getters.openTasks.length;
    },
    taskById(state, getters) {
      return id => {
        return getters.tasks.find(task => task.id === Number(id));
      };
    }
  }
};