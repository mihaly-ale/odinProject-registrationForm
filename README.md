# Sign-up Form for the Intermediate HTML and CSS Course by [The Odin Project](https://www.theodinproject.com/)

[Live preview](https://mihaly-ale.github.io/odinProject-registrationForm/)

---

- The form is styled using Bootstrap 5.3. I followed the basic **7-1 pattern** for Sass, but only as a test for my script that generates a basic project structure.[^1]

- The choice to use Bootstrap was purely rhetorical; it was meant to provide a basic understanding of the framework. As a result, the entire library is imported, resulting in a large stylesheet. The grid on the body is custom-made and deliberately does not use Bootstrap's grid system. For a small project, I found it easier to use `grid-template-areas`.

- In the end, I extended Bootstrap classes, which was a challenge due the framework's dependency structure. During the process I used `map-merge` to extend built-in maps and create new utility classes.

- The _form submission_ does not include advanced validation — only the built-in checks provided by HTML attributes. Additionally, password matching is verified before submission.

- The form submits data to **`results.html`**, where a short script renders the form data in a readable format. This is purely for demonstration purposes, simulating what the form would send to a server.

- The similar Git commits reflect the linear process of getting to know the framework—from applying simple styles to extending classes.

## What I have learned

- Solidified my understanding of Sass concepts, including how to use `@use`, `@forward` with `@import`.

- Gained an intermediate understanding of how Bootstrap works, providing a solid fundation for further learning.

- Explored additional git commands, such as `git stash`.

- Learned about various ARIA attributes: `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-hidden`, and developed a basic understanding of accessibility, the accessibility tree, and how browsers generate elements' accessible names. (There is an experimental branch to further explore some ARIA best practices.)

- Learned how to create cross-platform _favicons_.[^2]

## Planned improvements

- Add radio buttons to choose weight
- Implement color schemes
- Remove unused css classes

---

- bg-image.jpg: [Photo by Jan Gunnar Nygård](https://pixabay.com/photos/kettlebell-crossfit-training-gym-6995813/)
<!-- Links: -->

[^1]: https://github.com/mihaly-ale/sass-project-starter
[^1]: https://realfavicongenerator.net/

