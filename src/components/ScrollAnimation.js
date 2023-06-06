function Carousel() {

  return (
    <div className="carousel">
      <div className="carousel__scrollcontainer">
        <div className="carousel__progress carousel__progress--step"></div>
        <div className="carousel__progress carousel__progress--full"></div>
        <div className="slide slide--scrollable">
          <div className="slide__inner">
            <h1 className="slide__title">Scroll driven animations</h1>
            <p>Testing out CSS's new scroll driven animations. Only available in Chrome Beta (115), although should fail gracefully.</p>
            <ul>
              <li>It seems the <code>animation</code> property must be listed first (before <code>animation-duration</code> and <code>animation-timeline</code>)</li>
              <li>Not new, but for <code>scroll-snap-align</code> to work, <code>scroll-snap-type</code> must be set on the parent</li>
              <li>Two timeslines are now available to animate using the <code>animation-timeline</code> property:
                <ul>
                  <li><code>scroll progress timeline</code> tracks how far you are within a container. It can be tracked to the document or to a container. Examples include changing the color of the background as you scroll down the page, adding a progress bar to show how far you are...</li>
                  <li><code>view progress timeline</code> is a little more like <code>intersection observer</code>. It tracks how present an element is within the scroll container. Examples include animating a slide as you go in and out of the viewport, changing font size as title exits the screen</li>
                </ul>
              </li>
            </ul>
            <h2>Scroll Progress Timeline</h2>
            <p>
              Using the <code>animation-timeline</code> property, you can use the <code>scroll()</code> function which accepts two parameters: <code>scroller</code> (<code>nearest</code>, 
              <code>root (the document)</code> or <code>self</code>) and <code>axis</code>. <code>animation-duration</code> <em>must</em> 
              be set to <code>auto</code> (seconds doesn't make sense in the context of a scroll). <code>animation-timeline: scroll()</code> is an anonymous 
              anonymous timeline that will use the default values for both the scroller and the axis.
            </p>
            <p>
              Use a named scroll progress timeline when there are multiple timelines on the page. Set the 
              <code>scroll-timeline-name</code> on the parent (the one that is being scrolled) and set the 
              <code>animation-timeline</code> property on the element that will be animated. The value must have a <code>--</code> 
              at the start, like a CSS variable.
            </p>
            <h2>View Progress Timeline</h2>
            <p>
              Using the <code>animation-timeline</code> property, you can use the <code>scroll()</code> function which accepts two parameters: 
              <code>axis</code> and <code>view-timeline-inset</code> (which acts as the <code>margin</code> in an <code>IntersectionObserver</code>). 
              You can test the values for <code>view-timeline-inset</code> really easily <a href="https://scroll-driven-animations.style/tools/view-timeline/ranges/">here</a>. 
              You can target different ranges of the View Timeline using <code>animation-range</code>
            </p>
          </div>
        </div>
        <div className="slide">slide 2</div>
        <div className="slide">slide 3</div>
      </div>
    </div>
  )
}

export default Carousel;
