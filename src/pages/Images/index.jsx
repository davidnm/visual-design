import React from 'react'
import './Images.css'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: require('./1/design1_no_edit.jpg') },
  { url: require('./1/design1_no_fold.jpg') },
  { url: require('./1/design1_sky.jpg') },
  { url: require('./1/design1_colourBalance.jpg') },
  { url: require('./1/design1_levels.jpg') },
];

const Images = () => {

  return (
<main>
<section>
  <h1>Images</h1>
  <p>NOTE: Click on the slider to see the evolution of the images</p>

  <h2>Image 1</h2>
  
  <ul>
   <li>Original Image: scanned from <a href="https://www.wardianlondon.com/">The Wardian London</a> paper Broucher</li>
   <li>Step 1: Layer to remove the fold</li>
   <li>Step 2: Insert into a different Sky</li>
   <li>Step 3: colour balance layer</li>
   <li>Step 4: adjustment level layer</li>
  </ul>
  <div>
<SimpleImageSlider
navStyle={2}
width={896}
height={504}
images={images}
/>
</div>
</section>

<section>

<h2>Image 2</h2>
  
  <ul>
   <li>Original Image: scanned from <a href="https://www.wardianlondon.com/">The Wardian London</a> paper Broucher</li>
   <li>Step 1: Layer to remove the fold</li>
   <li>Step 2: Insert into a different Sky</li>
   <li>Step 3: colour balance layer</li>
   <li>Step 4: adjustment level layer</li>
  </ul>

  </section>

</main>

  )

}

export default Images