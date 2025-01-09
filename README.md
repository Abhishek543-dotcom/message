# Ayushi's Romantic Proposal Webpage

## Description
A beautifully designed, interactive romantic webpage proposal for Ayushi, featuring vibrant colors, animations, and email integration to confirm her response.

## Features
- **Vibrant Gradient Color Scheme**: Soft pinks, purples, reds, and golds create a romantic atmosphere.
- **Smooth Transitions and Animations**: Enhance the visual experience with floating hearts and subtle animations.
- **Prominent Display of Ayushi's Name**: Elegant font and romantic caption express deep feelings.
- **Interactive Proposal Feature**: "Will you be mine?" pop-up with playful "No" button and email confirmation for "Yes" response.
- **Email Integration with EmailJS**: Automatically sends a confirmation email to the sender when "Yes" is selected.

## Requirements
- Basic web browser (Chrome, Firefox, Safari, etc.)
- Internet connection (for EmailJS service)
- EmailJS account for email integration

## Setup Instructions
### Clone or Download the Project:
- Clone the repository using `git` or download the ZIP file.

### Install Dependencies:
- No external libraries are required except for EmailJS, which is included via CDN.

### Set Up EmailJS:
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Create a new service and obtain the **Service ID**.
3. Create a new template for the email and obtain the **Template ID**.
4. Replace the placeholders in `index.html` and `script.js`:
   - `YOUR_EMAILJS_USER_ID`
   - `YOUR_EMAILJS_SERVICE_ID`
   - `YOUR_EMAILJS_TEMPLATE_ID`  
   with your actual IDs.

### Run the Project:
- Open `index.html` in a web browser to view and interact with the proposal.

### Deploy the Project (Optional):
- Use a hosting service like **GitHub Pages**, **Netlify**, or **Vercel** to deploy the webpage for live access.

## Usage
1. Visit the webpage and enjoy the romantic design.
2. Click the "Will You Be Mine?" button to see the interactive proposal.
3. Interact with the "Yes" and "No" buttons:
   - Clicking **"Yes"** will display a confirmation message and send an email to the specified address.
   - Clicking **"No"** will playfully move the button around the screen.

## Customization
- **Personalize the Message**: Edit the caption and any text within the HTML file to suit your personal message.
- **Change Colors**: Modify the CSS file to change the color scheme to your preference.
- **Update Email Recipient**: In the EmailJS template, set the recipient email address to where you want to receive the confirmation.

## Credits
- **Fonts**: 'Great Vibes' for the romantic feel.
- **Icons**: None used in this version.
- **Animations**: CSS keyframe animations for smooth transitions.
