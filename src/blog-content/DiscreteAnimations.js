import DeleteButton from '../components/DeleteButton';
import '../styles/discrete-animations.css'

const DiscreteAnimations = () => {
  const colors = ['var(--color-amethyst)', 'var(--color-amethyst-background)', 'var(--color-plum)', 'var(--color-plum-background)']

  return (
    <div>
    <p>We are newly able to animate on <code>display</code> and some other discrete properties. In Chrome only.</p>
    <a style={{ display: 'block' }} href="https://developer.chrome.com/blog/entry-exit-animations/>">Google source</a>
    <a style={{ display: 'block' }} href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility">Mozilla source</a>
    <h2>Using animations</h2>
    <p>The <code>display</code> and <code>visibility</code> will switch at 0% or 100%, depending on which way you're animating (other properties switch at 50%). Use <code>forwards</code> in the animation declaration to ensure that the element remains at its end state (ie, if you're making it disappear, that it stays disappeared once the animation is done)</p>
    <div className="buttons">
      {colors.map((color, index) => {
        return <DeleteButton key={index} color={colors[index]} removeClass='remove-animation' />
      })}
    </div>

    <h2>Using transitions</h2>
    <p>Use <code>transition</code> to animate the <code>display</code>. The <code>transition</code> property will only work if the element is already visible (ie, if you're animating <code>display: none</code> to <code>display: block</code>, the transition will not work). If you're writing our CSS transitions using the shorthand, make sure to write <code>transition-behaviour: allow-discrete</code> <em>after</em> the <code>transition: ...</code> rule.</p>
    <div className="buttons buttons--transitions">
      {colors.map((color, index) => {
        return <DeleteButton key={index} color={colors[index]} removeClass='remove-transition'/>
      })}
    </div>
    </div>
  )
}

export default DiscreteAnimations;
