# JavaScript Form User Interface

- Form fields to enter: First name, Last name, Email, & Password
- Slide for each field with Next & Prev buttons
- Success / Registered message
- Progress bar to display form completion status
- Form validation with animation
- Built from scratch with HTML, CSS3, JavaScript, & SASS
- Transitions with CSS3
- CSS Precompiler SASS is used
- NodeJS must be installed

## Setting up SASS

1. Open integrated terminal on VSCode:
    - Run `npm init -y` to create `package.json` file

2. Install `sass`:
    - Run `sudo npm install -g sass`

3. Open `package.json` file,
    - Replace the line inside `scripts` with: `"sass": "sass --watch scss:css"`

4. Watch `scss/` folder & compile the output to `css/`:
   - Run `npm run sass`