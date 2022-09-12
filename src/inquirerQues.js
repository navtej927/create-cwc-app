const inquirer = require('inquirer');

export const questions = () => {
  const questions = [
    //   {
    //     type: "confirm",
    //     name: "toBeDelivered",
    //     message: "Is this for delivery?",
    //     default: false,
    //   },
    //   {
    //     type: "input",
    //     name: "phone",
    //     message: "What's your phone number?",
    //     validate(value) {
    //       const pass = value.match(
    //         /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
    //       );
    //       if (pass) {
    //         return true;
    //       }

    //       return "Please enter a valid phone number";
    //     },
    //   },
    {
      type: "list",
      name: "type",
      message: "What is the type of the project?",
      choices: ["React", "static", "cli", "vueJs"],
      filter(val) {
        return val.toLowerCase();
      },
    },
    //   {
    //     type: "input",
    //     name: "quantity",
    //     message: "How many do you need?",
    //     validate(value) {
    //       const valid = !isNaN(parseFloat(value));
    //       return valid || "Please enter a number";
    //     },
    //     filter: Number,
    //   },
    {
      type: "expand",
      name: "toppings",
      message: "What about the toppings?",
      choices: [
        {
          key: "p",
          name: "Pepperoni and cheese",
          value: "PepperoniCheese",
        },
        {
          key: "a",
          name: "All dressed",
          value: "alldressed",
        },
        {
          key: "w",
          name: "Hawaiian",
          value: "hawaiian",
        },
      ],
    },
    {
      type: "rawlist",
      name: "beverage",
      message: "You also get a free 2L beverage",
      choices: ["Pepsi", "7up", "Coke"],
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));
  });
};
