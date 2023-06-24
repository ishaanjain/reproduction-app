/** Add your relevant code here for the issue to reproduce */
import dynamic from 'next/dynamic'
import Canvas from './canvas'

const Home = dynamic(() => import('./canvas'), {
  ssr: false,
})

// const Home = () => {
//   return <Canvas />
// }

// const Home = () => {
//   return <div>hello</div>
// }

export default Home