# UI/UX + React Workshop

**By: Clara Anderson**

In this workshop, we'll take a project card from **Figma → Frontend** and learn how React turns a design into a reusable component.

### Workshop Resources

- **Slides:** [https://canva.link/tjf5xydwnelsfqj ]
- **Figma Design:** [https://www.figma.com/design/PUvCrWhxk4M7XRlLcq7imU/UI-UX-Workshop-Project-Card?node-id=0-1&t=VgPtzVb8O1EpfhTc-1 ]
-  **Solution:** Switch to the `solution` branch of this repository.

```text
uiux_workshop/
├── src/
│   ├── assets/                 images and other project assets
│   ├── components/
│   │   └── ProjectCard.jsx     reusable project card component
│   ├── App.css                 page and project card styling
│   ├── App.jsx                 project content and component reuse
│   ├── index.css               global styling
│   └── main.jsx                starts the React app
├── package.json                project dependencies
└── README.md                   this file!
```

## 1. Get it running

1. **Fork this repo.** Click **Fork** in the top-right corner of GitHub to create your own copy.
2. From **your fork**, click **Code → HTTPS** and copy the URL.
3. **Clone your fork.** Open a terminal and run:

```bash
git clone YOUR-FORK-URL
```

4. Open the project folder and enter in the terminal:

```bash
cd uiux_workshop
```

5. Install the dependencies:

```bash
npm install
```

6. Start the project:

```bash
npm run dev
```

7. Open the localhost link shown in the terminal.

Keep the browser and VS Code open side-by-side so you can see your changes as you save.

---

## 2. Match the Figma design

Open `src/App.css` and scroll to **PROJECT CARD & GRID**.

Look for the `TODO` comments. Use the values from our Figma design to fill in the missing CSS.

You'll need to add:

- Three grid columns using the card width
- Row and column spacing
- Card width and height
- Background color
- Border
- Corner radius
- Drop shadow

Press **Ctrl+S** (**Cmd+S** on Mac) and check the browser. Vite will automatically refresh the page when you save.

The rest of the card styling is already provided so we can focus on translating the important design decisions from **Figma → CSS**.

---

## 3. Make the component reusable

Open:

```text
src/components/ProjectCard.jsx
```

A **component** is a reusable piece of an interface. Instead of rebuilding the same project card every time, we'll code it once and pass different information into it.

Find:

```jsx
function ProjectCard(/* TODO: add props */) {
```

Add the props our card needs:

```jsx
function ProjectCard({ title, description, technologies, link }) {
```

Then replace the placeholder title:

```jsx
<h2>Project Title</h2>
```

with:

```jsx
<h2>{title}</h2>
```

Replace the placeholder description with:

```jsx
<p className="project-description">
  {description}
</p>
```

---

## 4. Make the tech stack dynamic

Instead of writing each technology tag by hand, we'll generate them from the `technologies` prop.

Replace the placeholder tech tags with:

```jsx
<div className="tech-tags">
  {technologies.map((technology) => (
    <span className="tech-tag" key={technology}>
      {technology}
    </span>
  ))}
</div>
```

Then update the project link:

```jsx
<a
  className="project-link"
  href={link}
  target="_blank"
  rel="noreferrer"
>
  View project →
</a>
```

Now the same component can display different project information.

---

## 5. Add your project

Open:

```text
src/App.jsx
```

Find the starter `ProjectCard`:

```jsx
<ProjectCard
  title=""
  description=""
  technologies={["", "", ""]}
  link=""
/>
```

Fill in the props with the workshop project:

```jsx
<ProjectCard
  title="ACM Website Redesign"
  description="Designed a responsive redesign of the UF ACM website. The focus was on a consistent UI and improving the UX."
  technologies={["PostgreSQL", "React", "Figma", "CSS"]}
  link="https://uf-acm.com/"
/>
```

Save and check the browser.

**Props** are information passed into a component. The component controls the design, while the props control the content.

---

## 6. Reuse the component

Copy and paste your `<ProjectCard />` inside the project grid.

Change its props to describe another project:

```jsx
<ProjectCard
  title="My Second Project"
  description="A short description of my project."
  technologies={["React", "JavaScript", "CSS"]}
  link="YOUR-PROJECT-LINK"
/>
```

Keep adding cards for any projects you want to show.

You don't need to rebuild or restyle the card each time — every `ProjectCard` uses the same component.

**Figma:** Design once → create a component → reuse instances

**React:** Code once → create a component → reuse it with props

---

## 7. Bonus: Add Image Uploads

To make the card's image upload interactive, open `ProjectCard.jsx`.

At the top of the file, import `useState`:

```jsx
import { useState } from "react";
```

Inside `ProjectCard`, before `return`, add:

```jsx
const [image, setImage] = useState(null);

function handleImageUpload(event) {
  const file = event.target.files[0];

  if (file) {
    setImage(URL.createObjectURL(file));
  }
}
```

Then replace the project image placeholder with:

```jsx
<div className="project-image">
  {image ? (
    <img src={image} alt="Project preview" />
  ) : (
    <label className="upload-area">
      <span>Upload project image</span>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        hidden
      />
    </label>
  )}
</div>
```

**State** is information a component remembers that can change. Each project card manages its own uploaded image.

The file input also uses an **event**. Events are actions — like clicking, typing, or uploading — that our interface can respond to.

---

## 8. Save it to GitHub

When you're finished, save your work to your fork:

```bash
git add .
git commit -m "completed UI/UX workshop"
git push
```

Refresh your GitHub repository and your changes should be there.

---

## 9. Make it yours

After the workshop, try customizing the project.

- Replace the sample projects with your own.
- Experiment with different colors and fonts.
- Add your own project screenshots.
- Change the card layout.
- Add hover effects or animations.
- Make the grid responsive.
- Add the component to your portfolio.

Your Figma design doesn't have to look like mine. Use the same process to turn **your designs into reusable frontend components**.

---

## 10. If you get lost

The completed workshop project is available in the **`solution` branch** of the original repository.

Use it to compare your code with the finished version or catch up if you fall behind.

---

## 11. React Basics

- **Component:** A reusable piece of a design or interface. Code it once, then reuse it wherever you need it.
- **Props:** Information passed into a component so different instances can display different content.
- **State:** Information a component remembers that can change.
- **Events:** Actions like clicking, typing, or uploading that the interface can respond to.
- **JSX:** HTML-like syntax that lets us describe interfaces while using JavaScript.

React **doesn't replace HTML/CSS**. It helps us organize, reuse, and control the interfaces we build with them.

---

## 12. UI/UX + Visual Design Fundamentals

Before we start designing, it helps to understand the difference between **UI** and **UX**.

- **UI (User Interface):** How a product looks — colors, typography, buttons, spacing, images, and other visual elements.
- **UX (User Experience):** How a product works and feels — navigation, usability, accessibility, organization, and the overall experience of using it.

A typical design-to-development process looks like:

**Idea → UX → Wireframe → UI → Figma → Frontend → Test → Iterate**

### Visual Design Fundamentals

When designing an interface, keep these principles in mind:

- **Hierarchy:** Make the most important information stand out first.
- **Contrast:** Use differences in color, size, or weight to separate elements and draw attention.
- **Alignment:** Keep elements visually connected and organized.
- **Spacing:** Give elements enough room to make the interface easier to understand.
- **Consistency:** Reuse colors, typography, components, and patterns throughout your design.
- **Balance:** Distribute elements so the interface feels visually stable.

Good design isn't just about making something look nice. It should also make the interface easier to understand and use **intuitively**.

---

## 13. Figma Vocabulary

We'll use **Figma** to create our design before translating it into code.

Here are some terms you'll see during the workshop:

- **Frame:** A container for your design, similar to a screen, page, or section of a webpage.
- **Shape:** Basic visual elements like rectangles, circles, and lines.
- **Fill:** The color or image inside an element.
- **Stroke:** The border around an element.
- **Corner Radius:** Controls how rounded an element's corners are.
- **Effects:** Visual effects such as drop shadows.
- **Padding:** The internal space between the content of an element and its outer border or edge.
- **Layer:** An individual element in your design. Layers determine how elements are organized and stacked.
- **Group:** Multiple elements grouped together so they can be moved or edited together.
- **Auto Layout:** Automatically organizes elements and controls their spacing, padding, and alignment.
- **Component:** A reusable design element that can be used throughout a Figma file.
- **Instance:** A copy of a Figma component. Changes to the main component can be reflected across its instances.
- **Lo-Fi Wireframe:** A simple layout focused on structure and organization rather than final visual details.
- **Hi-Fi Design:** A polished version of the interface with final colors, typography, spacing, images, and other visual details.

During the workshop, we went from:

**Lo-Fi Wireframe → Hi-Fi Design → Figma Component → React Component**

---

Thank you for following along! Happy designing!
