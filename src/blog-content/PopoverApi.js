import '../styles/popover.css'

function PopoverApi() {
  return (
    <div>
      <button popovertarget="popover-test">Open default popover</button>

      <div id="popover-test" popover="auto">
        <p>
          This is a popover with the property <code>popover="auto"</code>. It automatically 
        </p>
        <ul>
          <li>brings focus to the popover when the button is clicked</li>
          <li>returns focus to the trigger when the popover is closed</li>
          <li>
            allows for closing with the <code>esc</code> key or by clicking outside the popover ("light dismiss") 
            <em>note: focus is not "trapped" and as you tab, you will leave the the popup. It 
              might be best to add functionality to close the popup when it no longer has focus
            </em>
          </li>
          <li>handles z-index (ie, sits on top of everything else)</li>
          <li>force closes other <code>popovers</code></li>
        </ul>
        <p>
          The close button is added manually here, using the <code>popovertarget</code> attribute 
          and the <code>popovertargetaction="hide"</code> attribute.
        </p>
        <button popovertarget="popover-test" popovertargetaction="hide">
          Close
        </button>
      </div>

      <h2>Accessibility concerns</h2>
      <p>
        A popover does not provide semantics on it's own. A <code>dialog</code> element 
        should be used when the user is <em>explicitly required</em> to close the modal and 
        when the rest of the page becomes inert. A semantic dialog can be built/styled 
        using <code>popover</code> attributes. A popover is specifically a <code>attribute</code> 
        and not an element - the popover attribute can be applied to <code>div role="menu"</code> 
        or <code>div role="tooltip"</code>, etc.
      </p>
    </div>
  )
}

export default PopoverApi;
