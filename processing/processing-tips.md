# Processing / Workflow Tips

1. When in doubt about anything in Processing, goto the source - [Processing.org](https://processing.org/) and [Processing Reference](https://processing.org/reference/). Locate the function you are interested in learning more about and read about how it works and try the example code snippet provided. Deconstruct and experiment with the snippet until you understand how it works. Then look at how to match your understanding of the simple case to something more complex. Always start with simple sketches.

2. Be sure to give your code a description of what it does and other information you wish to share such as your website or github URL. For example, the sample code header might look something like the following. If you have classes or additional pde files, its good practice to put a comment in each as it will help anyone reading your code a quick overview of what the code does without needing to read all the code line by line. Good programmers generally add comments that make it easier for someone else to use their code.  

  Single Line Comments:
  ```  
  // MyProject
  // 1 Nov 2017
  // by RJ Duran
  // MyProject is great because it does stuff that is interesting and you will have lots of fun playing with it. Just run and see!
  // https://github.com/rjduran/my-repo/my-project
  ```
  Multi Line Comment:
  ```  
  /*
     MyProject
     1 Nov 2017
     by RJ Duran
     MyProject is great because it does stuff that is interesting and you will have lots of fun playing with it. Just run and see!
     https://github.com/rjduran/my-repo/my-project
  */
  ```

3. When committing projects to github you want to add the whole top level folder containing all processing pde files. This makes it much easier to clone the project and open files to run. Look at how I setup the sketches in the [cm-code/processing](https://github.com/rjduran/cm-code/tree/master/processing) folder. Processing will always place your pde file into a folder with the same name as the sketch file. Its also good practice to name your files following the "[Upper Camel Case](http://wiki.c2.com/?UpperCamelCase)" convention or an "underscores" convention. The same goes for class files such as "Circle" or "MyClass". Read through [Naming Conventions](https://en.wikipedia.org/wiki/Naming_convention_(programming)) to learn about other approaches.

  For example:
  ```
  MyProjectRepo       <-- This is the name of your repo on Github
    MyProject         <-- This is your Processing sketch folder
       MyProject.pde  <-- This is the sketch file
       MyClass.pde    <-- This is a class file
  ```

4. When working through code written by someone else you want to start by deconstructing it, line by line. You should get into the habit of working through each line to understand what it does and the order in which statements and expressions are being executed. Adding comments along the way is always helpful. Commenting out parts of the code and systematically uncommenting as you go is another way to learn what is happening in a program. Try using multiline commenting/uncommenting (CMD + /) to block out parts of the code when you are debugging / testing / sketching.

5. The best way to get better at programming and writing code is to write code. If you don't understand a concept, ask a classmate, ask me, Google it, check the Processing reference, and look at example code and deconstruct it until you get it. Follow [tutorials](https://processing.org/tutorials/) and type in every line to test / run the sketch for each command you enter. Use the console and error tabs on the bottom of the IDE to learn more about how your code is being executed. The console will display any kind of text or values you want by using `println("display this string");` in your code. The error tab will show you any errors it finds at any point when writing your code or running it. If something is just entered wrong it will tell you. It won't help you much with errors in logic though. This is where you have to know how your code works and what's happening at any moment when its running.

6. Break things. Dont be afraid to break code then fix it. Learning to program is all about trial and error and learning to break and fix things. The more you experiment with something the more you will start to understand it.
















